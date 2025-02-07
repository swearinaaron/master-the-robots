import "reflect-metadata";
import { DataSource } from "typeorm";
import { Course } from "../entities/Course";
import { Podcast } from "../entities/Podcast";
import { Resource } from "../entities/Resource";
import { Profile } from "../entities/Profile";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "master_the_robots",
    synchronize: true,
    logging: true,
    entities: [Course, Podcast, Resource, Profile],
    subscribers: [],
    migrations: [],
});

export const connectDatabase = async () => {
  try {
    const connection = await AppDataSource.initialize();
    console.log("Database connected successfully");
    return connection;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}; 