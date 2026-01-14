# Hebcal Zmanim Server

A TypeScript-based Express server that provides Zmanim (Jewish prayer times) data through the Hebcal API.

## Features

- RESTful API for fetching Zmanim based on geographic location
- CORS enabled for cross-origin requests
- TypeScript for type safety
- Morgan for request logging
- Serves static frontend files from the `public` directory

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory:

```
PORT=8080
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## API Endpoints

### Get Zmanim
```
GET /api/zmanim?lat={latitude}&lng={longitude}
```

**Query Parameters:**
- `lat` (required): Latitude coordinate
- `lng` (required): Longitude coordinate

**Response:**
```json
{
  "dawn": "2026-01-14T05:30:00.000Z",
  "sunrise": "2026-01-14T06:45:00.000Z",
  "shema": "2026-01-14T09:15:00.000Z",
  "sunset": "2026-01-14T17:30:00.000Z",
  "dusk": "2026-01-14T18:15:00.000Z",
  "location": "Jerusalem, Israel"
}
```

### Health Check
```
GET /health
```

Returns `OK` if the server is running.

## Project Structure

```
hebcal-server/
├── src/
│   ├── index.ts              # Main server file
│   ├── routes/
│   │   └── zmanim.ts         # Zmanim API routes
│   └── services/
│       └── hebcalService.ts  # Hebcal API integration
├── public/                   # Static frontend files
├── dist/                     # Compiled JavaScript (generated)
├── package.json
├── tsconfig.json
└── .env
```

## Technologies

- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Axios** - HTTP client for external API calls
- **CORS** - Cross-Origin Resource Sharing
- **Morgan** - HTTP request logger
- **ts-node-dev** - Development server with hot reload

## Author

Tehila Heizler
