import "./MainStyles.css";
import mission from "../img/Mission.png";
import vision from "../img/Vision.png"
import values from "../img/Values.png"
function Main(){
    return(
        <div className="Mastercard">
            <div className="card"> <img src={vision}></img>
           </div>
           <div className="card"> <img src={mission}></img>
           </div>
           
           <div className="card"><img src={values}></img>
           </div>
        </div>

       )
    }
export default Main;