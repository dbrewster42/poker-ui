import "./Game.css"
import Service from "../../service/Service"
import { useEffect, useState } from "react";
import SettingsForm from "./SettingsForm"
import PlayerInfo from "./PlayerInfo"
import MyInfo from "./MyInfo"
import Bet from "./Bet"
import Log from "./Log"

// function importAll(r) {
//     let images = {};
//     r.keys().forEach((item) => {        
//         images[item.replace("./", "")] = r(item);
//     });
//     console.log(images);
//     return images;
//   }

const Game = props => {
    // console.log(props)
    let [hasDealt, setHasDealt] = useState(false);
    let id = props.id;
    let hasStarted = props.hasStarted;
    let players = props.players;
    let hand = props.hand;
    let betOptions = props.betOptions;
    let isBet = props.isBet
    // const [players, setPlayers] = useState([])
    const [cards, setCards] = useState([])
    // const [hand, setHand] = useState([])
    const [money, setMoney] = useState(0)
    let [turn, setTurn] = useState(0);
    // let [isBet, setIsBet] = useState(false);
    // let [betOptions, setBetOptions] = useState();
    const [betLog, setBetLog] = useState([]);
    // const [names, setNames] = useState([])
    // let [body, setBody] = useState({});
    const username = props.username;
    // console.log(username)
    
    // const images = importAll(require.context("../../../public/pics/PNG", false, /\.(pn?g)$/));
    // const image = images["red_back.png"]

    const startGame = async (state) => {
        // let displayName = state.displayName;
        // let numberOfPlayers = state.numberOfPlayers;
        // let fillWithComputerPlayers = state.hasComputers;
        // let isCustom = state.isCustom;
        let body = { username, 
            displayName : state.numberOfPlayers,
            numberOfPlayers : state.numberOfPlayers,
            fillWithComputerPlayers: state.fillWithComputerPlayers,
            isCustom: state.isCustom,
            bigBlind: state.bigBlind
         }
        console.log("request", body)
        const data = await Service.startGame(body);
        console.log("response", data)
        console.log("response body", data.data)
        props.setVariables(data.data);
        // setHasStarted(true)
        // setId(data.data.gameId)
        // setPlayers(data.data.users)
        // setHand(data.data.hand)
        // setIsBet(true)
        // if (data.data.betOptions.name == username){
        //     setBetOptions(data.data.betOptions)
        //     displayBetOptions(data.data.betOptions);
        // }
        // setNames(players.keys())
    }

    const deal = async (e) => {
        e.preventDefault();
        console.log("hi")
        // let body = { username }
        const data = await Service.deal(id);
        console.log(data)
        console.log("Dealt", data.data)
    }
    const printData = () => {
        console.log(players)
        console.log(id)
        console.log(hand)
    }


   

    // useEffect(() => {

    // }, [])

    return ( 
        <div id="background">
            <h1 id="header">Devon's Texas Hold 'Em</h1> 
            
            <div>
                <button onClick={() => printData}>Check</button>
                <button id="start" onClick={() => deal}>Deal</button> 
            </div>

            <div id="table">
                {hasStarted ? 
                    <div> 
                        {players.map((v, i) => {
                            if (v.username !== username){
                                return (
                                    <PlayerInfo name={v.username} money={v.money} key={i} class="info" />
                                    // <PlayerInfo name={v.displayName} money={v.money} key={i} class="info" />
                                )
                            } else {
                                setMoney(v.money)
                            }                           
                        })}
                        {cards.length > 0 && cards.map((v, i) => {
                            return (
                                <img className="cards" key={i} src={process.env.PUBLIC_URL + '/pics/PNG/' + v.image} />
                            )
                        })}
                         <div id="my">
                            <MyInfo name={username} money={money} hand={hand} class="info" /> 
                        </div>      
                    </div>                   
                :
                    <SettingsForm startGame={startGame} username={username} />
                }
                  
            </div>
            {/* {isBet && <Bet id={id} betOptions={betOptions} username={username} setIsBet={setIsBet} />} */}
            {isBet && <Bet betOptions={betOptions} username={username} />}
            {/* {images.map((image, i) => {
                return (
                    <img src={image} className="cards" />
                )
            })} */}
        </div>
     );
}
 
export default Game;