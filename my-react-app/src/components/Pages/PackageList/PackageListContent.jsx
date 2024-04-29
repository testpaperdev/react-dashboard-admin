import { SearchListPackage } from "./SearchPackage/SearchListPackage";
import { SearchPackage } from "./SearchPackage/SearchPackage";
import "./PackageListContent.css";

const PackageListContent = () => {
  return (
    <div className="main1-content-holder">
      <div className="main-content-holder">
        <div className="top-title">
          <h3 className="top-title-text">
            Package List,<div>list of package updated here.</div>
          </h3>
        </div>
        <div className="card-content">
          {/* <div className="search-bar-container">
            <SearchPackage setResults={setResults} />
            {results && results.length > 0 && (
              <SearchListPackage results={results} />
            )}
          </div> */}
          <div className="content-grid-sales">
            {/* <Available /> */}
            <div className="content-grid2-sales">
              {/* <Yesterday_sales />
                <Today_sales />
                <Sales_month />
                <Qty_month /> */}
            </div>
            {/* <Qty_month />
              <Yesterday_sales />
              <Today_sales />
              <Sales_month /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageListContent;
