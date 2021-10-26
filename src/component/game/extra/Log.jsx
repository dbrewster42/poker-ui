import "./Log.css"

const Log = props => {
    return ( 
        <div id="log">
            <ul id="betList">
                {props.betLog.map((bet, i) => {
                    return <li key={i} className="betMessages">{bet}</li>
                })}
            </ul> 
        </div>
     );
}
 
export default Log;