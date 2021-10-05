import "./Info.css"

const PlayerInfo = props => {

    return ( 
       <div className="info">
            <h4>{props.name}</h4> {props.money}$
            {!props.isOver || props.hand === undefined ?
                <div>          
                    <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/red_back.png'} alt="card" />
                    <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/red_back.png'} alt="card" />
                </div>   
            :
                <div>
                    <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[0].image} alt="card" />
                    <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[1].image} alt="card" />
                </div>
            }
        </div> 
     );
}
 
export default PlayerInfo;
        // <div className="info">
        //    {!props.isOver || props.hand === undefined ?
        //         <div>
        //             <h4>{props.name}</h4> {props.money}$      
        //             <div>    
        //                 <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/red_back.png'} alt="card" />
        //                 <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/red_back.png'} alt="card" />
        //             </div> 
        //         </div>   
        //     :
        //         <div>
        //             <h4>{props.displayName}</h4> {props.money}$   
        //             <div>
        //                 <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[0].image} alt="card" />
        //                 <img className="cards" src={process.env.PUBLIC_URL + '/pics/PNG/' + props.hand[1].image} alt="card" />
        //             </div>       
        //         </div>
        //    }
        // </div>