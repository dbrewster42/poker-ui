import "./Game.css"
import { useState } from "react";
import SettingsForm from "./SettingsForm"
import PlayerInfo from "./PlayerInfo"
import MyInfo from "./MyInfo"
import Bet from "./Bet"
import Log from "./Log"


const Game = props => {
    let id = props.id;
    let players = props.players;
    let hand = props.hand;
    let betOptions = props.betOptions;
    let cards = props.cards
    const [money, setMoney] = useState(0)
    const username = props.username;


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
                <button onClick={() => printData()}>Check</button>
                <button id="start" onClick={(e) => props.deal(e)}>Deal</button> 
            </div>

            <div id="table">
                <Modal isOpen={props.showModal} id="modal"><h2>{props.errorMessage}</h2></Modal>
                <Modal isOpen={props.isBet} id="modal">
                    <Bet betOptions={betOptions} placeBet={props.placeBet} />
                </Modal>

                {/* {isBet && <Bet betOptions={betOptions} placeBet={props.placeBet} />} */}
                {props.hasStarted ? 
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
                                <img className="cards" key={i} src={process.env.PUBLIC_URL + '/pics/PNG/' + v.image} alt={v.image} />
                            )
                        })}
                         <div id="my">
                            <MyInfo name={username} money={money} hand={hand} class="info" /> 
                        </div>      
                    </div>                   
                :
                    <SettingsForm startGame={props.startGame} username={username} />
                }
            
            </div>

            
            <Log betLog={props.betLog} />

        </div>
     );
}
 
export default Game;