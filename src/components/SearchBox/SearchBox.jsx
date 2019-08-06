import React from "react"
import "./SearchBox.css"

function SearchBox({ placeholder, handleChange}){
    var ele = (
        <input className = "search"
          type="search" 
          placeholder={ placeholder } 
          onChange={ handleChange }
          />
    )

    return ele;
}

export default SearchBox;