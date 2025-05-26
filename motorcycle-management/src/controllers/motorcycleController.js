class MotorcycleController {
    constructor(motorcycleService) {
        this.motorcycleService = motorcycleService;
    }

    async createMotorcycle(req, res) {
        try {
            const { make, model, year, price, color, status, mileage } = req.body;
            if (
                !make || !model || !year || !price || !color || !status || mileage === undefined ||
                typeof make !== 'string' ||
                typeof model !== 'string' ||
                typeof year !== 'number' ||
                typeof price !== 'number' ||
                typeof color !== 'string' ||
                typeof status !== 'string' ||
                typeof mileage !== 'number'
            ) {
                return res.status(400).json({ message: 'Datos inválidos o campos obligatorios faltantes.' });
            }
            const newMotorcycle = await this.motorcycleService.addMotorcycle(make, model, year, price, color, status, mileage);
            res.status(201).json(newMotorcycle);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getMotorcycle(req, res) {
        try {
            const motorcycleId = req.params.id;
            const motorcycle = await this.motorcycleService.findMotorcycle(motorcycleId);
            if (motorcycle) {
                res.status(200).json(motorcycle);
            } else {
                res.status(404).json({ message: 'Motorcycle not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllMotorcycles(req, res) {
        try {
            const motorcycles = await this.motorcycleService.getAllMotorcycles();
            res.status(200).json(motorcycles);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateMotorcycle(req, res) {
        try {
            const motorcycleId = req.params.id;
            const updatedData = req.body;
            // Validación opcional: solo permite actualizar campos válidos
            const allowedFields = ['make', 'model', 'year', 'price', 'color', 'status', 'mileage'];
            const isValidUpdate = Object.keys(updatedData).every(field => allowedFields.includes(field));
            if (!isValidUpdate) {
                return res.status(400).json({ message: 'Campos de actualización no válidos.' });
            }
            const updatedMotorcycle = await this.motorcycleService.modifyMotorcycle(motorcycleId, updatedData);
            if (updatedMotorcycle) {
                res.status(200).json(updatedMotorcycle);
            } else {
                res.status(404).json({ message: 'Motorcycle not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteMotorcycle(req, res) {
        try {
            const motorcycleId = req.params.id;
            const result = await this.motorcycleService.removeMotorcycle(motorcycleId);
            if (result) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Motorcycle not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = MotorcycleController;