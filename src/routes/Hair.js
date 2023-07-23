import "./HairStyles.css";
import Navbar from "../components/Navbar";
import sitara from "../img/sitara logo.png";
import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { Card, CardBody } from "@chakra-ui/react";
import baldness from "../img/baldness.jpeg";
import Dandruff from "../img/Dandruff.webp";
import Hairfall from "../img/Hairfall.jpg";
function Hair(){
    let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

    return(<div className="hair">
       <Navbar/>

<h1 className="title">Hair</h1>
<h1 className="ptitle">Problems</h1>
<div className="col">
  <div className="rob"><img className="prob" src={baldness}></img><p>Baldness</p></div>
  <div className="rob"><img className="prob"src={Dandruff}></img><p>Dandruff</p></div>
 <div className="rob"> <img className="prob"src={Hairfall}></img><p>Hairfall</p></div>
</div>
<h1 className="ptitle">Treatments</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={schoolIconStyles}
             
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              
             <img className="myimg" src={element.my} alt="no"></img> 
             <p className="matter">{element.mydata}</p>  
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>

    </div>)
    }
export default Hair;