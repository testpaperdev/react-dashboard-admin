import "./SearchResultPackage.css";

export const SearchResultPackage = ({ result }) => {
  return (
    <div
      className="search-result1"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};
