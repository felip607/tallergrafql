class Motorcycle {
    /**
     * @param {string} id - Identificador único de la moto
     * @param {string} make - Marca de la moto (ej: Yamaha, Honda)
     * @param {string} model - Modelo de la moto (ej: MT-07, CB500)
     * @param {number} year - Año de fabricación
     * @param {number} price - Precio de la moto
     * @param {string} color - Color de la moto
     * @param {string} status - Estado de la moto (ej: nueva, usada)
     * @param {number} mileage - Kilometraje de la moto
     */
    constructor(id, make, model, year, price, color, status, mileage) {
        if (!id || !make || !model || !year || !price || !color || !status || mileage === undefined) {
            throw new Error('Todos los campos son obligatorios');
        }
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.color = color;
        this.status = status;
        this.mileage = mileage;
    }
}

module.exports = Motorcycle;