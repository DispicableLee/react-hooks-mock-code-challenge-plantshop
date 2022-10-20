import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, searchPlants, postNewPlant}) {
  return (
    <main>
      <NewPlantForm postNewPlant={postNewPlant}/>
      <Search searchPlants={searchPlants}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
