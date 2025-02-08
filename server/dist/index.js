"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
// Load environment variables
dotenv_1.default.config();
// Initialize express app
const PORT = parseInt(process.env.PORT || '3000', 10);
// Database connection
const pool = new pg_1.Pool(process.env.DATABASE_URL
    ? { connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } }
    : {
        user: process.env.DB_USERNAME,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT || '5432'),
    });
// Middleware
app_1.default.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));
app_1.default.use(express_1.default.json());
// Add request logging middleware
app_1.default.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});
// Health check route
app_1.default.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});
// Courses routes
app_1.default.get('/api/courses', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM courses');
        res.json(result.rows);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
});
// Podcasts routes
app_1.default.get('/api/podcasts', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM podcasts');
        res.json(result.rows);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch podcasts' });
    }
});
// Resources routes
app_1.default.get('/api/resources', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM resources');
        res.json(result.rows);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch resources' });
    }
});
// Profile routes
app_1.default.get('/api/profile/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const result = await pool.query('SELECT * FROM profiles WHERE user_id = $1', [userId]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        res.json(result.rows[0]);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
});
(0, database_1.connectDatabase)()
    .then(() => {
    app_1.default.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`Frontend URL: ${process.env.CORS_ORIGIN || 'http://localhost:5173'}`);
        console.log(`Database URL: ${process.env.DATABASE_URL ? 'Set' : 'Not set'}`);
        console.log(`Environment: ${process.env.NODE_ENV}`);
    });
})
    .catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
});
// Global error handling
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
});
process.on('unhandledRejection', (error) => {
    console.error('Unhandled Rejection:', error);
});
