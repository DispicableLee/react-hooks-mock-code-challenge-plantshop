import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const eachPlantCard = plants.map((p)=>{
    return (
      <PlantCard
        key={p.id}
        name={p.name}
        image={p.image}
        price={p.price}
      />
    )
  })
  return (
    <ul className="cards">
      {eachPlantCard}
    </ul>
  );
}

export default PlantList;
