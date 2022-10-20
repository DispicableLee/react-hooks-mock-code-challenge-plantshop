import React, {useState} from "react";

function NewPlantForm({postNewPlant}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)

  function sendUpSubmit(e){
    e.preventDefault()
    const newObj = {
      "name": name,
      "image": image,
      "price": price
    }
    postNewPlant(newObj)
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={sendUpSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          onChange={(e)=>setName(e.target.value)}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          onChange={(e)=>setImage(e.target.value)}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
         onChange={(e)=>setPrice(e.target.value)} 
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
