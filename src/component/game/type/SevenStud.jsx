import StudCards from "../hands/StudCards";

const SevenStud = props => {
    return ( 
        <div> 
            {players.map((v, i) => {
                    return (
                        <StudCards name={v.displayName} money={v.money} key={i} isOver={props.isOver} hand={v.cards} isLastTurn={props.isLastTurn}  />
                    ) 
            })}<br />
        </div>
     );
}
 
export default SevenStud;