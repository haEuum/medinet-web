import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home/page';
import Login from '@/pages/login/page';
import Signup from '@/pages/signup/page';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;