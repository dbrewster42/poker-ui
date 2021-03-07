import "./Login.css"

const PlayerForm = props => {
    return ( 
        <div id="form">
            <button className="cancel" onClick={props.toggleForm}>X</button>
            {props.isExisting ? 
                <form onSubmit={props.logIn}>
                    <label htmlFor="name">Username </label>
                    <input className="fields" type="text" name="name" onChange={props.changeName} value={props.username} /><br />
                    <input className="submit" type="submit" value="Submit" />
                </form>
            :
                <form onSubmit={props.createPlayer}>
                    <label htmlFor="name">Username </label>
                    <input className="fields" type="text" name="name" onChange={props.changeName} value={props.username} /><br />
                    <label htmlFor="buyin">Buy In $ </label>
                    <input className="fields" type="number" name="buyin" onChange={props.changeBuyIn} value={props.buyIn} /><br />
                    <input className="submit" type="submit" value="Submit" />
                </form>
            }
            
        </div>
     );
}
 
export default PlayerForm;