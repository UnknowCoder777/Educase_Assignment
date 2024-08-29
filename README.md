# School Management API

## Project Overview

This project is a School Management API built using Node.js, Express, and Sequelize ORM with MySQL. The API provides endpoints for managing schools, including creating new schools and listing schools sorted by proximity to a user's location.

## Features

-   **Create School**: Allows users to add new schools to the database.
-   **List Schools**: Retrieves a list of schools sorted by their proximity to a specified location.

## Technologies Used

-   Node.js
-   Express
-   Sequelize ORM
-   MySQL
-   Sequelize CLI
-   morgan for logging
-   HTTP Status Codes for consistent API responses

## Setup and Installation

### Prerequisites

-   Node.js
-   MySQL Server

### Installation Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/ShivamMishra828/Educase_Assignment.git
    cd Educase_Assignment
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Configure Sequelize**

    Initialize Sequelize configuration:

    ```bash
    cd src
    npx sequelize init
    ```

    Update `config/config.json` with your database credentials:

    ```json
    {
        "development": {
            "username": "root",
            "password": "your_password",
            "database": "database_development",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "test": {
            "username": "root",
            "password": "your_password",
            "database": "database_test",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "production": {
            "username": "root",
            "password": "your_password",
            "database": "database_production",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
    }
    ```

4. **Create the Database**

    ```bash
    npx sequelize db:create
    ```

5. **Run Migrations**

    ```bash
    npx sequelize db:migrate
    ```

6. **Seed the Database with Demo Data**

    ```bash
    npx sequelize db:seed:all
    ```

7. **Start the Server**

    ```bash
    npm run start
    ```

## Endpoints

### `POST /api/v1/schools/addSchool`

-   **Description**: Create a new school.
-   **Request Body**:
    ```json
    {
        "name": "School Name",
        "address": "School Address",
        "latitude": "12.3456",
        "longitude": "-76.5432"
    }
    ```
-   **Response**: Success or error message.

### `GET /api/v1/schools/listSchools`

-   **Description**: Retrieve and sort schools by proximity.
-   **Query Parameters**:
    -   `latitude`: User's latitude.
    -   `longitude`: User's longitude.
-   **Response**: List of schools sorted by distance.
