const mongoose = require("mongoose");
const Cliche = require("./Cliche");

const MovieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  // hasCliches: [
  //   {
  //     clicheID: Cliche.name,
  //   },
  // ],
});

module.exports = mongoose.model("Movie", MovieSchema);
