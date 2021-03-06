import React from "react";

import ScrollTracker from "../scroll-tracker/";
import NavLogo from "./nav-logo";
import ExpandedNav from "./expanded-nav";
import DropdownNav from "./dropdown-nav";
import style from "./index.module.scss";

function Nav({ isHomePage, isScrolled }) {
  const isWhite = !isHomePage || isScrolled;
  return (
    <nav className={`${style.nav} ${isWhite ? style.isWhite : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col--xs">
            <NavLogo isBackgroundWhite={isWhite} />
          </div>
          <div className="col--xs">
            <ExpandedNav />
            <DropdownNav />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Header({ isHomePage }) {
  // Pass in flag to ScrollTracker instead of removing from DOM to prevent unmounting nav
  return (
    <ScrollTracker
      enabled={isHomePage}
      render={({ scrollY }) => <Nav isScrolled={scrollY !== 0} isHomePage={isHomePage} />}
    />
  );
}
