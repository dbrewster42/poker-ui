import "./Info.css"
import { useState } from "react";

const MyInfo = props => {
    const name = useState(props.name);
    const money = useState(props.money);
    console.log(props)

    return ( 
        <div className="my info">
            <h4>{name}</h4> {money}$
            <div>
                <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[0].image} />
                <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[1].image} />
            </div>
            

            
        </div>
     );
}
 
export default MyInfo;