# Indian Communication - Deployment Guide (Vercel & Render)

This project consists of:
- **Frontend**: Modern React + Vite application (configured for **Vercel**).
- **Backend**: Express + Node.js API with CORS and health-checks (configured for **Render**).

---

## 🚀 1. Deploying Frontend to Vercel

1. **Push your code to GitHub / GitLab**.
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository: `Indian-Communication`.
4. Configure the project settings:
   - **Root Directory**: Select `frontend`
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build` (or `vite build`)
   - **Output Directory**: `dist`
5. **Environment Variables** (Optional, add once backend is deployed):
   - `VITE_API_URL`: `https://your-backend-service.onrender.com`
   *(If not set, the frontend will operate seamlessly with local storage and direct WhatsApp fallback!)*
6. Click **Deploy**.
   - `frontend/vercel.json` is already configured with rewrite rules to ensure client-side routing works without 404s.

---

## ⚡ 2. Deploying Backend to Render

1. Log in to [Render](https://render.com) and click **"New +"** -> **"Web Service"**.
2. Connect your GitHub repository.
3. Configure the service:
   - **Name**: `indian-communication-backend`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start` *(or `node index.js`)*
4. **Environment Variables**:
   - `PORT`: `5000` (Render will also automatically assign one)
   - `MONGODB_URL`: *(Your MongoDB connection string from `.env`)*
5. **Health Check Path**:
   - `/api/health`
6. Click **Create Web Service**.

Once deployed, copy your Render service URL (e.g. `https://indian-communication-backend.onrender.com`) and paste it into your Vercel project's `VITE_API_URL` environment variable, then trigger a quick redeploy on Vercel.

---

## 🛠️ Local Development

### Run Frontend:
```bash
cd frontend
npm install
npm run dev
```
Accessible at: `http://localhost:5173`

### Run Backend:
```bash
cd backend
npm install
npm start
```
Accessible at: `http://localhost:5000`
Health Check: `http://localhost:5000/api/health`
