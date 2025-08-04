/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { navLinks } from "../constants";

const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  console.log(user);
  useEffect(() => {
      const handleScroll = () => {
      
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Swarnabha Dutta
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="https://www.linkedin.com/in/swarnabha-dutta-0ab583222/" className="contact-btn group ml-4">
          <div className="inner">
            <span>Connect with  me</span>
          </div>
        </a>
        <a href="https://leetcode.com/u/SwarnabhaDuta/" className="contact-btn group ml-4">
          <div className="inner">
            <span>Leetcode</span>
          </div>
        </a>
        <a href="https://github.com/swarnabha-dutta" className="contact-btn group ml-4">
          <div className="inner">
            <span>Github</span>
          </div>
        </a>
        <a href="https://drive.google.com/your-resume-link" target="_blank" rel="noopener noreferrer">
  <button className="btn-style">Resume</button>
</a>

        
        {!isAuthenticated ? (
          <button 
            onClick={(e) => loginWithRedirect()} 
            className="contact-btn group ml-4"
          >
            <div className="inner">
              <span>Log In</span>
            </div>
          </button>
        ) : (
          <button 
            onClick={() => logout({ returnTo: window.location.origin })} 
            className="contact-btn group ml-4"
          >
            <div className="inner">
              <span>Log Out</span>
            </div>
          </button>
        )}
      </div>
    </header>
  );
}

export default NavBar;