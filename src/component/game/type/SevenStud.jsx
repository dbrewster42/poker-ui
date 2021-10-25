const SevenStud = props => {
    return ( 
        <div> 
            {players.map((v, i) => {
                    return (
                        <PlayerInfo name={v.displayName} money={v.money} key={i} isOver={props.isOver} hand={v.cards}  />
                    ) 
            })}<br />
        </div>
     );
}
 
export default SevenStud;