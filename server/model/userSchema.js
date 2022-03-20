import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  password: { type: String, required: true },
  phone: { type: String, required: true, max: 10 },
});

const user = mongoose.model("user", userSchema);
export default user;
