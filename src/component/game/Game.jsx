import "./Game.css"
import Service from "../../service/Service"
import { useEffect, useState } from "react";
import SettingsForm from "./SettingsForm"

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {        
        images[item.replace("./", "")] = r(item);
    });
    console.log(images);
    return images;
  }

const Game = props => {
    console.log(props)
    let [hasStarted, setHasStarted] = useState(false);
    const username = props.location.state.username;
    
    const images = importAll(require.context("../../../public/pics/PNG", false, /\.(pn?g)$/));

    const deal = async () => {
        console.log("hi")
        const data = await Service.deal();
        console.log(data)
    }

    const startGame = async () => {
        const body = { username}
        const data = await Service.start(body);
        console.log(data)
    }

    // useEffect(() => {

    // }, [])

    return ( 
        <div id="background">
             <h1 id="header">Devon's Texas Hold 'Em</h1> 
            <div id="table">
                {hasStarted ? <SettingsForm startGame={startGame} /> :
                    <button id="start" onClick={deal}>Deal</button>
                }
                  
            </div>
               
            {/* {images.map((image, i) => {
                return (
                    <img src={image} className="cards" />
                )
            })} */}
        </div>
     );
}
 
export default Game;