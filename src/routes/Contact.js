import Navbar from "../components/Navbar";
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
       <div className="button-container">

        <button className="b2" onClick={handlDialClick} >Book Your Appointment Now!</button>
        </div> 
        </div>
          
          </>)
    }
export default Contact;