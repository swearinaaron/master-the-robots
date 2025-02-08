# Use Node.js base image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY server/package*.json ./

# Copy TypeScript config
COPY server/tsconfig.json ./

# Install dependencies
RUN npm install

# Copy server source code
COPY server/src ./src

# Copy public directory if it exists
COPY server/public ./public

# Build TypeScript
RUN npm run build

# Expose port
EXPOSE 3000

# Start command
CMD [ "npm", "start" ] 