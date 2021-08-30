

const Log = props => {
    return ( 
        <div>
            <ul>
                {props.bets.length > 0 && props.bets.betMessage.map((bet, i) => {
                    return <li key={i} className="betMessages">bet</li>
                })}
            </ul>
            
        </div>
     );
}
 
export default Log;