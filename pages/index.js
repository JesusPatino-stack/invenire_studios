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
        <div className={classes.heroContent} > 
        <img  className={classes.heroContent}src="/img/hero.bmp" />
        </div>
        {/* <Image src="/img/hero.bmp" alt="hero" layout="fill" /></div> */}
        <Box m={5}></Box>
        <Typography variant="h1" align="center" gutterBottom className={classes.title}>
          Invenire Studios
        </Typography>
        {/* <Image src="/img/hero.bmp" alt="hero" width={600} height={500} /> */}
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Artist and Technologist
        </Typography>
      </main>

      <Footer />
    </div>
    // </ThemeProvider>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h5" align="center" gutterBottom>
        Contact
      </Typography>
      <Typography
        variant="h3"
        align="center"
        color="textSecondary"
        component="p"
      >
        Neal Butler
      </Typography>
      <Typography
        variant="h4"
        align="center"
        color="textSecondary"
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
    height: "100vh",
  },
  main: {
    padding: "5rem 0",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    // height:"100rem",
    width:"100%"
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
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
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
  },
}));

