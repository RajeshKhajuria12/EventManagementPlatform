-- Create the database
CREATE DATABASE IF NOT EXISTS event_db;
USE event_db;

-- Create the events table
CREATE TABLE IF NOT EXISTS events (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    eventName VARCHAR(255) NOT NULL,
    eventDate DATETIME NOT NULL,
    organizer VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    zip VARCHAR(20) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Optional: Insert some initial data
INSERT INTO events (id, eventName, eventDate, organizer, email, phone, street, city, state, zip)
VALUES 
    ('1', 'Tech Conference', '2024-07-01 09:00:00', 'abc', 'abc@example.com', '1234567890', '123 Main St', 'San Francisco', 'CA', '94101'),
    ('2', 'Music Festival', '2024-08-15 14:00:00', 'def', 'def@example.com', '0987654321', '456 Elm St', 'Los Angeles', 'CA', '90001');
