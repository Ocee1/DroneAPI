# Drone API

Efficient Medication Delivery Management

## Overview

The DroneAPI is a RESTful web service designed to facilitate communication and control for a fleet of drones. Built using TypeScript and Express.js, it provides endpoints to register drones, load medications onto drones, check the status of loaded medications, and perform various operations related to drone management.

## Features

- Express.js Framework: Utilizes the Express.js framework for building a scalable and efficient web server.
- TypeScript: Written in TypeScript for enhanced code maintainability and type safety.
- MongoDB Integration: Integrates with MongoDB for persistent storage of drone and medication data.
#### RESTful Endpoints:
- registerDrone: Registers a new drone with specified attributes.
- loadMed: Loads medications onto a drone, considering factors like weight, battery level, and state.
Additional endpoints for checking drone status, available drones for loading, and battery levels.

## Preequisites
Before running the application, ensure you have the following software installed on your machine:

Node.js: Download and Install Node.js
Node Package Manager: Installation Instructions

## Getting Started
Follow these steps to run the DroneAPI locally
1. Clone the repository
- git clone https://github.com/Ocee1/DroneAPI.git
- cd DroneAPI

2. Install dependencies
- npm install

3. Set Up environment Variables
- NODE_ENV=development
- MONGODB_ur=mongodb://localhost/your-local-database

4. Run the Application
- npm  

### DB
Connect to Mongodb locally through a docker image or setup mongodb locally





Installation: Provide clear instructions on how to install dependencies and set up the API environment.
Configuration: Explain any necessary configuration steps, such as database setup.
Running the API: Describe how to start the API server.
Documentation: Link to the API documentation for detailed information on endpoints and usage.

## Contributing

Outline guidelines for contributing to the project, including code contributions, testing, and documentation.
Refer to a CONTRIBUTING file for detailed instructions.
## Endpoints

List the available API endpoints, their HTTP methods, and brief descriptions.
Consider using a table format for clarity.