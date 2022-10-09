import { Grid, Typography } from "@mui/material";
import React from "react";

const Widget = (props) => {
  return (
    <Grid container item direction={"column"}>
      <Typography variant="h6" component="h2">
        {props.title}
      </Typography>
      <p>{props.content}</p>
    </Grid>
  );
};

export default Widget;
