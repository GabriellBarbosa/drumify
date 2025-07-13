# Use Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app code
COPY . .

# Expose port (optional, for docs)
EXPOSE 3000

# Start Next.js in development mode
CMD ["npm", "run", "dev"]
