import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome,  } from '@fortawesome/free-solid-svg-icons'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../data/SideBarData';
import '../css/SideBar.css';
import { IconContext } from 'react-icons';
import { Container } from 'react-bootstrap';
import user from '../img/avatar/avatar-1.png'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [userOptions, setOptions] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showUserOptions = () => setOptions(!userOptions);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff", hover: "#000" }}>
        <div className='sidebar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Container className="user">
            <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user" onClick={showUserOptions}>
              <img alt="image" src={user} className="rounded-circle" />
              <div className="d-sm-none d-lg-inline-block name-user">Hola, José Domingo</div>
            </a>
            <div className={userOptions ? 'dropdown-menu dropdown-menu-right show' : 'dropdown-menu dropdown-menu-right'}>
              {/* <div className="dropdown-title">Logged in 5 min ago</div>
              <a href="features-profile.html" className="dropdown-item has-icon">
                <i className="far fa-user"></i> Profile
              </a>
              <a href="features-activities.html" className="dropdown-item has-icon">
                <i className="fas fa-bolt"></i> Activities
              </a>
              <a href="features-settings.html" className="dropdown-item has-icon">
                <i className="fas fa-cog"></i> Settings
              </a>
              <div className="dropdown-divider"></div> */}
              <a href="/home" className="dropdown-item has-icon text-danger">
                <i className="fas fa-sign-out-alt"></i> Logout
              </a>
            </div>
          </Container>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;