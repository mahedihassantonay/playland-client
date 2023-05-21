import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-blue-500">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex={0}>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="allToys">All Toys</Link>
              </li>
              <li>
                <Link to="myToys">My Toys</Link>
              </li>
              <li>
                <Link to="addToy">Add A Toy</Link>
              </li>
              <li>
                <Link to="blog">Blog</Link>
              </li>
            </ul>
          </div>
          <img src={logo} className="btn btn-ghost normal-case text-xl" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="text-white font-semibold gap-4 ">
            <ul className="menu menu-horizontal px-1 flex gap-4">
              <div className="bg-green-400 p-2 rounded hover:bg-transparent">
                <Link to="/">Home</Link>
              </div>
              <div className="bg-pink-400 p-2 rounded hover:bg-transparent">
                <Link to="/allToys">All Toys</Link>
              </div>
              {user && (
                <div className="bg-teal-400 p-2 rounded hover:bg-transparent">
                  <Link to="/myToys">My Toys</Link>
                </div>
              )}
              <div className="bg-orange-400 p-2 rounded hover:bg-transparent">
                <Link to="/addToy">Add A Toy</Link>
              </div>
              <div className="bg-purple-400 p-2 rounded hover:bg-transparent">
                <Link to="/blog">Blog</Link>
              </div>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-9 rounded-full">
                    {user?.photoURL ? (
                      <img src={user.photoURL} title={user.displayName} />
                    ) : (
                      <img
                        src="https://randomuser.me/api/portraits/men/43.jpg"
                        title={user?.displayName}
                      />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a onClick={handleSignOut}>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="bg-red-400 p-2 rounded font-semibold text-white hover:bg-transparent">
                <Link to="/login">Login</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    // <div className="bg-blue-500 sticky top-0 z-10">
    //   <div className="navbar flex justify-between  container mx-auto sticky top-0">
    //     <div>
    //       <a className="btn btn-ghost normal-case text-gray-100 text-xl">
    //         <img className="h-12" src={logo} />
    //       </a>
    //     </div>

    //     <div className="text-white font-semibold gap-4 ">
    //       <div className="bg-green-400 p-2 rounded hover:bg-transparent">
    //         <Link to="/">Home</Link>
    //       </div>
    //       <div className="bg-pink-400 p-2 rounded hover:bg-transparent">
    //         <Link to="/allToys">All Toys</Link>
    //       </div>
    //       {user && (
    //         <div className="bg-teal-400 p-2 rounded hover:bg-transparent">
    //           <Link to="/myToys">My Toys</Link>
    //         </div>
    //       )}
    //       <div className="bg-orange-400 p-2 rounded hover:bg-transparent">
    //         <Link to="/addToy">Add A Toy</Link>
    //       </div>
    //       <div className="bg-purple-400 p-2 rounded hover:bg-transparent">
    //         <Link to="/blog">Blog</Link>
    //       </div>
    //     </div>

    //     <div>
    //       {user ? (
    //         <div className="dropdown dropdown-end">
    //           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    //             <div className="w-9 rounded-full">
    //               {user?.photoURL ? (
    //                 <img src={user.photoURL} title={user.displayName} />
    //               ) : (
    //                 <img
    //                   src="https://randomuser.me/api/portraits/men/43.jpg"
    //                   title={user?.displayName}
    //                 />
    //               )}
    //             </div>
    //           </label>
    //           <ul
    //             tabIndex={0}
    //             className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    //           >
    //             <li>
    //               <a onClick={handleSignOut}>Logout</a>
    //             </li>
    //           </ul>
    //         </div>
    //       ) : (
    //         <div className="bg-red-400 p-2 rounded font-semibold text-white hover:bg-transparent">
    //           <Link to="/login">Login</Link>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
