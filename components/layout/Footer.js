import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";
import Face from "@material-ui/icons/Face";
import Mail from "@material-ui/icons/Mail";
import "@fontsource/roboto";

export default function Footer() {
    const classes = useStyles();
    return (
      <>
        <br />
        {/* <Typography variant="h4" align="center" gutterBottom color="white" >
          Contact
        </Typography> */}
        <footer className={classes.footer}>
          <Typography
            variant="h4"
            align="center"
            color="white"
            component="p"
            style={{ margin: "auto", padding: "10px" }}
          >
            <Face /> <a href="mailto:abstractsplashing@gmail.com">
            Neal Butler
            </a>
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="white"
            component="p"
            style={{ margin: "auto", padding: "10px" }}
          >
            <Mail />
            <a href="mailto:abstractsplashing@gmail.com">
              abstractsplashing@gmail.com
            </a>
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="white"
            component="p"
            style={{ margin: "auto", padding: "10px" }}
          >
            <PhoneIcon />
            <a href="tel:7064638523"> 706.463.8523</a>
          </Typography>
        </footer>
      </>
    );
  }

  const useStyles = makeStyles((theme) => ({
    container: {
      minHeight: "100vh",
      // padding:"0 0.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh",
      backgroundColor: "#f5f5f5",
      verticalAlign: "top",
      maxWidth: "100%",
      // minHeight:'100vh'
    },
    main: {
      // padding: "5rem 0",
      flex: "0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      verticalAlign: "top",
      width: "80%",
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: "#f5f5f5",
      // padding: theme.spacing(8, 0, 6),
      // height:"100rem",
      width: "100%",
      // alignContent: 'center',
      verticalAlign: "top",
      objectFit: "cover",
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: "#273238",
      // color: "white",
      // padding: theme.spacing(6),
      // width: "100%",
      // display: "flex",
      // flexDirection: "row",
      // alignVertical: "center",
      // position: 'absolute',
      // bottom: 0,
      // height: '100px'
    //   textAlign: 'center',
    // position: 'absolute',
    // bottom: 0,
    // width: '100%',
    // height: '100px',
    // background: '#6cf',
    flexShrink: 0,
    textAlign: 'center',
    // backgroundColor: 'tomato',
    color: 'white'
    },
    title: {
      font: "Roboto",
      weight: "light",
      fontSize: "96px",
      letterSpacing: "-1.5px",
    },
    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      subtitle1: {
        fontSize: 12,
      },
      body1: {
        fontWeight: 500,
      },
      button: {
        fontStyle: "italic",
      },
      h3: {
        color: "white",
      },
      h4: {
        color: "white",
      },
    },
    label: {
      // fontFamily: theme.typography.fontFamily,
      fontSize: "20px",
      // opacity: 1,
      // transition: 'font-size 0.2s, opacity 0.2s',
      // transitionDelay: '0.1s',
      // '&$iconOnly': {
      //   opacity: 0,
      //   transitionDelay: '0s',
      // },
      // '&$selected': {
      //   fontSize: theme.typography.pxToRem(14),
      // },
      color: "white",
    },
  }));
  