import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const SidebarLayout = () => {
  return (
    <>
      <Sidebar />
      <main style={{ marginLeft: 250 }}>
        <Outlet />
      </main>
    </>
  );
};

export default SidebarLayout;
