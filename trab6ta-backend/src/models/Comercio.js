const mongoose = require ("mongoose");

const Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    street_name:{
        type: String,
        required: true
    },
    street_number:{
        type: int,
        required: true
    },
    neighborhood:{
    type: String,
    required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
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

mongoose.model('Comercio', Schema);