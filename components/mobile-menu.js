import React, { useContext, Fragment, useRef } from "react";
import { FooterBottomData, NavLinksData, Logo } from "@/data";
import { MenuContext } from "@/context/menu-context";
import { Link, animateScroll as scroll } from "react-scroll";

const MobileMenu = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const menuEl = useRef(null);
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };
  return (
    <div className="mobile-menu animated fadeInLeft">
      <div className="mobile-menu__overlay" onClick={handleMenuClick}></div>
      <div className="mobile-menu__inner">
        <div className="mobile-menu__top">
          <h1 className="mobile-menu__logo">
            <img src={Logo.dark} style={{ width: "40px" }} alt="GG-GROUP" />
            <a href="/">GG-GROUP</a>
          </h1>
          <a href="#" className="mobile-menu__close" onClick={handleMenuClick}>
            <i className="fa fa-times"></i>
          </a>
        </div>
        <nav className="mobile-menu__links" ref={menuEl}>
          <ul>
            {NavLinksData.map((links, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    undefined !== links.subItems ? "menu-item-has-children" : ""
                  }`}
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
        </nav>
        <div className="mobile-menu__text">
          Global Guidance Group is here to make your life more easy when it
          comes to incubation, fundraising, legal services and even development
        </div>
        <div className="mobile-menu__socials">
          {FooterBottomData.social.map(({ icon, url }, index) => {
            return (
              <a key={index} href={url} className={`${icon} hvr-pulse`}></a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
