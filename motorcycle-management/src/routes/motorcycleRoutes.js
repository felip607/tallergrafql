const express = require('express');
const MotorcycleService = require('../services/motorcycleService');
const MotorcycleController = require('../controllers/motorcycleController');

const router = express.Router();
const motorcycleService = new MotorcycleService();
const motorcycleController = new MotorcycleController(motorcycleService);

function setMotorcycleRoutes(app) {
    router.post('/motorcycles', motorcycleController.createMotorcycle.bind(motorcycleController));
    router.get('/motorcycles/:id', motorcycleController.getMotorcycle.bind(motorcycleController));
    router.put('/motorcycles/:id', motorcycleController.updateMotorcycle.bind(motorcycleController));
    router.delete('/motorcycles/:id', motorcycleController.deleteMotorcycle.bind(motorcycleController));
    router.get('/motorcycles', motorcycleController.getAllMotorcycles.bind(motorcycleController));

    app.use('/api', router);
}

module.exports = setMotorcycleRoutes;