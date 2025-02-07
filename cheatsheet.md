# Master the Robots - Admin Cheatsheet

## Local Development

### Starting the App
```bash
# Start backend (from /server)
npm run dev

# Start frontend (from root)
npm run dev
```

### Database Operations
```bash
# Reset local database
npm run clear-data

# Seed local database
npm run seed
```

## Git Workflow

### Making Changes
```bash
# Check status
git status

# Stage changes
git add <file>          # Single file
git add .               # All changes

# Commit with semantic prefix
git commit -m "feat: add new feature"    # New feature
git commit -m "fix: resolve issue"       # Bug fix
git commit -m "chore: update config"     # Maintenance
git commit -m "docs: update readme"      # Documentation
```

### Common Git Issues
```bash
# If Git isn't seeing changes
git rm --cached <file>
git add <file>

# If you need to undo last commit
git reset --soft HEAD~1
```

## Docker Commands

### Building & Running
```bash
# Build container
docker build -t master-robots .

# Run container
docker run -p 3001:3001 master-robots

# Build with docker-compose
docker-compose up --build

# Stop all containers
docker-compose down
```

## Heroku Deployment

### First-Time Setup
```bash
# Create new app
heroku create my-app-name

# Add Postgres
heroku addons:create heroku-postgresql:mini -a my-app-name

# Set stack to container
heroku stack:set container -a my-app-name
```

### Deployment Steps
```bash
# Push to Heroku
git push heroku master

# If database needs reset
heroku pg:reset -a my-app-name --confirm my-app-name

# Run database seed
heroku run "npm run seed" -a my-app-name

# View logs
heroku logs --tail -a my-app-name
```

### Common Heroku Commands
```bash
# Check app info
heroku info -a my-app-name

# Restart app
heroku restart -a my-app-name

# Open app
heroku open -a my-app-name

# Check config vars
heroku config -a my-app-name
```

## Verification Steps

### After Deployment
1. Check Heroku logs for successful startup
2. Test health endpoint:
   ```powershell
   Invoke-WebRequest https://[your-app-name].herokuapp.com/health | Select-Object -ExpandProperty Content
   ```
3. Verify database connection in logs
4. Test data endpoints (courses, podcasts, etc.)

### Common URLs
- Local Frontend: http://localhost:5173
- Local Backend: http://localhost:3001
- Production: https://[your-app-name].herokuapp.com

## Environment Variables

### Required Variables
```env
# Backend (.env)
PORT=3001
DB_PORT=5432
DB_NAME=master_the_robots
DB_USER=postgres
DB_PASSWORD=your_password

# Frontend (.env.production)
VITE_AUTH0_DOMAIN=your-domain
VITE_AUTH0_CLIENT_ID=your-client-id
VITE_API_URL=https://[your-app-name].herokuapp.com
```

## Troubleshooting

### Database Issues
1. Check connection string
2. Verify SSL config in database.ts
3. Try resetting and reseeding

### Deployment Issues
1. Check Heroku logs
2. Verify environment variables
3. Check Docker build
4. Confirm Git changes are committed

### Common Error Solutions
- Database connection issues: Check SSL config
- Build failures: Check Node version in Dockerfile
- 404 errors: Verify routes and API URL
- Auth issues: Check Auth0 configuration

## Frontend Deployment

### Using Netlify (Simple Version)
```bash
# 1. Update API URL in .env.production
VITE_API_URL=https://[your-heroku-app-name].herokuapp.com

# 2. Build the frontend (from root directory)
npm run build

# 3. Quick deploy with drag-and-drop:
# - Go to app.netlify.com
# - Drag the 'dist' folder to the Netlify UI
# - Wait for deploy (about 1 minute)
# - Get your site URL

# Alternative: Use Netlify CLI
netlify deploy --dir=dist --prod
```

### Deployment Verification
1. Check your Netlify URL works
2. Verify courses page loads
3. Check podcasts page loads
4. Test resources page loads

### Common Issues
- If API calls fail, check CORS settings in backend
- If pages don't load, check the build output in dist/
- If routes don't work, check Netlify redirects 