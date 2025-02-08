# Use Node.js base image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Copy server code
COPY server/ .

# Create public/img directory
RUN mkdir -p public/img

# Expose port
EXPOSE 3000

# Start command
CMD [ "npm", "start" ] 