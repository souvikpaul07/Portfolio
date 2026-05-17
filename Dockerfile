# Use Node 20
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install deps
RUN npm install

# Copy rest of code
COPY . .

# Build app
RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]