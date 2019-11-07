const mongoose = require ("mongoose");

const Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    createAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
})
DataSchema.pre('save', function(next) {
    this.updated = Date.now();
    return next();
});

mongoose.model('User', Schema);