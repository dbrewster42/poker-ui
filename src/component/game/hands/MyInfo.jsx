import "./Info.css"

const MyInfo = props => {
    let hand = props.hand;

    return ( 
        <div>
        {props.gameType === "TEXAS_HOLD_EM" ?
            <div className="myInfo">
                <h4>{props.name}</h4> {props.money}$
                {hand.length > 0 &&
                    <div>
                        {hand.map((v, i) => {
                            return (
                                <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + v.image} key={i} alt="card" />
                            )
                        })}
                    </div>
                }           
            </div>      
                        :
            <div className="myStudInfo">
                 <h4>{props.name}</h4> {props.money}$
                {hand.length > 0 &&
                    <div>
                        {hand.map((v, i) => {
                            return (
                                <img className="studCards" src={process.env.PUBLIC_URL + '/pics/PNG/' + v.image} key={i} alt="card" />
                            )
                        })}
                    </div>
                }           
            </div>
                        }
        </div>
        
     );
}
 
export default MyInfo;