import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Announcement, MinorCrash } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Notifications from "./Dashboard/Notifications";
import Widget from "./Dashboard/Widget";

const Item = styled(Paper)(({ theme }) => ({
  // textAlign: "center",
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

const serviceRequest = (
  <Grid container justifyContent={"space-around"} alignItems={"center"}>
    <Grid item sm={2}>
      <MinorCrash
        sx={{
          width: "3rem",
          height: "3rem",
          color: "var(--city-orange)",
          margin: "15px",
        }}
      />
    </Grid>
    <Grid item sm={6}>
      <Typography variant="subtitle1" component={"div"}>
        Harzards Condition Request
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        submited 10/01/2022
      </Typography>
    </Grid>
    <Grid item sm={2}>
      <Button>More Details</Button>
    </Grid>
  </Grid>
);

const buildingPermit = (
  <Grid container justifyContent={"space-between"} alignItems={"center"}>
    <Grid item sm={6} mt={1}>
      <Typography variant="subtitle1" component={"div"}>
        New Fence
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        8/22/2022 - Submitted
      </Typography>
    </Grid>
    <Button>Status: Pending</Button>
  </Grid>
);

const Live = (props) => {
  const widgets = [
    { title: "Building Permit", content: buildingPermit, size: 8 },
    { title: "Utilities: Water", content: "card content", size: 4 },
    { title: "Service Request", content: serviceRequest, size: 6 },
    { title: "Property Taxes", content: "card content", size: 6 },
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
        <Grid item xs={4}>
          <Item>
            <Notifications />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Paper sx={{ backgroundColor: "var(--city-blue-alpha)" }}>
            <Box
              component="img"
              sx={{
                height: 340,
                display: "block",
                objectFit: "cover",
                width: "100%",
                opacity: "0.5",
                filter: "blur(2px)",
              }}
              src={
                "https://www.gannett-cdn.com/presto/2019/10/30/USAT/068bb050-1139-432f-ab82-e53f2295e093-XXX_ZX53060_d_nightmare_dvd_20-Z.jpg?width=1320&height=816&fit=crop&format=pjpg&auto=webp"
              }
              alt={"movie night image"}
            />
          </Paper>
        </Grid>
        {cards}
      </Grid>
    </Box>
  );
};

export default Live;
