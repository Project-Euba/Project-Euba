const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creates team schema, will be modified later
//Left out the division/rank stuff cuz we have not finished planning that. Will add later
const teamSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  date_added: {
    type: Date,
    required: true,
    default: Date.now
  }
});

//converts schema to Team model and exports it
const Team = mongoose.model("Team", teamSchema);
module.exports = Team;