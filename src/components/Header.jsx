import React from 'react';
import "../views/Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton,Avatar} from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header(){
    return <div className="header">
        <div className="header__left">
            <IconButton>
                <MenuIcon></MenuIcon>
            </IconButton>
            <img src="logogmail.png" alt=""></img>
        </div>
        <div className="header__middle">
            <SearchIcon></SearchIcon>
            <input placeholder="Search mail" type="text"></input>
            <ArrowDropDownIcon className="header__inputCaret"></ArrowDropDownIcon>
        </div>
        <div className="header__right">
            <IconButton>
                <AppsIcon></AppsIcon>
            </IconButton>
            <IconButton>
                <NotificationsIcon></NotificationsIcon>
            </IconButton>
            <Avatar src="gill.jpg"></Avatar>
        </div>

    </div>
}

export default Header;