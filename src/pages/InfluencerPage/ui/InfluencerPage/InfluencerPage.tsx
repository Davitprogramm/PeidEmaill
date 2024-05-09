// InfluencerPage.tsx

import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { classNames } from "utils/classNames";
import { Breadcrumb } from "widgets/Breadcrumb";
import { HowItWorks } from "entities/HowItWorks";
import { Rating, Stack } from "@mui/material";
import { InfluencerDetails } from "../InfluencerDetails/InfluencerDetails";
import { influencersData } from "../../../../entities/Influencers/ui/Influencers";
import cls from "./InfluencerPage.module.scss";
import MessageModal from "../InfluencerDetails/MessageModal";
import InfluencerData from "pages/InfluencerPages/ui/InfluencerDetail/InfluencerData";

interface InfluencerPageProps {
  className?: string;
}



const InfluencerPage: React.FC<InfluencerPageProps> = ({ className }) => {

  // Attempt to find the influencer based on the URL parameter
  const influencer_name = influencersData.find(
    (inf) => inf.userName
  );

  if (!influencer_name) {
    return <div>Influencer not found.</div>;
  }

  // Proceed to use `influencer_name` directly in your component
  // No need to redefine the `influencer` object here unless you're transforming data

  return (
    <div className={classNames(cls.InfluencerPage, {}, [className])}>
      <div className={cls.container}>
        <Breadcrumb />
        <div className={cls.wrapper}>
          <div className={cls.influencerInfo}>
            {/* Pass the found influencer object directly to `InfluencerDetails` */}
            <InfluencerDetails {...influencer_name}/>
          </div>
          <div className={cls.detailedInfo}>
            <div className={cls.card}>
              {/* Use the influencer's userName from the found object */}
              <h3> {influencer_name.userName}</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </p>
            </div>
            <div className={cls.card}>
              <h3>How it Works</h3>
              <HowItWorks />
            </div>
            <div className={cls.card}>
              <h3>Rating</h3>
              <Stack direction="row" spacing={2} alignItems="center">
                <div className={cls.ratingValue}>4.5</div>
                <Rating name="read-only" value={4.5} readOnly />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default memo(InfluencerPage);
