import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  // This is default props if no props are pass in
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
  };

  // PropsTypes check right Type of props
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Navbar;
