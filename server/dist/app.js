"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const courses_1 = __importDefault(require("./routes/courses"));
const podcasts_1 = __importDefault(require("./routes/podcasts"));
const resources_1 = __importDefault(require("./routes/resources"));
const profiles_1 = __importDefault(require("./routes/profiles"));
const app = (0, express_1.default)();
// Configure CORS
app.use((0, cors_1.default)({
    origin: [
        'https://mastertherobots.com',
        'https://www.mastertherobots.com',
        'http://localhost:5173'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true
}));
// Middleware
app.use(express_1.default.json());
// Routes
app.use("/api/courses", courses_1.default);
app.use("/api/podcasts", podcasts_1.default);
app.use("/api/resources", resources_1.default);
app.use("/api/profiles", profiles_1.default);
exports.default = app;
