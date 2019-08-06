import React from 'react';
import Card from './Cards.js'
import { fontFamily, fontWeight, borderBottom, positions } from '@material-ui/system';
import CardsModalsOneYearNomad from './work/CardsModalsOneYearNomad.js';
import CardsModalsMOOV from './work/CardsModalsMoov.js';
import Test from './work/Test.js';



const headerStyles = {
  padding: '2%',
  position: 'sticky',
  top: "0",
  zIndex: "1",
  backgroundColor: "white",
  boxShadow: "0px 4px 6px rgb(0,0,0,0.20)"
  
};

const styleH1 = {
  fontFamily: 'montserrat',
  fontWeight: '600',
  fontSize: '33px',
  paddingLeft: '5%'
}

const styleH2 = {
  
    fontFamily: 'montserrat',
    fontWeight: '300',
    fontSize: '24px',
    paddingLeft: '7%'

}

const Hellocomponent = () => {
    return (
      <div style={{paddingBottom: "20%"}}>
      <header style={headerStyles}  >
        <h1 style={styleH1}>Experience</h1>
         
      </header>
      <Test />
      </div>           
    
    )
  };
  
  export default Hellocomponent;