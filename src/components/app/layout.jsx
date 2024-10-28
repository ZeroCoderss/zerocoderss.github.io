import { Outlet } from "react-router-dom";
import { HeaderNav } from "./head-nav";

const HeaderLayout = () => {
  return (
    <div>
      <HeaderNav />
      <div className="mt-16 container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default HeaderLayout;
