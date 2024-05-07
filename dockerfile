# Use the official Node.js base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install Meteor
RUN curl https://install.meteor.com/ | sh

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN meteor npm install

# Copy the entire project to the working directory
COPY . .

# Set a non-root user to run the Meteor application
RUN chown -R node:node ./

USER node

# Expose the port that Meteor runs on (default is 3000)
EXPOSE 3000

# Start the Meteor application
CMD meteor