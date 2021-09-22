import "./Info.css"

const MyInfo = props => {

    return ( 
        <div className="info">
            <h4>{props.name}</h4> {props.money}$
            {props.hand.length > 0 &&
                <div>
                    <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[0].image} alt="card" />
                    <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[1].image} alt="card" />
                </div>
            }           
        </div>
     );
}
 
export default MyInfo;