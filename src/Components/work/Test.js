import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import oneYearNomad from '../../Assets/oneyearnomad.jpg';
import om3search from '../../Assets/om3search.jpg'
import MOOV from '../../Assets/MOOV.png'
import ACBOARDS from '../../Assets/ACBoards.jpg'
import AERODYNAMICS from '../../Assets/indy-aerodynamics.jpg'
import oneyearnomadMobile from '../../Assets/oneyearnomadMobile.png';
import Modal from '@material-ui/core/Modal';
import Clear from '@material-ui/icons/Clear';
import CardsData from '../data/CardsData.json';
import './Test.css';
import Slider from './horizontalslider.js';
import { Container, Box } from '@material-ui/core';


export default class MediaCards extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      idmodal: 0
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleImagePath = this.handleImagePath.bind(this);
  }

  handleOpen(e){
    this.setState(({
      open: true,
      idmodal: e-1 /* here we pass the id of the card as an State so then we can open the proper Modal */
    }));
    console.log(this.state.idmodal);
  }

  handleClose(){
    this.setState(({
      open: false
    }));
  }
/* needs refidment.... this is not a slick solution to go with the images....*/
  handleImagePath(e){ 
    if (e === 1){
      return (oneYearNomad)
    }
    if (e === 2){
      return (om3search)
    }
    if (e === 3){
      return (MOOV)
    }
    if (e === 4){
      return (ACBOARDS)
    }
    if (e === 5){
      return (AERODYNAMICS)
    }
  }


  render(){


    return(
      <div>
      {CardsData.map((cardDetail, index)=> {
        return( 
        <Card className="card" style={{borderRadius: "10px"}}>
            <CardActionArea  onClick={(e) => this.handleOpen(cardDetail.id)}> 
              <CardMedia
                className="media"
                image={this.handleImagePath(cardDetail.id)}
                title="Contemplative Reptile"
              style={{boxShadow: "0px 2px 4px rgb(0,0,0,0.30)"}}/>
              <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" className="subTitle" style={{fontFamily: 'montserrat', letterSpacing: '-0.02em'}}>
                  {cardDetail.subtitle}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'montserrat', fontWeight: '600', letterSpacing: '-0.05em'}}>
                {cardDetail.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> 
            
            )       
        }   
    )
    }

    <div>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
              className='modalStyle_forbigscreen'
              >
            <div className="modalStyle">
                 <img src={this.handleImagePath(CardsData[this.state.idmodal].id)} alt="oneyearnomad" className="imageStyle"></img>
                
                <div style={{position: 'fixed', top: '10px', right: '10px', textAlign: "center", verticalAlign: 'bottom'}}>
                  <Box style={{backgroundColor: '#797979', borderRadius: '24px', width: '36px', height: "36px", boxShadow: "0px 6px 6px rgb(0,0,0,0.20)"}}>
                  <Clear className="mdc-icon-button material-icons" onClick={this.handleClose} style={{height:"36px", color:"white"}}>CLOSE</Clear>
                  </Box>
                </div>

                <div style= {{padding: '2% 10% 10% 10%', fontFamily: 'montserrat'}}>
                  <p style={{fontStyle: 'italic', fontSize: '14px', fontWeight: "300"}}>{CardsData[this.state.idmodal].subtitle}</p>
                  <h1 id="modal-title" style={{fontFamily: 'montserrat', fontWeight: '600', fontSize: '24px', letterSpacing: '-0.05em', marginTop: '-10px'}}>{CardsData[this.state.idmodal].title}</h1>
                  
                      <Button variant="contained"  href={CardsData[this.state.idmodal].websiteurl} target="_blank" style={{backgroundColor: CardsData[this.state.idmodal].buttonColor, minWidth: "120px", color:"white"}}> VISIT </Button>
                  
                  <div style= {{letterSpacing: '-0.02em', fontWeight: '300', paddingBottom: '10%'}}>

                    <p id="simple-modal-description"> 
                    {CardsData[this.state.idmodal].description}
                    </p>
                  <h3 style={{fontWeight: "400"}}>{CardsData[this.state.idmodal].list1Title}</h3>
                  
                  {CardsData[this.state.idmodal].list1.map((i)=> {return (<li>{i}</li>)})}  
                 
                  <h3 style={{fontWeight: "400"}}>{CardsData[this.state.idmodal].list2Title}</h3>

                  {CardsData[this.state.idmodal].list2.map((i)=> {return (<li>{i}</li>)})}

                </div>
              </div> 
                <Slider cardId = {this.state.idmodal} />     
              </div> 
            </Modal>
            
            </div>  

    </div>

    );
  }
  }



