import { useState, useEffect } from "react";
import { TaskCreator } from "./component/TaskCreator";
import { TaskTable } from "./component/TaskTable"
import { VisibilityControl } from "./component/VisibilityControl"
import { Container } from "./component/Container"

function App() {

  const [taskItems, setTaskItems] = useState([])
  const [showCompleted, setshowCompleted] = useState(false)

  //como agragar una tarea
  function createNewTask(newTaskName) {
    if (!taskItems.find(task => task.name === newTaskName)) {
      setTaskItems([...taskItems, { name: newTaskName, done: false }])
    } else { alert("....esa tarea ya existe") }
  }
  //carga cuando carga la aplicacion por eso el arreglo vacio []
  // se le pasa en una varible  data lo que esta en el localStorage
  //se usa el json.parse pasandole data para convertirlo en un [] ya
  // que el localStorage devuelve un string
  // el resultado de json.parse se le pasa a la funcion que guarda el
  // el arreglo de tareas [] que esta vacio, pero puede tener valores
  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data))
      console.log(JSON.parse(data))
    }
  }, [])

  /* cada ves que la variable taskItems cambie se va a user 
  este useEffect
  El método JSON. stringify() convierte un objeto o valor de 
  JavaScript en una cadena de texto JSON, opcionalmente 
  reemplaza valores si se indica una función de reemplazo, 
  o si se especifican las propiedades mediante un array de 
  reemplazo*/
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  const toggleTask = (task) => {
    setTaskItems(taskItems.map(t => (t.name == task.name) ?
      { ...t, done: !t.done } : t)
    )
  }

  const clearTask = () => {
    setTaskItems(taskItems.filter(task => !task.done))
    setshowCompleted(false)
  }


  return (
    <main className="bg-dark vh-100 text-white">
      <Container>

        <TaskCreator createNewTask={createNewTask} />
        <TaskTable taskItems={taskItems} toggleTask={toggleTask} />

        <VisibilityControl
          ischecked={showCompleted}
          setshowCompleted={(checked) => setshowCompleted(checked)}
          clearTask={clearTask} />
        {
          showCompleted === true && (
            <TaskTable taskItems={taskItems} toggleTask={toggleTask}
              showCompleted={showCompleted} />
          )
        }
      </Container>

    </main>
  )
}

export default App
