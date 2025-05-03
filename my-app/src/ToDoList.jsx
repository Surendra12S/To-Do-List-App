import React, { useEffect, useRef, useState } from "react";
import "./ToDoList.css";
import todoIcon from "./assets/todo_icon.png"
import ToDoItems from "./ToDoItems.jsx";



function ToDoList(){

    const [todoList,setTodoList] = useState(localStorage.getItem("todos") ? 
JSON.parse(localStorage.getItem("todos")) : []);

    const inputRef = useRef();
     
   const deleteTodo = (id) =>{
     setTodoList((prvTodos)=>{
      return  prvTodos.filter((todo)=>todo.id !== id)
     })
   }

   const toggle = (id) =>{
    setTodoList((prevTodos)=>{
        return prevTodos.map((todo)=>{
            if(todo.id === id){
                return {...todo, isComplete: !todo.isComplete}
            }
            return todo;
        })
    })
   }

   useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoList),[todoList]);
   },[todoList])


    const add = () =>{
          const inputText = inputRef.current.value.trim();
          
          if(inputText === ""){
            return null;
          }

          const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
          }
          setTodoList((prev)=> [...prev,newTodo] );
          inputRef.current.value  = "";
          

        }

    return(
        <div className="container">
           <div className="contant" >
                   <img className="todoIcon" src={todoIcon} alt="todoIcon" />
                   <h1>To-Do-List</h1>
           </div>
           <div className="inputContainer">
            <input ref={inputRef} className="inputBox" type="text" placeholder="Add your task"/>
            <button onClick={add} className="AddBtn" >Add +</button>
           </div>
           <div>
            
            {todoList.map((item,index)=>{
                return <ToDoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
            })}
           </div>
        </div>
    )

}
export default ToDoList;