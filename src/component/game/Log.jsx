

const Log = props => {
    return ( 
        <div>
            <ul>
                {props.betsMade.length > 0 && props.betsMade.betMessage.map((bet, i) => {
                    return <li key={i} className="betMessages">bet</li>
                })}
            </ul>
            
        </div>
     );
}
 
export default Log;