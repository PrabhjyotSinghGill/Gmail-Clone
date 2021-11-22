import React from "react";
import "../views/EmailRow.css";
import { Checkbox, IconButton} from '@material-ui/core';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { useHistory } from 'react-router-dom';

function EmailRow({id,title,subject,description,time}){
    const history = useHistory();
    return <div onClick={() => history.push("/mail")} className="emailRow">
        <div className="emailRow__options">
            <Checkbox></Checkbox>
            <IconButton>
                <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon></LabelImportantOutlinedIcon>
            </IconButton>
        </div>
        <h3 className="emailRow__title">
            {title}
        </h3>
        <div className="emailRow__message">
            <h4>{subject}{" "}
                <span className="emailRow__description">
                    -{" "}
                    {description}
                </span>
            </h4>
        </div>
        <p className="emailRow__time">
        {time}
        </p>
    </div>
}

export default EmailRow