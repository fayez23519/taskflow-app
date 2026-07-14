const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'tasks.json');
const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.json': 'application/json; charset=utf-8'
};

function ensureDataFile() {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, '[]');
    }
}

function readTasks() {
    ensureDataFile();
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function writeTasks(tasks) {
    ensureDataFile();
    fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
}

function sendJson(res, statusCode, payload) {
    res.writeHead(statusCode, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end(JSON.stringify(payload));
}

function parseBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            if (!body) {
                resolve({});
                return;
            }
            try {
                resolve(JSON.parse(body));
            } catch (error) {
                reject(new Error('Invalid JSON body'));
            }
        });
        req.on('error', reject);
    });
}

function serveStaticFile(res, filePath) {
    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Not found');
            return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
    });
}

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://127.0.0.1:${PORT}`);

    if (req.method === 'OPTIONS') {
        res.writeHead(204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        res.end();
        return;
    }

    if (url.pathname === '/api/tasks') {
        if (req.method === 'GET') {
            sendJson(res, 200, readTasks());
            return;
        }

        if (req.method === 'POST') {
            try {
                const data = await parseBody(req);
                const tasks = readTasks();
                const task = {
                    id: data.id || `task-${Date.now()}-${Math.random().toString(16).slice(2)}`,
                    text: data.text || '',
                    checked: Boolean(data.checked),
                    category: data.category || 'general',
                    createdAt: data.createdAt || new Date().toISOString()
                };
                tasks.push(task);
                writeTasks(tasks);
                sendJson(res, 201, task);
            } catch (error) {
                sendJson(res, 400, { error: error.message });
            }
            return;
        }

        if (req.method === 'DELETE') {
            writeTasks([]);
            sendJson(res, 200, []);
            return;
        }
    }

    if (url.pathname.startsWith('/api/tasks/')) {
        const taskId = decodeURIComponent(url.pathname.split('/').pop());
        const tasks = readTasks();
        const index = tasks.findIndex((task) => task.id === taskId);

        if (req.method === 'PUT') {
            try {
                const data = await parseBody(req);
                if (index === -1) {
                    sendJson(res, 404, { error: 'Task not found' });
                    return;
                }

                tasks[index] = {
                    ...tasks[index],
                    ...data,
                    id: taskId
                };
                writeTasks(tasks);
                sendJson(res, 200, tasks[index]);
            } catch (error) {
                sendJson(res, 400, { error: error.message });
            }
            return;
        }

        if (req.method === 'DELETE') {
            if (index === -1) {
                sendJson(res, 404, { error: 'Task not found' });
                return;
            }
            tasks.splice(index, 1);
            writeTasks(tasks);
            sendJson(res, 200, tasks);
            return;
        }
    }

    // Ensure we resolve paths relative to __dirname even when url.pathname starts with '/'
    const filePath = url.pathname === '/'
        ? path.join(__dirname, 'index.html')
        : path.join(__dirname, '.' + url.pathname);
    serveStaticFile(res, filePath);
});

server.listen(PORT, () => {
    console.log(`Todo API is running at http://localhost:${PORT}`);
});
