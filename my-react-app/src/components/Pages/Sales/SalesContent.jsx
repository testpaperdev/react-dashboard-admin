import "./SalesContent.css";
import Available from "./SalesComponent/Available";
import Pending from "./SalesComponent/Pending/Pending";
import Today_Com from "./SalesComponent/Today_Com/Today_Com";
import Com_month from "./SalesComponent/Com_month/Com_month";
import Qty_month from "./SalesComponent/Qty_month/Qty_month";
import Yesterday_sales from "./SalesComponent/Yesterday_sales/Yesterday_sales";
import Today_sales from "./SalesComponent/Today_sales/Today_sales";
import Sales_month from "./SalesComponent/Sales_month/Sales_month";

import Statistic from "./SalesComponent/Statistic/Statistic";
// import data from "./SalesComponent/Statistic";

const SalesContent = () => {
  return (
    <div className="main1-content-holder">
      <div className="main-content-holder">
        <div className="top-title">
          <h3 className="top-title-text">
            Sales,<div>sales update.</div>
          </h3>
        </div>
        <div className="card-content">
          <div className="content-grid-sales">
            <Available />
            <div className="content-grid2-sales">
              <Yesterday_sales />
              <Today_sales />
              <Sales_month />
              <Qty_month />
            </div>
            {/* <Qty_month />
            <Yesterday_sales />
            <Today_sales />
            <Sales_month /> */}
          </div>
        </div>
        <div className="card-content2">
          <div className="content-grid-sales2">
            <Statistic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesContent;
