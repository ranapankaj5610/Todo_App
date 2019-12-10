import React from 'react'
import './Todos.css'
const Todos=({todos,deleteTodo})=>{
    const todoList=todos.length ?(
        todos.map(todo=>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) :(
        <h5 style={{color:"white"}}className="center">You Have no Todos left</h5>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}
export default Todos