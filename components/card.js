import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
});

export default function ImgMediaCard(props) {
    const {img, title, description, condition, g_maps} = props
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {condition !== 'venue location' ? <Button size="large" color="primary">
          <a href={g_maps} target="_blank" rel="noopener">{condition}</a>
        </Button> : null}
        {condition !== 'contact me' ? <Button size="large" color="primary">
          <a href="mailto:abstractsplashing@gmail.com">{condition}</a>
        </Button> : null}
        {/* <Button size="large" color="primary">
          <a href="https://www.etsy.com" target="_blank" rel="noopener">Buy Print</a>
        </Button> */}
      </CardActions>
    </Card>
  );
}