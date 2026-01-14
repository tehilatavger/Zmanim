# Zmanim - Jewish Prayer Times Application

A full-stack application for displaying Zmanim (Jewish prayer times) based on the user's geographic location.

## Project Structure

This is a monorepo containing:

### 📦 `/client`
React-based frontend application built with Vite
- Modern UI with Material-UI components
- Geolocation-based time calculations
- Responsive design for mobile and desktop

### 🚀 `/hebcal-server`
TypeScript Express server
- RESTful API for Zmanim data
- Integration with Hebcal API
- Static file serving for production builds

## Quick Start

### Prerequisites
- Node.js v16+
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/tehilatavger/Zmanim.git
cd Zmanim
```

2. **Setup Server:**
```bash
cd hebcal-server
npm install
cp .env.example .env
npm run dev
```

3. **Setup Client (in a new terminal):**
```bash
cd client
npm install
npm run dev
```

The client will run on `http://localhost:5173` and the server on `http://localhost:8080`.

## Production Deployment

### Build Client
```bash
cd client
npm run build
```

### Deploy Server with Static Files
```bash
cd hebcal-server
# Copy client build to server's public directory
cp -r ../client/dist/* ./public/
npm run build
npm start
```

## Features

- ✨ Real-time Zmanim calculations
- 📍 Automatic location detection
- 🎨 Beautiful, responsive UI
- ⏰ Next event countdown
- 🌙 Multiple Zmanim times (Dawn, Sunrise, Shema, Sunset)

## Technologies

### Frontend
- React 18
- Vite
- Material-UI
- Axios

### Backend
- Node.js
- Express
- TypeScript
- Hebcal API

## API Endpoints

### `GET /api/zmanim`
Query Parameters:
- `lat`: Latitude (required)
- `lng`: Longitude (required)

Returns Zmanim data for the specified location.

## Author

Tehila Heizler

## License

ISC
