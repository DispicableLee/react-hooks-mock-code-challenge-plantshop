import React, {useState} from "react";

function PlantCard( props ) {
  const [stockText, setStockText] = useState("In Stock")
  const [buttC, setButtC] = useState("primary")

  function handleStock(e){
    e.preventDefault()
    if(e.target.value === "In Stock"){
      setStockText("Out of Stock")
      setButtC("")
    }else if(e.target.value === "Out of Stock"){
      setStockText("In Stock")
      setButtC("primary")
    }
  }

    return (
      <li className="card">
        <img src={props.image} alt={props.name} />
        <h4>{props.name}</h4>
        <p>Price: {props.price}</p>
        <button 
        onClick={handleStock}
        key={props.id}
        value={stockText}
        className={buttC}
        >{stockText}</button>
      </li>
    );
  };


export default PlantCard;
