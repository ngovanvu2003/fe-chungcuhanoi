// import React, { useEffect } from 'react';

function ScrollHandler() {

 if (typeof window !== 'undefined') {
    // Đảm bảo mã này chỉ chạy trên phía máy khách (client-side)
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const logo = document.getElementById("logo");

      if (navbar && logo) {
        if (window.scrollY > 80) {
          navbar.style.padding = "30px 10px";
          logo.style.fontSize = "25px";
        } else {
          navbar.style.padding = "80px 10px";
          logo.style.fontSize = "35px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }
  return null;
}

export default ScrollHandler;
