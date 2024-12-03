"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Basic route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Master the Robots API" });
});
// Health check endpoint
app.get("/health", (req, res) => {
    res.json({ status: "healthy" });
});
const PORT = process.env.PORT || 5000;
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
