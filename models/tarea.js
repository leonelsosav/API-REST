const mongoose = require('mongoose');
const tareaSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    puntos: {
        type: Number,
        required: true
    },
    materia: {
        type: String,
        required: true
    },
    fechaEntrega: {
        type: Date,
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: true,
        default: new Date()
    }
});

module.exports = mongoose.model('Tarea', tareaSchema);