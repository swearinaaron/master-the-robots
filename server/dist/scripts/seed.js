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
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const Course_1 = require("../entities/Course");
const Podcast_1 = require("../entities/Podcast");
const Resource_1 = require("../entities/Resource");
const seedData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.AppDataSource.initialize();
        console.log("Connected to database");
        // Sample courses
        const courses = [
            {
                title: "AI Fundamentals",
                description: "Learn the basics of artificial intelligence",
                image_url: "https://example.com/ai-fundamentals.jpg",
                difficulty_level: "Beginner"
            },
            {
                title: "Robotics Programming",
                description: "Introduction to programming robots",
                image_url: "https://example.com/robotics.jpg",
                difficulty_level: "Intermediate"
            }
        ];
        // Sample podcasts
        const podcasts = [
            {
                title: "Future of AI",
                description: "Discussion about AI trends",
                audio_url: "https://example.com/ai-podcast.mp3",
                duration: 1800 // 30 minutes in seconds
            },
            {
                title: "Robotics Revolution",
                description: "Latest in robotics technology",
                audio_url: "https://example.com/robotics-podcast.mp3",
                duration: 2400 // 40 minutes in seconds
            }
        ];
        // Sample resources
        const resources = [
            {
                title: "AI Research Papers",
                description: "Collection of important AI papers",
                type: "document",
                url: "https://example.com/ai-papers"
            },
            {
                title: "Robot Programming Guide",
                description: "Comprehensive guide to robot programming",
                type: "tutorial",
                url: "https://example.com/robot-guide"
            }
        ];
        // Insert all data
        yield database_1.AppDataSource.getRepository(Course_1.Course).save(courses);
        console.log("Courses seeded");
        yield database_1.AppDataSource.getRepository(Podcast_1.Podcast).save(podcasts);
        console.log("Podcasts seeded");
        yield database_1.AppDataSource.getRepository(Resource_1.Resource).save(resources);
        console.log("Resources seeded");
        console.log("All data seeded successfully");
        process.exit(0);
    }
    catch (error) {
        console.error("Error seeding data:", error);
        process.exit(1);
    }
});
seedData();
