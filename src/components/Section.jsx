import React from "react";
import "../views/Section.css";

function Section({Icon,title,color,selected}){
    return <div className={`section ${selected && 'section--selected'}`}
        style={
            {
                borderBottom: `3px solid ${color}`,
                color:`${selected && color}`,
            }
        }
    >
        <Icon></Icon>
        <h4>{title}</h4>
    </div>
}

export default Section