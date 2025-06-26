# 💬 Real-Time Chat Application

A modern real-time chat application built using the **MERN stack** with **Socket.IO** for instant messaging. The app allows users to register, log in, and engage in live conversations with other users. Designed with responsiveness and smooth UX in mind, the frontend is powered by **React + Tailwind CSS + Zustand**, and the backend is handled with **Node.js + Express + MongoDB**.

---

## 📸 Screenshots
![Screenshot 2025-06-25 235051](https://github.com/user-attachments/assets/3f4fb6d7-a0b3-497c-b169-c576af557e7b)

![Screenshot 2025-06-25 235038](https://github.com/user-attachments/assets/6911c910-b6e8-4c9e-9e07-f2800f2a5cf7)

![Screenshot 2025-06-25 235028](https://github.com/user-attachments/assets/5dfc2b93-6635-47a7-9efc-c4f75f79049e)

![Screenshot 2025-06-25 235014](https://github.com/user-attachments/assets/896a7148-90a2-427e-b858-edeca86ab038)



---

## 🌟 Features

- 🔐 User authentication (Signup/Login)
- 💬 Real-time messaging using Socket.IO
- ✅ Online user indicator
- 🧠 Global state management using Zustand
- 🖥️ Responsive UI built with Tailwind CSS
- 🧾 Modular code structure (MVC pattern)
- 📦 REST API for chat data handling

---

## 🚀 Technologies Used

### Frontend:

- React.js
- Vite
- Tailwind CSS
- Zustand
- Axios
- Heroicons

### Backend:

- Node.js
- Express.js
- MongoDB + Mongoose
- Socket.IO
- bcryptjs
- jsonwebtoken

---

## 📁 Folder Structure

````

chat-app/
├── frontend/           # React app (client-side)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/            # Node.js + Express + MongoDB (server-side)
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── socket/
│   └── server.js
│
├── .env                # Environment variables (not shared)
├── .gitignore
└── README.md
└── package.json

````

---

## ⚙️ Environment Variables

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
````

Create a `.env` file in the `frontend/` directory (if needed):

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🔧 How to Run Locally

### ✅ Prerequisites

* Node.js & npm installed
* MongoDB running locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### 📥 Clone the repository

```bash
git clone https://github.com/Chirag12216570/Real-Time-Chat-Application.git
cd Real-Time-Chat-Application
```

---

### 🔙 Start Backend

```bash
cd backend
npm install
nodemon server.js
```

> Server will start on `http://localhost:5000`

---

### 🖥️ Start Frontend

```bash
cd frontend
npm install
npm run dev
```

> Frontend will start on `http://localhost:5173`

---

## 🔁 Live Communication Flow

1. User logs in and a socket connection is established
2. Each user is assigned a `socket.id`
3. Messages are sent using `socket.emit()` and received using `socket.on()`
4. MongoDB stores conversation history and user data

---

## 🧠 Zustand for State Management

Zustand is used for managing:

* Auth state (login/logout)
* Online users
* Selected chat
* Message updates

---

## 📌 Future Enhancements

* Typing indicators
* Group chats
* Profile picture support
* Message read receipts
* Image/file sharing

---

## 🧑‍💻 Author

Made with ❤️ by [Chirag Anand](https://github.com/Chirag12216570)

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.
