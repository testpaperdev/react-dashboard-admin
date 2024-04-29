import { userProfile } from "../../data/data";
import Cards from "../Cards/Cards";
import PieCharts from "../PieChart/PieCharts";
import Times from "../Times/Times";
import Transaction from "../Transaction/Transaction";
import Trans_table from "../TransactionTable/Trans_table";
import Voucher from "../Voucher/Voucher";
import "./ContentMain.css";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="top-title">
        {/* <h3>Welcome back {userProfile[0].name}!</h3> */}
        <h3 className="top-title-text">
          Dashboard,<div>here's what's happening with your store today.</div>
        </h3>
      </div>
      <div className="content-grid-one">
        <Transaction />
        <Cards />
        <Times />
        <Voucher />
      </div>
      <div className="content-grid-two">
        <Trans_table />
        <PieCharts />
      </div>
    </div>
  );
};

export default ContentMain;
