import React, { useState } from 'react';

const Buscar = ({ data, setFiltroData }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
       setSearch(event.target.value); // esta linea actualiza el estado de search ingresado por el imput
       const resultData = event.target.value.toLowerCase(); // con vertimos los carateres que se ingresan en minuscukas
       /// aca se realiza el filtrado de los datos del arreglo
       const itemsFiltrados= data.filter((item) => // creamos un nuevo array llamado itemsFiltrado
          Object.keys(item).some(                        //
          (key) =>                                       // Esto significa que el itemsFiltrado 
            typeof item[key] === 'string' &&             // contendra solo a quellos objetos cuya 
            item[key].toLowerCase().includes(resultData) // propiedad de tipo string incluya eltexto de biusqueda
        )
    );
    setFiltroData(itemsFiltrados); // Se realiza un filtrado de los datos 
    //console.log("Datos filt..:",itemsFiltrados);
  };

  return (
    <div className="buscar-container">
      <input
        type="text"
        placeholder="Buscar estación..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Buscar;
