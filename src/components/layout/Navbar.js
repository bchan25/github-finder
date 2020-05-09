import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} />
        {title}
      </h1>
    </div>
  );
};

// This is default props if no props are pass in
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

// PropsTypes check right Type of props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
