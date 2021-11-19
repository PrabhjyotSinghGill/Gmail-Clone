import React from 'react';
import SidebarOption from "../components/SidebarOption.jsx";
//CSS 
import "../views/Sidebar.css";
//Material UI imports
import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar(){
    return<div className="sidebar">
        <Button 
        startIcon={<AddIcon fontSize="large"></AddIcon>}
        className="sidebar__compose">Compose
        </Button>

        <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}>
        </SidebarOption>
        <SidebarOption Icon={StarIcon} title="Starred" number={54}>
        </SidebarOption>
        <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54}></SidebarOption>
        <SidebarOption Icon={LabelImportantIcon} title="Important" number={54}></SidebarOption>
        <SidebarOption Icon={NearMeIcon} title="Sent" number={54}></SidebarOption>
        <SidebarOption Icon={NoteIcon} title="Drafts" number={54}></SidebarOption>
        <SidebarOption Icon={ExpandMoreIcon} title="More" number={54}></SidebarOption>
    </div>
}

export default Sidebar;