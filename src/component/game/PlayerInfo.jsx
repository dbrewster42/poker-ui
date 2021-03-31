import "./Info.css"
import { useState } from "react";

const PlayerInfo = props => {
    const name = useState(props.name);
    const money = useState(props.money);
    console.log(props)

    return ( 
        <div className="info">
            <h4>{name}</h4>
            {money}
           
                <div>Back Of Cards </div>
                <img className="cards" src={props.image} />
                <img className="cards" src={props.image} />

            

            
        </div>
     );
}
 
export default PlayerInfo;