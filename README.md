# Master the Robots Website

A full-stack educational platform for AI and robotics courses built with React, TypeScript, Node.js, and PostgreSQL.

## Prerequisites

- Node.js 20.x
- PostgreSQL 14+
- npm or yarn
- Git

## Project Structure

```
project/
├── src/                           # Frontend React code
│   ├── components/               
│   │   ├── auth/                 # Auth0 components
│   │   ├── courses/              # Course catalog
│   │   ├── home/                 # Landing page
│   │   ├── layout/              
│   │   ├── podcast/             
│   │   ├── profile/             
│   │   ├── resources/           
│   │   └── ui/                  
│   ├── context/                  # React context providers
│   └── pages/                    # Page components
├── server/                       # Backend Express server
│   ├── src/                     
│   │   └── index.ts             # Main server file
│   └── .env                     # Server environment variables
├── database/                     # SQL scripts
│   ├── create_tables.sql        
│   └── seed_data.sql           
└── public/                      # Static assets
```

## Quick Start

1. **Clone the repository**
```bash
git clone <repository-url>
cd master-the-robots
```

2. **Set up environment variables**

Frontend (.env):
```
VITE_AUTH0_DOMAIN=dev-67r8mg5em7mrf1w5.us.auth0.com
VITE_AUTH0_CLIENT_ID=hmgeTYAohcjGQfjs8jaiBUn0Nxht6EXm
```

Backend (server/.env):
```
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=postgres
DB_NAME=master_robots
JWT_SECRET=your_jwt_secret_here
CORS_ORIGIN=http://localhost:5173
```

3. **Database Setup**
```bash
# Start PostgreSQL
brew services start postgresql

# Create database
createdb master_robots

# Initialize tables
psql master_robots << EOF
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    difficulty_level VARCHAR(50),
    price VARCHAR(10),
    rating DECIMAL(2,1),
    students_count INTEGER,
    udemy_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE podcasts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    audio_url VARCHAR(255),
    duration INTEGER,
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE resources (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    type VARCHAR(50),
    url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255),
    name VARCHAR(255),
    avatar_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
EOF
```

4. **Install Dependencies**
```bash
# Frontend dependencies
npm install

# Backend dependencies
cd server
npm install
```

5. **Development Setup**

Add to ~/.bash_profile (or ~/.zshrc):
```bash
# Project directories
alias cdmtr="cd '/path/to/project'"
alias cdserver="cd '/path/to/server'"

# Start commands
alias startfe="cdmtr && npm run dev"
alias startbe="cdserver && npm run dev"
alias startdb="brew services start postgresql"

# Combined start command
alias startall="startdb && mkdir -p ~/logs && (startbe > ~/logs/backend.log 2>&1 & startfe > ~/logs/frontend.log 2>&1 &)"

# Log viewing
alias logfe="tail -f ~/logs/frontend.log"
alias logbe="tail -f ~/logs/backend.log"
alias logdb="tail -f /opt/homebrew/var/log/postgresql.log"
```

6. **Start Development Servers**
```bash
# After setting up aliases:
startall

# Or manually:
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend
cd server && npm run dev
```

## Features

- Course catalog with dynamic pricing
- Podcast episodes
- Resource library
- User profiles with Auth0
- PostgreSQL database integration
- Responsive design with Tailwind CSS

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## API Endpoints

- `GET /api/courses` - List all courses
- `GET /api/podcasts` - List all podcasts
- `GET /api/resources` - List all resources
- `GET /api/profile/:userId` - Get user profile

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details