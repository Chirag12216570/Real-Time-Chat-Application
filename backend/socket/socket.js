const {Server} = require('socket.io');
const http = require('http');
const express = require('express');


const app = express();


const server = http.createServer(app);




const io = new Server(server,{
    cors:{
        origin:[
            "http://localhost:3000",
            "https://real-time-chat-application-lime.vercel.app",
            "https://real-time-chat-application-pr3pupbez-chirags-projects-44a827c7.vercel.app",
            "https://real-time-chat-application-git-main-chirags-projects-44a827c7.vercel.app",
            "https://real-time-chat-application-lqa0q6a6g-chirags-projects-44a827c7.vercel.app"
        ],
        methods:["GET","POST"],
        credentials: true
    }
})

const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {};

io.on('connection', (socket) => {
    console.log("a user connected",socket.id);
    const userId = socket.handshake.query.userId;
    if(userId!= "undefined") userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

   socket.on('disconnect', () => {
       console.log("a user disconnected", socket.id);
       delete userSocketMap[userId];
       io.emit("getOnlineUsers", Object.keys(userSocketMap));
   });
});



module.exports = {
	app,
	server,
	io,
    getReceiverSocketId
};
