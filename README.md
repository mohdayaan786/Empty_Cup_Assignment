# 🏡 Interior Design Shortlisting Web App

A **mobile-first full-stack web application** to explore and shortlist interior designers. Built with **React + Vite** for a modern frontend experience, and powered by a **Node.js + Express.js + MongoDB** backend. Fully deployed with **Vercel**, **Render**, **MongoDB Atlas**, and supports **Docker** for local development.

---

## 🌐 Live Demo

* 🚀 Frontend: [https://empty-cup-assignment-pi.vercel.app/](https://empty-cup-assignment-pi.vercel.app/)
* 🔗 Backend API: [https://empty-cup-assignment.onrender.com](https://empty-cup-assignment.onrender.com/)
* 🗃️ Database: Hosted on **MongoDB Atlas**

---

## ✨ Features

### 🔮 Frontend

* 📱 Responsive mobile-first design
* 👩‍🎨 Designer cards with:

  * Name, Description, Rating
  * Projects completed, Experience, Pricing
  * Contact info
* ❤️ Toggle **Shortlist** per designer
* 🧭 Top bar with:

  * Contacts, Gallery, Map (disabled), Shortlist Filter, Sort
* 🔍 Filter to show only shortlisted designers

### 🛠 Backend

* 🌐 REST API with **Express.js**
* 📦 MongoDB integration via **Mongoose**
* 📊 Create and Read operations on designer entries
* 🧪 Sample seeded data for testing

---

## 🧑‍💻 Tech Stack

| Layer      | Tech                                            |
| ---------- | ----------------------------------------------- |
| Frontend   | React, Vite, Inline CSS                         |
| Backend    | Node.js, Express.js                             |
| Database   | MongoDB (via Atlas & Mongoose)                  |
| Deployment | Vercel (Frontend), Render (Backend), Atlas (DB) |
| Dev Tools  | Docker, Postman, Axios                          |

---

## 🗂 Project Structure

```
interior-design-app/
├── frontend/              # Frontend (React + Vite)
│   ├── assets/
│   ├── components/
│   └── ...
├── backend/              # Backend (Node.js + Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
├── docker-compose.yml   # Docker setup
├── README.md
└── package.json
```

---

## 🚀 Getting Started

### 🔧 Prerequisites

* Node.js
* MongoDB Atlas URI
* Docker (optional for local setup)

---

### 📲 Frontend (Vite + React)

```bash
cd client
npm install
npm run dev
```

Accessible at: `http://localhost:5173`

---

### 🌐 Backend (Node + Express)

```bash
cd server
npm install
```

Create a `.env` file in `/server`:

```env
PORT=3000
MONGO_URI=your_mongodb_atlas_connection_string
```

Run the server:

```bash
npm run dev
```

Backend will run at: `http://localhost:3000`

---

### 🐳 Docker Setup

Run both frontend and backend via Docker:

```bash
docker-compose up --build
```

---

## 🔌 API Endpoints

| Method | Route                 | Description          |
| ------ | --------------------- | -------------------- |
| GET    | `/api/v1/designs`     | Fetch all designers  |
| POST   | `/api/v1/designs`     | Add a new designer   |

---

## 🧪 Sample Designer Object

```json
{
  "title": "Modern Luxe Interiors",
  "description": "Specialist in sleek modern homes",
  "rating": 4.7,
  "NoOfProjects": 45,
  "Year": 12,
  "price": 3200,
  "mobileNumber": "9876543210",
  "alternativeMobileNumber": "9123456789",
}
```

---

## 👨‍💻 Author

**Mohd Ayaan**
🎓 IIIT Ranchi
💼 Full Stack Developer | ⚔️ Competitive Programmer
🔗 [LinkedIn](https://www.linkedin.com/in/mohd-ayaan-995348253/)

---

## 📜 License

This project is licensed under the **MIT License**.

---
