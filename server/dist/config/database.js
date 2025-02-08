"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Course_1 = require("../entities/Course");
const Podcast_1 = require("../entities/Podcast");
const Resource_1 = require("../entities/Resource");
const Profile_1 = require("../entities/Profile");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Create TypeORM data source
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [Course_1.Course, Podcast_1.Podcast, Resource_1.Resource, Profile_1.Profile],
    synchronize: false,
    ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: false
    } : false,
    logging: process.env.NODE_ENV !== 'production'
});
// Initialize database connection
const connectDatabase = async () => {
    try {
        console.log('Attempting database connection with config:', {
            host: process.env.DATABASE_URL ? 'Using URL' : process.env.DB_HOST,
            database: process.env.DATABASE_URL ? 'Using URL' : process.env.DB_NAME,
            port: process.env.DATABASE_URL ? 'Using URL' : process.env.DB_PORT
        });
        await exports.AppDataSource.initialize();
        console.log("Database connected successfully");
        // Test the connection
        const testQuery = await exports.AppDataSource.query('SELECT NOW()');
        console.log("Database test query result:", testQuery);
    }
    catch (error) {
        console.error("Error connecting to database:", error);
        throw error;
    }
};
exports.connectDatabase = connectDatabase;
