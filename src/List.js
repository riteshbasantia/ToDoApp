import React from "react";
const List = (props) => {

    
    return (
        <>
        <div className="to_style">
            <i className="fa fa-times" aria-hidden="true" 
            onClick={()=>{
                props.onSelect(props.id)}}/>
    <li>{props.text}</li>
    </div>
    </>
    );
}

export default List;