function ListFooter({todos, onClearBtnClick,onShowBtnClick}){
    let checkedSize = todos.filter((todo => todo.checked)).length
    
    return (
        <div>
            <span>{checkedSize}/{todos.length} Complated</span>
            <button onClick={onClearBtnClick}>Show all Complated</button>
            <button onClick={onShowBtnClick}>Show all none Complated</button>
        </div>
    )
}

export default ListFooter