import {
  BeachAccess,
  BusinessCenter,
  Deck,
  Home,
  Paid,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ height: "100%" }}>
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/dashboard">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/live">
              <ListItemIcon>
                <Deck />
              </ListItemIcon>
              <ListItemText primary="Live" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/play">
              <ListItemIcon>
                <BeachAccess />
              </ListItemIcon>
              <ListItemText primary="Play" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/work">
              <ListItemIcon>
                <BusinessCenter />
              </ListItemIcon>
              <ListItemText primary="Work" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/invest">
              <ListItemIcon>
                <Paid />
              </ListItemIcon>
              <ListItemText primary="Invest" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
