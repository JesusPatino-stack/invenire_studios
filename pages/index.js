import React from "react";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";
import { Box } from "@material-ui/core";
import "@fontsource/roboto";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

// import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
// let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function HideAppBar(props) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ background: "black", display:'inline'}}>
          <Toolbar>
            {/* <Typography variant="h6" style={{ background: "black", marginLeft: "auto", }}></Typography> */}
            <SimpleBottomNavigation
              style={{ display: "inline", background: "black", margin: "auto", }}
            />
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <hr />
      
    </>
  );
}

export function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
     className={classes.label}
      style={{ background: "black", fontSize: '20px' }}
    >
      <BottomNavigationAction label="Art" style={{ color: "white", margin: "auto" }} />
      <BottomNavigationAction label="CAD" style={{ color: "white", margin: "auto"}} />
      <BottomNavigationAction label="Events/Promotions" style={{ color: "white", margin: "auto" }} />
    </BottomNavigation>
  );
}
export default function Home() {
  const classes = useStyles();
  return (
    // <ThemeProvider theme={theme}>
    <div className={classes.container}>
      <Head>
        <title>Invenire Studios</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HideAppBar />
      <main className={classes.main}>
        <div className={classes.heroContent} > 
        <img  src="/img/hero.bmp" />
        </div>
        {/* <Image src="/img/hero.bmp" alt="hero" layout="fill" /></div> */}
        {/* <Box m={5}></Box> */}
        {/* <Typography variant="h1" align="center" gutterBottom className={classes.title}>
          Invenire Studios
        </Typography> */}
        {/* <Image src="/img/hero.bmp" alt="hero" width={600} height={500} /> */}
        <Typography variant="h4" align="center" color="white" component="p">
          Artist and Technologist
        </Typography>
        <br/><br/>
        <Footer />
      </main>
    </div>
    // </ThemeProvider>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    <>
    <br/>
    <Typography variant="h4" align="center" gutterBottom color="white" >
        Contact
      </Typography>
    <footer className={classes.footer}>
      <Typography variant="h5" align="center" color="white" component="p" style={{margin: "auto", padding:'10px'}}>
        Neal Butler
      </Typography>
      <Typography variant="h5" align="center" color="white" component="p" style={{margin: "auto", padding:'10px'}}>
        <a href="mailto:InvenireStudios@gmail.com">InvenireStudios@gmail.com</a>
      </Typography>
      <Typography variant="h5" align="center" color="white" component="p" style={{margin: "auto", padding:'10px'}}>
        <a href="tel:7064638523">706.463.8523</a>
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
    height: "100%",
    backgroundColor: "gray",
    verticalAlign: 'top'
  },
  main: {
    // padding: "5rem 0",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    verticalAlign: "top",
    maxWidth: "1080px",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "gray",
    // padding: theme.spacing(8, 0, 6),
    // height:"100rem",
    width: "100%",
    // alignContent: 'center',
    verticalAlign: 'top'
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
    backgroundColor: "gray",
    color: "white",
    padding: theme.spacing(6),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignVertical: "center"
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
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(20),
    opacity: 1,
    transition: 'font-size 0.2s, opacity 0.2s',
    transitionDelay: '0.1s',
    '&$iconOnly': {
      opacity: 0,
      transitionDelay: '0s',
    },
    '&$selected': {
      fontSize: theme.typography.pxToRem(14),
    },
  },
}));
