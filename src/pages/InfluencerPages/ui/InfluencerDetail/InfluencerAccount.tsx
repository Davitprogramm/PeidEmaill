import { memo } from "react";
import "./InfluencerPages.modules.scss"
import { RiAccountCircleLine } from "react-icons/ri";
import { HiOutlineInbox } from "react-icons/hi2";
import { BsSend } from "react-icons/bs";
import { RiDraftLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
interface InfluencerProps {
    className?: string;
    [x: string]: any;
}



const InfluencerPages = (props: InfluencerProps) => {
    const {
        userName,
        
    } = props;




   
    console.log("username is " + userName);

    return (
        <div className="account">
            <div className="primes">
                <p>Primes</p>
            </div>
            <div className="settings">
                <div className="allbutton">
                    <RiAccountCircleLine className="icon" style={{ color: "rgb(10, 0, 105)" }} />
                    <p style={{ color: "rgb(10, 0, 105)" }}>Account </p>
                    <div className="div_account"></div>
                </div>
                <hr className="hr" />
                <div className="allbutton">
                    <HiOutlineInbox className="icon" />
                    <p>Inbox</p>
                </div>
                <div className="allbutton">
                    <BsSend className="icon" />
                    <b>Sent </b>
                </div>
                <div className="allbutton">
                    <RiDraftLine className="icon" />
                    <p>Draft</p>
                </div>
                <hr className="hr" />
                <div className="allbutton">
                    <RiMoneyDollarCircleLine className="icon" />
                    <p>Finance</p>
                </div>
                <hr className="hr" />
                <div className="allbutton">
                    <IoSettingsOutline className="icon" />
                    <p>Settings</p>
                </div>
            </div>
           
        </div>
    )
}

export default memo(InfluencerPages)