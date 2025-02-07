import app from "./app";
import { connectDatabase } from "./config/database";
import dotenv from "dotenv";

dotenv.config();

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
