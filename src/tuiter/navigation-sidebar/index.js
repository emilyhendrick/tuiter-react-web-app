import React from "react";
import {NavLink} from "react-router-dom";

const NavigationSidebar = ()=> {
  return (
      <div className="list-group">
        <a className="list-group-item">Tuiter</a>
        <NavLink to="/tuiter" end className={`list-group-item`}>Home</NavLink>
        <NavLink to="exploreComp" className={`list-group-item`}>Explore</NavLink>
        <a className={`list-group-item`}>Notifications</a>
        <a className={`list-group-item`}>Messages</a>
        <a className={`list-group-item`}>Bookmarks</a>
        <a className={`list-group-item`}>Lists</a>
        <a className={`list-group-item`}>Profile</a>
        <a className={`list-group-item`}>More</a>
      </div>);
};
export default NavigationSidebar;