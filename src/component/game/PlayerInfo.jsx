import "./Info.css"
import { useState } from "react";

const PlayerInfo = props => {
    const name = useState(props.name);
    const money = useState(props.money);
    console.log(props)

    return ( 
        <div className="info">
           <h4>{name}</h4> {money}$
            <div>          
               <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/red_back.png'} alt="card" />
               <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/red_back.png'} alt="card" />
            </div>                    
        </div>
     );
}
 
export default PlayerInfo;