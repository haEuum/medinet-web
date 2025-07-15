import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/toast/style.scss";

const Toast = (type: "success" | "error" | "info" | "warning", message: string) => {
    const progressColorClass = `progress-${type}`;

    toast(message, {
        type,
        className: "toast-container",
        progressClassName: progressColorClass,
    });
};

export { Toast };