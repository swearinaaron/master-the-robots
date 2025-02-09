import { DataSource } from 'typeorm';
import { Course } from '../entities/Course';

const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "master_the_robots",
  entities: ["server/src/entities/**/*.ts"],
  synchronize: true
});

async function seedCourses() {
  console.log('Initializing DataSource...');
  await AppDataSource.initialize();
  console.log('DataSource initialized.');

  console.log('Retrieving Course repository...');
  const courseRepository = AppDataSource.getRepository(Course);
  console.log('Course repository retrieved.');

  const courses = [
    {
      title: "Laying the Foundations of AI Mastery",
      description: "Understanding AI, its impact, and essential strategies.",
      image_url: "/path/to/image1.jpg",
      price: "$99",
      udemy_url: "#",
      difficulty_level: "Beginner",
    },
    {
      title: "AI in Action: Practical Tools and Applications",
      description: "Hands-on AI skills, prompt engineering, and automation.",
      image_url: "/path/to/image2.jpg",
      price: "$99",
      udemy_url: "#",
      difficulty_level: "Beginner",
    },
    {
      title: "Building AI Mastery",
      description: "Advanced AI workflows, agentic AI, and deployment.",
      image_url: "/path/to/image3.jpg",
      price: "$99",
      udemy_url: "#",
      difficulty_level: "Beginner",
    },
    {
      title: "AI Leadership and Strategy: Navigating the Future",
      description: "AI-driven decision-making, organizational strategy, and leadership.",
      image_url: "/path/to/image4.jpg",
      price: "$99",
      udemy_url: "#",
      difficulty_level: "Beginner",
    },
  ];

  for (const course of courses) {
    await courseRepository.save(course);
  }

  await AppDataSource.destroy();
}

seedCourses().catch((error) => console.error('Error seeding courses:', error)); 