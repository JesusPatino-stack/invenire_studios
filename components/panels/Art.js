import React from "react";
import "@fontsource/luckiest-guy";
import ImgMediaCard from "../card";
import EmbededVideoMediaCard from '../EmbededVideoMediaCard'
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import getPaintings from '../paintings' 
import getSculptures from '../sculptures'

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
      color: "inherit",
      padding: theme.spacing(6),
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignVertical: "center",
    },
    title: {
      font: "Roboto",
      weight: "light",
      fontSize: "60px",
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
        color: "primarey",
      },
      h4: {
        color: "primary",
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

export default function Art(props) {
    const {value} = props
    const classes = useStyles();
  const theme = useTheme();
  const paintings = getPaintings() 
  const sculptures = getSculptures()
    return (
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className={classes.container}>
            <main className={classes.main}>
            <Typography variant="h6" className={classes.title} >
            paintings
          </Typography>
              <Grid container spacing={5}>
                  {paintings.map((card, index) => (
                     <Grid key={card.title} item sm={12} xs={8} md={6} lg={4} zeroMinWidth>
                     <ImgMediaCard
                       img={card.img}
                       title={card.title}
                       description={card.description}
                       price={card.price}
                       medium={card.medium}
                       dimensions={card.dimensions}
                       venue={card.venue}
                       venue_hours={card.venue_hours}
                       condition={card.condition}
                       g_maps={card.g_maps}
                       
                     />
                   </Grid> 
                  ))}
              </Grid>
              <Typography variant="h6" className={classes.title} >
            sculptures
          </Typography>
          <Grid container spacing={5}>
                  {sculptures.map((card, index) => (
                     <Grid key={card.title} item sm={12} xs={8} md={6} lg={4} zeroMinWidth>
                     <EmbededVideoMediaCard
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