# Hebcal Zmanim Explorer 🌅

A full-stack application that provides a clean, user-friendly interface for Halachic times (Zmanim) using the Hebcal API.

## 🚀 Deployment
**Live URL:** [Insert your Azure Link Here]  
**Repository:** [Insert your GitHub Link Here]

## 🛠 Tech Stack
- **Frontend:** React (Vite), Material UI (MUI), Axios.
- **Backend:** Node.js, Express, TypeScript.
- **Logging:** Morgan (Standard HTTP logging).
- **Deployment:** Azure App Service.

## 🧠 Architectural Decisions
- **Proxy Pattern:** The Node.js backend acts as a proxy to the Hebcal API. This hides the external API structure and allows for easier error handling and logging.
- **Separation of Concerns:** - **Services:** API logic is isolated in the `api.js` (frontend) and `hebcalService.ts` (backend).
  - **Components:** UI is broken into modular, presentational components (ZmanimCard, ZmanimGrid).
- **Graceful Error Handling:** Implemented `try/catch` blocks and loading states to ensure a smooth UX even if API calls fail or location permissions are denied.
- **Production Ready:** The server is configured to serve the production build of the React app as static files.

## 🏃‍♂️ How to Run Locally
1. **Server:** - `cd server`
   - `npm install`
   - `npm run dev` (Runs on port 8080)
2. **Client:**
   - `cd client`
   - `npm install`
   - `npm run dev`