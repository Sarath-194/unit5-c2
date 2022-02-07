import './gamedata.css'
import { useState } from 'react'
export function Data() {
  const [formData, setFormData] = useState({
    gameName:"",
    gameAuthor:"",
    gamePrice:"",
    gammeTags:"",
    forKids:"",
    gameDisc:"",
    gameRating:"",
    id:"",
  });
  
  const handleChange = (data) => {
    const {name} = data.target;
    setFormData({
      ...formData,
      [name]:data.target.value
    })

    const output = {
      name:1
    }

  } 
  return (
    <form id="data" onSubmit={(e) => {
      e.preventDefault();;
      console.log(formData)
    }}>
      <h1> Game Data  </h1>
      <input type="text" id="name" placeholder="Game Name" />

       <input onChange={handleChange}  type="text" placeholder="Author" name="author" />
       <input onChange={handleChange} type="text" placeholder="Game Price" name="price" />
       <input onChange={handleChange} type="text" placeholder="Game Tags" name="tags" />    
       <input onChange={handleChange} type="text" placeholder="For Child"  name="child" />
       <input onChange={handleChange} type="text" placeholder="Game Description" name="desc" />
       <input onChange={handleChange} type="text" placeholder="rating" name="rating" />
        <input onChange={handleChange} type="text" name="_id" placeholder="Id" />

        <input name="submit">Submit</input>

    </form>
  )
}