import "./App.css";
// import LoginForm from "./LoginPage/LoginPage";
// import Sidebar1 from "./layout/Sidebar/Sidebar1";

import Content from "./layout/Dashboard/Content";
import { Routes, Route } from "react-router-dom";
// import { SidebarData } from "./data/data";
import Sales from "./components/Pages/Sales/Sales";
import Commissions from "./components/Pages/Commissions/Commissions";
import Customers from "./components/Pages/Customers/Customers";
import PackageList from "./components/Pages/PackageList/PackageList";
// import Sidebar2 from "./layout/Sidebar/Sidebar2";
import Sidebar1 from "./layout/Sidebar/Sidebar1";

function App() {
  return (
    <>
      {/* <div className="app"> */}
      <div className="app">
        <Sidebar1 />

        <Routes>
          <Route path="/" element={<Content />} />
          {/* <Route path="/dashboard" element={<Content />} /> */}
          <Route path="/sales" element={<Sales />} />
          <Route path="/commissions" element={<Commissions />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/packagelist" element={<PackageList />} />
        </Routes>

        {/* <Content /> */}
        {/* <LoginForm /> */}
      </div>
    </>
  );
}

export default App;
