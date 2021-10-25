import "../Game.css"
import PlayerInfo from "../hands/PlayerInfo"


const HoldEm = props => {
    console.log("Hold Em", props)
    let players = props.players;
    let cards = props.cards;

    return ( 
        <div> 

            {players.map((v, i) => {
                    return (
                        <PlayerInfo name={v.displayName} money={v.money} key={i} isOver={props.isOver} hand={v.cards}  />
                    ) 
            })}<br />

            <div id="riverContainer">
                {cards.map((v, i) => {
                    return (
                        <img className="riverCards" key={i} src={process.env.PUBLIC_URL + '/pics/PNG/' + v.image} alt={v.image} />
                    )
                })}<br />
            </div>
                        
        </div>   
     );
}
 
export default HoldEm;