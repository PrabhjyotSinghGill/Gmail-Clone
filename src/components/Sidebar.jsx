import React from 'react';
import SidebarOption from "../components/SidebarOption.jsx";
//CSS 
import "../views/Sidebar.css";
//Material UI imports
import {Button, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import {openSendMessage} from "../features/mailSlice";

function Sidebar(){
    const dispatch = useDispatch();

    return<div className="sidebar">
        <Button 
        startIcon={<AddIcon fontSize="large"></AddIcon>}
        className="sidebar__compose"
        onclick ={() => dispatch(openSendMessage())}
        >Compose
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
        <div className="sidebar__footer">
            <div className="sidebar__footerIcons">
                <IconButton>
                    <PersonIcon></PersonIcon>
                </IconButton>
                <IconButton>
                    <DuoIcon></DuoIcon>
                </IconButton>
                <IconButton>
                    <PhoneIcon></PhoneIcon>
                </IconButton>
            </div>
        </div>
    </div>
}

export default Sidebar;