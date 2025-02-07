// Updated database config for Heroku deployment
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Course } from "../entities/Course";
import { Podcast } from "../entities/Podcast";
import { Resource } from "../entities/Resource";
import { Profile } from "../entities/Profile";
import dotenv from "dotenv";

dotenv.config();

// Configuration for database connection
// In production, we use DATABASE_URL from Heroku
// In development, we use individual connection parameters
const config = process.env.DATABASE_URL ? {
    // Production configuration using Heroku's DATABASE_URL
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [Course, Podcast, Resource, Profile],
    synchronize: true,
    ssl: {
        // Required for Heroku Postgres
        rejectUnauthorized: false
    }
} : {
    // Local development configuration
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "master_the_robots",
    entities: [Course, Podcast, Resource, Profile],
    synchronize: true,
    dropSchema: false,
    logging: true
};

export const AppDataSource = new DataSource(config as any);

export const connectDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
        throw error;
    }
};