import {useState} from 'react'

function Header({onAddBtnClick}){

    const [text, setText] = useState("")

    return(
        <form className = "header" onSubmit={(e) => {
            e.preventDefault()
            onAddBtnClick(text)
            setText("")
        }}> 
            <input type="text" placeholder="Your ToDo" value = {text} onChange={(e) => {
                setText(e.target.value)
            }}/>
            <button>Add</button>
        </form>
    )
}

export default Header