import { classNames } from 'utils/classNames';
import { memo } from 'react';
import cls from './Breadcrumb.module.scss';

interface BreadcrumbProps {
    className?: string;
}

export const Breadcrumb = memo(({ className }: BreadcrumbProps) => (
    <nav className={classNames(cls.Breadcrumb, {}, [className])}>
        <div className={cls.wrapper}>
            <a className={cls.link}>Home</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M17.5626 16L10.9626 9.40001L12.848 7.51468L21.3333 16L12.848 24.4853L10.9626 22.6L17.5626 16Z" fill="#2B3674" />
            </svg>
            <a className={cls.link}>Sport</a>
        </div>
    </nav>
));
