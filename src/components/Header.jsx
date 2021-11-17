import React from 'react';
import "../views/Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from "@material-ui/core";

function Header(){
    return <div className="header">
        <div className="header__left">
            <IconButton>
                <MenuIcon></MenuIcon>
            </IconButton>
        </div>
        <div className="header__middle"></div>
        <div className="header__right"></div>

    </div>
}

export default Header;