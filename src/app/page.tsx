'use client';

import { useEffect, useState } from 'react';
import { FiAlertCircle, FiMapPin, FiHome } from 'react-icons/fi';
import { useGeolocation } from '../hooks/useGeolocation';
import { fetchUsers } from '../services/api';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map').then(mod => mod.Map), {
  ssr: false,
});

interface User {
  id: string;
  name: string;
}


export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const location = useGeolocation();

 useEffect(() => {
  fetchUsers()
    .then(data => {
      setUsers(data);
      setError(null);
    })
    .catch(() => setError('Erro ao acessar a API'));
}, []);


  const iconStyle = {
    verticalAlign: 'middle',
    marginRight: 6,
    color: '#6a0dad',
    fontSize: 24,
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Desafio Calpar</h1>

      {error && (
        <div role="alert" className="text-red-600 flex items-center mb-4 gap-2">
          <FiAlertCircle style={iconStyle} />
          {error}
        </div>
      )}

      {!error && users.length > 0 && (
  <section className="mb-6">
    <h2 className="user-title text-xl font-semibold mb-2">Usuários encontrados:</h2>
    <ul className="user-list">
      {users.map(user => (
        <li key={user.id} className="user">
          {user.name}
        </li>
      ))}
    </ul>
  </section>
)}


      {location && (
        <div className="mt-8">
          {location.error ? (
            <p className="text-red-700 flex items-center gap-2">
              <FiAlertCircle style={iconStyle} />
              {location.error}
            </p>
          ) : (
            <>
              <p className="flex items-center gap-2 mb-1">
                <FiMapPin style={iconStyle} />
                Sua localização: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
              </p>
              <p className="flex items-center gap-2 mb-4">
                <FiHome style={iconStyle} />
                Endereço aproximado: {location.address ?? 'Carregando...'}
              </p>

              <Map lat={location.lat} lng={location.lng} />
            </>
          )}
        </div>
      )}
    </main>
  );
}
