import Navbar from "../components/Navbar";
import "./HomeStyles.css"
import React from 'react';
import Main from "../components/Main";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";
import { Box, Image, Text } from "@chakra-ui/react";
import btcSrc from"../img/sitara logo.png";
import { MenuItems } from "../components/MenuItems";
import { motion } from "framer-motion";
function Home(){
  
  let SliderData=[
    {image:"https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60"},
    {image:"https://plus.unsplash.com/premium_photo-1675603849941-835c6e9d28b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60"},
    {image:"https://images.unsplash.com/photo-1516735492913-6343ed4e1f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60"},
  ]
return(
    <div className="Home_Scene" >
<Navbar/> 
<div className="home">
<div className="car">
<Box bgColor={"faebd7"} w={"50vh"} h={"85vh"}>
      <motion.div
        style={{
    
          height: "80vh",
          width: "40vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
       <div className="loh"> <Image
          
          objectFit={"contain"}
          src={btcSrc}
        ml={"20"}
        mt={"300"}
        />
        </div>
      </motion.div>

     
    </Box>
  <div > <ImageSlider slides={SliderData} />
  </div>
   </div>
   </div>
 <div className="products">
     <div className="p">
         <Main />
         
      </div>
        <div className="ourserv"><Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"pinkAlpha.700"}
        mt={"50"}
      >
        Our Services
    
      </Text>
      {MenuItems.map((item,index)=>{
                      if (item.title!="Contact" && item.title!="Home" && item.title!="About"){
                        return(
                      <div className="ho">
                        <ul key={index}>
                            <div className="bu">
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>
                            {item.title}
                            </Link>
                            </div>
                        </ul>
                        </div>
                        )
}})}
      </div>
      </div>
</div>

)
}


export default Home;