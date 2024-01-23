// import { Link } from "react-router-dom";
// import mainLogo from "../../../assets/mainLogo.png";
// import { IoSearchSharp, IoPeople, IoNotifications } from "react-icons/io5";
// import { FaHome } from "react-icons/fa";
// import { BiSolidMessageDetail, BiSolidShoppingBag } from "react-icons/bi";
// import { CgProfile } from "react-icons/cg";

// const TopBar = () => {
//   return (
//     <div className="h-[55px] flex items-center border-b-[1px] border-gray-200 mx-auto md:ml-20 ">
//       {/* Logo Div  */}

//       <div className="w-14 h-14 ">
//         <Link to="/home">
//           <img className="h-[57px]" src={mainLogo} alt="LinkedIn Logo" />
//         </Link>
//       </div>

//       {/* Search Div  */}

//       <div className="text-sm bg-black hidden lg:flex ">
//         <span className="cursor-text flex items-center w-64 rounded-md p-[5px] bg-gray-100 ">
//           <IoSearchSharp />
//           <input
//             type="text"
//             placeholder="Search"
//             className=" ml-2 placeholder-gray-500 bg-gray-100  outline-none"
//           />
//         </span>
//       </div>

//       {/* Icons  */}

//       <div className="flex items-center p-3 h-full mx-auto ">
//         <div className="cursor-pointer flex flex-col items-center justify-center xs:ml-7 vs:ml-0 xxs:ml-5 text-gray-500 hover:text-gray-900">

//           <IoSearchSharp className="sm:w-8 sm:h-6 h-[30px] w-[25px]" />

//           <p className="text-xs mt-0 hidden sm:flex">Search</p>
//         </div>
//         <Link to="/" className=" flex flex-col items-center justify-center xs:ml-7 vs:ml-4 xxs:ml-5 text-gray-500 hover:text-gray-900">
//           <FaHome className="sm:w-8 sm:h-6 h-[30px] w-[25px]" />
//           <p className="text-xs mt-1 hidden sm:flex">Home</p>
//         </Link>
//         <Link
//           to="/"
//           className="flex flex-col items-center justify-center xs:ml-7 vs:ml-4 xxs:ml-5  text-gray-500 hover:text-gray-900"
//         >
//           <IoPeople className="sm:w-8 sm:h-6 h-[30px] w-[25px]" />
//           <p className="text-xs mt-1 hidden sm:flex">My Network</p>
//         </Link>
//         <Link
//           to="/"
//           className="flex flex-col items-center justify-center xs:ml-7 vs:ml-4 xxs:ml-5 text-gray-500 hover:text-gray-900"
//         >
//           <BiSolidShoppingBag className="sm:w-8 sm:h-6 h-[30px] w-[25px]" />
//           <p className="text-xs mt-1 hidden sm:flex">Jobs</p>
//         </Link>
//         <Link
//           to="/"
//           className="flex flex-col items-center justify-center xs:ml-7 vs:ml-4 xxs:ml-5 text-gray-500 hover:text-gray-900"
//         >
//           <BiSolidMessageDetail className="sm:w-8 sm:h-6 h-[30px] w-[25px]" />
//           <p className="text-xs mt-1 hidden sm:flex">Messaging</p>
//         </Link>
//         <Link
//           to="/"
//           className="flex flex-col items-center justify-center xs:ml-7 vs:ml-4 xxs:ml-5 text-gray-500 hover:text-gray-900"
//         >
//           <IoNotifications className="sm:w-8 sm:h-6 h-[30px] w-[25px]" />
//           <p className="text-xs mt-1 hidden sm:flex">Notifications</p>
//         </Link>
//         <Link
//           to="/"
//           className="flex flex-col items-center justify-center xs:ml-7 vs:ml-4 xxs:ml-5 text-gray-500 hover:text-gray-900"
//         >
//           <CgProfile className="sm:w-8 sm:h-6 h-[30px] w-[25px]" />
//           <p className="text-xs mt-1 hidden sm:flex">Profile</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default TopBar;

import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../../assets/mainLogo.png";
import {
  IoSearchSharp,
  IoPeople,
  IoNotifications,
  IoHome,
} from "react-icons/io5";
import { BiSolidMessageDetail, BiSolidShoppingBag } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const icons = [
  { icon: IoSearchSharp, text: "Search", link: "/" },
  { icon: IoHome, text: "Home", link: "/" },
  { icon: IoPeople, text: "My Network", link: "/" },
  { icon: BiSolidShoppingBag, text: "Jobs", link: "/" },
  { icon: BiSolidMessageDetail, text: "Messaging", link: "/" },
  { icon: IoNotifications, text: "Notifications", link: "/" },
  { icon: CgProfile, text: "Profile", link: "/" },
];

const TopBar = () => {
  return (
    <div className="h-[55px] flex items-center border-b-[1px] border-gray-200 mx-auto md:ml-20">
      {/* Logo Div */}
      <div className="w-14 h-14 ">
        <Link to="/home">
          <img className="h-[57px]" src={mainLogo} alt="LinkedIn Logo" />
        </Link>
      </div>

      {/* Search Div */}
      <div className="text-sm bg-black hidden lg:flex">
        <span className="cursor-text flex items-center w-64 rounded-md p-[5px] bg-gray-100">
          <IoSearchSharp />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 placeholder-gray-500 bg-gray-100  outline-none"
          />
        </span>
      </div>

      {/* Icons */}
      <div className="flex items-center p-3 h-full mx-auto">
        {icons.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="flex flex-col items-center justify-center ml-7 xxs:ml-5 vs:ml-4 text-gray-500 hover:text-gray-900"
          >
            {React.createElement(item.icon, { className: "sm:w-8 sm:h-6 h-[30px] w-[25px]" })}
            <p className="text-xs mt-1 hidden sm:flex">{item.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
