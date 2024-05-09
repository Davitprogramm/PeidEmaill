import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { classNames } from "utils/classNames";
import { Breadcrumb } from "widgets/Breadcrumb";
import { HowItWorks } from "entities/HowItWorks";
import { Rating, Stack } from "@mui/material";
import { InfluencerDetails } from "../InfluencerDetails/InfluencerDetails";
import { influencersData } from "../../../../entities/Influencers/ui/Influencers";
import cls from "./InfluencerPage.module.scss";


interface InfluencerPageProps {
  className?: string;
}

const InfluencerPage: React.FC<InfluencerPageProps> = ({ className }) => {
  const influencer = influencersData.find((e) => {
    return e.userName
  })


  return (
    <div className={classNames(cls.InfluencerPage, {}, [className])}>
      <div className={cls.container}>
        <Breadcrumb />
        <div className={cls.wrapper}>
          <div className={cls.influencerInfo}>
            {/* Pass the entire influencer object as props */}
            <InfluencerDetails {...influencer} />
          </div>
          <div className={cls.detailedInfo}>
            {/* Use the actual data from the found influencer object */}
            <div className={cls.card}>
              {/* <h3>{influencer.userName}</h3> */}
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
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
