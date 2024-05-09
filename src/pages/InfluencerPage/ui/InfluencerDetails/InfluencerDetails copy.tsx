// E:\PMP_new\pmp\front\src\pages\InfluencerPage\ui\InfluencerDetails\InfluencerDetails.tsx
import { classNames } from "utils/classNames";
import userImage from "assets/images/user.jpg";
import cls from "./InfluencerDetails.module.scss";
import { useState } from "react";
import MessageModal from "./MessageModal"; // Update the import statement
import { getAssetPath } from "utils"; // Import a utility function to generate the asset path
import { InfluencersContainer } from "../../../../entities/Influencers/ui/Influencers";

import { useParams } from "react-router-dom";

import React, { useEffect } from "react";

interface InfluencerDetailsProps {
  className?: string;
  [x: string]: any;
}

const charitySvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      d="M19.5001 13.1784L12.0001 20.6064L4.50006 13.1784C4.00536 12.6971 3.6157 12.1185 3.3556 11.4791C3.09551 10.8397 2.97062 10.1534 2.98879 9.46337C3.00697 8.77335 3.16782 8.09457 3.46121 7.46978C3.75461 6.84498 4.17419 6.28769 4.69354 5.83302C5.21289 5.37834 5.82076 5.03613 6.47887 4.82792C7.13697 4.61971 7.83106 4.55002 8.51743 4.62324C9.20379 4.69646 9.86756 4.911 10.4669 5.25335C11.0663 5.59569 11.5883 6.05844 12.0001 6.61244C12.4136 6.06246 12.9362 5.60376 13.5352 5.26504C14.1341 4.92633 14.7966 4.71489 15.481 4.64396C16.1654 4.57303 16.8571 4.64414 17.5128 4.85283C18.1685 5.06152 18.7741 5.40331 19.2916 5.8568C19.8091 6.31029 20.2275 6.86572 20.5205 7.48833C20.8135 8.11094 20.9748 8.78732 20.9944 9.47515C21.0139 10.163 20.8913 10.8474 20.6342 11.4857C20.3771 12.1239 19.991 12.7023 19.5001 13.1844"
      stroke="#4318FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6.60645L8.70697 9.89945C8.5195 10.087 8.41418 10.3413 8.41418 10.6064C8.41418 10.8716 8.5195 11.1259 8.70697 11.3134L9.24997 11.8564C9.93997 12.5464 11.06 12.5464 11.75 11.8564L12.75 10.8564C13.3467 10.2597 14.1561 9.92447 15 9.92447C15.8439 9.92447 16.6532 10.2597 17.25 10.8564L19.5 13.1064"
      stroke="#4318FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 16.1064L14.5 18.1064"
      stroke="#4318FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 13.6064L17 15.6064"
      stroke="#4318FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const InfluencerDetails = (props: InfluencerDetailsProps) => {
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

  const handleSelectInfluencer = (userName: string) => {
    // Do something with the selected influencer's name
    console.log(`Selected Influencer oooooooooo: ${userName}`);
    // You can pass this information to InfluencerDetails.tsx as needed
  };

  const imagePath = getAssetPath(image);
  // console.log(
  //   "\frontsrcpagesInfluencerPagenfluencerDetailsnfluencerDetails.tsx ",
  //   className
  // ); // Add this line to log the image path

  // const { name }: { name?: string } = useParams();

  // useEffect(() => {
  //   // Do something with the influencer's name (e.g., log it)
  //   console.log("Influencer's name from URL:", name);
  // }, [name]);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = async () => {
    // (Axios request code remains unchanged)
  };

  // Function to open the modal
  const openModal = () => {
    console.log("Opening modal");
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    console.log("Closing modal");
  };

  console.log("userName issss :", { userName }); // Add this lin


  return (
    <div className={classNames(cls.InfluencerDetails, {}, [className])}>
      <div className={cls.wrapper}>
        <div className={cls.imageContainer}>
          {/* <img alt="" className={cls.influencerImage} src={image ?? userImage} /> */}
          <img
            alt=""
            className={cls.influencerImage}
            src={imagePath || image}
          />
          <div className={cls.favorite}>
            {/* (Favorite SVG code remains unchanged) */}
          </div>
        </div>
        <div className={cls.detailedInfos}>
          <div className={cls.userName}>{userName}</div>

          <div className={cls.profession}>{profession}</div>
          <div className={cls.charity}>
            {charitySvg}
            <span className={cls.charityWord}>Charity</span>
            <span className={cls.charityAmount}>1,75000$</span>
          </div>
        </div>
        <div className={cls.detailedInfos}>
          {/* Button to open modal */}
          <button className={cls.customButton} onClick={openModal}>
            Message $
          </button>

          {/* MessageModal component */}
          <MessageModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            recipientName={props.Current_Rec_name}
          />
        </div>
      </div>
    </div>
  );
};
