import "./Game.css"
import SettingsForm from "./SettingsForm"
import PlayerInfo from "./PlayerInfo"
import MyInfo from "./MyInfo"
import Bet from "./Bet"
import Log from "./Log"
import Modal from "react-modal";


const Game = props => {
    let id = props.id;
    let players = props.players;
    let hand = props.hand;
    let hasStarted = props.hasStarted;
    let betOptions = props.betOptions;
    let cards = props.cards
    const username = props.username;


    const printData = () => {
        console.log(players)
        console.log(id)
        console.log(hand)
        console.log(props.isMax)
    }

    return ( 
        <div id="background">
            <h1 id="header">Devon's Texas Hold 'Em</h1> 
            <div id="table">
                <Modal isOpen={props.isOver && props.showMessage} className="modal" ariaHideApp={false}>
                    <h2>{props.endGameMessage}</h2>
                    <button onClick={() => props.setShowMessage(false)}>Okay</button>
                </Modal>

                <Modal isOpen={props.showModal} className="modal" ariaHideApp={false}><h2>{props.errorMessage}</h2><button>Okay</button></Modal>

                <Modal isOpen={props.isBet && props.isMax} className="modal" ariaHideApp={false}>
                    <Bet betOptions={betOptions} placeBet={props.placeBet} />
                    <button onClick={() => props.toggleBetModal(false)}>Minimize</button>
                    {props.betLog.length > 0 && <Log betLog={props.betLog} />} 
                </Modal>

                {hasStarted ? 
                    <div> 
                        {players.map((v, i) => {
                                return (
                                    <PlayerInfo name={v.username} money={v.money} key={i} isOver={props.isOver} hand={v.cards}  />
                                ) 
                        })}<br />
                        <div id="riverContainer">
                            {cards.map((v, i) => {
                                return (
                                    <img className="riverCards" key={i} src={process.env.PUBLIC_URL + '/pics/PNG/' + v.image} alt={v.image} />
                                )
                            })}<br />
                        </div>
                        <div id="buttons">
                            {props.isOver ?
                                <button className="start" onClick={(e) => props.startNewRound(e)}>Play New Round</button>     
                                :
                                <MyInfo name={username} money={props.money} hand={hand}  />
                            }
                            {props.isBet ?
                                <div className="buttonHolder">
                                    {props.isMyTurn ?
                                        <button className="start" onClick={() => props.toggleBetModal(true)}>Make Bet</button>
                                    :
                                        <button className="start" onClick={(e) => props.getMyBetOptions(e)}>Get Computer Bets</button>
                                    }                              
                                </div>
                            :
                                <div className="buttonHolder">
                                    {!props.isOver &&                    
                                        <button className="start" onClick={(e) => props.deal(e)}>Deal</button>    
                                    }  
                                </div>           
                            }

                        </div>                                      
                    </div>                   
                :
                    <SettingsForm startGame={props.startGame} username={username} />
                }
            
            </div>

            {props.betLog.length > 0 && <Log betLog={props.betLog} />}        
            
            <button className="start" onClick={(e) => props.deal(e)}>Deal</button> 
            <button className="start" onClick={(e) => props.getMyBetOptions(e)}>Start Bets</button> 
            <button className="start" onClick={() => props.toggleBetModal(true)}>Make Bet</button>
            <button onClick={() => printData()}>Check</button>
            {/* <button className="start" onClick={(e) => props.calculateWinner(e)}>Get Winner</button>  */}
        </div>
     );
}
 
export default Game;