const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema for user, will be modified later
//left out division, rank, and preferences until they are more fleshed out
const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  team: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Team"
  },
  date_added: {
    type: Date,
    required: true,
    default: Date.now
  },
  admin: {
    type: Boolean,
    required: true
  }
});

//exports User model
const User = mongoose.model("User", userSchema);
module.exports = User;