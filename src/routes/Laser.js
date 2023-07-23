import "./LaserStyles.css";
import Navbar from "../components/Navbar";
import women from "../img/Women.png";
import men from "../img/Men.png";
import qswl from "../img/Qswitchlaser.png"
function Laser(){
    return(<div className="laser">
       <Navbar/>
       <h1 className="ti">Unwanted Hair</h1>
       <div className="bo">
      <img  className="cl"src={women}></img>
      <img className="cl"src={men}></img>
      

       </div>
       
       <img className="im"src={qswl}></img>
    

       </div>
    )
    }
export default Laser;