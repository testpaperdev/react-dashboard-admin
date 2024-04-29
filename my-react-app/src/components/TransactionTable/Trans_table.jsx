import "./Trans_table.css";
import { data } from "../../data/data";

const Trans_table = () => {
  return (
    <div className="grid-one-item grid-common grid-c2">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Recent Transactions</h3>
      </div>
      <div className="table1">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Total Modules</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.date}</td>
                <td>{item.totalModules}</td>
                <td>
                  <button className="btn_dw">Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button>Print Document</button> */}
      </div>
    </div>
  );
};

export default Trans_table;
