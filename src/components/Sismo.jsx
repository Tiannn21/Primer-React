import { useEffect, useState } from 'react';

const Sismo = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch('https://api.boostr.cl/earthquake.json')
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false))
  }, []);

  const handleShowData = () => {
    setShowData(true);
  };

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Ha ocurrido un error: {error.message}</p>;
  }

  return (
    <>
      {!showData && (
        <button onClick={handleShowData}>Mostrar sismo más reciente</button>
      )}
      
      {showData && data && (
        <div>
          <h2>Terremoto Mas Reciente: {data.place}</h2>
          <p>Fecha: {data.date}</p>
          <p>Hora: {data.hour}</p>
          <p>Magnitud: {data.magnitude}</p>
          <p>Profundidad: {data.depth} km</p>
        </div>
      )}
    </>
  );
};

export default Sismo;
