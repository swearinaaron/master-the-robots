"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = require("../entities/User");
const _1701574800000_CreateUsersTable_1 = require("../migrations/1701574800000-CreateUsersTable");
dotenv_1.default.config();
// Parse Heroku DATABASE_URL if present
const getDatabaseConfig = () => {
    if (process.env.DATABASE_URL) {
        // Parse Heroku DATABASE_URL
        const url = new URL(process.env.DATABASE_URL);
        return {
            host: url.hostname,
            port: parseInt(url.port),
            username: url.username,
            password: url.password,
            database: url.pathname.split("/")[1],
            ssl: {
                rejectUnauthorized: false
            }
        };
    }
    // Local development fallback
    return {
        host: process.env.DB_HOST || "localhost",
        port: parseInt(process.env.DB_PORT || "5432"),
        username: process.env.DB_USERNAME || "postgres",
        password: process.env.DB_PASSWORD || "postgres",
        database: process.env.DB_DATABASE || "master_the_robots"
    };
};
const config = Object.assign(Object.assign({ type: "postgres" }, getDatabaseConfig()), { synchronize: false, logging: process.env.NODE_ENV !== "production", entities: [User_1.User], migrations: [_1701574800000_CreateUsersTable_1.CreateUsersTable1701574800000], migrationsRun: true // Automatically run migrations on startup
 });
exports.default = config;
