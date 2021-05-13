import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";
import { Box } from "@material-ui/core";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Invenire Studios</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box m={5}></Box>
        <Typography variant="h1" align="center" gutterBottom>
          Invenire Studios
        </Typography>
        <Image src="/img/hero.bmp" alt="hero" width={600} height={500} />
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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
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
}));
