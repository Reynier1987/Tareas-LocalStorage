export const VisibilityControl = ({ ischecked, setshowCompleted, clearTask }) => {
    const handleDelete = () => {
        if (window.confirm("are you sure it?")) {
            clearTask()
        }
    }

    return (
        <div className="bg-secundary text-white">
            <div className="form-check form-switch">
                <input
                    className="form-check-input col-1"
                    type="checkbox"
                    checked={ischecked}
                    onChange={(e) => setshowCompleted(e.target.checked)} />

                <label className="col-9" >Mostrar Tareas Hechas</label>
                <button className="btn btn-info" onClick={handleDelete}>Clean</button>

            </div>



        </div>
    )
}