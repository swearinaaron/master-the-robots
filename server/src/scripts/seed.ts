import { AppDataSource } from "../config/database";
import { Course } from "../entities/Course";
import { Podcast } from "../entities/Podcast";
import { Resource } from "../entities/Resource";

const seedData = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Connected to database");

        // Sample courses
        const courses = [
            {
                title: "AI Fundamentals",
                description: "Learn the basics of artificial intelligence and machine learning concepts",
                image_url: "/img/course1.png",
                difficulty_level: "Beginner",
                price: "Free",
                rating: 5,
                students_count: 0,
                udemy_url: "#"
            },
            {
                title: "Robotics Programming",
                description: "Master robot control systems and automation fundamentals",
                image_url: "/img/course2.png",
                difficulty_level: "Intermediate",
                price: "Free",
                rating: 5,
                students_count: 0,
                udemy_url: "#"
            },
            {
                title: "Computer Vision",
                description: "Implement visual recognition and image processing systems",
                image_url: "/img/course3.png",
                difficulty_level: "Advanced",
                price: "Free",
                rating: 5,
                students_count: 0,
                udemy_url: "#"
            },
            {
                title: "Natural Language Processing",
                description: "Build intelligent text and speech processing applications",
                image_url: "/img/course4.png",
                difficulty_level: "Intermediate",
                price: "Free",
                rating: 5,
                students_count: 0,
                udemy_url: "#"
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
        await AppDataSource.getRepository(Course).save(courses);
        console.log("Courses seeded");

        await AppDataSource.getRepository(Podcast).save(podcasts);
        console.log("Podcasts seeded");

        await AppDataSource.getRepository(Resource).save(resources);
        console.log("Resources seeded");

        console.log("All data seeded successfully");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding data:", error);
        process.exit(1);
    }
};

seedData(); 