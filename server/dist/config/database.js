"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "master_the_robots",
    synchronize: true,
    logging: true,
    entities: [Course_1.Course, Podcast_1.Podcast, Resource_1.Resource, Profile_1.Profile],
    subscribers: [],
    migrations: [],
});
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield exports.AppDataSource.initialize();
        console.log("Database connected successfully");
        return connection;
    }
    catch (error) {
        console.error("Error connecting to database:", error);
        throw error;
    }
});
exports.connectDatabase = connectDatabase;
