import React, { useState, useEffect } from 'react';

const initialState = {
  make: '',
  model: '',
  year: '',
  price: '',
  color: '',
  status: '',
  mileage: ''
};

export default function MotorcycleForm({ onSubmit, editingMotorcycle, onCancel }) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (editingMotorcycle) {
      setForm(editingMotorcycle);
    } else {
      setForm(initialState);
    }
  }, [editingMotorcycle]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...form,
      year: Number(form.year),
      price: Number(form.price),
      mileage: Number(form.mileage)
    });
    setForm(initialState);
  };

  return (
    <form className="mx-auto mb-4 p-3 rounded shadow-sm bg-light" style={{maxWidth: 900}} onSubmit={handleSubmit}>
      <h2 className="mb-3">{editingMotorcycle ? 'Editar Moto' : 'Agregar Moto'}</h2>
      <div className="row g-2">
        <div className="col-md-2 col-6">
          <input className="form-control" name="make" placeholder="Marca" value={form.make} onChange={handleChange} required />
        </div>
        <div className="col-md-2 col-6">
          <input className="form-control" name="model" placeholder="Modelo" value={form.model} onChange={handleChange} required />
        </div>
        <div className="col-md-1 col-6">
          <input className="form-control" name="year" type="number" placeholder="Año" value={form.year} onChange={handleChange} required />
        </div>
        <div className="col-md-2 col-6">
          <input className="form-control" name="price" type="number" placeholder="Precio" value={form.price} onChange={handleChange} required />
        </div>
        <div className="col-md-1 col-6">
          <input className="form-control" name="color" placeholder="Color" value={form.color} onChange={handleChange} required />
        </div>
        <div className="col-md-2 col-6">
          <input className="form-control" name="status" placeholder="Estado" value={form.status} onChange={handleChange} required />
        </div>
        <div className="col-md-1 col-6">
          <input className="form-control" name="mileage" type="number" placeholder="Km" value={form.mileage} onChange={handleChange} required />
        </div>
        <div className="col-md-1 col-12 d-grid">
          <button type="submit" className="btn btn-primary">
            {editingMotorcycle ? 'Actualizar' : 'Agregar'}
          </button>
          {editingMotorcycle && (
            <button type="button" className="btn btn-secondary mt-2" onClick={onCancel}>
              Cancelar
            </button>
          )}
        </div>
      </div>
    </form>
  );
}