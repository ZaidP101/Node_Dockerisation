# Node_Dockerisation

# Dockerize Your Node.js Application
In this post, I demonstrate how to Dockerize a simple Node.js application using a Dockerfile. The application is a basic Express server that runs inside a Docker container. Here’s a breakdown of the process, including the necessary Dockerfile, the Node.js application code, and how to get everything up and running.

# Steps to Build and Run the Docker Container
Ensure you have Docker installed.

1 - Navigate to your project directory.
2 - Build the Docker image : docker build -t node-app .
3 - Run the Docker container : docker run -p 9000:9000 node-app
4 - Login to hub.docker
5 - Push the following on hub.docker.com : docker push node-app

# Summary
In this example, we created a Dockerized Node.js application using a Dockerfile. The Dockerfile installs necessary dependencies, copies the application files, and sets the entry point for the application. The Node.js app is a simple Express server that responds with a JSON message. By following these steps, you can easily Dockerize your Node.js applications and run them in a containerized environment. Additionally, images include PNGs showing the process of pushing the Docker image to Docker Hub.
