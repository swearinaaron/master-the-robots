import express from "express";
import cors from "cors";
import { connectDatabase } from "./config/database";
import coursesRouter from "./routes/courses";
import podcastsRouter from "./routes/podcasts";
import resourcesRouter from "./routes/resources";
import profilesRouter from "./routes/profiles";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/courses", coursesRouter);
app.use("/podcasts", podcastsRouter);
app.use("/resources", resourcesRouter);
app.use("/profiles", profilesRouter);

const startServer = async () => {
    try {
        await connectDatabase();
        
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
};

startServer();
