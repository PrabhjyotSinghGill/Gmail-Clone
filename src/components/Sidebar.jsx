import React from 'react';
import SidebarOption from "../components/SidebarOption.jsx";
//CSS 
import "../views/Sidebar.css";
//Material UI imports
import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";

function Sidebar(){
    return<div className="sidebar">
        <Button 
        startIcon={<AddIcon fontSize="large"></AddIcon>}
        className="sidebar__compose">Compose
        </Button>

        <SidebarOption Icon={InboxIcon} title="Inbox" number={54}>
        </SidebarOption>
        <SidebarOption Icon={StarIcon} title="Starred" number={54}>
        </SidebarOption>
    </div>
}

export default Sidebar;