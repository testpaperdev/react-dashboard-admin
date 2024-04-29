// import { iconsImgs } from "../../utils/images";
import "./Transaction.css";

const Transaction = () => {
  return (
    <div className="grid-one-item grid-common grid-c2">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Total Transaction(s)</h3>
      </div>
      <div className="data-Number grid-num1">21</div>
      <h3 className="action-text grid-num1">Transaction(s)</h3>
      <h3 className="update-text">Last Transaction: 20 Aug 2023</h3>
    </div>
  );
};

export default Transaction;
