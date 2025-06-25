---

````markdown
# 💬 Real-Time Chat Application

A modern real-time chat application built using the **MERN stack** with **Socket.IO** for instant messaging. The app allows users to register, log in, and engage in live conversations with other users. Designed with responsiveness and smooth UX in mind, the frontend is powered by **React + Tailwind CSS + Zustand**, and the backend is handled with **Node.js + Express + MongoDB**.

---

## 📸 Screenshots

> _You can add screenshots of your app here (chat interface, login page, etc.)_
> 
> ```
> ![Login Page](./screenshots/login.png)
> ![Chat UI](./screenshots/chat-ui.png)
> ```

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
- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Axios](https://axios-http.com/)
- [Heroicons](https://heroicons.com/)

### Backend:
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [Socket.IO](https://socket.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

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

````

---

## ⚙️ Environment Variables

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
````

Update frontend if needed with your own Vite environment variables (`VITE_API_URL` etc.) in `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🔧 How to Run Locally

### Prerequisites

* Node.js & npm installed
* MongoDB running locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Clone the repository

```bash
git clone https://github.com/Chirag12216570/Real-Time-Chat-Application.git
cd Real-Time-Chat-Application
```

---

### 🔙 Start Backend

```bash
cd backend
npm install
npm run dev
```

Server will start on `http://localhost:5000`

---

### 🖥️ Start Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will start on `http://localhost:5173`

---

## 🔁 Live Communication Flow

1. User logs in and socket connection is established
2. Each user is assigned a `socket.id`
3. Messages are sent using `Socket.emit` and received using `Socket.on`
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

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

---

Let me know if you want this saved as a `.md` file or updated with actual screenshot links once you upload them. I can also help auto-generate GIFs or visuals for the UI.
```
