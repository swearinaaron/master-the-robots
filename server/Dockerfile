FROM node:22-alpine

WORKDIR /usr/src/app

# Copy all files first
COPY . .

# Install dependencies
RUN npm clean-install

# Build the application
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"] 