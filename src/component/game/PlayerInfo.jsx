const PlayerInfo = props => {
    const name = props.name;
    const money = props.money;

    return ( 
        <div>
            <h4>{name}</h4>
            {money}
        </div>
     );
}
 
export default PlayerInfo;