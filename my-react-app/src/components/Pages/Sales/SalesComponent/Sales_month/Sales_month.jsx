// import { iconsImgs } from "../../utils/images";
// import { SidebarData } from "../../../../../data/data";
import "../sales_style.css";
// import "./Sales_month.css";

const Sales_month = () => {
  return (
    <div className="grid-one-item grid-common grid-yesterdaysales-c2">
      {/* <img
        src={SidebarData[2].icon}
        className="sales-link-icon"
        alt={SidebarData.title}
      /> */}

      <div className="grid-sales-title-text">Total Sales</div>

      <div className="num-text">RM 495.00</div>
    </div>
  );
};

export default Sales_month;
