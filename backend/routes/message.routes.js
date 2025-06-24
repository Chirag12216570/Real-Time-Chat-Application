const express = require("express");
const messageController = require("../controllers/message.controller");
const protectRoute = require("../middleware/ProtectRoute");

const router = express.Router();

router.get("/:id", protectRoute, messageController.getMessages);
router.post("/send/:id", protectRoute,messageController.sendMessage);

module.exports = router;