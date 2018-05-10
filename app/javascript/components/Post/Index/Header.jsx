import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return(
    <div className="page-header">
      <div className="page-header-left">
        <h1>Posts</h1>
      </div>

      <div className="page-header-right">
        <NavLink
          className="btn btn-primary"
          to="/posts/new"
        >
          <i className="fa fa-fw fa-plus"> </i>
          Add New Post
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
