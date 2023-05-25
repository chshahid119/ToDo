import React from 'react';
import './App.css';
const ToDoLists=(props)=>{
    return (<>
    <div className='todo_style'>
    <img onClick={()=>{
        props.onSelect(props.id);
    }} alt='no-Img shown' 
    src='https://img.icons8.com/?size=512&id=3062&format=png'/>
    <li>{props.text}</li>
    </div>
    </>)
}

export default ToDoLists;