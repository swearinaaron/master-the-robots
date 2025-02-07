FROM node:18-slim

WORKDIR /usr/src/app

# Install TypeScript globally
RUN npm install -g typescript

# Copy all source files
COPY . .

# Install dependencies
RUN npm install

# Build TypeScript
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"] 