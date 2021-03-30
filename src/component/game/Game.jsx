import "./Game.css"
import Service from "../../service/Service"
import { useEffect, useState } from "react";
import SettingsForm from "./SettingsForm"
import PlayerInfo from "./PlayerInfo"
import MyInfo from "./MyInfo"

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {        
        images[item.replace("./", "")] = r(item);
    });
    console.log(images);
    return images;
  }

const Game = props => {
    // console.log(props)
    let [hasStarted, setHasStarted] = useState(false);
    let [hasDealt, setHasDealt] = useState(false);
    let [id, setId] = useState(0);
    const [players, setPlayers] = useState({})
    const [names, setNames] = useState([])
    // let [body, setBody] = useState({});
    const username = props.location.state.username;
    // console.log(username)
    
    const images = importAll(require.context("../../../public/pics/PNG", false, /\.(pn?g)$/));

    const startGame = async (state) => {
        // let displayName = state.displayName;
        // let numberOfPlayers = state.numberOfPlayers;
        // let fillWithComputerPlayers = state.hasComputers;
        // let isCustom = state.isCustom;
        let body = { username, 
            displayName : state.numberOfPlayers,
            numberOfPlayers : state.numberOfPlayers,
            fillWithComputerPlayers: state.fillWithComputerPlayers,
            isCustom: state.isCustom }
        console.log("request", body)
        const data = await Service.startGame(body);
        console.log("response", data.data)
        setHasStarted(true)
        setId(data.data.gameId)
        setPlayers(data.data.body.players)
        setNames(players.keys())
    }

    const deal = async (e) => {
        e.preventDefault();
        console.log("hi")
        let body = { username }
        const data = await Service.deal(id, body);
        console.log(data)
    }
    const printData = () => {
        console.log(players)
        console.log(id)
    }
    // useEffect(() => {

    // }, [])

    return ( 
        <div id="background">
            <h1 id="header">Devon's Texas Hold 'Em</h1> 
            <div id="table">
                {hasStarted ? 
                    <div> 
                    
                        <div>
                            {names.map(v => {
                                <PlayerInfo name={v} money={players[v]} hasDealt={hasDealt} username={username}  />
                            })}
                            {/* Do I need a separate component for current player? How else do I ensure it is at the bottom of the table? */}
                            <MyInfo></MyInfo>
                        </div>
                        
                        <div>
                            <button onClick={printData}>Check</button>
                            <button id="start" onClick={deal}>Deal</button> 
                        </div>
        
                    </div>
                    

                    :

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