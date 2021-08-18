import React from 'react';
import { nanoid } from 'nanoid';
import  'materialize-css/dist/css/materialize.min.css';
function App() {

const [tarea, setTarea] = React.useState('')
const [tareas,setTareas] = React.useState([])
const [modoEdicion,setModoEdicion] = React.useState(false)
const [id, setId] = React.useState('')

const agregarTarea = e => {
  e.preventDefault()
    {/* arranca aqui la funcion para imputo empty */}

  if (!tarea.trim()){
    console.log('elemento vacio')
    return
  }  {/* controlar el imput vacio*/}

  console.log(tarea)
  setTareas([
    ...tareas,
    {id: nanoid(), nombreTarea:tarea }

  ]);
     
     
  // {/* limpiar imput */}
  // setTarea('')
  // {/* limpiar imput */}

}
//  filter es una funcion de JavaScript y filtra todo lo que sea distinto al id
const eliminarTareas = id => {
  // console.log(id)
  const arrayFiltrado = tareas.filter(item => item.id !== id);
  setTareas(arrayFiltrado)
}
 const editar = item =>{
   console.log(item)
   setModoEdicion(true)
   setTarea(item.nombreTarea)
   setId (item.id)
 }
 const editarTarea = e =>{
  e.preventDefault()
  if(!tarea.trim()){
   console.log('elemento vacio')
   return 
  }
  const arrayEditado = tareas.map(
    item => item.id === id ? {id:id, nombreTarea:tarea} : item
    )
    setTareas (arrayEditado)
    setModoEdicion(false)
   setTarea('')
   setId ('')
  //  setModoEdicion(true)
  //  setTarea(item.nombreTarea)
 }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Crud</h1> 
      <hr/>
  <div className="row">
     <div className="col-8">
      <h4 className="text-center">Lista de Tareas</h4>
      <ul className="list-group">
         { 
           tareas.map(item => (      
          <li className="list-group-item" key={item.id}>
          <span className="lead">{  item.nombreTarea}</span>
          
          <button 
            className=" waves-effect waves-light btn btn-sm red darken-2  float-right mx-2"
            onClick={() => eliminarTareas(item.id) }
            >
            Eliminar
            </button>

            <button 
            className=" waves-effect waves-light btn   teal lighten-3 btn-sm  float-right"
            onClick={() => editar(item) }
            >
            Editar
          </button>
        </li>
        ))
        }

      </ul>
    </div>

    <div className="col-4">
      <h4 className="text-center">
        {
           modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'
        }
        
      </h4>
      <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
        <input 
          type="text" 
          className="form-control mb-2"
          placeholder="Ingrese Tarea"
          onChange={ e => setTarea(e.target.value) }
          value={ tarea }     
        
        />
        {
         modoEdicion ? (
          <button className="waves-effect waves-light btn  orange accent-2 btn-block" type="submit">Editar</button>

            ):( <button className="waves-effect waves-light btn teal darken-4 btn-block" type="submit">Agregar</button>
          )
        }
          </form>
         </div>
      </div>
    </div> 
   
  );
}

export default App;
