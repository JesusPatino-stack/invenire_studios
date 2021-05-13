import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";
import { Box } from "@material-ui/core";
import '@fontsource/roboto';

// import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
// let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);

export default function Home() {
  const classes = useStyles();
  return (
    // <ThemeProvider theme={theme}>
    <div className={classes.container}>
      <Head>
        <title >Invenire Studios</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main} >
        {/* <div className={classes.heroContent} >  */}
        <img  className={classes.heroContent}src="/img/hero.bmp" />
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
          Artist and Technologist
        </Typography>
        <Footer />
      </main>

      
    </div>
    // </ThemeProvider>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      {/* <Typography variant="h5" align="center" gutterBottom>
        Contact
      </Typography> */}
      <Typography
        variant="h3"
        align="center"
        color="white"
        component="p"
      >
        Neal Butler
      </Typography>
      <Typography
        variant="h4"
        align="center"
        color="white"
        component="p"
      >
        <a href="tel:7064638523">706.463.8523</a>
      </Typography>
    </footer>
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
    backgroundColor: 'black'
  },
  main: {
    padding: "5rem 0",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'black',
    verticalAlign: 'top'
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: 'black',
    padding: theme.spacing(8, 0, 6),
    // height:"100rem",
    width:"100%",
    alignContent: 'center',
    // verticalAlign: 'top'
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
    backgroundColor: 'black',
    color: 'white',
    padding: theme.spacing(6),
    width: '100%'
  },
  title: {
    font: 'Roboto',
    weight: "light",
    fontSize: "96px",
    letterSpacing: "-1.5px"
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
    h3: {
      color: 'white'
    },
    h4: {
      color: 'white'
    }
  },
}));

