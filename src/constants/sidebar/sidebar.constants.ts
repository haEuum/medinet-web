import { path } from "@/constants/path/path";
import Home from "@/assets/sidebar/home";
import Emergency from "@/assets/sidebar/emergency";
import Paper from "@/assets/sidebar/paper";
import People from "@/assets/sidebar/people";
import Chat from "@/assets/sidebar/chat";

export const SIDEBAR_ITEM = [
    {
        items: [
            {
                name: "홈",
                icon: Home,
                link: path.HOME,
            },
        ],
    },
    {
        label: "환자 관리",
        items: [
            {
                name: "요청 환자",
                icon: Emergency,
                link: path.REQUEST_PATIENT,
            },
            {
                name: "환자 목록",
                icon: Paper,
                link: path.PATIENT_LIST,
            },
        ],
    },
    {
        label: "조직 관리",
        items: [
            {
                name: "당직 관리",
                icon: People,
                link: path.DUTY_LIST,
            },
            {
                name: "채팅",
                icon: Chat,
                link: path.CHAT,
            },
        ],
    },
];