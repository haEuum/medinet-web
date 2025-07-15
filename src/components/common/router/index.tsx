import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { path } from '@/constants/path/path';
import Login from '@/pages/login/page';
import Signup from '@/pages/signup/page';
import Home from '@/pages/home/page';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={path.LOGIN} element={<Login />} />
                <Route path={path.SIGNUP} element={<Signup />} />
                <Route path={path.HOME} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;