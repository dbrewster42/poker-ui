import "./Game.css"
import MyInfo from "./hands/MyInfo"
import SevenStud from "./type/SevenStud"
import HoldEm from "./type/HoldEm"


const Table = props => {
    const check = () => {
        console.log(props)
    }
    return ( 
        <div>
            <button onClick={check} value="Oreo" />
            {props.gameType === "TEXAS_HOLD_EM" ?
                <HoldEm players={props.players} cards={props.cards} isOver={props.isOver} />  
                :
                <SevenStud players={props.players} isOver={props.isOver} isLastTurn={props.isLastTurn} />  
            }
            

            <div id="buttons">
                {props.isOver ?
                    <button className="start" onClick={(e) => props.startNewRound(e)}>Play New Round</button>     
                    :
                    <MyInfo name={props.username} money={props.money} hand={props.hand} width={props.width}  />
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
     );
}
 
export default Table;