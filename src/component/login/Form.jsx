import "./Login.css"

const Form = props => {
    return ( 
        <div id="form">
            <button className="cancel" onClick={props.toggleForm}>X</button>
            <form onSubmit={props.createPlayer}>
                <label htmlFor="name">Username </label>
                <input className="fields" type="text" name="name" onChange={props.changeName} value={props.username} /><br />
                <label htmlFor="buyin">Buy In $ </label>
                <input className="fields" type="number" name="buyin" onChange={props.changeBuyIn} value={props.buyIn} /><br />
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default Form;