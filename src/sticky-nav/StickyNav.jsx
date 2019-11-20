import React, { useEffect, useRef } from "react";
import "./StickyNav.scss";

const StickyNav = ({ children }) => {
  const navRef = useRef(null);
  let isSticky = useRef(false);

  const handleScroll = () => {
    const header = navRef.current;
    const newIsSticky = window.pageYOffset > header.offsetTop;

    if (isSticky.current && !newIsSticky) {
      header.style.width = `${header.clientWidth}px`;
    }

    header.classList.toggle("sticky", newIsSticky);

    isSticky.current = newIsSticky;
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="StickyNav" ref={navRef}>
      {children}
    </div>
  );
};

export default StickyNav;
