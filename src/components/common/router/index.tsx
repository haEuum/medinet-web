import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {path} from '@/constants/path/path';
import Login from '@/pages/login/page';
import Signup from '@/pages/signup/page';
import Home from '@/pages/home/page';
import PageTemplate from "@/components/common/pageSection";
import RequireAuth from "@/utils/requireAuth/requrire";
import PatientList from "@/pages/patient/list/page";
import PatientRequest from "@/pages/patient/request/page";
import Duty from "@/pages/duty/page";
import Chat from "@/pages/chat/page";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={path.LOGIN} element={<Login/>}/>
                <Route path={path.SIGNUP} element={<Signup/>}/>
                <Route path={path.HOME} element={
                    <RequireAuth>
                        <PageTemplate/>
                    </RequireAuth>
                }>
                    <Route index element={<Home/>}/>
                    <Route path={path.PATIENT_LIST} element={<PatientList/>}/>
                    <Route path={path.REQUEST_PATIENT} element={<PatientRequest/>}/>
                    <Route path={path.DUTY_LIST} element={<Duty/>}/>
                    <Route path={path.CHAT} element={<Chat/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;