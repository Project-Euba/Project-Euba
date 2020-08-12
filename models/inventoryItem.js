const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventoryItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  date_added: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const InventoryItem = mongoose.model("InventoryItem", inventoryItemSchema);
module.exports = InventoryItem;