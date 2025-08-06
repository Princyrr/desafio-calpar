import { useEffect, useState } from 'react';

interface Location {
  lat: number;
  lng: number;
  address?: string;
  error?: string;
}

export function useGeolocation() {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({ lat: 0, lng: 0, error: 'Geolocalização não suportada no navegador.' });
      return;
    }

    const success = async (position: GeolocationPosition) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
        );
        const data = await res.json();
        const address = data.display_name || 'Endereço não disponível';

        setLocation({ lat, lng, address });
      } catch {
        setLocation({ lat, lng, address: 'Falha ao obter endereço.' });
      }
    };

    const error = (err: GeolocationPositionError) => {
      let errorMsg = '';
      switch (err.code) {
        case err.PERMISSION_DENIED:
          errorMsg = 'Permissão para localização negada.';
          break;
        case err.POSITION_UNAVAILABLE:
          errorMsg = 'Informação de localização indisponível.';
          break;
        case err.TIMEOUT:
          errorMsg = 'Tempo esgotado para obter localização.';
          break;
        default:
          errorMsg = 'Erro desconhecido na localização.';
      }
      setLocation({ lat: 0, lng: 0, error: errorMsg });
    };

    const watcherId = navigator.geolocation.watchPosition(success, error, {
      enableHighAccuracy: true,
      maximumAge: 10000,
      timeout: 10000,
    });

    return () => navigator.geolocation.clearWatch(watcherId);
  }, []);

  return location;
}
