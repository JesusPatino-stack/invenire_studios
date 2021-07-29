import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Modal from './Modal'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ImgMediaCard(props) {
    const {img, title, description, condition, g_maps, get_tickets, price, medium, venue, venue_hours, dimensions} = props
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={img}
          title="Contemplative Reptile"
          onClick={handleOpen}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="h8" component="h3">
            {description}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            price: {price}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            medium: {medium}
            <Typography variant="body1" color="textSecondary" component="p">
            dimensions: {dimensions}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            venue: {venue}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            venue hours: {venue_hours}
          </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {condition === 'venue location' ? <Button size="large" color="primary">
          <a href={g_maps} target="_blank" rel="noopener">{condition}</a>
        </Button> : null}
      {condition === 'nightfall' ? <><Button size="large" color="primary">
          <a href={g_maps} target="_blank" rel="noopener">VENUE LOCATION</a>
        </Button>
        <Button size="large" color="primary">
        <a href="http://www.nightfallchattanooga.com/" target="_blank" rel="noopener">Nightfall</a>
      </Button>
      </> : null}
      {condition === 'wanderlinger' ? <>
      <Button size="large" color="primary">
        <a href="http://www.wanderlinger.com/" target="_blank" rel="noopener">Wanderlinger's site</a>
      </Button><Button size="large" color="primary">
          <a href={g_maps} target="_blank" rel="noopener">Directions to venue</a>
        </Button>
      </> : null}
        {condition === 'contact me' ? <Button size="large" color="primary">
          <a href="mailto:abstractsplashing@gmail.com">{condition}</a>
        </Button> : null}
        {/* <Button size="large" color="primary">
          <a href="https://www.etsy.com" target="_blank" rel="noopener">Buy Print</a>
        </Button> */}
      </CardActions>
    </Card>
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
              <img src={img} style={{width: '100%'}}/>
            <h2 id="transition-modal-title">{title}</h2>
            {/* <p id="transition-modal-description">react-transition-group animates me.</p> */}
          </div>
        </Fade>
      </Modal>
    </div>
    </>
  );
}