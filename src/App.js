import React,{ useState } from 'react';
import ToDoLists from './ToDoLists';
import './App.css';

const App=()=>{
  const [inputList,setInputList]=useState();
  const[items,setItems]=useState([]);


  const itemEvent=(event)=>{
    // console.log('added')
    setInputList(event.target.value);
  }

  const listtOfItems=()=>{
       setItems((oldItems)=>{
        console.log(oldItems);
        return [...oldItems,inputList];
       });
       setInputList('');
  }
  const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
             return index !==id;
      });
    });
};


return(
  
  <>
  <div className='main_div'>
     <div className='center_div'>
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input value={inputList}  onChange={itemEvent} type='text' 
        placeholder='Add Items'/>
        <button onClick={listtOfItems}> <i class="fa-solid fa-plus"></i> </button>
        <ol>
          {/* <li>{inputList}</li> */}
          {items.map((itemval,index)=>{
          return  <ToDoLists key={index} 
          id={index}
           text={itemval}
          onSelect={deleteItems}
          
           />
          })}
        </ol>
     </div>
  </div>
  </>
)

}

export default App;