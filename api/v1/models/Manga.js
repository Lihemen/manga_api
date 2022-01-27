const mongoose = require("mongoose");
const { Author } = require("./Author");

const MangaSchema = new mongoose.Schema({
  name: "",
  author: {
    ref: Author,
  },
});
