# Base image
FROM node:18.16.0-alpine

# Working directory
WORKDIR /api

# Copy necessary files
COPY package*.json ./
COPY . .

# Install dependencies
RUN npm install
RUN pm install prisma --save-dev
RUN npx prisma
RUN npx prisma generate

# Start command
CMD ["npm", "run", "start:dev"]
