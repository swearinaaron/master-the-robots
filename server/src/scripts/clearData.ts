import { AppDataSource } from "../config/database";
import { Course } from "../entities/Course";
import { Podcast } from "../entities/Podcast";
import { Resource } from "../entities/Resource";

const clearData = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Connected to database");

        await AppDataSource.getRepository(Course).clear();
        console.log("Courses cleared");

        await AppDataSource.getRepository(Podcast).clear();
        console.log("Podcasts cleared");

        await AppDataSource.getRepository(Resource).clear();
        console.log("Resources cleared");

        console.log("All data cleared successfully");
        process.exit(0);
    } catch (error) {
        console.error("Error clearing data:", error);
        process.exit(1);
    }
};

clearData(); 