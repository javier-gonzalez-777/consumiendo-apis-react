import { useState,useEffect} from 'react' // importamos el hook que permite añadir estados a los componetes
import MiApi from './components/MiApi' // importacion de componentes
import Buscador from './components/Buscador'
import './App.css'

function App() {
  const [data, setData] = useState();
  const [filtroData, setFiltroData] = useState(data);
   
  const getClima = async ()=> {
      const apiURLClima="https://api.gael.cloud/general/public/clima/";  
      try{
        const res = await fetch(apiURLClima);
        const  datos   = await res.json();
        setFiltroData(datos);// asignamos los datos al hook filtroData
        setData(datos); // asignamos los datos al hook data
      }
        catch(error){
         console.error('Error al obtener los datos del clima:',error.message)
        }
  }
   
    useEffect(()=>{
      getClima()
    },[]);

  //console.log("Data>>>:", Data); // Añadido para verificar los datos
  return (
    <>
    <div className="contenedor">
      <div className="inputBuscar">
        <h4>Busqueda sensitiva</h4> 
        <Buscador data={data} setFiltroData={setFiltroData} />
      </div>
      <MiApi data={filtroData} />
    </div>
    </>
  )
}


export default App
