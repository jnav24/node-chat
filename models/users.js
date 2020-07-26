const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: String,
  password: String,
});

UsersSchema.methods.insert = function () {
  return mongoose.model('Users').create({
    _id: new mongoose.Types.ObjectId(),
    email: this.email,
    password: this.password,
  });
};

module.exports = mongoose.model('Users', UsersSchema);
