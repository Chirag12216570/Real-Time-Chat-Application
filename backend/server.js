const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/message.routes")
const userRoutes = require("./routes/user.routes");
const { connectToMongoDB } = require("./db/connectToMongoDB");

const {app, server} = require("./socket/socket");


dotenv.config({ path: '../.env' });
const PORT = process.env.PORT || 5000;




app.use(express.json());
app.use(cookieParser());

// app.get("/", (req, res) => {
//     res.send("Hello, World!");
// });

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);



server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
})