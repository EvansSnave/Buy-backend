# Stage 1: Build
FROM node:22-alpine3.19 AS builder

# Set working directory
WORKDIR /usr/src/app

# Install app dependencies
# Copy only package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Stage 2: Production image
FROM node:22-alpine3.19

# Set NODE_ENV to production
ENV NODE_ENV production

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install only production dependencies
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy the built application from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Start the application
CMD ["node", "dist/main.js"]
