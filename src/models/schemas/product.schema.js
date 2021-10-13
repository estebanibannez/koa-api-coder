const { model } = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
});

module.exports = model("Product", ProductSchema);
