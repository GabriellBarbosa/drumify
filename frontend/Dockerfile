FROM node:18

# Set workdir
WORKDIR /app

# Copy only the dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Now copy everything else (after node_modules is set up)
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
