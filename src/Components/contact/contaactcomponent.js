
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';

import phoneIcon from "../../Assets/CONTACT/Phone2.png"
import emailIcon from "../../Assets/CONTACT/email.png"
import whatsAppIcon from "../../Assets/CONTACT/whatsapp.png"
import facebookIcon from "../../Assets/CONTACT/facebook.png"
import telegramIcon from "../../Assets/CONTACT/telegram.png"
import linkedinIcon from "../../Assets/CONTACT/linkedin.png"
import instagramIcon from "../../Assets/CONTACT/instagram2.png"

import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
  root:{
      
      background: "white",
  },
  
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div  style={{margin: "10% 7% 0% 7%"}}>
      <div>
    
      <Grid container spacing={3}>
        <Grid item xs={3}>
            <Fab  aria-label="add" classes={classes} href="mailto:albertcollell@gmail.com">
            <img src={emailIcon} style={{maxWidth: "40px"}}></img>
            </Fab>
        </Grid>
        <Grid item xs={9}>
             <Typography variant="body2" color="textSecondary" component="p" className="subTitle" style={{fontFamily: 'montserrat', fontSize: "16px", letterSpacing: '-0.02em', paddingTop: "8%"}}>
                  albert.collell@gmail.com
                </Typography>
        </Grid>
        <Grid item xs={3}>
            <Fab  aria-label="add" classes={classes} href="tel:+34653305801">
            <img src={phoneIcon} style={{maxWidth: "40px"}}></img>
            </Fab>
        </Grid>
        <Grid item xs={9}>
             <Typography variant="body2" color="textSecondary" component="p" className="subTitle" style={{fontFamily: 'montserrat', fontSize: "16px", letterSpacing: '-0.02em', paddingTop: "8%"}}>
                  +34 653 305 801
                </Typography>
        </Grid>
        <Grid item xs={3}>
            <Fab  aria-label="add" classes={classes} href="fb://https://www.facebook.com/fcbarcelona">
            <img src={facebookIcon} style={{maxWidth: "40px"}}></img>
            </Fab>
        </Grid>
        <Grid item xs={9}>
             <Typography variant="body2" color="textSecondary" component="p" className="subTitle" style={{fontFamily: 'montserrat', fontSize: "16px", letterSpacing: '-0.02em', paddingTop: "8%"}}>
                albert.collell.5
                </Typography>
        </Grid>
        <Grid item xs={3}>
            <Fab  aria-label="add" classes={classes} href="https://wa.me/003463305801">
            <img src={whatsAppIcon} style={{maxWidth: "40px"}}></img>
            </Fab>
        </Grid>
        <Grid item xs={9}>
             <Typography variant="body2" color="textSecondary" component="p" className="subTitle" style={{fontFamily: 'montserrat', fontSize: "16px", letterSpacing: '-0.02em', paddingTop: "8%"}}>
                  +34 653 305 801
                </Typography>
        </Grid>
        <Grid item xs={3}>
            <Fab  aria-label="add" classes={classes} href="https://telegram.me/albertcollell">
            <img src={telegramIcon} style={{maxWidth: "40px"}}></img>
            </Fab>
        </Grid>
        <Grid item xs={9}>
             <Typography variant="body2" color="textSecondary" component="p" className="subTitle" style={{fontFamily: 'montserrat', fontSize: "16px", letterSpacing: '-0.02em', paddingTop: "8%"}}>
                  @albertcollell
                </Typography>
        </Grid>
        <Grid item xs={3}>
            <Fab  aria-label="add" classes={classes} href="https://www.linkedin.com/in/albertcollell">
            <img src={linkedinIcon} style={{maxWidth: "40px"}}></img>
            </Fab>
        </Grid>
        <Grid item xs={9}>
             <Typography variant="body2" color="textSecondary" component="p" className="subTitle" style={{fontFamily: 'montserrat', fontSize: "16px", letterSpacing: '-0.02em', paddingTop: "8%"}}>
                albertcollell
                </Typography>
        </Grid>
        <Grid item xs={3}>
            <Fab  aria-label="add" classes={classes} href="http://instagram.com/albertcollell/">
            <img src={instagramIcon} style={{maxWidth: "40px"}}></img>
            </Fab>
        </Grid>
        <Grid item xs={9}>
             <Typography variant="body2" color="textSecondary" component="p" className="subTitle" style={{fontFamily: 'montserrat', fontSize: "16px", letterSpacing: '-0.02em', paddingTop: "8%"}}>
                  @albertcollell
                </Typography>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}