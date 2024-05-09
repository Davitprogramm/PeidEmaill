import { memo } from "react"
import "./InfluencerPages.modules.scss"
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="Header">
            <div className="icon_div">
                <p className="Headers_p"><Link to="/influencers" className="Link">Categories</Link></p>
                <AiOutlineDown style={{ fontSize: "15px" }} />
            </div>

            <p className="Headers_p">About us</p>
            <p className="Headers_p">How it works</p>
            <p className="Headers_p">Registration as a Influencer</p>
        </div>
    )
}

export default memo(Header)