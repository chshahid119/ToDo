import React, { useState } from 'react';
import './App.css';
const ToDoLists=(props)=>{
    const [line,setLine]=useState(false);
    const cutIt=()=>{
        return(
          setLine(true)
        )
      }
    return (<>
    <div className='todo_style'>
    <li onClick={cutIt} style={{textDecoration: line ?"line-through":"none"}}>{props.text}</li>
    <i class="fa-solid fa-trash" onClick={()=>{
        props.onSelect(props.id);
    }}></i>
    </div>
    </>)
}

export default ToDoLists;