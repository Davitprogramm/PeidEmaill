// E:\PMP_new\pmp\front\src\entities\Influencer\ui\Influencer.tsx

import { classNames } from "utils/classNames";
import userImage from "assets/images/user.jpg";
// import { Link } from "react-router-dom";
import cls from "./Influencer.module.scss";

import { getAssetPath } from "utils"; // Import a utility function to generate the asset path
import { Link, LinkProps } from "react-router-dom";

interface InfluencerProps {
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

export const Influencer = (props: InfluencerProps) => {
  const {
    className,
    userName,
    profession,
    charity,
    receivedMessages,
    responseRate,
    responseTime,
    infl_private_email,
    image,
  } = props;

  // Use the utility function to generate the asset path
  const imagePath = getAssetPath(image);

  console.log("influencer.tsx: -> Image Path:", imagePath); // Add this line to log the image path
  console.log("influencer.tsx: -> className:", className); // Add this line to log the image path
  console.log("influencer.tsx: -> User name - >>> :", userName); // Add this line to log the image path

  interface CustomLinkProps extends LinkProps {
    to: {
      pathname: string;
      state: {
        username1: number;
      };
    };
  }

  return (
    // <Link to="2" className={classNames(cls.Influencer, {}, [className])}>
    // <Link to="2" className={classNames(cls.Influencer, {}, [className])}>

    <Link
      to={`/influencers/${userName}`}
      className={classNames(cls.Influencer, {}, [className])}
    >
      {/* ... */}

      <div className={cls.wrapper}>
        <div className={cls.imageContainer}>
          <img
            alt=""
            className={cls.influencerImage}
            src={imagePath || userImage}
          />
          <div className={cls.favorite}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 6.80335C10.2006 4.70634 7.19377 4.05826 4.93923 5.9785C2.68468 7.89874 2.36727 11.1093 4.13778 13.3804C5.60984 15.2686 10.0648 19.2511 11.5249 20.54C11.6882 20.6842 11.7699 20.7563 11.8652 20.7847C11.9483 20.8094 12.0393 20.8094 12.1225 20.7847C12.2178 20.7563 12.2994 20.6842 12.4628 20.54C13.9229 19.2511 18.3778 15.2686 19.8499 13.3804C21.6204 11.1093 21.3417 7.87854 19.0484 5.9785C16.7551 4.07846 13.7994 4.70634 12 6.80335Z"
                stroke="#4318FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className={cls.detailedInfos}>
          <div className={cls.userName}>{userName}</div>
          <div className={cls.profession}>{profession}</div>
          <div className={cls.charity}>
            {charitySvg}
            <span className={cls.charityWord}>Charity </span>

            <span className={cls.charityAmount}>{charity}</span>
          </div>
        </div>
        <div className={cls.detailedInfos}>
          <div className={cls.detailedInfo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M15 18.6065L17 20.6065L21 16.6065M20 12.6065V9.40648C20 7.72632 20 6.88624 19.673 6.2445C19.3854 5.68002 18.9265 5.22108 18.362 4.93346C17.7202 4.60648 16.8802 4.60648 15.2 4.60648H7.8C6.11984 4.60648 5.27976 4.60648 4.63803 4.93346C4.07354 5.22108 3.6146 5.68002 3.32698 6.2445C3 6.88624 3 7.72632 3 9.40648V12.8065C3 14.4866 3 15.3267 3.32698 15.9684C3.6146 16.5329 4.07354 16.9919 4.63803 17.2795C5.27976 17.6065 6.11984 17.6065 7.8 17.6065H11M3.36 6.18648L9.50097 11.0073C10.2144 11.578 10.5711 11.8634 10.9667 11.9728C11.3157 12.0694 11.6843 12.0694 12.0333 11.9728C12.4289 11.8634 12.7856 11.578 13.499 11.0073L19.64 6.18648"
                stroke="#A3AED0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={cls.detail}>Messages</span>
            <span>{receivedMessages}</span>
          </div>
          <div className={cls.detailedInfo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M21 16.412C20.4836 15.3321 19.4307 14.6065 18.1765 14.6065C16.4222 14.6065 15 16.0616 15 17.8565C15 19.6514 16.4222 21.1065 18.1765 21.1065C18.8877 21.1065 19.548 20.8673 20.0815 20.4633M22 14.6065V17.6065H19M20 10.6065V9.40648C20 7.72632 20 6.88624 19.673 6.2445C19.3854 5.68002 18.9265 5.22108 18.362 4.93346C17.7202 4.60648 16.8802 4.60648 15.2 4.60648H7.8C6.11984 4.60648 5.27976 4.60648 4.63803 4.93346C4.07354 5.22108 3.6146 5.68002 3.32698 6.2445C3 6.88624 3 7.72632 3 9.40648V12.8065C3 14.4866 3 15.3267 3.32698 15.9684C3.6146 16.5329 4.07354 16.9919 4.63803 17.2795C5.27976 17.6065 6.11984 17.6065 7.8 17.6065H11M3.36 6.18648L9.50097 11.0073C10.2144 11.578 10.5711 11.8634 10.9667 11.9728C11.3157 12.0694 11.6843 12.0694 12.0333 11.9728C12.4289 11.8634 12.7856 11.578 13.499 11.0073L19.64 6.18648"
                stroke="#A3AED0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={cls.detail}>Response Rate</span>
            <span>{responseRate}</span>
          </div>

          <div className={cls.detailedInfo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M4 12.6065C4 17.0248 7.58172 20.6065 12 20.6065C16.4183 20.6065 20 17.0248 20 12.6065C20 8.1882 16.4183 4.60648 12 4.60648C9.61061 4.60648 7.46589 5.65399 6 7.31483C5.91595 7.41005 5.83413 7.5073 5.75463 7.60648M12 8.60648V12.6065L14.5 15.1065M5.75391 4.61038V7.61038H8.75391"
                stroke="#A3AED0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={cls.detail}>Response Time</span>
            <span>{responseTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
