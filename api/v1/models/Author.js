const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: string,
      trim: true,
      lowercase: true,
    },
    dob: {
      day: {
        type: number,
      },
      month: {
        type: string, // EG. NOV
        length: 3,
      },
      year: {
        type: number,
      },
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Author = mongoose.model("Author", AuthorSchema);

export { Author };
