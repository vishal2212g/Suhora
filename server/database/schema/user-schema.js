import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  // name: String,
  name: {
    type: String,
    required: [true, "name is required"],
  },

  // username

  username: {
    type: String,
    required: [true, "username is required"],
  },

  //email

  email: {
    type: String,
    unique: [true, "email already exists in database!"],
    lowercase: true,
    trim: true,
    required: [
      true,
      "email field is not provided. Cannot create user without email ",
    ],
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: "{VALUE} is not a valid email!",
    },
  },

  //phone
  phone: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{10}/.test(v);
      },
      message: "{VALUE} is not a valid 10 digit number!",
    },
    unique: [true, "phone number already taken"],
    required: [true, "Phone number is required"],
  },
});

const user = mongoose.model("user", userSchema);
export default user;
