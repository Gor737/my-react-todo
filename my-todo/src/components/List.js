import ListItem from "./ListItem"

function List({todos,onCheckboxChange, onDelBtnClick}){

    return(
        <div>{ 
            todos.map((todo) => {
              return(
                <ListItem key = {todo.id} todo = {todo} onCheckboxChange = {onCheckboxChange} onDelBtnClick = {() => {
                    onDelBtnClick(todo)
                }}/>
              )
            }) 
        }</div>
    )
}

export default List