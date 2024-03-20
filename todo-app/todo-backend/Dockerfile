# Use Node.js 16 base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000



RUN npm ci
# Command to run the application
CMD npm start
