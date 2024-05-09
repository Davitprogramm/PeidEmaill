import { memo } from "react";
import InfluencerAccount from "../InfluencerDetail/InfluencerAccount"
import Header from "../InfluencerDetail/InfluencerHeader"
import { useParams } from "react-router-dom";
import { influencersData } from "entities/Influencers/ui/Influencers";
import InfluencerData from "../InfluencerDetail/InfluencerData";
import InfluencerMain, { RegisterData } from "../InfluencerDetail/InfluencerMain";

interface InfluencerPageProps {
    className?: string;
}


const InfluencerPages: React.FC<InfluencerPageProps> = () => {
    const { name_from_url } = useParams<{ name_from_url?: string }>();
    const influencer = influencersData.find(
        (inf) => inf.userName === decodeURIComponent(name_from_url || "")
    );

    if (!influencer) {
        return <div>Influencer not found.</div>;
    }


    return (
        <div >
            <div style={{ display: "flex" }}>
                <div>
                    <InfluencerAccount {...influencer} />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div >
                        <div >
                            <Header />
                        </div>
                        <div>
                            <p style={{ marginLeft: "20px", marginTop: "50px", fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: "40px" }}>Account</p>
                            <InfluencerData {...influencer} />
                        </div>
                        <div>
                            <InfluencerMain />
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default memo(InfluencerPages)