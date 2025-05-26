import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainTemplate from './components/MainTemplate';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainTemplate />}>
                    <Route index element={<Home />} />
                    <Route path="quiz/:id" element={<Quiz />} />
                    <Route path="result" element={<Result />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
