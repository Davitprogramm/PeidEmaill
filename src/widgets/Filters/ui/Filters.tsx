import { classNames } from 'utils/classNames';
import { memo } from 'react';
import { Slider } from '@mui/material';
import cls from './Filters.module.scss';

interface FiltersProps {
    className?: string;
}

const unCheckedBox = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M5.33325 11.7333C5.33325 9.49312 5.33325 8.37301 5.76923 7.51737C6.15272 6.76472 6.76464 6.1528 7.51729 5.7693C8.37294 5.33333 9.49304 5.33333 11.7333 5.33333H20.2666C22.5068 5.33333 23.6269 5.33333 24.4825 5.7693C25.2352 6.1528 25.8471 6.76472 26.2306 7.51737C26.6666 8.37301 26.6666 9.49312 26.6666 11.7333V20.2667C26.6666 22.5069 26.6666 23.627 26.2306 24.4826C25.8471 25.2353 25.2352 25.8472 24.4825 26.2307C23.6269 26.6667 22.5068 26.6667 20.2666 26.6667H11.7333C9.49304 26.6667 8.37294 26.6667 7.51729 26.2307C6.76464 25.8472 6.15272 25.2353 5.76923 24.4826C5.33325 23.627 5.33325 22.5069 5.33325 20.2667V11.7333Z" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const checkedBox = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M5.33325 11.7333C5.33325 9.49312 5.33325 8.37301 5.76923 7.51737C6.15272 6.76472 6.76464 6.1528 7.51729 5.7693C8.37294 5.33333 9.49304 5.33333 11.7333 5.33333H20.2666C22.5068 5.33333 23.6269 5.33333 24.4825 5.7693C25.2352 6.1528 25.8471 6.76472 26.2306 7.51737C26.6666 8.37301 26.6666 9.49312 26.6666 11.7333V20.2667C26.6666 22.5069 26.6666 23.627 26.2306 24.4826C25.8471 25.2353 25.2352 25.8472 24.4825 26.2307C23.6269 26.6667 22.5068 26.6667 20.2666 26.6667H11.7333C9.49304 26.6667 8.37294 26.6667 7.51729 26.2307C6.76464 25.8472 6.15272 25.2353 5.76923 24.4826C5.33325 23.627 5.33325 22.5069 5.33325 20.2667V11.7333Z" stroke="#4318FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const unCheckedRadio = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="#A3AED0" strokeWidth="2" />
    </svg>
);

const checkedRadio = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="#4318FF" strokeWidth="2" />
    </svg>
);

export const Filters = memo(({ className }: FiltersProps) => (
    <div className={classNames(cls.Filters, {}, [className])}>
        <div className={cls.wrapper}>
            <div className={cls.filterName}>
                Social
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18 9.5L12 15.5L6 9.5" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className={cls.items}>
                <div className={cls.filterItem}>
                    {unCheckedBox}
                    Instagram
                </div>
                <div className={cls.filterItem}>
                    {checkedBox}
                    Facebook
                </div>
                <div className={cls.filterItem}>
                    {unCheckedBox}
                    Linkedin
                </div>
                <div className={cls.filterItem}>
                    {unCheckedBox}
                    Tik tok
                </div>
            </div>
        </div>
        <div className={cls.divide} />
        <div className={cls.wrapper}>
            <div className={cls.filterName}>
                Price
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18 9.5L12 15.5L6 9.5" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className={cls.items}>
                <div className={cls.filterItem}>
                    {unCheckedRadio}
                    $0 - 25
                </div>
                <div className={cls.filterItem}>
                    {checkedRadio}
                    $25 - 50
                </div>
                <div className={cls.filterItem}>
                    {unCheckedRadio}
                    $50 - 100
                </div>
                <div className={cls.filterItem}>
                    {unCheckedRadio}
                    $100 - 200
                </div>
                <div className={cls.filterItem}>
                    {unCheckedRadio}
                    Free
                </div>
            </div>

            <Slider defaultValue={[30, 70]} sx={{ color: '#A3AED0' }} />
        </div>
        {/* <div className={cls.divide} /> */}

     


        <div className={cls.wrapper}>
            <div className={cls.filterName}>
                Response time
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18 9.5L12 15.5L6 9.5" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className={cls.items}>
                <div className={cls.filterItem}>
                    {unCheckedRadio}
                    1 day
                </div>
                <div className={cls.filterItem}>
                    {checkedRadio}
                    2 days
                </div>
                <div className={cls.filterItem}>
                    {unCheckedRadio}
                    3 days
                </div>
                <div className={cls.filterItem}>
                    {unCheckedRadio}
                    4 days
                </div>
                <div className={cls.filterItem}>
                    {unCheckedRadio}
                    5 days
                </div>
                <div className={cls.filterItem}>
                    {unCheckedRadio}
                    6 days
                </div>
                <div className={cls.filterItem}>
                    {unCheckedRadio}
                    6 days
                </div>
                <div className={cls.filterItem}>
                    {unCheckedRadio}
                    24 hr
                </div>
            </div>
        </div>
        <div className={cls.divide} />
        <div className={cls.wrapper}>
            <div className={cls.filterName}>
                Region
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18 9.5L12 15.5L6 9.5" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className={cls.items}>
                <div className={cls.filterItem}>
                    {checkedRadio}
                    Armenia
                </div>
                <div className={cls.filterItem}>
                    {unCheckedRadio}
                    USA
                </div>
                <div className={cls.filterItem}>
                    {unCheckedRadio}
                    Japan
                </div>
                <div className={cls.filterItem}>
                    {unCheckedRadio}
                    Italy
                </div>
            </div>
        </div>
    </div>
));
