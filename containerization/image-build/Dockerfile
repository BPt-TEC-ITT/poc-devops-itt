# Use an official node.js 14 runtime as base image where we will run our application
FROM node:14

# Set the working directory in the conatiner
WORKDIR /usr/scr/app

# Clone the repository
RUN git clone https://github.com/martinmouly/poc-devops-itt.git .

# Copy .env file that contains parameters into the container
COPY .env .env

#Installation of app dependencies
RUN npm install

# Expose the port that app will run on
EXPOSE 3000

# Command to run the application
CMD [ "npm", "start" ]