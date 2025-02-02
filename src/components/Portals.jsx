import { createPortal } from "react-dom";
import Modal from "./Modal";
const mountElement = document.getElementById("portal");
const Portals = ({isOpen}) => {
    
    return createPortal(<>{isOpen && <Modal/>}</>, mountElement);
};

export default Portals;