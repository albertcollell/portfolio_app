import React from 'react'
import AboutCard from './AboutCard.js'
import Typography from '@material-ui/core/Typography';
import LogoGroup from '../Assets/Logo_group.png'
import interestedLogos from '../Assets/interested_skills.png'



const About = () => {
    return (
       
        
        <div style={{paddingBottom: "20%"}}>
        
        <AboutCard />
        <Typography variant="h5" color="textSecondary" component="p" className="subTitle" style={{fontFamily: 'montserrat', letterSpacing: '-0.02em',  marginLeft: "7%", marginRight: "7%"}}>
            Software Developer
        </Typography>
        <div style={{margin: "7%", maxWidth: "100%", alignSelf: "center"}}>
        <img src={LogoGroup} style={{ maxWidth: "100%"}} />
        </div>
        <Typography variant="h5" color="textSecondary" component="p" className="subTitle" style={{fontFamily: 'montserrat', letterSpacing: '-0.02em',  marginLeft: "7%", marginRight: "7%"}}>
            Upcoming Skills:
        </Typography>
        <div style={{margin: "7%", maxWidth: "100%", alignSelf: "center"}}>
        <img src={interestedLogos} style={{ maxWidth: "100%"}} />
        </div>
        </div>
    )
}

export default About