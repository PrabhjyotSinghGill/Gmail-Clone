import React from 'react';
import "../views/Mail.css";
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useHistory } from 'react-router-dom';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ExpandMoreIcon } from '@mui/icons-material/ExpandMore';

function Mail(){
    const history = useHistory();
    return <div className="mail">
        <div className="mail__tools">
            <div className="mail__toolsLeft">
                <IconButton onClick={() => history.push("/")}>
                    <ArrowBackIcon></ArrowBackIcon>
                </IconButton>
                <IconButton>
                    <MoveToInboxIcon></MoveToInboxIcon>
                </IconButton>
                <IconButton>
                    <ErrorIcon></ErrorIcon>
                </IconButton>
                <IconButton>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
                <IconButton>
                    <EmailIcon></EmailIcon>
                </IconButton>
                <IconButton>
                    <WatchLaterIcon></WatchLaterIcon>
                </IconButton>
                <IconButton>
                    <CheckCircleIcon></CheckCircleIcon>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon></LabelImportantIcon>
                </IconButton>
                <IconButton>
                    <MoreVertIcon></MoreVertIcon>
                </IconButton>
            </div>
            <div className="mail__toolsRight">
                <IconButton>
                    <UnfoldMoreIcon></UnfoldMoreIcon>
                </IconButton>
                <IconButton>
                    <FingerprintIcon></FingerprintIcon>
                </IconButton>
                <IconButton>
                    <ExitToAppIcon></ExitToAppIcon>
                </IconButton>
            </div>
        </div>
        <div className="mail__body">
            <div className="mail__bodyHeader">
                <h2>Subject</h2> 
                <LabelImportantIcon className="mail__important"></LabelImportantIcon>  
                <p>Title</p>
                <p className="mail__time">10pm</p>
            </div>
            <div className="mail__message">
                <p>This is a Message!  </p>
            </div>
        </div>
    </div>
}
export default Mail
