import "./SearchListPackage.css";
import { SearchResultPackage } from "./SearchResultPackage";

export const SearchListPackage = ({ results }) => {
  return (
    <div className="results-list-package">
      {results.map((result, id) => {
        return <SearchResultPackage result={result.name} key={id} />;
      })}
    </div>
  );
};
