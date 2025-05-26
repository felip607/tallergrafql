# Motorcycle Management API

API REST y GraphQL para la gestión de compra y venta de motos.

---

## 🚀 Instalación

1. Clona el repositorio.
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Inicia el servidor:
   ```sh
   node src/app.js
   ```

---

## 📦 Endpoints REST

- **Crear moto:**  
  `POST /api/motorcycles`  
  **Body:**  
  ```json
  {
    "make": "Yamaha",
    "model": "MT-07",
    "year": 2022,
    "price": 35000,
    "color": "Negro",
    "status": "nueva",
    "mileage": 0
  }
  ```

- **Obtener todas las motos:**  
  `GET /api/motorcycles`

- **Obtener moto por ID:**  
  `GET /api/motorcycles/:id`

- **Actualizar moto:**  
  `PUT /api/motorcycles/:id`  
  **Body:** (campos a actualizar)

- **Eliminar moto:**  
  `DELETE /api/motorcycles/:id`

---

## 🔗 Endpoint GraphQL

- URL: `http://localhost:3000/graphql`
- Puedes usar [GraphiQL](http://localhost:3000/graphql) para probar consultas y mutaciones.

### Ejemplo de Query

```graphql
query {
  motorcycles {
    id
    make
    model
    year
    price
    color
    status
    mileage
  }
}
```

### Ejemplo de Mutación

```graphql
mutation {
  addMotorcycle(
    make: "Honda",
    model: "CB500",
    year: 2023,
    price: 25000,
    color: "Rojo",
    status: "nueva",
    mileage: 0
  ) {
    id
    make
    model
  }
}
```

---

## 📄 Notas

- Todos los campos son obligatorios al crear una moto.
- El sistema usa UUID como identificador único de cada moto.
- El almacenamiento es en memoria (se borra al reiniciar el servidor).

---

## 🛠️ Estructura del Proyecto

```
src/
  controllers/
  graphql/
  models/
  routes/
  services/
  app.js
```

---

## 👨‍💻 Autor

- Taller GraphQL 2025-I