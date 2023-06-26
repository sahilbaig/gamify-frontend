import React from "react";
import { Card } from "@mui/material";
import './infoCard.css'
const InfoCard = (props) =>{
    return (
        <Card style={{backgroundColor:props.color}} className="info"  >
            <h1> {props.type}</h1>
            <div style={{border:"1px solid black" , height: "50%" , width:"50%"}}>
                
            </div>  
        </Card>
    )
}

export default InfoCard;