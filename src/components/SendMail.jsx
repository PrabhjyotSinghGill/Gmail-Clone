import React from "react";
import "../views/SendMail.css";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";
import {useForm} from "react-hook-form";

function SendMail(){
    const{register, handleSubmit, watch, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return <div className="sendMail">
        <div className="sendMail__header">
            <h3>New Message</h3>
            <CloseIcon className="sendMail__close"></CloseIcon>
        </div>
        <form onSubmit={
            handleSubmit(onSubmit)
        }>
        <input 
        name="to" 
        placeholder="To" 
        type="text" 
        ref={register({required: true})}
        ></input>
        {errors.to && (<p className="sendMail__error">To is Required!</p>)}
        <input 
        name="subject" 
        placeholder="Subject" 
        type="text"
        ref={register({required: true})}
        ></input>
        {errors.subject && (<p className="sendMail__error">Subject is Required!</p>)}
        <input
        name="message"
        placeholder="Message..." 
        type="text" 
        className="sendMail__message"
        ref={register({required: true})}
        ></input>
        {errors.message && (<p className="sendMail__error">Message is Required!</p>)}
            <div className="sendMail__options">
                <Button className="sendMail__send"
                variant="contained"
                color="primary"
                type="submit"
                >Send</Button>
            </div>
        </form>
    </div>;
}
export default SendMail