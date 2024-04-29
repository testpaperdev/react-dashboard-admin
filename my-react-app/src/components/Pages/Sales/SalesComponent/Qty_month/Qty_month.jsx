// import { iconsImgs } from "../../utils/images";
// import { SidebarData } from "../../../../../data/data";
import "../sales_style.css";
import "./Qty_month.css";

const Qty_month = () => {
  return (
    <div className="grid-one-item grid-common grid-qtymonth-c2">
      {/* <img
        src={SidebarData[2].icon}
        className="sales-link-icon"
        alt={SidebarData.title}
      /> */}

      <div className="grid-sales-title-text">Quantity (April)</div>

      <div className="num-text">Qty 23</div>

      {/* <div className="data-Number grid-num1">21</div>
      <h3 className="action-text grid-num1">Transaction(s)</h3>
      <h3 className="update-text">Last Transaction: 20 Aug 2023</h3> */}
    </div>
  );
};

export default Qty_month;
