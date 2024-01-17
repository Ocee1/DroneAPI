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
- npm start

### DB
Connect to Mongodb locally through a docker image or setup mongodb locally


## Endpoints

| Endpoint                           | Method | Description                                            |
|------------------------------------|--------|--------------------------------------------------------|
| `/drones`                          | POST   | Register a new drone.                                  |
| `/drones/:serialNumber/medications`| PUT    | Load medications onto a specific drone.                |
| `/drones/:serialNumber/medications`| GET    | Retrieve loaded medications for a specific drone.      |
| `/drones?state=IDLE`               | GET    | Retrieve a list of drones in IDLE state.               |
| `/drones/:serialNumber/battery`    | GET    | Retrieve battery level information for a specific drone.|

