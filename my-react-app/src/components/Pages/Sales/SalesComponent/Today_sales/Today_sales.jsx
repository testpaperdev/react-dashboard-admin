// import { iconsImgs } from "../../utils/images";
// import { SidebarData } from "../../../../../data/data";
import "../sales_style.css";
// import "./Today_sales.css";

const Today_sales = () => {
  return (
    <div className="grid-one-item grid-common grid-yesterdaysales-c2">
      {/* <img
        src={SidebarData[2].icon}
        className="sales-link-icon"
        alt={SidebarData.title}
      /> */}

      <div className="grid-sales-title-text">Today Sales</div>

      <div className="num-text">RM 170.00</div>
    </div>
  );
};

export default Today_sales;
