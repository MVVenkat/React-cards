import React from "react"
import "./CardList.css"
import Card from "../cards/Card.jsx"


const CardList = (props) => {
    var name_array = props.monsters.map(mons => <Card key={mons.id} monster={mons}/>)
    console.log(props)
    var ele = (
        <div className="card-list">{name_array}</div>
    )

    return ele;
}
export default CardList;