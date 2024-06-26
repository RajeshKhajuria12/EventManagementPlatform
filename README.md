# Event Management Platform

## Overview

The Event Management Platform is a Node.js and TypeScript-based application designed for managing events for an event-organizing company. It provides CRUD (Create, Read, Update, Delete) operations for events, along with optional filters and basic authentication.

## Features

- **Add a New Event:** Create a new event with details such as event name, date, organizer information, and location.
- **Update an Existing Event:** Modify details of an existing event including name, date, organizer details, and location.
- **Delete an Event:** Remove an event from the system.
- **Retrieve Event by ID:** Fetch details of a specific event using its unique identifier.
- **List Events with Filters:** Get a list of all events with optional filters such as date range or location.

## Technologies Used

- **Node.js**: Runtime environment for executing JavaScript code server-side.
- **Express.js**: Web framework for Node.js used to build APIs and handle HTTP requests.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **MySQL**: Relational database management system used for storing event data.

## Installation and Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/EventManagementPlatform.git
   cd EventManagementPlatform

   ```

2. **Install dependencies:**

   ```bash
   npm install

   ```

3. **Set Environment Variables:**
   - **Create a .env file in the root directory**
   - **Add the following environment variables:**
   ```bash
   PORT=3000  # Replace with desired port number
   DB_HOST=localhost
   DB_USER=root  # Replace with your MySQL username
   DB_PASSWORD=your_password  # Replace with your MySQL password
   DB_NAME=event_management_db  # Replace with your MySQL database name
   ```
4. **Database Setup:**

   ```bash
   npm start
   ```

5. **DB schema**

- Use schema defined in `db/init.sql` run it on your sql server.

6. **Postman collection**

- `postman/thunder-collection_EventManagementPlatform.json`
