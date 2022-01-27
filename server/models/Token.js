import {Schema} from 'mongoose';

export const TokenSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'UserSchema'},
  refreshToken: {type: String, required: true},
});
