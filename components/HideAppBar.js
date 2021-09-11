import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar color="default">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Scroll to Hide App Bar</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

      <SwipeableDrawer anchor="left" open={open} onClose={() => setOpen(false)}>
        This is stuff
      </SwipeableDrawer>
    </React.Fragment>
  );
}
