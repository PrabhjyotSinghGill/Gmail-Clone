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
                title="
                Frontend Focus <frontend@cooperpress.com>"
                subject="Edge puts on a Tux"
                description=" Here's the official blog post from Microsoft covering the news. This release means Edge is now available on Windows, macOS, iOS, Android, and Linux."
                time="Nov 3, 2021, 3:16 PM"
            >
            </EmailRow>
            <EmailRow
                title="Apple Store <carrefourlaval@email.apple.com>"
                subject="Votre reçu d’Apple Carrefour"
                description="Merci d’avoir magasiné à l’Apple Store.

                Pour nous parler de votre expérience, cliquez ici."
                time="Nov 6, 2021, 1:18 PM"
            >
            </EmailRow>
            <EmailRow
                title="SCENE <news@news.scene.ca>"
                subject="Notification of Change to SCENE program"
                description="You are receiving this email as it contains important information about changes to the SCENE program, of which you are a member."
                time="Feb 25, 2021, 12:13 PM"
            >
            </EmailRow>
            <EmailRow
            title="Hydro-Québec <hydroquebec@communication.hydroquebec.com>"
            subject="Séries à écouter en rafale et plus encore"
            description="Films et séries à écouter en rafale"
            time="Dec 2, 2020, 4:26 PM"
            >
            </EmailRow>
            <EmailRow
            title="VFS Global <donotreply@vfsglobal.com>"
            subject="VFS Global Notification"
            description=" If you have chosen to collect your passport, please contact the Visa Application Center at UKVI.Feedback.Ca@vfshelpline.com to schedule an appointment for your passport collection."
            time="Sep 24, 2020, 5:01 PM"
            >
            </EmailRow>
            <EmailRow
            title="Montblanc Montreal <mbmontreal@montblancboutique.ca>"
            subject="Montblanc - Votre service - SV-02-002622"
            description="Cher Monsieur Gill Prabhjyot"
            time="Sep 1, 2020, 12:52 PM"
            >
            </EmailRow>
            <EmailRow
            title="RG-NRC IET CW<RG-NRCIETCW@mod.gov.uk>"
            subject="Army Registration URN"
            description="You can apply as a Sniper."
            time="Sep 1, 2020, 12:52 PM"
            >
            </EmailRow>
        </div>
    </div>
}
export default EmailList 