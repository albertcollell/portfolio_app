import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AboutPic from '../Assets/Albert_portfolio.jpg'
import Modal from '@material-ui/core/Modal';
import Clear from '@material-ui/icons/Clear';
import './AboutCard.css';
import { Box } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


import Slide1 from "../Assets/oneyearnomad-1Artboard1.jpg";
import Slide2 from "../Assets/oneyearnomad-1Artboard2.jpg";
import Slide3 from "../Assets/oneyearnomad-1Artboard3.jpg";
import Slide4 from "../Assets/oneyearnomad-1Artboard4.jpg";



export default class AboutCards extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        open: false,
        idmodal: 0
      };
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }
  
    handleOpen(e){
      this.setState(({
        open: true,
      }));
    }
  
    handleClose(){
      this.setState(({
        open: false
      }));
    }

    render(){
    
        return(
          <div>

            <Card className="cardAbout" style={{borderRadius: "10px"}} >
                <CardActionArea  onClick={this.handleOpen} > 
                  <CardMedia
                    className="mediaAbout"
                    image={AboutPic}
                    title="Contemplative Reptile"
                  />
                  <CardContent >
                    <Typography gutterBottom variant="h4" component="h2" style={{fontFamily: 'montserrat', fontWeight: '600', letterSpacing: '-0.05em', marginTop:"-80%"}}>
                    Hello,
                    </Typography>
                    <Typography variant="h5" color="textSecondary" component="p" className="subTitle" style={{fontFamily: 'montserrat', letterSpacing: '-0.02em', maxWidth: "60%", marginTop: "-3%"}}>
                      My name is Albert Collell
                    </Typography>
                    <Button variant="contained" onClick={this.handleOpen} style={{backgroundColor: "#959595", minWidth: "120px", color:"white", marginTop: "10%"}}> More ... </Button>
                  </CardContent>
                </CardActionArea>
              </Card> 
            <div>
              <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
              className='modalStyle_forbigscreen'
              >
            <div className="modalStyleAbout" >
                 <img src={AboutPic} alt="albertcollell" className="imageStyleAbout" ></img>
                
                 <div style={{position: 'fixed', top: '10px', right: '10px', textAlign: "center", verticalAlign: 'bottom'}}>
                  <Box style={{backgroundColor: '#D3D3D3', borderRadius: '24px', width: '36px', height: "36px", boxShadow: "0px 6px 6px rgb(0,0,0,0.20)"}}>
                  <Clear className="mdc-icon-button material-icons" onClick={this.handleClose} style={{height:"36px"}}>CLOSE</Clear>
                  </Box>
                </div>

                
                <div style= {{padding: '10% 10% 10% 10%', fontFamily: 'montserrat'}}>
                    <Typography gutterBottom variant="h4" component="h2" style={{fontFamily: 'montserrat', fontWeight: '600', letterSpacing: '-0.05em', marginTop:"-80%"}}>
                    Hello,
                    </Typography>
                    <Typography variant="h5" color="textSecondary" component="p" className="subTitle" style={{fontFamily: 'montserrat', letterSpacing: '-0.02em', maxWidth: "60%", marginTop: "-3%"}}>
                      My name is Albert Collell
                    </Typography>
                    <Button variant="contained" style={{backgroundColor: "#959595", width: "120px", color:"white", marginTop: "10%"}} href="./static/Albert_Collell_Resume.pdf" target='_blank' >
                    Resume
                    <CloudDownloadIcon style={{marginLeft: '10%'}}  />
                    </Button>
                    

                    <div style= {{letterSpacing: '-0.02em', fontWeight: '300', paddingBottom: '10%', paddingTop: "30%"}}>
                    <p id="simple-modal-description"> 
                    I initiated my career as an aerodynamics engineer, having completed my Mechanical Engineering studies at Politecnico de Torino and subsequently held staff aerodynamics engineering positions in Italy, Stockholm and Germany.<br></br>
                    After a few years in this field I decided that my true passion is in software development.  Six months ago I immersed myself in full-time learning, completed FreeCodeCamp full-stack developer course and now ready to initiate my career in this field, while continuing to expand my learning and skills. 
                    <br></br>I am presently seeking a Front-end Developer position. I have worked within larger corporations, as well as start-ups, including my own, Moov Rides. I am extremely adaptable and versatile. I am well adept at working in teams, in-house or remote, either leading or as an individual contributor.  Most importantly, I am solutions driven and committed to results.                     </p>
                    
                    <Typography variant="h5" color="textSecondary" component="p" className="subTitle" style={{fontFamily: 'montserrat', letterSpacing: '-0.02em'}}>
                    Other competences:                 
                    </Typography>
                    <ul>
                      <li>Problem Solving</li>
                      <li>Design Thinking</li>
                      <li>Logical thinking</li>
                      <li>Leadership</li>
                      <li>Business-Savy</li>
                      <li>Lean Methodology</li>
                      <li>Agile</li>
                      <li>Comunications Skills</li>
                      
                    </ul>
                    <Typography variant="h5" color="textSecondary" component="p" className="subTitle" style={{fontFamily: 'montserrat', letterSpacing: '-0.02em'}}>
                    Spoken languages:             
                    </Typography>
                    <ul>
                      <li>English</li>
                      <li>Spanish</li>
                      <li>Catalan</li>
                      <li>Italian</li>
                      <li>French</li>
                    </ul>

                </div>
              </div> 

              
                

              </div> 
              
            </Modal>
            </div>

              
              
              
    
                
                    
        </div>
    
        );
      }
      }