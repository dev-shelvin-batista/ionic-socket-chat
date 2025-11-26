# Use a Node.js base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy all files
COPY . .

# Install ionic dependence
RUN npm install -g @ionic/cli

# Install dependencies
RUN npm install

# Expose the port Ionic serves on (default is 8100)
EXPOSE 8100

# Command to run when the container starts
CMD ["ionic", "serve", "--host", "0.0.0.0", "--port", "8100"]