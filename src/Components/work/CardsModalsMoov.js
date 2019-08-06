import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import oneYearNomad from '../../Assets/MOOV.png';
import oneyearnomadMobile from '../../Assets/oneyearnomadMobile.png';
import Modal from '@material-ui/core/Modal';
import Clear from '@material-ui/icons/Clear';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    /*top: '20%' `${top}%`,*/
    /*left: '55%' `${left}%`,*/
    /*transform: `translate(-${top}%, -${left}%)`,*/
    backgroundColor: "white",   
    maxWidth: '100%',
    margin: 'auto',
    
    height: '100%',
    overflow: 'scroll',
    position: 'absolute',

  
  };
}

const imageStyle = {
  maxWidth: '100%',
  outline: 'none'
}

const cardTitle = {
  fontFamily: 'montserrat',
  fontWeight: '600',
  fontSize: '24px',
  letterSpacing: '-0.05em'

}

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: '7%',
    borderRadius: '10px',
    maxHeight: 250
  },
  media: {
    height: 140
    
  },
  paper: {
   
    maxWidth: '100%',
    /*minWidth: '100%'*/
    
    outline: 'none',
    

  },
  
});



export default function MediaCardModal() {

  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Card className={classes.card}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          className={classes.media}
          image= {oneYearNomad}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'montserrat', fontStyle: 'italic', letterSpacing: '-0.02em'}}>
            Start-up & App Design
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'montserrat', fontWeight: '600', letterSpacing: '-0.05em'}}>
            MOOV - eScooter Sharing
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        >
        <div style={modalStyle}>
        <img src={oneYearNomad} alt="oneyearnomad" style={imageStyle}></img>
          
          <Clear className="mdc-icon-button material-icons" onClick={handleClose} style={{position: 'absolute', top: '10px', right: '10px', size: '36dp'}}>CLOSE</Clear>
          
          <div style= {{padding: '2% 10% 10% 10%', fontFamily: 'montserrat'}}>
        
            <p style={{fontStyle: 'italic', fontSize: '14px'}}>Start-up & App Design</p>
            <h1 id="modal-title" style={cardTitle}>MOOV - eScooter Sharing</h1>
            <Button variant="contained" color="primary"> VISIT </Button>
            <div style= {{letterSpacing: '-0.02em', fontWeight: '400', paddingBottom: '10%'}}>
               <p id="simple-modal-description"> 
               The new urban movement of shared ecomobility. The most efficient and affordable electric transportation system in the world, for you and for our cities, with a disruptive Blockchain business model.  
            </p>
            <h3>
            Key functions:
            </h3>
            <li>Strategy and vision.</li>
            <li>Recruited a talented team of mobility professionals.</li>
            <li>Negotiated and created key partnerships with providers and manufacturers.</li>
            <li>Financial modelling, forecasting and building business model.</li>
            <li>Created an operations strategy and plan.</li>
            <li>Co-created Investors Pitch Deck. </li>
            <li>Established relationships with the investors community. </li>
            <li>Lead the funding efforts to date. </li>

            <h3 >
            Key Milestones:
            </h3>
            <li>Achieved MVP App and Conected vehicles with GPS using Electron from Particle.</li>
            <li>Elementor</li>
            <li>Adobe Creative Suite</li>
            </div>
            <br></br>

            <img src={oneyearnomadMobile} alt="oneyearnomadMobile" style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '10px', boxShadow: '0 2px 2px 0 rgba(0,0,0,0.20)'}}></img>
      
          </div> 
        </div> 
    
      </Modal>
      </div>
    
  );
}

