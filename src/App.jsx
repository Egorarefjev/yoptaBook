import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainTemplate from './components/MainTemplate';
import Home from './pages/Home';
import Result from './pages/Result';
import DictionaryPage from './pages/dictionary/DictionaryPage';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainTemplate />}>
                    <Route index element={<Home />} />
                    <Route path="result" element={<Result />} />
                    <Route path="/dictionary" element={<DictionaryPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
