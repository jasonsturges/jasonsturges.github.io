import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // stack: {
  //   fontFamily: "bebas-neue",
  //   fontSize: "10em",
  //   lineHeight: "0.7em",
  //   wordWrap: "break-word",
  //   overflowWrap: "break-word",
  //   width: "310px",
  //   padding: "20px",
  //   margin: "20px auto",
  //   textAlign: "center",
  //
  //   [theme.breakpoints.up("sm")]: {
  //     width: "610px",
  //     fontSize: "18em"
  //   },
  //
  //   "& span": {
  //     position: "relative",
  //   },
  //
  //   "& :nth-child(1)": {
  //     marginLeft: "-0.05em",
  //     zIndex: "10",
  //     textShadow: "0.05em 0.05em 0.2em rgba(10, 10, 10, 0.8)",
  //   },
  //   "& :nth-child(2)": {
  //     marginLeft: "-0.09em",
  //     top: "0.05em",
  //     zIndex: "9",
  //     textShadow: "0.05em 0.01em 0.3em rgba(10, 10, 10, 0.8)",
  //   },
  //   "& :nth-child(3)": {
  //     marginLeft: "-0.05em",
  //     zIndex: "15",
  //     textShadow: "-0.02em 0.02em 0.14em rgba(10, 10, 10, 0.8)",
  //   },
  //   "& :nth-child(4)": {
  //     marginLeft: "-0.05em",
  //     top: "-0.01em",
  //     zIndex: "12",
  //     textShadow: "0.01em -0.01em 0.14em rgba(10, 10, 10, 0.8)",
  //   },
  //   "& :nth-child(5)": {
  //     marginLeft: "-0.06em",
  //     top: "0.02em",
  //     zIndex: "4",
  //     textShadow: "-0.02em -0.02em 0.14em rgba(10, 10, 10, 0.8)",
  //   },
  //   "& :nth-child(6)": {
  //     marginLeft: "-0.06em",
  //     top: "-0.02em",
  //     zIndex: "18",
  //     textShadow: "-0.02em -0.02em 0.14em rgba(10, 10, 10, 0.8)",
  //   },
  //   "& :nth-child(7)": {
  //     marginLeft: "-0.05em",
  //     zIndex: "17",
  //     textShadow: "-0.02em -0.02em 0.14em rgba(10, 10, 10, 0.8)",
  //   },
  //   "& :nth-child(8)": {
  //     marginLeft: "-0.08em",
  //     top: "-0.02em",
  //     zIndex: "13",
  //     textShadow: "-0.02em -0.02em 0.14em rgba(10, 10, 10, 0.8)",
  //   },
  //   "& :nth-child(9)": {
  //     marginLeft: "-0.08em",
  //     zIndex: "16",
  //     textShadow: "-0.02em -0.02em 0.14em rgba(10, 10, 10, 0.8)",
  //   },
  //   "& :nth-child(10)": {
  //     marginLeft: "-0.03em",
  //     top: "-0.02em",
  //     zIndex: "2",
  //     textShadow: "0.05em 0.05em 0.14em rgba(10, 10, 10, 0.8)",
  //   },
  //   "& :nth-child(11)": {
  //     marginLeft: "-0.08em",
  //     top: "-0.02em",
  //     zIndex: "1",
  //     textShadow: "-0.02em -0.02em 0.14em rgba(10, 10, 10, 0.8)",
  //   },
  // },
}));

const AvantGarde = (props) => {
  const classes = useStyles();

  return (
    <p className={classes.stack}>
      <span>A</span>
      <span>v</span>
      <span>a</span>
      <span>n</span>
      <span>t</span>
      <span>-</span>
      <span>g</span>
      <span>a</span>
      <span>r</span>
      <span>d</span>
      <span>e</span>
    </p>
  );
};

export default AvantGarde;
