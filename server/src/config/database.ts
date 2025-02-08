import "reflect-metadata";
import { DataSource } from "typeorm";
import { Course } from "../entities/Course";
import { Podcast } from "../entities/Podcast";
import { Resource } from "../entities/Resource";
import { Profile } from "../entities/Profile";
import dotenv from "dotenv";

dotenv.config();

// Create TypeORM data source
export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [Course, Podcast, Resource, Profile],
    synchronize: false, // Set to false in production
    ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: false
    } : false,
    logging: process.env.NODE_ENV !== 'production'
});

// Initialize database connection
export const connectDatabase = async () => {
    try {
        console.log('Attempting database connection with config:', {
            host: process.env.DATABASE_URL ? 'Using URL' : process.env.DB_HOST,
            database: process.env.DATABASE_URL ? 'Using URL' : process.env.DB_NAME,
            port: process.env.DATABASE_URL ? 'Using URL' : process.env.DB_PORT
        });
        
        await AppDataSource.initialize();
        console.log("Database connected successfully");
        
        // Test the connection
        const testQuery = await AppDataSource.query('SELECT NOW()');
        console.log("Database test query result:", testQuery);
    } catch (error) {
        console.error("Error connecting to database:", error);
        throw error;
    }
}; 