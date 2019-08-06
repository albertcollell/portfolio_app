import React from 'react';
import './App.css';
import LabelBottomNavigation from './Components/BottomNavigation'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './Components/About'
import Work from './Components/work';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Grid';
import SwipeableViews from 'react-swipeable-routes';
import MediaQuery from 'react-responsive';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';



function App() {
  
return (
    <div>
      <MediaQuery query="(max-device-width: 500px)">
    <div>
    <BrowserRouter>
      <div>
      <Switch>
      <Route path="/" component={About} exact/>
      <Route path="/work"  component={Work} />
      <Route path="/education"  component={Education} />
      <Route path="/contact" component={Contact} />
      <Route component={Error}/>
      </Switch>
      <footer className="App-footer">
      <LabelBottomNavigation />
      </footer>
      </div>
    </BrowserRouter>
    </div> 
    </MediaQuery>

    <MediaQuery query="(min-device-width: 500px)">
    <div style={{maxWidth: "100%"}}>
       <Grid container spacing={3}>
        <Grid item xs={12} sm={6} >
        <div style={{margin: "30% auto auto 20%"}}>
        <Typography gutterBottom variant="h1" component="h1" style={{fontFamily: 'montserrat', fontWeight: '600', letterSpacing: '-0.05em', fontSize: "50px"}}>
                    This is my Portfolio
          </Typography>
          <Typography gutterBottom variant="h6" component="h6" style={{fontFamily: 'montserrat', fontWeight: '300', letterSpacing: '-0.01em', fontSize: "24px"}}>
                    This website has been created and designed specially for mobile phone using React, Material-ui, Bootstrap, json data binding and more...
                    <br></br>For a complete experience take a look at your phone at www.albertcollell.com
                    
          </Typography>
            <Button variant="contained" style={{backgroundColor: "#959595", width: "120px", color:"white"}} href="./static/Albert_Collell_Resume.pdf" target='_blank' >
              Resume
            <CloudDownloadIcon style={{marginLeft: '10%'}}  />
            </Button>

        </div>
        </Grid>
        <Grid item xs={12} sm={6} >
              <div style={{height: '100%'}}>
              <figure class="figure">
              <BrowserRouter>
              <div>
              <Switch>
              <Route path="/" component={About} exact/>
              <Route path="/work"  component={Work} />
              <Route path="/education"  component={Education} />
              <Route path="/contact" component={Contact} />
              <Route component={Error}/>
              </Switch>
              <footer className="App-footer">
              <LabelBottomNavigation style={{}}/>
              </footer>
              </div>
              </BrowserRouter>
              </figure>
              </div>
        </Grid>
      </Grid>
    </div>
    </MediaQuery>
    </div>
  );
}


export default App;
