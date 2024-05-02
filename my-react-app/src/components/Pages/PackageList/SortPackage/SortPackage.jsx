import { useState } from "react";
import "./SortPackage.css";
import { FaArrowDownLong } from "react-icons/fa6";
import { useMatch } from "react-router-dom";

const types = ["Relevance", "Latest", "Top Sales", "Price"];

const ButtonToggle = ({ active, children, ...props }) => {
  const style = {
    width: "80px",
    height: "25px",
    boxShadow: "0 0 4px 0 salmon",
    borderRadius: "10px",
    marginLeft: "10px",
    color: "salmon",
    fontSize: "12px",
    fontWeight: "600",
    backgroundColor: active ? "rgb(251, 219, 216)" : "",
  };

  return (
    <button style={style} {...props}>
      {children}
    </button>
  );
};

export default function SortPackage() {
  const [active, setActive] = useState(false);
  return (
    <div>
      {types.map((type) => (
        <ButtonToggle
          active={active === type}
          onClick={() => setActive(type)}
          key=""
        >
          {type}
        </ButtonToggle>
      ))}
    </div>
  );
}

// export default SortPackage;

function CustomButton({ to, className, children, ...props }) {
  const match = useMatch(to);
  const buttonClassName = `${className || ""} ${match ? "active" : ""}`.trim();

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
