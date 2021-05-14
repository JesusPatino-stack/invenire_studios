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
    const {img, title, description, condition} = props
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
          <Typography gutterBottom variant="h3" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary">
          <a href="https://www.google.com/maps/place/Level+Up+Arcade+and+Billiards/@34.999782,-85.2584417,17z/data=!4m13!1m7!3m6!1s0x88606772239c2303:0x4b1bc5421cb3a9be!2s3801+Ringgold+Rd,+Chattanooga,+TN+37412!3b1!8m2!3d34.999782!4d-85.256253!3m4!1s0x88606786be179a13:0xddbc1ca807d0bf19!8m2!3d35.0001654!4d-85.2569407" target="_blank" rel="noopener">{condition}</a>
        </Button>
        <Button size="large" color="primary">
          <a href="https://www.etsy.com" target="_blank" rel="noopener">Buy Print</a>
        </Button>
      </CardActions>
    </Card>
  );
}