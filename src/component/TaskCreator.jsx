import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {


    const [newTaskName, setNewTaskName] = useState('')

    const handelSubmit = (e) => {
        e.preventDefault();

        setNewTaskName("")
        createNewTask(newTaskName)
    };
    return (
        <div>
            <form onSubmit={handelSubmit} className='my-2 row'>
                <div className="col-8">
                    <input type="text"
                        placeholder="Ingrese Tarea"
                        value={newTaskName}
                        onChange={(e) => setNewTaskName(e.target.value)}
                        className='form-control'
                    />
                </div>
                <div className="col-4">
                    <button className="btn btn-danger">New Task</button>
                </div>


            </form>
        </div>
    )
}


