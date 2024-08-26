import { Box } from "@mui/material";
import SidebarItems from "./SidebarItems";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Inventory2Icon from "@mui/icons-material/Inventory2";

const Sidebar = () => {
  return (
    <Box
      bgcolor="primary.main"
      width={150}
      height="100vh"
      color="white"
      display="flex"
      gap={2}
      flexDirection="column"
      pt={5}
      justifyItems="center"
      alignItems="center"
      position="absolute"
      top={0}
      bottom={0}
      left={0}
    >
      <SidebarItems name="Home" icon={<HomeIcon />} />
      <SidebarItems name="About" icon={<InfoIcon />} />
      <SidebarItems name="Product" icon={<Inventory2Icon />} />
    </Box>
  );
};

export default Sidebar;
