const moogoose = require("mongoose");

const productSchema = new moogoose.Schema({
  name: { type: String, required: [true, "product name must be provided"] },
  price: { type: Number, required: [true, "product price must be provided"] },
  featured: { type: Boolean, default: false },
  rating: { type: Number, default: 4.5 },
  createAt: { type: Date, default: Date.now() },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
    // enum: ["ikea", "liddy", "caressa", "marcos"],
  },
});

module.exports = moogoose.model("Product", productSchema);
