import { memo, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'widgets/Layout';
import { routeConfig } from './routeConfig';

const AppRouterImp = () => (

    <Routes>
        <Route
            key={routeConfig.main.path}
            path={routeConfig.main.path}
            element={<Layout navbar />}
        >
            <Route
                key={routeConfig.main.path}
                path={routeConfig.main.path}
                element={(
                    <Suspense fallback="Загрузка">
                        {routeConfig.main.element}
                    </Suspense>
                )}
            />
        </Route>
        <Route
            key={routeConfig.influencers.path}
            path={routeConfig.influencers.path}
            element={<Layout sidebar navbar />}
        >
            <Route
                key={routeConfig.influencers.path}
                path={routeConfig.influencers.path}
                element={(
                    <Suspense fallback="Загрузка">
                        {routeConfig.influencers.element}
                    </Suspense>
                )}
            />
        </Route>
        <Route
            key={routeConfig.influencer_details.path}
            path={routeConfig.influencer_details.path}
            element={<Layout navbar />}
        >
            <Route
                key={routeConfig.influencer_details.path}
                path={routeConfig.influencer_details.path}
                element={(
                    <Suspense fallback="Загрузка">
                        {routeConfig.influencer_details.element}
                    </Suspense>
                )}
            />
        </Route>
        <Route
            key={routeConfig.not_found.path}
            path={routeConfig.not_found.path}
            element={(
                <Suspense fallback="Загрузка">
                    {routeConfig.not_found.element}
                </Suspense>
            )}
        />
        <Route
            key={routeConfig.influencer_pages.path}
            path={routeConfig.influencer_pages.path}
            element={(
                <Suspense fallback="download">
                    {routeConfig.influencer_pages.element}
                </Suspense>
            )}
        />
    </Routes>
);

export const AppRouter = memo(AppRouterImp);
