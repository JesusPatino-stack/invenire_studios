import React from "react";
import "@fontsource/luckiest-guy";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles, useTheme } from "@material-ui/core/styles";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#f5f5f5",
      width: "100%",
    },
    container: {
      minHeight: "100vh",
      // padding:"0 0.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // height: "80vh",
      backgroundColor: "#f5f5f5",
      verticalAlign: "top",
      maxWidth: "100%",
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
      width: "100%",
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
      color: "white",
      padding: theme.spacing(6),
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignVertical: "center",
    },
    title: {
      font: "Roboto",
      weight: "light",
      fontSize: "96px",
      letterSpacing: "-1.5px",
    },
    typography: {
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
      fontFamily: "Luckiest Guy",
      fontSize: "36px",
      color: "white",
      backgroundColor: "black",
    },
  }));
export default function Cad(props) {
    const {value} = props
    const classes = useStyles();
  const theme = useTheme();
    return (
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className={classes.container}>
          <main className={classes.main}>
            <img className={classes.heroContent} src="/img/mnriser.bmp" />
          </main>
        </div>
      </TabPanel>
    )
}