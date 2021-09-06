import "./Info.css"
import { useState } from "react";

const MyInfo = props => {
    const name = useState(props.name);
    const money = useState(props.money);

    return ( 
        <div className="my info">
            <h4>{name}</h4> {money}$
            {props.hand.length > 0 &&
                <div>
                    <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[0].image} alt="card" />
                    <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[1].image} alt="card" />
                </div>
            }           
       
        </div>
     );
}
 
export default MyInfo;