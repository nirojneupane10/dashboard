import { Box } from "@mui/material";
import SidebarItems, { SidebarItemProps } from "./SidebarItems";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Inventory2Icon from "@mui/icons-material/Inventory2";

const Sidebar = () => {
  const sidebarItem: SidebarItemProps[] = [
    {
      name: "Home",
      icon: <HomeIcon />,
    },
    {
      name: "About",
      icon: <InfoIcon />,
    },
    {
      name: "Product",
      icon: <Inventory2Icon />,
    },
  ];
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
      {sidebarItem &&
        sidebarItem.map((info, index) => (
          <SidebarItems name={info.name} icon={info.icon} key={index} />
        ))}
    </Box>
  );
};

export default Sidebar;
