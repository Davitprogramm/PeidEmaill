// //E:\PMP_new\pmp\front\src\entities\Influencers\ui\Influencers.tsx

import { classNames } from "utils/classNames";
import { memo } from "react";
import { Influencer } from "entities/Influencer";
import cls from "./Influencers.module.scss";

import { useState } from "react";

function Waytoteach(props: any) {
  return (
    <ul>
      <li>
        <p>
          <strong>{props.sometext1}</strong>
          <strong>{props.sometext2}</strong>
          <strong>{props.sometext3}</strong>
          simplep
        </p>
      </li>
    </ul>
  );
}

interface InfluencersProps {
  className?: string;
  influencers?: Array<any>; // Ensure that the array type matches the InfluencerData interface
  onSelectInfluencer?: (userName: string) => void;
}

export const Influencers = memo(
  ({ className, influencers, onSelectInfluencer }: InfluencersProps) => (
    <div className={classNames(cls.Influencers, {}, [className])}>
      {influencers?.map((influencer) => (
        <Influencer
          key={influencer.userName}
          {...influencer}
          onSelect={() =>
            onSelectInfluencer && onSelectInfluencer(influencer.userName)
          }
        />
      ))}
    </div>
  )
);

// export function Influencers(props: any) {
//   const { influencers } = props;
//   return (
//     <div>
//       <h3>{influencers[0].userName}</h3>
//       <Waytoteach sometext1="2" sometext2="3" sometext3="3" />
//       <h1>{"aaaaaaaaaaaaaaaa"}</h1>

//       {/* <InfluencersContainer /> */}
//       <strong>
//         {influencers.map((influencer: any) => (
//           <div key={influencer.userName}>
//             {/* Render influencer details here */}
//             <p>UserName: {influencer.userName}</p>
//             <p>Profession: {influencer.profession}</p>
//             <p>Charity: {influencer.charity}</p>

//             {/* Add more details as needed */}
//           </div>
//         ))}
//       </strong>
//     </div>
//   );
// }

export const InfluencersContainer: React.FC<{
  onSelectInfluencer: (userName: string) => void;
}> = ({ onSelectInfluencer }) => {
  console.log("Step 1: InfluencersContainer - Component rendered");

  return (
    <Influencers
      influencers={[
        {
          userName: "Artavazd Yeghiazaryan",
          profession: "Երևան ամսագիր • evnmag  ",
          charity: "1,000$",
          receivedMessages: 10,
          responseRate: "90%",
          responseTime: "72hr",
          infl_private_email: "shahen.grigoryan@gmail.com",
          image: "Ar_YEghiaz.jpg",
        },
        {
          userName: "2Valodik Minasyan",
          profession: "2Co-Founder at Krisp & 10Web",
          charity: "21,750$",
          receivedMessages: 223,
          responseRate: "288%",
          responseTime: "272hr",
          infl_private_email: "shahen.grigoryan@gmail.com",
          image: "user.jpg",
        },
        {
          userName: "Arto Minasyan",
          profession: "Co-Founder at Krisp & 10Web",
          charity: "1,7444$",
          receivedMessages: 23,
          responseRate: "88%",
          responseTime: "72hr",
          infl_private_email: "shahen.grigoryan@gmail.com",
          image: "Ar_YEghiaz.jpg",
        },
        {
          userName: "Alex  Minasyan",
          profession: "Co-Founder at Krisp & 10Web",
          charity: "1,75330$",
          receivedMessages: 23,
          responseRate: "88%",
          responseTime: "72hr",
          infl_private_email: "Alex@gmail.com",
          image: "Ar_YEghiaz.jpg",
        },
        {
          userName: "Max Minasyan",
          profession: "Co-Founder at Krisp & 10Web",
          charity: "1,73330$",
          receivedMessages: 23,
          responseRate: "88%",
          responseTime: "72hr",
          infl_private_email: "Max@gmail.com",
          image: "Ar_YEghiaz.jpg",
        },
        {
          userName: "Koko Minasyan",
          profession: "Co-Founder at Krisp & 10Web",
          charity: "1,3350$",
          receivedMessages: 23,
          responseRate: "88%",
          responseTime: "72hr",
          infl_private_email: "Koko@gmail.com",
          image: "Ar_YEghiaz.jpg",
        },
        {
          userName: "moko  oko",
          profession: "Co-Founder at Krisp & 10Web",
          charity: "90$",
          receivedMessages: 23,
          responseRate: "88%",
          responseTime: "72hr",
          infl_private_email: "Koko@gmail.com",
          image: "Ar_YEghiaz.jpg",
        },
      ]}
      onSelectInfluencer={onSelectInfluencer} // Pass the onSelectInfluencer function
    />
  );
};
