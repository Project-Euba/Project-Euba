const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  team: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Team"
  },
  inventory_item: [{
    type: Schema.Types.ObjectId,
    required: true,
    ref: "InventoryItem"
  }]
});

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;