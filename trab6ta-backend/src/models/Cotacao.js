const mongoose = require ("mongoose");

const Schema = new mongoose.Schema({
    month:{
        type: String,
        required: true
    },
    comercio_id:{
        type: int,
        required: true
    },
    city:{
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

mongoose.model('Cotacao', Schema);