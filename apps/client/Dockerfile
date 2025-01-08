# Use the official Node.js image
FROM node:16 AS base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for the client
COPY apps/client/package*.json ./

# Install dependencies for the client
RUN npm install

# Copy application code from client
COPY apps/client ./

# Copy db package files (including Prisma)
COPY packages/db/package*.json ./packages/db/
COPY packages/db/prisma ./packages/db/prisma/

# Install dependencies for db package (Prisma)
RUN npm install --prefix ./packages/db

# Generate Prisma client (ensure this is done correctly)
RUN npx prisma generate --schema=./packages/db/prisma/schema.prisma

# Build the Next.js application
RUN npm run build

# Production image
FROM node:16 AS production

WORKDIR /app

# Copy only necessary files from the previous stage
COPY --from=base /app .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
