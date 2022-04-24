const mongoose = require("mongoose");

const userSchemaSells = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

const usersSells = new mongoose.model("usersells",userSchemaSells);


module.exports = usersSells;