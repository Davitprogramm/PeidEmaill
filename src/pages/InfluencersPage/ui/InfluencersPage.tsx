// E:\PMP_new\pmp\front\src\pages\InfluencersPage\ui\InfluencersPage.tsx

import { classNames } from "utils/classNames";
import { memo } from "react";
import { Categories } from "entities/Categories";
import { InfluencersContainer } from "entities/Influencers";
import cls from "./InfluencersPage.module.scss";

interface InfluencersPageProps {
  className?: string;
}

const InfluencersPage = (props: InfluencersPageProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.InfluencersPage, {}, [className])}>
      <div className={cls.section}>
        <div className={cls.headerSection}>
          <h3 className={cls.sectionName}>Categories</h3>
          <div className={cls.paginationSection}>
            <div className={cls.pagination}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 6L9 12L15 18"
                  stroke="#A3AED0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={cls.pagination}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#A3AED0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <Categories />
        <InfluencersContainer />
      </div>
    </div>
  );
};

export default memo(InfluencersPage);
