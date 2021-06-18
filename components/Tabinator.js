import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "@fontsource/luckiest-guy";
import ImgMediaCard from "./card";
import { Grid } from "@material-ui/core";
import Art from '../components/panels/Art'
import Cad from '../components/panels/Cad'
import Donation from './layout/Donation'
import Events from "./panels/Events";

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

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
    fontFamily: "Luckiest Guy",
    fontSize: "36px",
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
    backgroundColor: "black",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Donation />
      <AppBar position="static" color="default">
        <Typography
          style={{
            fontFamily: "Luckiest Guy",
            color: "yellow",
            textShadow: "6px 6px #000",
            backgroundImage: `url(${"/img/hero.bmp"})`,
            width: "100%",
            fontSize: "5rem",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Invenire Studios
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className={classes.label} label="Art" {...a11yProps(0)} />
          <Tab className={classes.label} label="CAD" {...a11yProps(1)} />
          <Tab
            className={classes.label}
            label="Events/Promos"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar> 
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <Art value={value}/>
        <Cad value={value} />
        <Events value={value} />
      </SwipeableViews>
    </div>
  );
}
