import "./Info.css"

const MyInfo = () => {
    const name = props.name;
    const money = props.money;

    return ( 
        <div class="my info">
            <h4>{name}</h4>
            {money}
            {props.username == name ?
                <div>Back Of Cards </div>
            :
                <div>Cards <img src={images[props.hand]} /></div>

            }
        </div>
     );
}
 
export default MyInfo;