import { NavLink } from "react-router-dom";
import "../../index.css";
const NavLinks = () => {
  return (
    <>
      <li className=" mr-2">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#23BE0A" : "black",
              background: isActive ? "#fff" : "",
              border: isActive ? "#23BE0A 1px solid" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li  className=" mr-2">
        <NavLink
          to="/listedbooks"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#23BE0A" : "black",
              background: isActive ? "#fff" : "",
              border: isActive ? "#23BE0A 1px solid" : "",
            };
          }}
        >
          Listed Books
        </NavLink>
      </li>
      <li  className=" mr-2">
        <NavLink
          to="/pages"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#23BE0A" : "black",
              background: isActive ? "#fff" : "",
              border: isActive ? "#23BE0A 1px solid" : "",
            };
          }}
        >
          Pages to Read
        </NavLink>
      </li>
      <li  className=" mr-2">
        <NavLink
          to="/reviews"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#23BE0A" : "black",
              background: isActive ? "#fff" : "",
              border: isActive ? "#23BE0A 1px solid" : "",
            };
          }}
        >
          Book Reviews
        </NavLink>
      </li>
      <li  className=" mr-2">
        <NavLink
          to="/challenges"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#23BE0A" : "black",
              background: isActive ? "#fff" : "",
              border: isActive ? "#23BE0A 1px solid" : "",
            };
          }}
        >
          Reading Challenges
        </NavLink>
      </li>
    </>
  );
};

export default NavLinks;
