// Import Mongoose
const mongoose = require('mongoose');
// Import Validator
const validator = require('validator');

// Create Employee Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is Invalid !!");
            }
        }
    },
    phoneno: {
        type: Number,
        required:true,
        unique:true,
        min: [10, 'Minimum 10 digits'],
    },
    dept: {
        type: String,
        required: true
    }
})

// Create Employee Model Collection
const User = new mongoose.model("users", userSchema);

module.exports = User;