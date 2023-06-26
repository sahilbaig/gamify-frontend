import React from "react";
import { useEffect, useState } from "react";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import './progress.css'



const Progress = () =>{
    useEffect(() => {
        fetch(`http://localhost:3000/xp`)
        .then((response) => response.json())
        .then((actualData) => {
            setxp(actualData.currentxp)
            setLevelxp(actualData.levelxp)
        });
       },[])
    
    const [xp, setxp] = useState(0)
    const [levelxp , setLevelxp] = useState(0)
    return(
        <div className="card">
            <div className="icons">
                <MilitaryTechIcon className="icon" style={{ fontSize: 30 }}/>
                <>Level</>
            </div>
            
            <div>
                <h1 className="currentXp">{xp}</h1> /
                <h2 className="levelXp"> {levelxp}</h2>
            </div>
            
            
        </div>
    )
}

export default Progress