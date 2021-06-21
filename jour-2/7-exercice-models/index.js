const mongoose = require("mongoose");

async function init() {
  try {
    const connect = mongoose.connect("mongodb://localhost:27017");
  } catch (e) {
    console.log(e);
  }
}
