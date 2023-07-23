import Navbar from "../components/Navbar";
import siSrc from"../img/sitara logo.png";
import "./Contact.css"
function Contact(){
    let phoneNumber='+917702276350';
    let handlDialClick=()=>{
        window.location.href=`tel:${phoneNumber}`;
    }

    return(

    <>
    <div className="navbar">
       <Navbar/> 
       </div>
       <div className="Scene_Contact">
       <img className="meme"src={siSrc} alt="a lighthouse" onClick={handlDialClick} ></img>

        <button className="b2" onClick={handlDialClick} >Book Your Appointment Now!</button></div>  
          
          </>)
    }
export default Contact;