import { AiFillFilter } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import "./FilterPackage.css";
import { useState } from "react";

const FilterPackage = () => {
  const [openVariation, setOpenVariation] = useState(true);
  const [openCategory, setOpenCategory] = useState(true);

  return (
    <div className="filter-content">
      <div className="filter-title">
        <AiFillFilter style={{ marginRight: "10px" }} />
        <h3>SEARCH FILTER</h3>
      </div>
      <div className="filter-variation">
        {/* Variation Filter */}
        <ul className={`variation-list ${openVariation ? "active" : ""}`}>
          <button
            className="filter-btn"
            onClick={() => {
              setOpenVariation(!openVariation);
            }}
          >
            Variation
            <IoIosArrowForward
              className={`arrow-btn ${openVariation ? "active" : ""}`}
            />
          </button>
          <div className={`variation-item ${openVariation ? "active" : ""}`}>
            <li>
              <input
                id="Checkbox"
                className="filter-checkbox"
                type="checkbox"
              />
              <label id="Checkbox">Softcopy & Hardcopy</label>
            </li>
            <li>
              <input className="filter-checkbox" type="checkbox" />
              Hardcopy Only
            </li>
            <li>
              <input className="filter-checkbox" type="checkbox" />
              Softcopy Only
            </li>
          </div>
        </ul>

        {/* By Category Filter */}
        <ul className={`variation-list ${openCategory ? "active" : ""}`}>
          <button
            className="filter-btn"
            onClick={() => {
              setOpenCategory(!openCategory);
            }}
          >
            By Category
            <IoIosArrowForward
              className={`arrow-btn ${openCategory ? "active" : ""}`}
            />
          </button>
          <div className={`variation-item ${openCategory ? "active" : ""}`}>
            <li>
              <input className="filter-checkbox" type="checkbox" />
              Sejarah
            </li>
            <li>
              <input className="filter-checkbox" type="checkbox" />
              Mengira 1-10
            </li>
            <li>
              <input className="filter-checkbox" type="checkbox" />
              Kuasai Tanda Baca
            </li>
            <li>
              <input className="filter-checkbox" type="checkbox" />
              English
            </li>
            <li>
              <input className="filter-checkbox" type="checkbox" />
              Lembaran Kerja
            </li>
            <li>
              <input className="filter-checkbox" type="checkbox" />
              Tema Alam Sekitar
            </li>
            <li>
              <input className="filter-checkbox" type="checkbox" />
              KSSR Semakan
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default FilterPackage;
