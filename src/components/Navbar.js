import {Component} from "react";
import {Link} from "react-router-dom";
import { MenuItems } from "./MenuItems";
import sitara from "../img/sitara logo.png";
import "./NavbarCSS.css";
class Navbar extends Component{
    state={clicked:false};
    handleClick=()=>{
this.setState({clicked:!this.state.clicked})
    }
    phoneNumber='+917702276350';
    handlDialClick=()=>{
        window.location.href=`tel:${this.phoneNumber}`;
    }
    instagramUsername='sitara_cosmetics'  
   

    render(){
        return(
            <nav className="NavbarItems">
                <div className="together">
                <div className="another"> 
                <a href={`https://www.instagram.com/${this.instagramUsername}`} target="_blank" rel="noopener noreferrer">
                <img className="insta" alt="no" src="https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_1280.png"/>
                </a>
                <a href={`https://www.facebook.com/sitaracosmeticshyd?mibextid=ZbWKwL`} target="_blank" rel="noopener noreferrer">
                         <img className="insta" alt="no" src="https://cdn.pixabay.com/photo/2016/12/22/04/35/facebook-1924512_1280.png"/>
                 </a>
                 <img className="insta" alt="no" src="https://cdn.pixabay.com/photo/2017/01/31/14/36/blue-2024619_640.png" onClick={this.handlDialClick}/>
                 <a href={`https://www.linkedin.com/in/sitara-cosmetics-b0690383/`} target="_blank" rel="noopener noreferrer">
                         <img className="linked" alt="no" src="https://myclouddoor.com/wp-content/uploads/2019/11/Linkedin-logo.png"/>
                 </a>
            </div>
                <div className="void">
                    </div>    </div>
                <h1 className="navbar-logo">Sitara Dentofacialcosmetic Clinic</h1>
                <div className="menu-items " onClick={this.handleClick}>
                    <i className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
                    </div>
                    
                    
                
                <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>
                    {MenuItems.map((item,index)=>{
                        return(
                        <li key={index}>
                            <div className="myhome">

                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>
                            {item.title}
                            </Link>
                            </div>
                        </li>
                        )
                    })}
                    
                </ul>

            </nav>
        )
    }


}
export default Navbar;