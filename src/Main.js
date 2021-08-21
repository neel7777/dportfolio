import React from 'react';
import Projects from './Projects'
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, CardImg, List, Badge
  
} from 'reactstrap';
import neel from './img/neel.jpg';


const Main = () => { 

    return(
        <div className = "main">
            <div className = "topmain">
        <Card className = "firstcard">
        
            <CardBody>
                <CardTitle tag="h5">Neel Mazumdar</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Web Developer</CardSubtitle>
                <CardText>Passionate for learning and problem solving.</CardText>
                <CardImg className = 'neel' src = {neel} alt='neel' />
            </CardBody>
        </Card>
         
        <Card className = 'firstcard'>
            <CardBody>
                <CardTitle  tag="h5">About</CardTitle>
                <CardText className = 'cardT'>I've always been an avid gamer and problem solver. I've played poker
                    professionally for several years before looking to transition into the tech field.
                    While finishing a CS degree and completing an online boot camp, I developed a 
                    passion for building vibrant, dynamic webpages. This field has been rewarding
                    as well as humbling with how much there is to master. I'm hoping to join a company
                    to add value while continuing to learn and grow. 

                    
                </CardText>
            </CardBody>

        </Card>
        <Card className = 'firstcard'>
            <CardBody>
                <CardTitle  tag = "h5">Skills</CardTitle>
                <div className = 'list'> 
                    <List type="unstyled" className = 'cardT'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Git</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        
                    </List>
                    <List type="unstyled" className = 'cardT'>
                        <li>Redux</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>Python</li>
                        
                        
                    </List>
                </div>
            </CardBody>
            

        </Card>
                </div>
        <h1><Badge color="primary" pill>Projects</Badge></h1>
        <Projects/>
        <Card>
            <CardBody>
                <CardText>Reach out to me!</CardText> <a href="mailto:neelmazumdar7@gmail.com"><CardText>neelmazumdar7@gmail.com</CardText></a>
            </CardBody>
        </Card>
        </div>
        
        
        

    );

};

export default Main;