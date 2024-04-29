import "./Popup_profile.css";
import { AiOutlineClose } from "react-icons/ai";

const Popup = ({ isOpen, close }) => {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-inner">
        <button onClick={close} className="close-btn">
          <AiOutlineClose />
        </button>
        <h1>This is a Popup!</h1>
        <p>More content can go here.</p>
      </div>
    </div>
  );
};

export default Popup;
