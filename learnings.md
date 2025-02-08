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

12. Git File Change Detection
    - Issues we encountered:
      - Git sometimes doesn't detect changes even when file content changes
      - Binary file differences can mask actual text changes
      - Moving/renaming files can break Git's change tracking
    
    - Solutions we found:
      - Adding visible changes (like comments) can force Git to recognize updates
      - Using `git rm --cached` followed by `git add` can reset Git's tracking
      - Sometimes need to make content changes obvious enough for Git to detect
    
    - Best practices learned:
      - Make meaningful changes that Git can detect (not just whitespace)
      - Use comments to document important changes
      - When changing configuration, add clear version/date markers
      - If Git isn't seeing changes, try:
        1. Check file encoding (UTF-8)
        2. Add obvious changes (like dated comments)
        3. Use `git rm --cached` to reset tracking
        4. Verify changes with `cat` before committing

13. Heroku Database Configuration
    - Always use DATABASE_URL in production
    - Need SSL configuration for Heroku Postgres
    - TypeORM needs specific config structure:
      ```typescript
      const config = process.env.DATABASE_URL ? {
          type: "postgres",
          url: process.env.DATABASE_URL,
          ssl: {
              rejectUnauthorized: false
          }
      } : {
          // local config
      };
      ``` 

14. API Configuration Lessons
    - Environment Variables:
      - Heroku config vars override .env files
      - Must set vars for both frontend and backend apps
      - Production builds need explicit environment handling
    
    - CORS Configuration:
      - Must match exact origin domain
      - Custom domains need separate CORS entries
      - Development and production domains both needed
    
    - API URL Structure:
      - Consistent prefix (/api) helps with routing clarity
      - Backend routes should match frontend expectations
      - Version prefix consideration for future compatibility

    - Common Pitfalls:
      - Assuming .env files work in production
      - Missing environment-specific configurations
      - Incorrect domain assumptions in CORS
      - Not verifying environment variable injection during build 

15. Server Debugging Best Practices
    - Root Cause: Mixing Docker and local development caused confusion about where logs were appearing
    - Solution: Always follow this debugging order:
      1. Stop ALL Docker containers first
      2. Start server locally with `npm run dev`
      3. Test in new PowerShell window
      4. Only move to Docker after local setup works

    - Key Learnings:
      - Don't assume server errors are database issues
      - Check for running Docker containers that might conflict
      - Verify which process is actually serving requests
      - Running locally shows all console.log output
      - Docker logs need separate checking

    - Debugging Steps:
      1. Stop all containers: `docker stop $(docker ps -q)`
      2. Clear terminal
      3. Start fresh: `cd server && npm run dev`
      4. Test in new window: `Invoke-WebRequest http://localhost:3000/health`
      5. Check server logs in original window

    - Common Pitfalls:
      - Multiple servers running (Docker + local)
      - Logs appearing in wrong place
      - Assuming Docker when running locally
      - Not checking process ownership of port 3000 

16. Application Startup Sequence
    - Required Order:
      1. Stop any running processes:
         ```powershell
         docker stop $(docker ps -q)  # Stop all Docker containers
         ```
      
      2. Start backend (in server directory):
         ```powershell
         cd server
         npm run dev
         ```
         Expected logs:
         - Database connection successful
         - Server running on port 3000
         - Environment: development
      
      3. Start frontend (in new terminal, from root):
         ```powershell
         cd ..  # If in server directory
         npm run dev
         ```
         Expected logs:
         - Vite server starting
         - Local URL: http://localhost:5173
      
    - Verification Steps:
      1. Backend health check:
         ```powershell
         Invoke-WebRequest http://localhost:3000/health | Select-Object -ExpandProperty Content
         ```
         Should return: {"status":"healthy"}
      
      2. Courses endpoint:
         ```powershell
         Invoke-WebRequest http://localhost:3000/api/courses | Select-Object -ExpandProperty Content
         ```
         Should return: Array of courses

    - Common Startup Issues:
      - Port conflicts: Check if processes already using 3000/5173
      - Database connection: Verify PostgreSQL is running
      - Missing node_modules: Run npm install in both directories 

17. Image Handling Best Practices
    - Static File Serving:
      - Express needs explicit static directory setup
      - Frontend needs full URL with API base
      - File paths must match database records exactly
    
    - Image Upload Flow:
      1. Frontend sends file to API
      2. Backend saves to public/img
      3. Updates database with path
      4. Frontend constructs full URL using API base
    
    - Common Pitfalls:
      - Missing API base URL in image src
      - Incorrect file paths in database
      - Static files not served by Express
      - Missing file extensions
    
    - Best Practices:
      - Always use API base URL for images
      - Keep consistent file naming
      - Add error handling for failed loads
      - Auto-refresh after upload
      - Clean up old files when replaced 

## Image Handling

All static images are served through the backend server:

### Directory Structure
- All images live in `server/public/img/`
- Express serves them via `/img` route

### URL Patterns
- Local Development: `http://localhost:3000/img/filename.png`
- Production: `https://master-the-robots-fe5cf20dff5e.herokuapp.com/img/filename.png`

### Implementation
- Frontend uses `${API_ENDPOINTS.base}/img/` for all image URLs
- Image uploads should be directed to `server/public/img/`
- Express serves static files: `app.use('/img', express.static(path.join(__dirname, 'public/img')))`

### Benefits
- Consistent behavior across environments
- Single source of truth for images
- Simplified maintenance and debugging 