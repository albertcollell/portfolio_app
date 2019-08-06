import React from 'react';
import './horizontalslider.css';

import MOOV1 from '../../Assets/MOOV/MOOVArtboard1.jpg';
import MOOV2 from '../../Assets/MOOV/MOOVArtboard2.jpg';
import MOOV3 from '../../Assets/MOOV/MOOVArtboard3.jpg';
import MOOV4 from '../../Assets/MOOV/MOOVArtboard4.jpg';
import MOOV5 from '../../Assets/MOOV/MOOVArtboard5.jpg';
import MOOV6 from '../../Assets/MOOV/MOOVArtboard6.jpg';
import MOOV7 from '../../Assets/MOOV/MOOVArtboard7.jpg';
import MOOV8 from '../../Assets/MOOV/MOOVArtboard8.jpg';

import OM3SEARCH1 from '../../Assets/OM3SEARCH/OM3SEARCH_Artboard1.jpg';
import OM3SEARCH2 from '../../Assets/OM3SEARCH/OM3SEARCH_Artboard2.jpg';
import OM3SEARCH3 from '../../Assets/OM3SEARCH/OM3SEARCH_Artboard3.jpg';
import OM3SEARCH4 from '../../Assets/OM3SEARCH/OM3SEARCH_Artboard4.jpg';
import OM3SEARCH5 from '../../Assets/OM3SEARCH/OM3SEARCH_Artboard5.jpg';

import ACBOARDS1 from '../../Assets/ACBOARDS/ACBOARDS_ARTBOARDSArtboard1.jpg';
import ACBOARDS2 from '../../Assets/ACBOARDS/ACBOARDS_ARTBOARDSArtboard2.jpg';
import ACBOARDS3 from '../../Assets/ACBOARDS/ACBOARDS_ARTBOARDSArtboard3.jpg';
import ACBOARDS4 from '../../Assets/ACBOARDS/ACBOARDS_ARTBOARDSArtboard4.jpg';
import ACBOARDS5 from '../../Assets/ACBOARDS/ACBOARDS_ARTBOARDSArtboard5.jpg';

import ONEYEARNOMAD1 from "../../Assets/oneyearnomad-1Artboard1.jpg";
import ONEYEARNOMAD2 from "../../Assets/oneyearnomad-1Artboard2.jpg";
import ONEYEARNOMAD3 from "../../Assets/oneyearnomad-1Artboard3.jpg";
import ONEYEARNOMAD4 from "../../Assets/oneyearnomad-1Artboard4.jpg";

import AERODYNAMICS1 from "../../Assets/AERODYNAMICS/AerodynamicsArtboard1.jpg"
import AERODYNAMICS2 from "../../Assets/AERODYNAMICS/AerodynamicsArtboard2.jpg"
import AERODYNAMICS3 from "../../Assets/AERODYNAMICS/AerodynamicsArtboard3.jpg"
import AERODYNAMICS4 from "../../Assets/AERODYNAMICS/AerodynamicsArtboard4.jpg"
import AERODYNAMICS5 from "../../Assets/AERODYNAMICS/AerodynamicsArtboard5.jpg"
import AERODYNAMICS6 from "../../Assets/AERODYNAMICS/AerodynamicsArtboard6.jpg"


const MOOVAPP = [MOOV3, MOOV4, MOOV5, MOOV6, MOOV7, MOOV8, MOOV1, MOOV2]
const ACBOARDSAPP = [ACBOARDS1, ACBOARDS2, ACBOARDS3, ACBOARDS4, ACBOARDS5]
const OM3SEARCHAPP = [OM3SEARCH1, OM3SEARCH2, OM3SEARCH3, OM3SEARCH4, OM3SEARCH5]
const ONEYEARNOMADAPP = [ONEYEARNOMAD1, ONEYEARNOMAD2, ONEYEARNOMAD3, ONEYEARNOMAD4]
const AERODYNAMICSAPP = [AERODYNAMICS1, AERODYNAMICS2, AERODYNAMICS3, AERODYNAMICS4, AERODYNAMICS5, AERODYNAMICS6]

const slider = (props) => {

    if (props.cardId === 0){
        return (
            <div className="carousel"> 
            {ONEYEARNOMADAPP.map((a)=> {
                return(
                <div className="slide">
                <img src={a} alt="slide1" alt="slide1" className="imageStyleSlide"></img>
                </div>
            )})}
            
           </div>
        )
    }

    if (props.cardId === 1){
        return (
            <div className="carousel"> 
            {OM3SEARCHAPP.map((a)=> {
                return(
                <div className="slide">
                <img src={a} alt="slide1" alt="slide1" className="imageStyleSlide"></img>
                </div>
            )})}
            
           </div>
        )
    }
    
    if (props.cardId === 2){
        return (
            <div className="carousel"> 
            {MOOVAPP.map((a)=> {
                return(
                <div className="slide">
                <img src={a} alt="slide1" alt="slide1" className="imageStyleSlide"></img>
                </div>
            )})}
            
           </div>
        )
    }

    if (props.cardId === 3){
        return (
            <div className="carousel"> 
            {ACBOARDSAPP.map((a)=> {
                return(
                <div className="slide">
                <img src={a} alt="slide1" alt="slide1" className="imageStyleSlide"></img>
                </div>
            )})}
            
           </div>
        )
    }

    if (props.cardId === 4){
        return (
            <div className="carousel"> 
            {AERODYNAMICSAPP.map((a)=> {
                return(
                <div className="slide">
                <img src={a} alt="slide1" alt="slide1" className="imageStyleSlide"></img>
                </div>
            )})}
            
           </div>
        )
    }
}

export default slider;