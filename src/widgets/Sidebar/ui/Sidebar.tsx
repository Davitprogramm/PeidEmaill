import { classNames } from 'utils/classNames';
import { memo } from 'react';
import { Breadcrumb } from 'widgets/Breadcrumb';
import cls from './Sidebar.module.scss';
import { Filters } from '../../Filters';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => (
    <aside
        className={classNames(cls.Sidebar, {}, [className])}
    >
        <div className={cls.container}>
            <div className={cls.appName}><h2>Primess</h2></div>
            <Breadcrumb />
            <Filters />
        </div>
    </aside>
));
