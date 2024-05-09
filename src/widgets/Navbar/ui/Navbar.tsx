import { classNames } from 'utils/classNames';
import { memo } from 'react';
import { Search } from 'components/Search';
import { Link } from 'react-router-dom';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => (
    <header className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.linkWrapper}>
            <Link className={cls.link} to="/influencers">Categories</Link>
            <Link className={cls.link} to="/about">About us</Link>
            <Link className={cls.link} to="/howitworks">How it works</Link>
            <Link className={cls.link} to="/registration">Registration as a influencer</Link>
            {/* <Link className={cls.link} to="/registration">My link  as a influencer</Link> */}
        </div>
        <div className={cls.rightWrapper}>
            <Search />
            <div className={cls.iconsWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M4 16H28M4 16C4 22.6274 9.37258 28 16 28M4 16C4 9.37258 9.37258 4 16 4M28 16C28 22.6274 22.6274 28 16 28M28 16C28 9.37258 22.6274 4 16 4M16 28C6.34082 17.44 11.9753 7.6 16 4M16 28C25.6592 17.44 20.0247 7.6 16 4" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 6.66667C17.9096 6.66667 19.7409 7.34095 21.0912 8.54118C22.4414 9.74142 23.2 11.3693 23.2 13.0667C23.2 15.6921 23.7935 17.6581 24.563 19.1039C25.5463 20.951 26.0379 21.8746 26.0105 22.0857C25.9786 22.3318 25.938 22.3995 25.7356 22.5434C25.5622 22.6667 24.6993 22.6667 22.9736 22.6667H9.02637C7.30067 22.6667 6.43782 22.6667 6.26436 22.5434C6.06203 22.3995 6.02138 22.3318 5.98948 22.0857C5.96214 21.8746 6.45376 20.951 7.43699 19.1039C8.20656 17.6581 8.80001 15.6921 8.80001 13.0667C8.80001 11.3693 9.55858 9.74142 10.9088 8.54118C12.2591 7.34095 14.0904 6.66667 16 6.66667ZM16 6.66667V4M12.472 26.6667C13.4137 27.4978 14.6506 28.0021 16.0053 28.0021C17.3601 28.0021 18.597 27.4978 19.5387 26.6667" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M6.66669 28C6.66669 22.8453 10.8454 18.6667 16 18.6667C21.1547 18.6667 25.3334 22.8453 25.3334 28M21.3334 9.33333C21.3334 12.2789 18.9455 14.6667 16 14.6667C13.0545 14.6667 10.6667 12.2789 10.6667 9.33333C10.6667 6.38781 13.0545 4 16 4C18.9455 4 21.3334 6.38781 21.3334 9.33333Z" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    </header>
));
