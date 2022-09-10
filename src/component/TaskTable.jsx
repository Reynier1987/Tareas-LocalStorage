import { TaskRow } from "./TaskRow";


export const TaskTable = ({ taskItems, toggleTask, showCompleted=false}) => {

    const taskTableRow = (donevalue) => {
        return (
            taskItems
            .filter(task=> task.done === donevalue)
             .map(task => (
                <TaskRow task={task} key={task.name} 
                 toggleTask={toggleTask} />
            )))
    }

    return (
        <table className="table table-dark table-striped table-bordered border-secundary">
            <thead>
                <tr className='table-primary'>
                    <th>Lista de Tareas</th>
                </tr>
            </thead>
            <tbody>
                {
                taskTableRow(showCompleted)
                }
            </tbody>
        </table>
    )
}