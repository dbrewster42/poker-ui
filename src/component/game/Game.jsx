import "./Game.css"
import { useState } from "react";
import SettingsForm from "./SettingsForm"
import PlayerInfo from "./PlayerInfo"
import MyInfo from "./MyInfo"
import Bet from "./Bet"
import Log from "./Log"
import Modal from "react-modal";


const Game = props => {
    let id = props.id;
    // let players = props.players;
    console.log("players", props.players)
    let [players] = useState(props.players)
    let hand = props.hand;
    let betOptions = props.betOptions;
    let cards = props.cards
    const [money, setMoney] = useState(0)
    const username = props.username;
    const [isMax, setIsMax] = useState(true)


    const printData = () => {
        console.log(players)
        console.log(id)
        console.log(hand)
    }

    const toggleBetModal = () => {
        setIsMax(false)
    }

    // useEffect(() => {

    // }, [])

    return ( 
        <div id="background">
            <h1 id="header">Devon's Texas Hold 'Em</h1> 
            
            <div>
                <button onClick={() => printData()}>Check</button>
                <button className="start" onClick={(e) => props.deal(e)}>Deal</button> 
                <button className="start" onClick={(e) => props.getMyBetOptions(e)}>Bet</button> 
                {!isMax && <button className="start" onClick={() => setIsMax(true)}>Maximize Bet</button>}
            </div>

            <div id="table">
                <Modal isOpen={props.showModal} class="modal" ariaHideApp={false}><h2>{props.errorMessage}</h2><button>Okay</button></Modal>
                <Modal isOpen={props.isBet && isMax} class="modal" ariaHideApp={false}>
                    <Bet betOptions={betOptions} placeBet={props.placeBet} />
                    <button onClick={() => toggleBetModal()}>Minimize</button>
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