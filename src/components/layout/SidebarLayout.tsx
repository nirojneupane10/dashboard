import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const SidebarLayout = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SidebarLayout;
