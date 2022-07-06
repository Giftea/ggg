import React, { useContext, useEffect, useState } from "react";
import { Logo, NavLinksData } from "@/data";
import { useRouter } from "next/router";
import { MenuContext } from "@/context/menu-context";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const router = useRouter();
  const [sticky, setSticky] = useState(false);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <header className="header home-page-one">
      <nav
        className={`navbar navbar-default header-navigation  ${
          true === sticky
            ? " stricky stricky-fixed slideInDown animated"
            : " stricky slideIn animated"
        }`}
      >
        <div className="thm-container clearfix">
          <div className="navbar-header">
            <Link href="/">
              <a className="navbar-brand">
                <img src={Logo.dark} style={{ width: "60px" }} alt="GG-GROUP" />
              </a>
            </Link>
            <span className="mobile-menu__toggler" onClick={handleMenuClick}>
              <i className="fa fa-bars"></i>
            </span>
          </div>

          <div
            className="collapse show navbar-collapse main-navigation mainmenu d-flex justify-content-end w-100"
            id="main-nav-bar"
          >
            <ul className="nav navbar-nav navigation-box">
              {NavLinksData.map((links, index) => {
                return (
                  <li
                    key={index}
                    className={router.pathname == links.url ? "active" : ""}
                  >
                    <Link
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      to={links.url}
                    >
                      <a>{links.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
