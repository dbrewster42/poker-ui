import "./Info.css"
import { useState } from "react";

const MyInfo = props => {
    const name = useState(props.name);
    const money = useState(props.money);
    // const images = props.images;
    // const hand = props.hand;
    console.log(props)
    return ( 
        <div className="my info">
            <h4>{name}</h4>
            {money}
            {props.username == name ?
                <div>Back Of Cards </div>
            :
                <div>Cards <img className="cards" src={props.images[props.hand]} /></div>

            }
        </div>
     );
}
 
export default MyInfo;