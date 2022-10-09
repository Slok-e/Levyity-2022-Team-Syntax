import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Announcement from "./Announcement";
import Notification from "./Notifications";
import Widget from "./Widget";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = (props) => {
  const widgets = [
    { title: "Service Request", content: "card content", size: 8 },
    { title: "Utilities: Water", content: "card content", size: 4 },
    { title: "Building Permit", content: "card content", size: 8 },
    { title: "Property Taxes", content: "card content", size: 4 },
  ];

  const cards = widgets.map((widget) => (
    <Grid item xs={widget.size}>
      <Item>
        <Widget title={widget.title} content={widget.content} />
      </Item>
    </Grid>
  ));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <Announcement />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Notification />
          </Item>
        </Grid>
        {cards}
      </Grid>
    </Box>
  );
};

export default Dashboard;
