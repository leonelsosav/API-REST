const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareas-controller')
router.post('/', tareasController.createTarea);
router.get('/', tareasController.getAllTareas);
router.put('/:id', tareasController.updateTarea);
router.delete('/:id', tareasController.deleteTarea);
module.exports = router;