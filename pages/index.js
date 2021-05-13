import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Invenire Studios</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <h1 className={styles.title}>
          Invenire Studios
        </h1>
        <Image src='/img/hero.bmp' alt='hero' width={600} height={500}/>
        <div>Artist and Technologist</div>

      </main>

      <Footer/>
    </div>
  )
}

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
        <Typography variant="h5" align="center" gutterBottom>
          Contact
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Neal Butler
        </Typography>
        <Typography variant="subtitle2" align="center" color="textSecondary" component="p">
        706.463.8523
        </Typography>
      </footer>
  )
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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));