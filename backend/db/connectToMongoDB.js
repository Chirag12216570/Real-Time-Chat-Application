const mongoose = require('mongoose');

module.exports.connectToMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log("Error connecting to MongoDB", error.message);
    }
}