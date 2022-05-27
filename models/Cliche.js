const mongoose = require("mongoose");

const ClicheSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("Cliche", ClicheSchema);
