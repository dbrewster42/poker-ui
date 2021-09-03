import "./Log.css"

const Log = props => {
    console.log(props)
    return ( 
        <div id="log">
            <ul id="betList">
                {props.betLog.length > 0 && props.betLog.betMessage.map((bet, i) => {
                    return <li key={i} className="betMessages">{bet}</li>
                })}
            </ul>
            
        </div>
     );
}
 
export default Log;