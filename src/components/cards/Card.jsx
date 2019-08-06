import React from "react";
import "./Card.css"

function Card(props){
    var ele = (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
            {/* <h1>{props.monster.id}</h1> */}
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>   
    )
    return ele;
}

export default Card;