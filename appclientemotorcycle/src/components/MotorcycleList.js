import React from 'react';

export default function MotorcycleList({ motorcycles, onEdit, onDelete }) {
  return (
    <div className="table-responsive d-flex justify-content-center">
      <table className="table table-hover table-bordered align-middle w-auto shadow-sm bg-white">
        <thead className="table-dark">
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Año</th>
            <th>Precio</th>
            <th>Color</th>
            <th>Estado</th>
            <th>Kilometraje</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {motorcycles.length === 0 ? (
            <tr>
              <td colSpan={8} className="text-center text-muted">No hay motos registradas.</td>
            </tr>
          ) : motorcycles.map((moto) => (
            <tr key={moto.id}>
              <td>{moto.make}</td>
              <td>{moto.model}</td>
              <td>{moto.year}</td>
              <td>${moto.price}</td>
              <td>{moto.color}</td>
              <td>{moto.status}</td>
              <td>{moto.mileage} km</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(moto)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(moto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}