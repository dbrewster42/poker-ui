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
    let [id, setId] = useState(0);
    // let [body, setBody] = useState({});
    const username = props.location.state.username;
    console.log(username)
    
    const images = importAll(require.context("../../../public/pics/PNG", false, /\.(pn?g)$/));

    const startGame = async (e, state) => {
        e.preventDefault();
        console.log(state)
        let numberOfPlayers = state.numberOfPlayers;
        let isCustom = state.isCustom;
        let body = { username, numberOfPlayers, isCustom }
        console.log(body)
        const data = await Service.start(body);
        console.log(data)
        console.log(data.data)
    }

    const deal = async (e) => {
        e.preventDefault();
        console.log("hi")
        let body = { username }
        const data = await Service.deal(id, body);
        console.log(data)
    }
    // useEffect(() => {

    // }, [])

    return ( 
        <div id="background">
             <h1 id="header">Devon's Texas Hold 'Em</h1> 
            <div id="table">
                {hasStarted ? <button id="start" onClick={deal}>Deal</button> :
                    <SettingsForm startGame={startGame} username={username} />
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