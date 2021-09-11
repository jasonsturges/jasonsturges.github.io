import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const GridExample = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid>Cell 1</Grid>
    </div>
  );
};

export default GridExample;
