import {useNavigate} from "react-router-dom";

export const useSidebar = () => {
    const navigate = useNavigate();
    const handleMenuClick = (link: string) => {
        navigate(link);
    }

    return {
        handleMenuClick,
    };
};