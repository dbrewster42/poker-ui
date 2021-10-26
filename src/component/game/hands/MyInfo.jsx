import { useState } from "react/cjs/react.development";
import "./Info.css"

const MyInfo = props => {
    let hand = props.hand;
    let [width, setWidth] = useState("myInfo");
    if (hand.length > 2){
        setWidth("myStudInfo")
    }

    return ( 
        <div className="myInfo">
            <h4>{props.name}</h4> {props.money}$
            {hand.length > 0 &&
                <div>
                    {hand.map(v => {
                        return (
                            <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + v.image} alt="card" />
                        )
                    })}
                    {/* <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[0].image} alt="card" />
                    <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[1].image} alt="card" /> */}
                                        {/* <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + hand[0].image} alt="card" />
                                        <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + hand[1].image} alt="card" />

                    <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + hand[2].image} alt="card" /> */}
                </div>
            }           
        </div>
     );
}
 
export default MyInfo;