const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  from: String,
  text: String,
});

module.exports = mongoose.model('messages', MessageSchema);
