import { SearchListPackage } from "./SearchPackage/SearchListPackage";
import { SearchPackage } from "./SearchPackage/SearchPackage";
import { ProductData } from "../../../data/data";
import FilterPackage from "./FilterPackage/FilterPackage";
import "./PackageListContent.css";
import { Product } from "./ProductPackage/ProductPackage";
import { useState } from "react";
import SortPackage from "./SortPackage/SortPackage";

const PackageListContent = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="main1-content-holder">
      <div className="main-content-holder">
        <div className="top-title">
          <h3 className="top-title-text">
            Package List,<div>list of package updated here.</div>
          </h3>
        </div>
        <div className="card-content-package">
          <div className="content-top-package">
            {/* Search bar */}
            <div className="search-bar-container-product">
              <SearchPackage setResults={setResults} />
              {results && results.length > 0 && (
                <SearchListPackage results={results} />
              )}
            </div>
          </div>
          {/* Sort by button */}
          <div className="sort-content">
            <SortPackage />
          </div>
          <div className="content-grid-package">
            <div className="content-grid-package-product">
              {/* <ProductPackage src={ProductData[0].icon} /> */}
              <ul className="products">
                {ProductData.map((product) => (
                  <Product productObj={product} key={product.name} />
                ))}
              </ul>
            </div>
            <FilterPackage />
            {/* <Available /> */}

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
