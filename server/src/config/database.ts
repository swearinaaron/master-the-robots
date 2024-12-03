import { DataSourceOptions } from "typeorm";
import dotenv from "dotenv";
import { User } from "../entities/User";
import { CreateUsersTable1701574800000 } from "../migrations/1701574800000-CreateUsersTable";

dotenv.config();

// Parse Heroku DATABASE_URL if present
const getDatabaseConfig = () => {
  if (process.env.DATABASE_URL) {
    // Parse Heroku DATABASE_URL
    const url = new URL(process.env.DATABASE_URL);
    return {
      host: url.hostname,
      port: parseInt(url.port),
      username: url.username,
      password: url.password,
      database: url.pathname.split("/")[1],
      ssl: {
        rejectUnauthorized: false
      }
    };
  }

  // Local development fallback
  return {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_DATABASE || "master_the_robots"
  };
};

const config: DataSourceOptions = {
  type: "postgres",
  ...getDatabaseConfig(),
  synchronize: false, // Disable synchronize in all environments
  logging: process.env.NODE_ENV !== "production",
  entities: [User],
  migrations: [CreateUsersTable1701574800000],
  migrationsRun: true // Automatically run migrations on startup
};

export default config;