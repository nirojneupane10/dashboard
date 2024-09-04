import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import Logout from "../logout/Logout";

const sidebarItems = [
  { name: "Home", icon: <HomeIcon />, link: "/" },
  { name: "About", icon: <InfoIcon />, link: "/about" },
  { name: "Product", icon: <Inventory2Icon />, link: "/product" },
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          backgroundColor: "primary.main",
          color: "white",
        },
      }}
    >
      <Logout />
      <List>
        {sidebarItems.map((item, index) => (
          <ListItem
            key={index}
            component={NavLink}
            to={item.link}
            sx={{
              color: "white",
              "&.active": {
                color: "secondary.main",
              },
              "&:hover": {
                color: "secondary.main",
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit" }} aria-label={item.name}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
