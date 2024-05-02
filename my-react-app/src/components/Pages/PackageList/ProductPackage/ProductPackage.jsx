import { ProductData } from "../../../../data/data";
import "./ProductPackage.css";

export function Product({ productObj }) {
  return (
    <li className={`product ${productObj.soldOut ? "sold-out" : ""}`}>
      <div
        className={`card-content-product ${
          productObj.discount ? "discount" : ""
        }`}
      >
        {/* To display discount */}
        <div className="discount-display">
          <div
            className={`discount-display-text ${
              productObj.discount ? "discount" : "nodiscount"
            }`}
          >
            <h3>
              {productObj.discount ? `${productObj.discountNum * 100}%` : ""}{" "}
              OFF
            </h3>
          </div>
        </div>
        <img src={productObj.photoName} alt={productObj.name} />
        <div className="product-description">
          <h3>
            {/* {ProductData.map((product) => (
              <truncateString productName={product} key={product.name} />
            ))} */}
            {/* <truncateString productObj={product} key={product.name} /> */}
            {productObj.name}
          </h3>
          {/* <p>{productObj.ingredients}</p> */}
          <div className="price-text">
            <span className="price-text-cross">
              {productObj.soldOut
                ? "SOLD OUT"
                : `RM ${productObj.price.toFixed(2)}`}
            </span>
            <span className="price-discount">
              {productObj.discount
                ? `RM ${(
                    productObj.price *
                    (1 - productObj.discountNum)
                  ).toFixed(2)}`
                : ""}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}

export function truncateString({ productName }) {
  if (productName.length > 26) {
    return productName.slice(0, 26) + "...";
  }
  return productName;
}
