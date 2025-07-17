import {useEffect, useRef} from "react";
import {useLocation} from "react-router-dom";
import Logo from "@/assets/logo/logo.svg";
import {SIDEBAR_ITEM} from "@/constants/sidebar/sidebar.constants";
import {useSidebar} from "@/hooks/sidebar/useSidebar";
import Setting from "@/assets/sidebar/setting";
import Exit from "@/assets/sidebar/exit";
import useLogout from "@/hooks/auth/useLogout";
import "./style.scss";

const Sidebar = () => {
    const {handleMenuClick} = useSidebar();
    const location = useLocation();
    const indicatorRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<HTMLDivElement[]>([]);

    const isActive = (link: string) =>
        link === "/" ? location.pathname === "/" : location.pathname.startsWith(link);

    useEffect(() => {
        const current = itemRefs.current.find(
            (el) => el?.dataset.link === location.pathname
        );
        if (current && indicatorRef.current) {
            const offset = current.offsetTop;
            indicatorRef.current.style.transform = `translateY(${offset}px)`;
        }
    }, [location.pathname]);

    return (
        <nav className="sidebar">
            <div className="logo">
                <img src={Logo} width={128} height={22} alt="Medinet's Logo"/>
            </div>
            <div className="sidebar_item">
                <div className="active-indicator" ref={indicatorRef}/>
                {SIDEBAR_ITEM.map(({label, items}, sectionIndex) => (
                    <div key={label} className="sidebar_section">
                        {sectionIndex !== 0 && <div className="divider"/>}
                        {label && <div className="label">{label}</div>}
                        {items.map(({name, icon: Icon, link}, itemIndex) => (
                            <div
                                key={link}
                                data-link={link}
                                ref={(el) => {
                                    itemRefs.current = itemRefs.current.filter(Boolean);
                                    itemRefs.current.push(el!);
                                }}
                                className={`menu ${isActive(link) ? "active" : ""}`}
                                onClick={() => handleMenuClick(link)}
                            >
                                <Icon/>
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                ))}
                <div className="patient_list">
                    <span>응급 환자</span>
                    {/*임시 값*/}
                    <p>현재 응급 환자가<br/> 없습니다.</p>
                </div>
            </div>
            <div className="setting">
                <div className="setting_item">
                    <Setting/>
                    <span className="set">설정</span>
                </div>
                <div className="setting_item" onClick={useLogout}>
                    <Exit/>
                    <span className="logout">로그아웃</span>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;