import "./DentalStyles.css";
import Navbar from "../components/Navbar";

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
  import "react-vertical-timeline-component/style.min.css";
import TimelineDental from "./TimelineDental";  
function Dental(){
  let workIconStyles = { background: "#06D6A0", color: "#7b0867" };
    return(<div className="dental">
       <Navbar/>
       <div className="titlep">Dental</div>
       <VerticalTimeline>
        {TimelineDental.map((element) => {
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
              iconStyle={workIconStyles}
             
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
             <img className="myimg"src={element.my} alt="no"></img>  
             <p className="matter">{element.mydata}</p> 
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>

       
       
    </div>)
    }
export default Dental;