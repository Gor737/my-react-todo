function ListItem({todo,onCheckboxChange, onDelBtnClick}){

    return (
    <div>
        <label>
            <input type = "checkbox" checked = {todo.checked} onChange = {(e) =>{
                 onCheckboxChange({
                    ...todo,
                    checked: e.target.checked
                 })
            }
            }></input>
            {todo.todoText}
            <button onClick={onDelBtnClick}>Del</button>
        </label>
    </div>    
    )
}

export default ListItem