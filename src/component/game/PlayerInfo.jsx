import "./Info.css"

const PlayerInfo = props => {
    const name = props.name;
    const money = props.money;

    return ( 
        <div class="info">
            <h4>{name}</h4>
            {money}
            {props.username == name ?
                <div>Back Of Cards </div>
            :
                <div>Cards <img></img></div>

            }
        </div>
     );
}
 
export default PlayerInfo;