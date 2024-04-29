import "./Sidebar.css";
// import { personsImgs } from "../../utils/images";
import { navigationLinks, userProfile } from "../../data/data";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../context/sidebarContext";
// import styled from "styled-components";

// const Tab = styled.button`
//   padding: 10px 30px;
//   cursor: pointer;
//   opacity: 0.6;
//   background: white;
//   border: 0;
//   outline: 0;
//   border-bottom: 2px solid transparent;
//   transition: ease border-bottom 250ms;
//   ${({ active }) =>
//     active &&
//     `
//     border-bottom: 2px solid black;
//     opacity: 1;
//   `}
// `;

// function TabGroup() {
//   const [active, setActive] = useState(navigationLinks[0]);
//   return (
//     <>
//       <div>
//         {navigationLinks.map((type) => (
//           <Tab
//             key={type}
//             active={active === type}
//             onClick={() => setActive(type)}
//           >
//             {type}
//           </Tab>
//         ))}
//       </div>
//       <p />
//       <p> Your payment selection: {active} </p>
//     </>
//   );
// }

const Sidebar = () => {
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
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a
                href={navigationLinks[0].path}
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
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
