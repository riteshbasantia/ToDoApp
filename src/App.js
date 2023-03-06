import React from "react";
import { useState } from "react";
import "./App.css";
import List from "./List"

const App = () =>{

  const [items, setItems]= useState([]);
  const [inputList, setInputList]= useState("");
  const itemEvents =(event)=> {
    setInputList(event.target.value);
  };
  const listOfItem = () =>{
    setItems((oldItems)=>{
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrEl, index)=>{
      return index !== id;
      })
    })
};
return(
<>
<div className="main-div">
  <div className="center-div">
    <br />
    <h1>ToDO List</h1>
    <br />
    <input type="text" placeholder="Add an Item" value={inputList} onChange={itemEvents}/>
    <button onClick={listOfItem}>+</button>
    <ol>
      {/*  */}
     { items.map((itemval, index)=>{
       return <List
      key={index}
      id={index}
       text={itemval}
       onSelect = {deleteItem}
       />;
      })}
    </ol>
  </div>
</div>
</>
)
};
export default App;