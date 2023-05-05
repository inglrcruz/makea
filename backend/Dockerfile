# Base image
FROM node:18.14.2-alpine

# Working directory
WORKDIR /api

# Copy necessary files
COPY package*.json ./
COPY . .

# Install dependencies
RUN npm install

# Start command
CMD ["npm", "run", "start:dev"]
