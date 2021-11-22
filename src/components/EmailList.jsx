import React from 'react';
import "../views/EmailList.css";
import EmailRow from "../components/EmailRow.jsx";
import {Checkbox, IconButton} from "@material-ui/core"; 
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import Section from "../components/Section.jsx";
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function EmailList(){
    return <div className="emailList">
        <div className="emailList__settings">
            <div className="emailList__setttingsLeft">
                <Checkbox></Checkbox>
                <IconButton>
                    <ArrowDropDownIcon></ArrowDropDownIcon>
                </IconButton>
                <IconButton>
                    <RedoIcon></RedoIcon>
                </IconButton>
                <IconButton>
                    <MoreVertIcon></MoreVertIcon>
                </IconButton>
            </div>
            <div className="emailList__settingsRight">
                <IconButton>
                    <ChevronLeftIcon></ChevronLeftIcon>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon></ChevronRightIcon>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon></KeyboardHideIcon>
                </IconButton>
                <IconButton>
                    <SettingsIcon></SettingsIcon>
                </IconButton>
            </div>
        </div>
        <div className="emailList__sections">
            <Section Icon={InboxIcon} title='Primary' color='red' selected></Section>
            <Section Icon={PeopleIcon} title='Social' color='#1A73E8'></Section>
            <Section Icon={LocalOfferIcon} title='Promotions' color='green'></Section>
        </div>
        <div className="emailList__list">
            <EmailRow
                title="Twitch"
                subject="Hi there!"
                description="This is a test"
                time="10pm"
            >
            </EmailRow>
        </div>
    </div>
}
export default EmailList 