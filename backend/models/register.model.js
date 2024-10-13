const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    profile: { type: String },
    fullname: { type: String },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    dob: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true }
}, { timestamps: true });

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;