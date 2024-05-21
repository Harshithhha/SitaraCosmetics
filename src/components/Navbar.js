import {Component} from "react";
import {Link} from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavbarCSS.css";
import gmap from "../img/Google_Maps_logo_icon.png"
import insta from "../img/instagram-logo.png"
import face from "../img/logo_facebook.png"
import wht from "../img/1499955335whatsapp-icon-logo-png.png"
import lin from "../img/linkedIn_PNG8.png"
//import styled from "styled-components";
import px2vw from "../utils/px2vw.js";
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
                <a href={`https://maps.app.goo.gl/p3Z3vsHaNPwNTrLw9`} target="_blank" rel="noopener noreferrer">
                 <img className="insta" alt="no" src={gmap} />
                        </a>
                <a href={`https://www.instagram.com/${this.instagramUsername}`} target="_blank" rel="noopener noreferrer">
                <img className="insta" alt="no" src={insta}/>
                </a>
                <a href={`https://www.facebook.com/sitaracosmeticshyd?mibextid=ZbWKwL`} target="_blank" rel="noopener noreferrer">
                         <img className="insta" alt="no" src={face}/>
                 </a>
                 <img className="insta" alt="no" src={wht} onClick={this.handlDialClick}/>
                 <a href={`https://www.linkedin.com/in/sitara-cosmetics-b0690383/`} target="_blank" rel="noopener noreferrer">
                         <img className="insta" alt="no" src={lin}/>
                 </a>
                
                
            </div>
                <div className="void">
                    </div>    </div>
                <p className="navbar-logo">Sitara Dentofacial <div class="name"></div> cosmetic Clinic</p>
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
                           <div className="Route">{item.title}</div> 
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