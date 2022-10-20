import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
//====================== initial plants fetch ===============================
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((json) => setPlants(json));
  }, []);

//================================ search ==============================
  function searchPlants(plant) {
    console.log(plant);
    const afterSearch = plants.filter((p)=> p.name === plant)
    setPlants(afterSearch)
  }
//============================== posting a plant =============================
  function postNewPlant(newObj){
    fetch("http://localhost:6001/plants", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(newObj)
    })
    .then(res=>res.json())
  }






  return (
    <div className="app">
      <Header />
      <PlantPage 
      postNewPlant={postNewPlant}
      searchPlants={searchPlants}
      plants={plants} 
      />
    </div>
  );
}

export default App;
