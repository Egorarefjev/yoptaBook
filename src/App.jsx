import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainTemplate from './components/MainTemplate';
import Result from './pages/Result';
import DictionaryPage from './pages/dictionary/DictionaryPage';
import Login from "./pages/login/login";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainTemplate />}>
                    <Route index element={<Login />} />
                    <Route path="result" element={<Result />} />
                    <Route path="/dictionary" element={<DictionaryPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
