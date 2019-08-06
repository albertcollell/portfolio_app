import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { borderRadius, maxHeight } from '@material-ui/system';
import oneYearNomad from '../Assets/oneyearnomad.jpg';
import {Link} from 'react-router-dom';
import oneYearNomadModal from './Modal.js'


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: '7%',
    borderRadius: '10px',
    maxHeight: 250
  },
  media: {
    height: 140,
    
  },
});



export default function MediaCard() {

  const classes = useStyles();

  return (
    <div>
    <Card className={classes.card}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image= {oneYearNomad}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            The One Year Nomad
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"  >
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     
    </div>
  );
}

