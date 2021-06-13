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
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className={classes.container}>
            <main className={classes.main}>
              <Grid container spacing={5}>
                <Grid item sm={12} xs={8} md={6} lg={4} zeroMinWidth>
                  <ImgMediaCard
                    img="/img/paintings/gif/bugs_behind_the_screen.gif"
                    title="Bugs Behind The Screen"
                    description="on display at Level Up"
                    condition="on display"
                    g_maps='https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407'
                  />
                </Grid>
                <Grid item sm={12} xs={8} md={6} lg={4} zeroMinWidth>
                  <ImgMediaCard
                    img="/img/paintings/gif/cats.gif"
                    title="Cats"
                    description="on display at Level Up"
                    condition="on display"
                    g_maps='https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407'

                  />
                </Grid>
                <Grid item sm={12} xs={8} md={6} lg={4} zeroMinWidth>
                  <ImgMediaCard
                    img="/img/paintings/gif/earth_and_sky.gif"
                    title="Earth and Sky"
                    description="on display at Level Up"
                    condition="on display"
                    g_maps='https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407'

                  />
                </Grid>
                <Grid item sm={12} xs={8} md={6} lg={4} zeroMinWidth>
                  <ImgMediaCard
                    img="/img/paintings/gif/electric_ice.gif"
                    title="Electric Ice"
                    description="on display at Level Up"
                    condition="on display"
                    g_maps='https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407'

                  />
                </Grid>
                <Grid item sm={12} xs={8} md={6} lg={4} zeroMinWidth>
                  <ImgMediaCard
                    img="/img/paintings/gif/entangelment_in_blue.gif"
                    title="Entanglement"
                    description="on display at Level Up"
                    condition="on display"
                    g_maps='https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407'

                  />
                </Grid>
                <Grid item sm={12} xs={8} md={6} lg={4} zeroMinWidth>
                  <ImgMediaCard
                    img="/img/paintings/gif/mary_and_the_devil.gif"
                    title="Mary and the Devil"
                    description="on display at Level Up"
                    condition="on display"
                    g_maps='https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407'

                  />
                </Grid>
                <Grid item sm={12} xs={8} md={6} lg={4} zeroMinWidth>
                  <ImgMediaCard
                    img="/img/paintings/gif/puzzle.gif"
                    title="Puzzle"
                    description="on display at Level Up"
                    condition="on display"
                    g_maps='https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407'

                  />
                </Grid>
                <Grid item sm={12} xs={8} md={6} lg={4} zeroMinWidth>
                  <ImgMediaCard
                    img="/img/paintings/jpg/idea_formation.jpg"
                    title="Formation of Ideas"
                    description="not on display"
                    condition="avaliable"
                    g_maps=''

                  />
                </Grid>
                <Grid item sm={12} xs={8} md={6} lg={4} zeroMinWidth>
                  <ImgMediaCard
                    img="/img/paintings/gif/hurricane.gif"
                    title="Hurricane"
                    description="on display at Level Up"
                    condition="on display"
                    g_maps='https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407'

                  />
                </Grid>
              </Grid>
            </main>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className={classes.container}>
            <main className={classes.main}>
              {/* <div className={classes.heroContent} >  */}
              <img className={classes.heroContent} src="/img/mnriser.bmp" />
              {/* </div> */}
              {/* <Image src="/img/hero.bmp" alt="hero" layout="fill" /></div> */}
              {/* <Box m={5}></Box> */}
              {/* <Typography variant="h1" align="center" gutterBottom className={classes.title}>
          Invenire Studios
        </Typography> */}
              {/* <Image src="/img/hero.bmp" alt="hero" width={600} height={500} /> */}
              <Typography
                variant="h4"
                align="center"
                color="white"
                component="p"
              >
                Art
              </Typography>
              <br />
              <br />
              <Grid container>
                <Grid item xs={6}>
                  <ImgMediaCard />
                </Grid>
                <Grid item xs={6}>
                  <ImgMediaCard />
                </Grid>
                <Grid item xs={6}>
                  <ImgMediaCard />
                </Grid>
                <Grid item xs={6}>
                  <ImgMediaCard />
                </Grid>
                <Grid item xs={6}>
                  <ImgMediaCard />
                </Grid>
              </Grid>
            </main>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className={classes.container}>
            <main className={classes.main}>
              {/* <div className={classes.heroContent} >  */}
              <img className={classes.heroContent} src="/img/mnriser.bmp" />
              {/* </div> */}
              {/* <Image src="/img/hero.bmp" alt="hero" layout="fill" /></div> */}
              {/* <Box m={5}></Box> */}
              {/* <Typography variant="h1" align="center" gutterBottom className={classes.title}>
          Invenire Studios
        </Typography> */}
              {/* <Image src="/img/hero.bmp" alt="hero" width={600} height={500} /> */}
              <Typography
                variant="h4"
                align="center"
                color="white"
                component="p"
              >
                Events and Promations
              </Typography>
              <br />
              <br />
            </main>
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
