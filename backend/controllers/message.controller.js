const Conversation = require('../models/conversation.model');
const Message = require('../models/message.model'); // adjust the path
const { getReceiverSocketId, io } = require('../socket/socket');


module.exports.sendMessage = async (req,res)=>{
    try{
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        // await conversation.save(); 1
        // await newMessage.save(); 2

        // this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        // SOCKET IO
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(getReceiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }


        res.status(201).json(newMessage);
    }catch(error){
        console.log("Error in sendMessage controller: ",error.message)
        res.status(500).json({error:"Internal server error"});
    }
}

module.exports.getMessages = async (req, res) => {
    try{
        const {id:userToChatId} = req.params; 
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]},
        }).populate("messages");

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);
    }catch(error){
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}