import React from "react";
import "../views/SendMail.css";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";

function SendMail(){
    return <div className="sendMail">
        <div className="sendMail__header">
            <h3>New Message</h3>
            <CloseIcon className="sendMail__close"></CloseIcon>
        </div>
        <form>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
            <div className="sendMail__options">
                <Button>Send</Button>
            </div>
        </form>
    </div>;
}
export default SendMail