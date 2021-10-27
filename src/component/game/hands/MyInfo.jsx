import "./Info.css"

const MyInfo = props => {
    let hand = props.hand;

    return ( 
        <div className={props.width}>
            <h4>{props.name}</h4> {props.money}$
            {hand.length > 0 &&
                <div>
                    {hand.map((v, i) => {
                        return (
                            <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + v.image} key={i} alt="card" />
                        )
                    })}
                    {/* <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[0].image} alt="card" />
                    <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[1].image} alt="card" /> */}
                                        {/* <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + hand[0].image} alt="card" />
                                        <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + hand[1].image} alt="card" />

                    <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + hand[2].image} alt="card" /> */}
                </div>
            }           
        </div>
     );
}
 
export default MyInfo;