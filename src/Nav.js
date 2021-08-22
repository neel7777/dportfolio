import React from 'react';
import linkedin from './img/linkedin.png';
import github from './img/github.png';
// import resume from './img/resume.png';


import {
    
    Navbar
    
  } from 'reactstrap';

const Nav = props => {
    

    
    return (
        <div>
            
          <Navbar color="dark" fixed='top' light expand="md" float='right'>
            

          <div className = "navbut">
              <div className = 'leftbut'>

              
            <a href = 'https://www.linkedin.com/in/neel-mazumdar/' target = '_blank' rel="noopener noreferrer">
          <img className = 'pics' src = {linkedin} alt = 'linkedin' />
            </a>
            <a href = 'https://github.com/neel7777' target="_blank" rel="noopener noreferrer">
          <img className = 'pics' src = {github} alt = 'github' />
            </a>
            {/* <a href = 'https://drive.google.com/file/d/11m26VeW3SyeXB14C7JnUtd5t9_tHWWXQ/view' target="_blank" rel="noopener noreferrer">
          <img className = 'pics' src = {resume} alt = 'resume' />
            </a> */}
              </div>
          

            
          </div>
        
            
            
          </Navbar>
          
        </div>
      );

}

export default Nav;