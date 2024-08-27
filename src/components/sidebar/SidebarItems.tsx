import { Box, Icon, Typography } from "@mui/material";

export type SidebarItemProps = {
  name: string;
  icon: JSX.Element;
};

const SidebarItems = ({ name, icon }: SidebarItemProps) => {
  return (
    <Box
      sx={{
        "&:hover": {
          color: "secondary.main",
          cursor: "pointer",
        },
      }}
      display="flex"
      alignItems="center"
      gap={1}
    >
      <Icon>{icon}</Icon>
      <Typography variant="h5">{name}</Typography>
    </Box>
  );
};

export default SidebarItems;
