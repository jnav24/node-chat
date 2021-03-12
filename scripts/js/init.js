const mongoose = require('mongoose');
const Messages = require('../../models/messages');
const Users = require('../../models/users');

const bcrypt = require('bcrypt');
const saltRounds = 10;

mongoose.connect('mongodb://node:chat@localhost:27017/nodeChat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const insertData = async () => {
  const messages = await Messages.find().exec();
  const users = await Users.find().exec();

  if (!messages.length) {
    Messages.insertMany([
      {
        _id: mongoose.Types.ObjectId("5d9df78eb01527c99b96eaa1"),
        from: 'system',
        text: 'Welcome!',
      },
    ]);
  }

  if (!users.length) {
    Users.insertMany([
      {
        _id: mongoose.Types.ObjectId("5d9df4b0b01527c99b96ea9f"),
        email: "alice@facegle.io",
        password: bcrypt.hashSync("alice123", saltRounds),
      },
      {
        _id: mongoose.Types.ObjectId("5d9df4b0b01527c99b96eaa0"),
        email: "bob@goobook.co",
        password: bcrypt.hashSync("bob123", saltRounds),
      }
    ]);
  }

  // mongoose.disconnect();
};

exports.insertData = insertData;
