//E:\PMP_new\pmp\front\src\entities\Influencers\ui\Influencers.tsx

import { classNames } from "utils/classNames";
import { memo } from "react";
import { Influencer } from "entities/Influencer";
import cls from "./Influencers.module.scss";

import { useState } from "react";

interface InfluencerData {
  userName: string;
  profession: string;
  charity: string;
  receivedMessages: number;
  responseRate: string;
  responseTime: string;
  infl_private_email: string;
}

interface InfluencersProps {
  className?: string;
  influencers?: Array<InfluencerData>; // Ensure that the array type matches the InfluencerData interface
}

// interface InfluencersProps {
//     className?: string;
//     influencers?: Array<any>;
// }

// export const Influencers = memo(({ className, influencers }: InfluencersProps) => (
//     <div className={classNames(cls.Influencers, {}, [className])}>
//         {influencers?.map((influencer) => (
//             <Influencer
//                 key={influencer.userName}
//                 {...influencer}
//             />
//         ))}
//     </div>
// ));

export const Influencers = memo(
  ({ className, influencers }: InfluencersProps) => {
    const [selectedInfluencer, setSelectedInfluencer] =
      useState<InfluencerData | null>(null);

    const handleInfluencerClick = (influencer: InfluencerData) => {
      setSelectedInfluencer(influencer);
    };

    return (
      <div className={classNames(cls.Influencers, {}, [className])}>
        {influencers?.map((influencer) => (
          <div
            key={influencer.userName}
            onClick={() => handleInfluencerClick(influencer)}
          >
            <Influencer {...influencer} />
          </div>
        ))}
        {selectedInfluencer && (
          // You can render a modal or detailed information here based on the selectedInfluencer
          <div>
            {/* Render detailed information or modal based on selectedInfluencer */}
            <p>Selected Influencer: {selectedInfluencer.userName}</p>
            <p>Profession: {selectedInfluencer.profession}</p>
            <p>Charity: {selectedInfluencer.charity}</p>
            {/* Add more details as needed */}
          </div>
        )}
      </div>
    );
  }
);

export const InfluencersContainer = () => (
  <Influencers
    influencers={[
      {
        userName: "Arto Minasyan COntainer",
        profession: "Co-Founder at Krisp & 10Web",
        charity: "1,750$",
        receivedMessages: 23,
        responseRate: "88%",
        responseTime: "72hr",
        infl_private_email: "shahen.grigoryan@gmail.com",
      },
      {
        userName: "Valodik Minasyan",
        profession: "Co-Founder at Krisp & 10Web",
        charity: "1,750$",
        receivedMessages: 23,
        responseRate: "88%",
        responseTime: "72hr",
        infl_private_email: "shahen.grigoryan@gmail.com",
      },
      {
        userName: "Arto Minasyan",
        profession: "Co-Founder at Krisp & 10Web",
        charity: "1,750$",
        receivedMessages: 23,
        responseRate: "88%",
        responseTime: "72hr",
        infl_private_email: "shahen.grigoryan@gmail.com",
      },
      {
        userName: "Alex  Minasyan",
        profession: "Co-Founder at Krisp & 10Web",
        charity: "1,750$",
        receivedMessages: 23,
        responseRate: "88%",
        responseTime: "72hr",
        infl_private_email: "Alex@gmail.com",
      },
      {
        userName: "Max Minasyan",
        profession: "Co-Founder at Krisp & 10Web",
        charity: "1,750$",
        receivedMessages: 23,
        responseRate: "88%",
        responseTime: "72hr",
        infl_private_email: "Max@gmail.com",
      },
      {
        userName: "Koko Minasyan",
        profession: "Co-Founder at Krisp & 10Web",
        charity: "1,750$",
        receivedMessages: 23,
        responseRate: "88%",
        responseTime: "72hr",
        infl_private_email: "Koko@gmail.com",
      },
      {
        userName: "moko  oko",
        profession: "Co-Founder at Krisp & 10Web",
        charity: "1,750$",
        receivedMessages: 23,
        responseRate: "88%",
        responseTime: "72hr",
        infl_private_email: "Koko@gmail.com",
      },
    ]}
  />
);
