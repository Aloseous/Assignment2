import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    id:{type: Number},
    firstName:{type: String},
    lastName:{type: String},
    email:{type: String},
    phone:{type: String},
})

const UserListData = mongoose.model('userData', userSchema)

export default UserListData;