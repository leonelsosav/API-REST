const Tarea = require('../models/tarea');

function createTarea(req, res) {
    let tarea = new Tarea({
        id: req.body.id,
        name: req.body.name,
        puntos: req.body.puntos,
        materia: req.body.materia,
        fechaEntrega: req.body.fechaEntrega,
        fechaCreacion: req.body.fechaCreacion
    });
    tarea.save((error, result) => {
        error && (res.status(500).json({ error: true, message: error, code: 0 }));
        !result && (res.status(400).json({ error: true, message: error, code: 20 }));
        return res.status(200).json({ error: false, message: "Sucess", data: result, code: 10 });
    });
}

function updateTarea(req, res) {
    const tarea_id = req.params.id;
    const data = req.body;
    Tarea.findByIdAndUpdate(tarea_id, data, { new: true }, (error, result) => {
        error && (res.status(500).json({ error: true, message: "Server error: " + error, code: 0 }));
        !result && (res.status(400).json({ error: true, message: "Not found: " + error, code: 20 }));
        return res.status(200).json({ error: false, message: "Sucess", data: result, code: 10 });
    });
}

function getAllTareas(req, res) {
    Tarea.find().exec((error, result) => {
        error && (res.status(500).json({ error: true, message: "Server error: " + error, code: 0 }));
        return res.status(200).json({ error: false, message: "Sucess", data: result, code: 10 });
    });
}

function deleteTarea(req, res) {
    const tarea_id = req.params.id;
    Tarea.findOneAndDelete({ id: tarea_id }, (error, result) => {
        error && (res.status(500).json({ error: true, message: "Server error: " + error, code: 0 }));
        !result && (res.status(400).json({ error: true, message: "Not found: " + error, code: 20 }));
        return res.status(200).json({ error: false, message: "Sucess", data: result, code: 10 });
    });
}

module.exports = { createTarea, updateTarea, getAllTareas, deleteTarea };