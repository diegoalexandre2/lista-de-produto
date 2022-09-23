import React from "react";
import { Component } from "react";
import {  GrAddCircle   } from 'react-icons/gr';
import {  BiSearchAlt  } from 'react-icons/bi';
import {   AiOutlinePercentage } from 'react-icons/ai';

import './footer.css';

class Footer extends Component {
    async componentDidMount() {
        window.scrollTo(0,0)
    }
        render(){
            return(
                <>
                 <div> 
                      <h3>< GrAddCircle /> </h3>
                  </div> 
                <div> 
                        <h3>< BiSearchAlt  /> </h3>
                </div>   
                    <div> 
                        <h3><  AiOutlinePercentage /> </h3>
                    </div> 
                </>
            )
        } 

    }
    export default Footer;