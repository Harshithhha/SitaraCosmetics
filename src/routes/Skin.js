import "./SkinStyles.css";
import Navbar from "../components/Navbar";
import Skinprob from "../img/Skinprob.jpg";
import SkinSol from "../img/SkinSol.jpg";
function Skin(){
    return(<div>
       <Navbar/>
        <div className="skin">
        <h1 className="titles">Skin</h1>
<h1 className="ptitles">Problems</h1>
            <img className="pic"src={Skinprob}></img>
   
        </div>
        <h1 className="ptitles">Treatments</h1>
        <div ><img className="pic2" src={SkinSol}></img></div>
       
    </div>)
    }
export default Skin;