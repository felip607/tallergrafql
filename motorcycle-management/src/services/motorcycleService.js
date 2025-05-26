const { v4: uuidv4 } = require('uuid');

class MotorcycleService {
    constructor() {
        this.motorcycles = [];
    }

    addMotorcycle(make, model, year, price, color, status, mileage) {
        const newMotorcycle = {
            id: uuidv4(),
            make,
            model,
            year,
            price,
            color,
            status,
            mileage
        };
        this.motorcycles.push(newMotorcycle);
        return newMotorcycle;
    }

    findMotorcycle(id) {
        return this.motorcycles.find(motorcycle => motorcycle.id === id);
    }

    modifyMotorcycle(id, updatedData) {
        const motorcycleIndex = this.motorcycles.findIndex(motorcycle => motorcycle.id === id);
        if (motorcycleIndex === -1) {
            return null;
        }
        const updatedMotorcycle = { ...this.motorcycles[motorcycleIndex], ...updatedData };
        this.motorcycles[motorcycleIndex] = updatedMotorcycle;
        return updatedMotorcycle;
    }

    removeMotorcycle(id) {
        const motorcycleIndex = this.motorcycles.findIndex(motorcycle => motorcycle.id === id);
        if (motorcycleIndex === -1) {
            return null;
        }
        return this.motorcycles.splice(motorcycleIndex, 1)[0];
    }

    getAllMotorcycles() {
        return this.motorcycles;
    }
}

module.exports = MotorcycleService;