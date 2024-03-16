const { Schema, model } = require("mongoose");
const { use } = require("../routes");

const validateEmail = (email) => {
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
};

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, "Please submit a valid email address."],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJson: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount").get(() => this.friends.length);
userSchema.virtual("thoughtCount").get(() => this.thoughts.length);

const User = model("user", userSchema);

module.exports = User;
