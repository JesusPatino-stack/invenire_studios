import React from "react";
import "@fontsource/luckiest-guy";
import ImgMediaCard from "../card";
import { Grid } from "@material-ui/core";
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
  const card_values = [
      {
    title:"Bugs Behind The Screen",
    img:"/img/paintings/gif/bugs_behind_the_screen.gif",
    description:`On display @ Level Up Arcade and Billiards in East Ridge, TN. \n Open 7 days a week from 5pm-3am`,
    condition:"venue location",
    g_maps:'https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407',
      },
      {
        title:"Cats",
        img:"/img/paintings/gif/cats.gif",
        description:`On display @ Level Up Arcade and Billiards in East Ridge, TN. \n Open 7 days a week from 5pm-3am`,
        condition:"venue location",
        g_maps:'https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407',
      },
      {
        title:"Earth and Sky",
        img:"/img/paintings/gif/earth_and_sky.gif",
        description:`On display @ Level Up Arcade and Billiards in East Ridge, TN. \n Open 7 days a week from 5pm-3am`,
        condition:"venue location",
        g_maps:'https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407',
      },
      {
        title:"Electric Ice",
        img:"/img/paintings/gif/electric_ice.gif",
        description:`On display @ Level Up Arcade and Billiards in East Ridge, TN. \n Open 7 days a week from 5pm-3am`,
        condition:"venue location",
        g_maps:'https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407',
      },
      {
        title:"Entanglement",
        img:"/img/paintings/gif/entangelment_in_blue.gif",
        description:`On display @ Level Up Arcade and Billiards in East Ridge, TN. \n Open 7 days a week from 5pm-3am`,
        condition:"venue location",
        g_maps:'https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407',
      },
      {
        title:"Mary and the Devil",
        img:"/img/paintings/gif/mary_and_the_devil.gif",
        description:`On display @ Level Up Arcade and Billiards in East Ridge, TN. \n Open 7 days a week from 5pm-3am`,
        condition:"venue location",
        g_maps:'https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407',
      },
      {
        title:"Puzzle",
        img:"/img/paintings/gif/puzzle.gif",
        description:`On display @ Level Up Arcade and Billiards in East Ridge, TN. \n Open 7 days a week from 5pm-3am`,
        condition:"venue location",
        g_maps:'https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407',
      },
      {
        title:"Formation of Ideas",
        img:"/img/paintings/jpg/idea_formation.jpg",
        description:"Not on display. Contact me if you would like to purchase or host this piece at your venue.",
        condition:"contact me",
        g_maps:'',
      },
      {
        title:"Hurricane",
        img:"/img/paintings/gif/hurricane.gif",
        description:`On display @ Level Up Arcade and Billiards in East Ridge, TN. \n Open 7 days a week from 5pm-3am`,
        condition:"venue location",
        g_maps:'https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407',
      },
  ]
export default function Art(props) {
    const {value} = props
    const classes = useStyles();
  const theme = useTheme();
    return (
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className={classes.container}>
            <main className={classes.main}>
              <Grid container spacing={5}>
                  {card_values.map((card, index) => (
                     <Grid key={card.title} item sm={12} xs={8} md={6} lg={4} zeroMinWidth>
                     <ImgMediaCard
                       img={card.img}
                       title={card.title}
                       description={card.description}
                       condition={card.condition}
                       g_maps={card.g_maps}
                     />
                   </Grid> 
                  ))}
              </Grid>
            </main>
          </div>
        </TabPanel>
    )
}