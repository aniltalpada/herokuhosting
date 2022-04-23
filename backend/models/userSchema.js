const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: Number,
        required: true
    },
    producttype: {
        type: String,
        required: true,
        unique: true
    },
    producttitle: {
        type: String,
        required: true
    },
    totalstock: {
        type: Number,
        required: true
    },
    costperitem: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

const users = new mongoose.model("users",userSchema);


module.exports = users;