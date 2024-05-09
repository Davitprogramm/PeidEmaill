import { Suspense } from 'react';
import { classNames } from 'utils/classNames';
import { AppRouter } from 'app/router/AppRouter';

function App() {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <AppRouter />
            </Suspense>
        </div>
    );
}

export default App;
