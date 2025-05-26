import React, { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';
import MotorcycleForm from './components/MotorcycleForm';
import MotorcycleList from './components/MotorcycleList';
import './App.css';

const endpoint = 'http://localhost:3000/graphql';

const QUERY = gql`
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
`;

const ADD_MUTATION = gql`
  mutation AddMotorcycle($make: String!, $model: String!, $year: Int!, $price: Float!, $color: String!, $status: String!, $mileage: Int!) {
    addMotorcycle(make: $make, model: $model, year: $year, price: $price, color: $color, status: $status, mileage: $mileage) {
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
`;

const UPDATE_MUTATION = gql`
  mutation UpdateMotorcycle($id: String!, $make: String, $model: String, $year: Int, $price: Float, $color: String, $status: String, $mileage: Int) {
    updateMotorcycle(id: $id, make: $make, model: $model, year: $year, price: $price, color: $color, status: $status, mileage: $mileage) {
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
`;

const DELETE_MUTATION = gql`
  mutation DeleteMotorcycle($id: String!) {
    deleteMotorcycle(id: $id) {
      id
    }
  }
`;

function App() {
  const [motorcycles, setMotorcycles] = useState([]);
  const [editingMotorcycle, setEditingMotorcycle] = useState(null);

  const fetchMotorcycles = () => {
    request(endpoint, QUERY).then((data) => setMotorcycles(data.motorcycles));
  };

  useEffect(() => {
    fetchMotorcycles();
  }, []);

  const handleAdd = async (moto) => {
    await request(endpoint, ADD_MUTATION, moto);
    fetchMotorcycles();
  };

  const handleEdit = (moto) => {
    setEditingMotorcycle(moto);
  };

  const handleUpdate = async (moto) => {
    await request(endpoint, UPDATE_MUTATION, { id: moto.id, ...moto });
    setEditingMotorcycle(null);
    fetchMotorcycles();
  };

  const handleDelete = async (id) => {
    await request(endpoint, DELETE_MUTATION, { id });
    fetchMotorcycles();
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 fw-bold" style={{marginTop: 30}}>Gestión de Motos</h1>
      <MotorcycleForm
        onSubmit={editingMotorcycle ? handleUpdate : handleAdd}
        editingMotorcycle={editingMotorcycle}
        onCancel={() => setEditingMotorcycle(null)}
      />
      <h2 className="mt-5 mb-3">Listado de Motos</h2>
      <MotorcycleList
        motorcycles={motorcycles}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
