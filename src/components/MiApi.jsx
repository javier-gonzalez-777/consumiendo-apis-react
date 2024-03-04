import React from 'react';

const dataDummie = [    // crea un Dummin en caso que no traiganada el jason
  {
    Codigo: 'ACAR',
    Estacion: 'Santiago',
    HoraUpdate: '14:00',
    Temp: '25',
    Humedad: '54',
    Estado: 'Despejado',
    Icono: 'despejado.png',
  },
  {
    Codigo: 'ACLE',
    Estacion: 'Linares',
    HoraUpdate: '14:00',
    Temp: '20',
    Humedad: '60',
    Estado: 'Nublado',
    Icono: 'Nublado.png',
  },
];

const MiApi = ({ data = dataDummie }) => {

   // Función para ordenar los datos alfabéticamente por la propiedad "Estacion"
   const ordenarPorEstacion = () => {
      const newData = [...data]; // Crear una copia del array de datos
       newData.sort((a, b) => {
      
        if (a.Estacion > b.Estacion) {
        return -1;
        }
           //   if (a.Estacion > b.Estacion) {
          //     return 1;
          //     }
           //return 0;
    });
    return newData;
  };

  const dataOrdenada = ordenarPorEstacion();

  if (!Array.isArray(data)) {
    return <p>Los datos no son válidos</p>;
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Region</th>
            <th scope="col">Estado</th>
            <th scope="col">HoraUpdate</th>
            <th scope="col">Humedad</th>
            <th scope="col">Clima</th>
          </tr>
        </thead>
        <tbody>
          {dataOrdenada.map((objeto, index) => (
            
            <tr key={index}>
            
              <td>{objeto.Estacion}</td>
              <td>{objeto.Estado}</td>
              <td>{objeto.HoraUpdate}</td>
              <td>{objeto.Humedad}</td>
          
              <td>
                {objeto.Icono && (
                  <img 
                    src={`src/assets/imgs/imagenes2/${objeto.Icono}`}
                    alt={`Icono clima ${objeto.Estado}`}
                    style={{ width: '50px', height: 'auto' }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MiApi;
