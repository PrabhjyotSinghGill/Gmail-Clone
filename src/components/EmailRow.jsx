import React from "react";
import "../views/EmailRow.css";
import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';

function EmailRow({id,title,subject,description,time}){
    return <div className="emailRow">
        <div className="emailRow__options">
            <Checkbox></Checkbox>
            <IconButton>
                <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon></LabelImportantOutlinedIcon>
            </IconButton>
        </div>
        <div className="emailRow__title">

        </div>
        <div className="emailRow__message">

        </div>
        <div className="emailRow__description">

        </div>
    </div>
}

export default EmailRow