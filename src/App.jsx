import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { appRoutes } from './routes/routes';
import MainTemplate from './components/MainTemplate';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainTemplate />}>
                    {appRoutes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
