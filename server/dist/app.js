"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const courses_1 = require("./routes/courses");
const podcasts_1 = require("./routes/podcasts");
const resources_1 = require("./routes/resources");
const profiles_1 = require("./routes/profiles");
const app = (0, express_1.default)();
// CORS configuration
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN || 'https://mastertherobots.com',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
// Middleware
app.use(express_1.default.json());
// Routes
app.use("/api/courses", courses_1.coursesRouter);
app.use("/api/podcasts", podcasts_1.podcastsRouter);
app.use("/api/resources", resources_1.resourcesRouter);
app.use("/api/profiles", profiles_1.profilesRouter);
// Serve static files
app.use('/img', express_1.default.static(path_1.default.join(__dirname, '../public/img')));
// Add health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        service: 'master-the-robots-api',
        version: process.env.npm_package_version || '1.0.0',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'production'
    });
});
// Add test route before export
app.get('/test', (req, res) => {
    console.log('Test route hit');
    res.json({ message: 'Test route working' });
});
exports.default = app;
