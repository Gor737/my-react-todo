import './App.css';
import {useState} from 'react'
import uuid from 'react-uuid'
import List from './components/List';
import Header from './components/Header';
import ListFooter from './components/ListFooter';
//import ListItem from './components/ListItem';

function App() {

  const [todos, setTodos] = useState([
    {
      id: uuid(),
      todoText: 'Create a Todo List',
      checked: true
    }
  ]) 

  // const onAddBtnClick = (text) => {
  //    setTodos([
  //     ...todos,
  //     {
  //       id: uuid,
  //       todoText: text,
  //       checked: false
  //     }
  //    ])
  // }

  return (
    <div className="App">
       <h1>My ToDo</h1>
       <Header onAddBtnClick = {(text) => {
        setTodos([
          ...todos,
          {
            id: uuid(),
            todoText: text,
            checked: false
          }
        ])
       }}/>
       <List 
       todos = {todos}
       onCheckboxChange = {(newTodo) => {
        setTodos(
          todos.map((todo) => {
            if(todo.id === newTodo.id){
              return newTodo
            }
            return todo
          })
        )
       }}
       onDelBtnClick = {(todo) => {
        setTodos(todos.filter((el) => el.id !== todo.id))
       }}
       />
       <ListFooter todos = {todos} 
       onClearBtnClick = {() => {
           setTodos(todos.filter((todo) => !todo.checked))
       }}
       onShowBtnClick = {() => {
        setTodos(todos.filter((todo) => todo.checked))
      }}/>
    </div>
  );
}

export default App;