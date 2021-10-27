import "./Info.css"

const StudCards = props => {
    let hand = props.hand;

    return ( 
       <div className="stud">
            <h4>{props.name}</h4> {props.money}$
            {hand !== undefined && 
            <div>
                {!props.isOver ?
            
                    <div>          
                        <img className="studCards" src={process.env.PUBLIC_URL + '/pics/PNG/red_back.png'} alt="card" />
                        <img className="studCards" src={process.env.PUBLIC_URL + '/pics/PNG/red_back.png'} alt="card" />
                        {hand.map((v, i) => {
                            return (
                                <img className="studCards" src={process.env.PUBLIC_URL + '/pics/PNG/' + v.image} key={i} alt="card" />
                            )
                        })}

                        {props.isLastTurn &&
                            <img className="studCards" src={process.env.PUBLIC_URL + '/pics/PNG/red_back.png'} alt="card" />
                        }
                        

                    </div>   
                :
                    <div>
                        <h2 className="pokerHand">{props.pokerHandName}</h2>

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
 
export default StudCards;



                        {/* <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[0].image} alt="card" />
                        <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[1].image} alt="card" />
                        <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[2].image} alt="card" />
                        <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[3].image} alt="card" /> */}