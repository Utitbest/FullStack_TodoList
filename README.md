# TodoList Utitbest Node.js

A fullstack TodoList application built with **Node.js/Express** for the backend, **MongoDB Atlas** for the database, and a **frontend (React/Vue/Angular)** compiled into `frontend/dist` and served by the backend.

---

## 📂 Project Structure

root/
├── backend/        # Express + MongoDB backend
│    └── index.js
├── frontend/       # Frontend source code
│    └── dist/      # Compiled frontend build
├── package.json        # Root scripts and dependencies
└── .gitignore

Code

---

## 🚀 Features
- REST API for managing todos (`/todo` routes).
- MongoDB Atlas connection via Mongoose.
- CORS enabled for cross‑origin requests.
- Serves frontend build from `frontend/dist`.
- Ready for deployment on Render.

---

## ⚙️ Setup

### 1. Clone the repo
```bash
git clone https://github.com/your-username/todolist_utitbest_nodejs.git
cd todolist_utitbest_nodejs
2. Install dependencies
bash
npm install
3. Environment variables
Create a .env file in the root:

Code
PORT=5000
MONGO_URI=your_mongodb_connection_string
4. Run locally
Backend with hot reload:

bash
npm run dev
Build frontend:

bash
cd frontend
npm install
npm run build
Start backend (serves frontend build):

bash
npm run start
📦 Scripts
npm run dev → Start backend with nodemon.

npm run start → Start backend with Node.

npm run build → Install frontend deps and build frontend.

🌐 Deployment on Render
Build Command:

bash
npm run build
Start Command:

bash
npm run start
Add environment variables (MONGO_URI, PORT) in Render dashboard.

Render will serve your backend API and frontend build together.

🛡️ .gitignore
gitignore
node_modules/
frontend/node_modules/
backend/node_modules/
frontend/dist/
.env
.DS_Store
.vscode/
📌 Notes
Do not commit .env or node_modules.

Render automatically installs dependencies during build.

Ensure frontend/dist/index.html exists before deploying.

✨ Author
Utitbest
