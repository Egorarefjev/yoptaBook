import { Route, Routes, Navigate } from 'react-router-dom';
import { appRoutes } from './routes/routes.jsx';
import MainTemplate from './components/MainTemplate';
import { NotificationRenderer } from './components/ui/notification/NotificationRenderer';

function renderRoutes(routes) {
    return routes.map(({ path, element, children, index }) => (
        <Route key={path || 'index'} path={path} element={element} index={index}>
            {children && renderRoutes(children)}
        </Route>
    ));
}

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainTemplate />}>
                    {renderRoutes(appRoutes)}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>

            <NotificationRenderer />
        </>
    );
}
