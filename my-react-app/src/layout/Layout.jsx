import Content from "./Dashboard/Content";
import Sidebar from "./Sidebar/Sidebar";

function Layout() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default Layout;
