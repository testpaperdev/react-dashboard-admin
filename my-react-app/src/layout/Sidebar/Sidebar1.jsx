import "./Sidebar.css";
// import { personsImgs } from "../../utils/images";
import { SidebarData, userProfile } from "../../data/data";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Sidebar() {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={userProfile[0].photo} alt="profile image" />
        </div>
        <span className="info-name">{userProfile[0].name}</span>
        <span className="info-email">{userProfile[0].email}</span>
      </div>
      <nav className="navigation">
        {/* <Link to="/"></Link> */}
        {/* <ul className="nav-list"> */}
        <ul className="nav-list">
          <li className="nav-item">
            {/* to={SidebarData[0].path} */}
            <CustomLink to="/" className="nav-link">
              <img
                src={SidebarData[0].icon}
                className="nav-link-icon"
                alt={SidebarData.title}
              />
              <span className="nav-link-text">Dashboard</span>
            </CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to={SidebarData[1].path} className="nav-link">
              <img
                src={SidebarData[1].icon}
                className="nav-link-icon"
                alt={SidebarData.title}
              />
              <span className="nav-link-text">Sales</span>
            </CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to={SidebarData[2].path} className="nav-link">
              <img
                src={SidebarData[2].icon}
                className="nav-link-icon"
                alt={SidebarData.title}
              />
              <span className="nav-link-text">Commissions</span>
            </CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to={SidebarData[3].path} className="nav-link">
              <img
                src={SidebarData[3].icon}
                className="nav-link-icon"
                alt={SidebarData.title}
              />
              <span className="nav-link-text">Customers</span>
            </CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to={SidebarData[4].path} className="nav-link">
              <img
                src={SidebarData[4].icon}
                className="nav-link-icon"
                alt={SidebarData.title}
              />
              <span className="nav-link-text">Package List</span>
            </CustomLink>
          </li>

          {/* {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a
                href="#"
                className={`nav-link ${
                  navigationLink.id === activeLinkIdx ? "active" : null
                }`}
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLinks.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </a>
            </li>
          ))} */}
        </ul>
      </nav>
    </div>
  );
}

// export default Sidebar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
