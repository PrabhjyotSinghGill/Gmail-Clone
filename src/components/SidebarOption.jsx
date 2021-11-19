import React from "react";
import "../views/SidebarOption.css";

function SidebarOption({Icon, title, number, selected}){
    return <div className={`sidebar__option ${selected && 'sidebarOption--active'}`}>
        <Icon></Icon>
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
}
export default SidebarOption