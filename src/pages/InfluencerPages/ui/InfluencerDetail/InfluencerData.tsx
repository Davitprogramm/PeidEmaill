import { memo } from "react"
import { getAssetPath } from "utils";
import { FiMapPin } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { LuUserCheck2 } from "react-icons/lu";
import { PiLinkSimpleBold } from "react-icons/pi";
import registerData from "./InfluencerMain"
interface InfluencerDataProps {
    [x: string]: any;
}
const InfluencerData = (props: InfluencerDataProps) => {
    const {
        className,
        userName,
        profession,
        receivedMessages,
        charity,
        responseTime,
        responseRate,
        image,
    } = props;
    const imagePath = getAssetPath(image);

    const link = `http://localhost:3000/influencerpage/${userName}`;


    // Define the function to handle copying the link
    const copyLink = () => {
        navigator.clipboard.writeText(link)
            .then(() => {
                console.log('Link copied to clipboard!');
                // Optionally, provide user feedback (e.g., showing a toast notification)
            })
            .catch((err) => {
                console.error('Failed to copy the link: ', err);
            });
    };


    return (
        <div className="Data">
            <div>
                <img
                    alt=""
                    src={imagePath || image}
                    className="Data_img"
                />
            </div>
            <div className="data">
                <p className="userName">{userName}</p>
                <p className="profession">{profession}</p>
                <div className="map_center">
                    <FiMapPin className="data_logo" />
                    <p className="map">Yerevan</p>
                </div>
                <div className="followers_center">
                    <IoLogoInstagram className="data_logo" />
                    <p className="followers">1.5k followers</p>
                </div>
                <div className="join_date">
                    <LuUserCheck2 className="data_logo" />
                    <p style={{ color: "gray", opacity: "60%" }}>Join Date</p>
                    <p>28.05.2022</p>
                </div>
            </div>
            <div className="data_button">
                <button className="animated_button" onClick={copyLink}>
                    <PiLinkSimpleBold style={{ fontSize: "20px" }} /> Copy Link
                </button>
            </div>

        </div>
    )
}

export default memo(InfluencerData)