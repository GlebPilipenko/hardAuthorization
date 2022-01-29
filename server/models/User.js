import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {type: String, unique: true, required: true},
  password: {type: String, unique: false, required: true},
  isActivated: {type: Boolean, default: false},
  activationLink: {type: String},
});

export default mongoose.model('UserSchema', UserSchema);
