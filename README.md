# Flights & Search Service

A backend microservice responsible for managing flights, airports, cities, and airplanes in a flight booking system. The service follows a scalable layered architecture using Controllers, Services, Repositories, and Models to provide clean and maintainable code.

## Features

- Flight CRUD Operations
- Airport Management
- City Management
- Airplane Management
- Flight Search APIs
- Database Migrations & Seeders
- Layered Architecture
- MySQL Database Integration
- Sequelize ORM
- Input Validation Middleware
- Centralized Error Handling

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- Sequelize CLI
- dotenv

---

## Architecture

```text
Client
   |
   v
Routes
   |
   v
Controllers
   |
   v
Services
   |
   v
Repositories
   |
   v
MySQL Database
```

The project follows a layered architecture to separate business logic from database operations, making the application easier to scale and maintain.

---

## Modules

### Flight Module

- Create Flight
- Update Flight
- Delete Flight
- Get Flight Details
- Search Flights

### Airport Module

- Create Airport
- Update Airport
- Delete Airport
- Get Airport Details

### City Module

- Create City
- Update City
- Delete City
- Get City Details

### Airplane Module

- Manage Airplane Information

---

## Database Models

### City

- id
- name
- createdAt
- updatedAt

### Airport

- id
- name
- code
- cityId

### Airplane

- id
- modelNumber
- capacity

### Flight

- id
- flightNumber
- airplaneId
- departureAirportId
- arrivalAirportId
- departureTime
- arrivalTime
- price
- totalSeats

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Configure environment variables:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=flight_search_db
```

Run migrations:

```bash
npx sequelize-cli db:migrate
```

Run seeders:

```bash
npx sequelize-cli db:seed:all
```

Start server:

```bash
npm start
```

---

## Project Structure

```text
src/
│
├── controllers/
├── services/
├── repository/
├── models/
├── routes/
├── middleware/
├── config/
├── migrations/
├── seeders/
└── utils/
```

---

## Key Concepts Implemented

- REST API Development
- Layered Architecture
- Repository Pattern
- Service Layer Pattern
- Database Relationships
- CRUD Operations
- Database Migrations
- Database Seeding
- Express Middleware
- Backend Microservices

---

## Future Improvements

- Advanced Flight Filtering
- Pagination
- Sorting
- Flight Availability Tracking
- Seat Booking Integration
- Redis Caching
- API Documentation using Swagger
- Docker Support

---

## Author

Developed as a backend microservice for flight management and search operations within a microservices-based flight booking system.
