import "./Game.css"

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {        
        images[item.replace("./", "")] = r(item);
    });
    // console.log(images);
    return images;
  }

const Game = () => {

    const images = importAll(require.context("../../../public/pics/PNG", false, /\.(pn?g)$/));

    const deal = () => {
        console.log("hi")
    }

    return ( 
        <div id="background">
             <h1 id="header">Devon's Texas Hold 'Em</h1> 
            <div id="table">
                <button id="start" onClick={deal}>Deal</button>  
            </div>
               
            {/* {images.map((image, i) => {
                return (
                    <img src={image} className="cards" />
                )
            })} */}
        </div>
     );
}
 
export default Game;