import "./Game.css"
import { useState } from "react";
import SettingsForm from "./SettingsForm"
import PlayerInfo from "./PlayerInfo"
import MyInfo from "./MyInfo"
import Bet from "./Bet"
import Log from "./Log"
import Modal from "react-modal";


const Game = props => {
    console.log("props", props)
    let id = props.id;
    // let [players, setPlayers] = useState([])
    // let [hasSet, setHasSet] = useState(true)
    // if (props.hasStarted && hasSet){
    //     setHasSet(false)
    //     console.log("setting players !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", props.players)
    //     setPlayers(props.players)
    // }
    let players = props.players;
    let hand = props.hand;
    let hasStarted = props.hasStarted;
    let betOptions = props.betOptions;
    let cards = props.cards
    const [money, setMoney] = useState(0)
    const username = props.username;
    const [isMax, setIsMax] = useState(false)


    const printData = () => {
        console.log(props.players)
        console.log(players)
        console.log(id)
        console.log(hand)
        console.log(isMax)
    }

    const toggleBetModal = () => {
        setIsMax(false)
    }

    // useEffect(() => {

    // }, [])

    return ( 
        <div id="background">
            <h1 id="header">Devon's Texas Hold 'Em</h1> 
            {hasStarted &&
                <div>
                    <button onClick={() => printData()}>Check</button>
                    <button className="start" onClick={(e) => props.deal(e)}>Deal</button> 
                    <button className="start" onClick={(e) => props.getMyBetOptions(e)}>Start Bets</button> 
                    <button className="start" onClick={(e) => props.calculateWinner(e)}>Get Winner</button> 
                    {!isMax && <button className="start" onClick={() => setIsMax(true)}>Make Bet</button>}
                </div>
            }
            <div id="table">
                <Modal isOpen={props.showModal} class="modal" ariaHideApp={false}><h2>{props.errorMessage}</h2><button>Okay</button></Modal>
                <Modal isOpen={props.isBet && isMax} class="modal" ariaHideApp={false}>
                    <Bet betOptions={betOptions} placeBet={props.placeBet} />
                    <button onClick={() => toggleBetModal()}>Minimize</button>
                </Modal>

                {/* {isBet && <Bet betOptions={betOptions} placeBet={props.placeBet} />} */}
                {hasStarted ? 
                    <div> 
                        {players.map((v, i) => {
                                return (
                                    <PlayerInfo name={v.username} money={v.money} key={i} class="info" />
                                ) 
                        })}<br />
                        {cards.map((v, i) => {
                            return (
                                <img className="cards" key={i} src={process.env.PUBLIC_URL + '/pics/PNG/' + v.image} alt={v.image} />
                            )
                        })}<br />
                            <MyInfo name={username} money={money} hand={hand} class="info" /> 
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