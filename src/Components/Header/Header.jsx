import NavLinks from "../NavLinks/NavLinks";

const Header = () => {

  return (
    <div className="navbar bg-base-100 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLinks></NavLinks>
          </ul>
        </div>
        <div className="flex justify-start items-center gap-2">
          <img className=" w-10" src="./icon.jpeg" alt="" />
        <a className="text-2xl font-bold text-[#131313] font-workSans">Book<span className=" text-orange-500">Snap</span></a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1"><NavLinks></NavLinks></ul>
      </div>
      <div className=" navbar-end gap-2 lg:gap-4">
        <button className="btn  lg:py-2 px-2 lg:px-4 bg-[#23BE0A] rounded-lg text-white">Sign In</button>
        <button className="btn  lg:py-2 px-2 lg:px-4 text-white rounded-lg bg-[#59C6D2]">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
