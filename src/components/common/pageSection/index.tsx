import './style.scss';
import Sidebar from "@/components/common/sidebar";
import Layout from "@/components/common/layout";
import {Outlet} from "react-router-dom";

const PageTemplate = () => {
    return (
        <div className='pageTemplate'>
            <Sidebar />
            <Layout>
                <Outlet />
            </Layout>
        </div>
    )
}

export default PageTemplate;