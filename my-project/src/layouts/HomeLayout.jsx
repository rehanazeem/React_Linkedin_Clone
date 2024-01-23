import {Outlet} from "react-router-dom"
import Topbar from "../components/common/Topbar/index";

const HomeLayout = () => {
  return (
    <div>
      <Topbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
