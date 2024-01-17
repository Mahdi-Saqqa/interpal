const mongoose = require("mongoose");



const messageSchema = new mongoose.Schema({
    content: {
      type: String,
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chat',
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    type: {
      type: String,
      enum: ['text', 'image', 'video'],
      default: 'text',
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  });
  

  const Message = mongoose.model('Message', messageSchema);

  module.exports = Message;