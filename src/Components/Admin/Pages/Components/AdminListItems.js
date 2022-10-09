import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import ChatIcon from "@mui/icons-material/Chat";
import { AccountCircle, InvertColors } from "@mui/icons-material";

export const MainListItems = ({ disableButtons, setPage }) => {
  const list = [
    { title: "UI", icon: <DashboardIcon /> },
    { title: "Businesses", icon: <StoreIcon /> },
    { title: "Users", icon: <AccountCircle /> },
    { title: "Chats", icon: <ChatIcon /> },
  ];
  return (
    <React.Fragment>
      {list.map(({ title, icon }) => {
        return (
          <ListItemButton
            disabled={disableButtons}
            key={title}
            onClick={() => {
              setPage(title);
            }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItemButton>
        );
      })}
    </React.Fragment>
  );
};
