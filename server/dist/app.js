"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./config/database");
const courses_1 = __importDefault(require("./routes/courses"));
const podcasts_1 = __importDefault(require("./routes/podcasts"));
const resources_1 = __importDefault(require("./routes/resources"));
const profiles_1 = __importDefault(require("./routes/profiles"));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/courses', courses_1.default);
app.use('/podcasts', podcasts_1.default);
app.use('/resources', resources_1.default);
app.use('/profiles', profiles_1.default);
// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});
// Initialize database connection
database_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connection initialized");
})
    .catch((error) => {
    console.error("Error initializing database:", error);
});
exports.default = app;
