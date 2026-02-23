# Use the official Node.js v18.16.0 image as the base image
FROM node:18.16.0

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install npm packages (including serve from devDependencies)
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Expose the port that serve will use
EXPOSE 5555

# Start the React app in production mode (build + serve)
CMD ["npm", "run", "start:prod"]