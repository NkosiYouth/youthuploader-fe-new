import { HiOutlineUpload, HiOutlineEye, HiOutlineUser } from "react-icons/hi";
import { ROUTES } from "./routes";

export const MENU_ITEMS = [
    {
        link: ROUTES.UPLOAD_DOCUMENTS,
        title: "Upload Document",
        icon: HiOutlineUpload,
    },
    {
        link: ROUTES.VERIFY_DOCUMENTS,
        title: "Validate Profiles",
        icon: HiOutlineEye,
    },
    {
        link: ROUTES.SPLIT_RENAME_DOC,
        title: "Split & Rename",
        icon: HiOutlineUser,
    },
];