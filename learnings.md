# Development Setup Best Practices

1. Directory Location
   - Always specify the exact directory needed
   - Use `pwd` to verify current location
   - Use `cd` commands to navigate

2. Administrator Access
   - Specify when PowerShell needs admin privileges
   - Explain how to open PowerShell as admin (Right click -> Run as administrator)

3. Command Execution
   - Provide one command at a time
   - Wait for confirmation before proceeding
   - Show expected output or success criteria
   - Never provide multiple commands without confirmation between each

4. Environment Setup
   - Check existing tools first
   - Install dependencies in correct order
   - Verify installations before proceeding

5. Error Handling
   - Provide expected error messages
   - Include troubleshooting steps
   - Explain how to rollback if needed

6. Dependencies Management
   - Never assume existing installations
   - Always check for required tools/versions first
   - Document confirmed installations in requirements file
   - Update requirements as new dependencies are confirmed

7. Current Confirmed Setup
   Tools installed:
   - Chocolatey v2.4.2
   - Node.js LTS v22.13.1
   - npm v10.9.2
   - Git v2.47.1 (updated)
   - Python 3.12.8
   - Miniconda3 4.12.0
   - PostgreSQL v17.2 (psql confirmed working)
     - Installation path: C:\Program Files\PostgreSQL\17
     - Default user: postgres
     - Initial password: ef080242e62a401e8691b53ddb0e8be9 (CHANGE THIS IMMEDIATELY)
   - Heroku CLI v10.0.0 (win32-x64 node-v20.17.0)
     - Logged in as: aaron.pickrell@gmail.com

8. Database Configuration
   PostgreSQL Connection Details:
   Local:
   - Port: 5432 (default)
   - Host: localhost
   - Default database: postgres
   
   Heroku:
   - Host: c9pv5s2sq0i76o.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com
   - Port: 5432
   - Database: d4sj6jt16e0spk
   - Username: uee0eki432mb93
   - Password: [MASKED] (stored securely in Heroku config)

   Current Tables:
   - courses
     - id: integer (PK, auto-increment)
     - title: varchar(255)
     - description: text
     - image_url: varchar(255)
     - difficulty_level: varchar(50)
     - price: varchar(10)
     - rating: numeric(2,1)
     - students_count: integer
     - udemy_url: varchar(255)
     - created_at: timestamp (default: CURRENT_TIMESTAMP)
   - podcasts
     - id: integer (PK, auto-increment)
     - title: varchar(255)
     - description: text
     - audio_url: varchar(255)
     - duration: varchar(50)
     - published_at: timestamp (default: CURRENT_TIMESTAMP)
     - image_url: varchar(255)
     - host: varchar(100)
     - guest: varchar(100)
   - profiles
     - id: integer (PK, auto-increment)
     - user_id: varchar(255) (unique, not null)
     - email: varchar(255)
     - name: varchar(255)
     - avatar_url: varchar(255)
     - created_at: timestamp (default: CURRENT_TIMESTAMP)
   - resources
     - id: integer (PK, auto-increment)
     - title: varchar(255) (not null)
     - description: text
     - type: varchar(50)
     - url: varchar(255)
     - created_at: timestamp (default: CURRENT_TIMESTAMP)

   Data Status:
   - courses: 4 records
     1. "Laying the Foundations of AI Mastery" (Beginner)
     2. "AI in Action: Practical Tools and Applications" (Intermediate)
     3. "Building AI Mastery" (Advanced)
     4. "Leading with Vision in the Age of AI" (Advanced)
   - podcasts: 7 records
     1. "The Future of AI in Robotics" (60 min)
     2. "Robotics in Healthcare" (45 min)
     3. "Learning Robotics: Where to Start" (30 min)
     4. "The Future of AI" (45 min, host: Dr. Sarah Chen)
     5. "Robotics Revolution" (60 min, host: Dr. Sarah Chen)
     6. "AI Ethics Today" (50 min, host: Dr. Sarah Chen)
     7. "Machine Learning Deep Dive" (55 min, host: Dr. Sarah Chen)
   - resources: 0 records (empty table)
   - profiles: 0 records (empty table)

   Local Database Status:
   - Database: master_the_robots
   - Tables created: courses, podcasts, profiles, resources
   - Data loaded: 
     - courses: 3 records inserted
     - podcasts: 3 records inserted
     - resources: 3 records inserted
     - profiles: empty (by design)

9. Command Documentation
   - Always provide brief explanation of new commands/parameters
   - Format: `command`: what it does
   
   Commands used so far:
   - `refreshenv`: Reloads environment variables without restarting PowerShell
   - `heroku login`: Authenticates your local machine with Heroku account
   - `heroku apps`: Lists all applications associated with your Heroku account
   - `heroku config:get DATABASE_URL`: Retrieves the database connection string from Heroku app's configuration
   - `psql "DATABASE_URL"`: Connects directly to a PostgreSQL database using a connection string
   - `\dt`: Lists all tables in the current PostgreSQL database schema
   - `\d table_name`: Shows detailed structure of a specific table
   - `SELECT * FROM table_name`: Retrieves all records from specified table
   - `\q`: Exits the PostgreSQL interactive terminal
   - `createdb -U username dbname`: Creates a new PostgreSQL database
   - `psql -U username -d dbname`: Connects to a specific local PostgreSQL database
   - `\i filename.sql`: Executes SQL commands from a specified file
   - `cd directory_name`: Changes current working directory
   - `cat filename`: Displays contents of a file in the terminal
   - `npm install`: Installs all dependencies listed in package.json
   - `\d table_name`: Shows detailed table structure
   - Alternative: `psql -U username -d dbname -c "\d table_name"`: Shows table structure from command line

10. Development Best Practices
    - Use local database for development
    - Keep production (Heroku) database for live data only
    - Test all changes locally before deploying

11. Server Development
    - Location: ./server directory
    - Stack: Node.js with Express
    - Database: PostgreSQL (local for development)
    - Key Dependencies:
      - Express: Web framework
      - TypeORM: Database ORM
      - TypeScript: Type safety
      - Cors: Cross-origin resource sharing
      - Dotenv: Environment variables
    - Scripts:
      - dev: Development with hot reload
      - build: Compile TypeScript
      - start: Run production server
    - Version Management:
      - Node.js version should match or exceed package.json engine specification
      - TypeScript and @types/node versions should be compatible with Node.js version
    - Common Issues:
      - TypeScript compilation errors often indicate version mismatches
      - Update package.json and dependencies to resolve compatibility issues
    - Security Best Practices:
      - Regularly run `npm audit` to check for vulnerabilities
      - Keep dependencies updated to latest stable versions
      - Use `npm audit fix` to automatically fix non-breaking security issues
      - Check severity levels of vulnerabilities:
        - High: Should be addressed immediately
        - Moderate: Should be planned for update
        - Low: Monitor but may not need immediate action
      - Review breaking changes before major version updates
      - Run tests after security updates
      - Common Vulnerability Types:
        - ReDoS (Regular Expression Denial of Service)
        - Path traversal
        - Dependency chain vulnerabilities
      - Audit Resolution:
        - `npm audit`: Shows detailed vulnerability reports
        - `npm audit fix`: Successfully resolved path-to-regexp vulnerability
        - Check number of affected packages and severity levels
        - Verify zero vulnerabilities after fixes
    - TypeScript Configuration:
      - Use `npx tsc --init` to generate base tsconfig.json
      - Key settings:
        - outDir: "./dist" for compiled JavaScript
        - rootDir: "./src" for TypeScript source
        - experimentalDecorators: true (for TypeORM)
        - emitDecoratorMetadata: true (for TypeORM)
      - Include/exclude patterns to manage compilation scope
    - Environment Configuration:
      - Store sensitive data in .env file
      - Never commit .env to version control
      - Key variables:
        - PORT: Server port number
        - NODE_ENV: development/production
        - Database credentials
      - Use environment-specific configurations
    - Project Structure:
      - src/: Source code root
        - index.ts: Application entry point
        - app.ts: Express application setup
        - config/: Configuration files
          - database.ts: TypeORM database configuration
      - Organize code by feature/domain
      - Keep configuration separate from business logic
    - Express Application Setup:
      - app.ts: Core application setup
        - Middleware configuration (cors, json parsing)
        - Database initialization
        - Health check endpoint
      - index.ts: Server startup
        - Environment configuration
        - Port configuration
        - Server listener
    - Monorepo Structure:
      - /src: Frontend application
        - components/
        - pages/
        - App.tsx
        - main.tsx
      - /server: Backend application
        - /src: Server source code
          - config/
          - index.ts
          - app.ts
      - Benefits:
        - Clear separation of concerns
        - Easy to manage dependencies separately
        - Simplified deployment process
        - Single repository for version control
    - Server Testing:
      - Run development server: `npm run dev`
      - Expected startup messages:
        - Server port confirmation
        - Database connection status
      - Initial test endpoints:
        - GET /health: Basic health check
        - Should return: { "status": "ok" }
    - Server Startup Indicators:
      - Nodemon watching for file changes
      - Server port confirmation
      - Database queries:
        - Schema verification
        - Version check
      - "Database connection initialized" message
      - Hot reload available with `rs` command
    - API Testing Methods:
      - Browser: Direct URL navigation
      - PowerShell: 
        - `Invoke-WebRequest [url] | Select-Object -ExpandProperty Content`
        - Shows raw response content
      - Curl (if available):
        - `curl [url]`
        - Common in documentation but not default on Windows 
    - Windows PowerShell Specifics:
      - `curl` is an alias for `Invoke-WebRequest`
      - Use full `Invoke-WebRequest` command for clarity
      - Testing endpoints:
        - Open new PowerShell window for requests
        - Keep server running in original window
        - Use `Select-Object -ExpandProperty Content` to see response body 
    - API Testing Results:
      - Health check endpoint (/health):
        - Status: Working
        - Response: {"status":"ok"}
        - Confirms:
          - Server running
          - Express routing functional
          - JSON responses working 
    - TypeScript Entity Configuration:
      - Use definite assignment assertion (!) for TypeORM-managed fields
      - Helps satisfy TypeScript strict initialization
      - Properties managed by database don't need manual initialization 