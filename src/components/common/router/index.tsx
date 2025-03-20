import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { path } from '@/constants/path/path';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={path.HOME.path} element={<path.HOME.component />} />
                <Route path={path.LOGIN.path} element={<path.LOGIN.component />} />
                <Route path={path.SIGNUP.path} element={<path.SIGNUP.component />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;