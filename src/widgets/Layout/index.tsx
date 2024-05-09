import { classNames } from 'utils/classNames';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';
import { Footer } from 'widgets/Footer';
import cls from './Layout.module.scss';

interface LayoutProps {
    className?: string;
    navbar?: boolean;
    sidebar?: boolean;
    // children?: any;
}

export const Layout = memo(({ className, navbar, sidebar }: LayoutProps) => (
    <div className={classNames(cls.Layout, {}, [className])}>
        <div className={cls.topContent}>
            {sidebar && <div className={cls.sidebar}><Sidebar /></div>}
            <main className={cls.content}>
                {navbar && <Navbar />}
                <Outlet />
            </main>
        </div>
        <Footer />
    </div>
));
