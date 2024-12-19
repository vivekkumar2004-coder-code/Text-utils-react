import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} border-bottom border-body`}
        style={{
          transition: "all 0.5s ease", // Smooth transition for color changes
        }}
        data-bs-theme={`${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEPUlEQVR4nO2dz0sUURzAlw5dy0PN962m+SMV6VAQROLOW9clwlgXMUhICAKJqBA6VFiokZkQ/bp4SXaKKPciWlmXCPoHwlvEeuqw3vLkISJ78bYyW3ea3+/N+L4f+MKyO7Pz3vcz37ezsztvYjEEQRAEQRAEQRCbaBpNAtFfAaHLQCj7G/qqRuiTqqr0DrN1+Wt8GSD66r/rRi6WgegLhOgJoTsOAL0OhK79t3Ggz5uvr8+HIHnMx1jbTfRhIcnnti2T/yt+1NXRneXr8+f4ayFIGvNbAkBCD1wALzmbDVJNAAOgLwQIKB/zzRqj1BDEfgsoihBg0RClPoRZeUgTEFMMQAFyQQGSQQGSQQGSQQGSiYyAKeNDX/bE6Gp9Q7enw7v6hm7W1z/Opp99ZEa+UDH4a3wZEdsyW3fDMsXHz5d6pAvgyffzOLuv/6ZpUvhrorZlQ0BJgnQB9Y3e9kYo3zsbu02TInJbNgUw6QL8TAiYdNIqKSK3hQKIogJqazuqKkUY9kpQQYBfHTNcdNLt8nbW5UdElUKaAA3oZ6/Jb23rDZ2Apn0ZzztVU3NGgABCZ702NH3sUugE0NR5zwKS6YvBC4jH6QEg9JvbRsZrOtn4nbehEzA8NsdIPOk6+Xzd4RtzwQvgACTOaqB/ddrI6j1d7NzQtK2EGIIF8Dh56rZrAf0DkxXfMxYUmkb3A+iPNNAXNaArZsE/sA4eGmCZ3mts8sF728kwJAjgcWVklh3pGGS1e49aJp0vw5e9OjJr+n4x2TjpvFHWYLOOm23HiQAbTd9W6bB6ylhkfyI388lRf6QQYQG+90cKKEAyKEAy/JSsAwnFCAxBrvsjBf6jhM1GF3P5QibsArz0J3JACAUoBaAAFKA0gBWAApQGsAJQgNIAVgAKUBrACkABSgNYAShAaQArAAUoDWAFoAClAawAFKA0gBWAApQGsAJQgNIAVgAKUBrACkABSgNYAdESUF2T2nxdWk0K/xsqSsDh9jObluXP4Z9zBQmYuPuONTQdX1+OP+bPoQBBAox8oXTx3NDlp6Xgj0N77dZWFWBE5eK5KAAoIAz3I6C2K8Bqzrjmlh6W7LrARideYwU4vh8BsRZgd844Eu9kwub7DzvE/v0ILAU4nDNOzHz/YQfs34+gFBrQLz4JEDPff9gBu/cjWBeg3/c6BG0QIP86XtmA/T1/RSP6vba2tu1uP4TtDmdKAT4lxuq4HwWggHACWAEoQGnAYQXkZpayuXxh2em5H7PtVJpkI5BZz7eMgLzz5DudyCMU08yIApwctwcQyp8tBYdfxPyM5tYsCgCgL2UJSKWHUMCueKIdiP5ddPL5GdGRWwsogMNPDTs9I+o1+acHH+IvZptOS/PhCGgxsDG/JVsadsYm3uBPlm4xXByCugnXDdzqGChAuoCiAAnqfBELcN5O18mP/HyfCBKLCj8BSiLUZHU1Q08AAAAASUVORK5CYII=" // Update this with the actual path to your logo
              alt="Logo"
              style={{ width: "30px", marginRight: "10px" }}
            />
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onClick={props.togglemode}
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {props.mode === "light" ? "Dark" : "Light"} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

export default Navbar;
