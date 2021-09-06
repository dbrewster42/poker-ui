import "./Info.css"

const PlayerInfo = props => {

    return ( 
        <div className="my info">
           <h4>{props.name}</h4> {props.money}$
            <div>          
               <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/red_back.png'} alt="card" />
               <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/red_back.png'} alt="card" />
            </div>                    
        </div>
     );
}
 
export default PlayerInfo;