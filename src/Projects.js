import React from 'react';
import game from './img/game.png';
import tft from './img/tft.png';
import jokes from './img/jokes.png';
import redr from './img/redr.png';
import git from './img/github.png';
import {
    Card, CardText, CardBody,
    CardSubtitle, CardImg, Badge
    
} from 'reactstrap';

const Projects = () => {

    return (
        <div className = "projects">
            

            
            <Card className = "firstcard">
                <CardBody>
                    <h2><Badge color="success" className = "badges" href = 'https://cs-build1.vercel.app/' target="_blank" rel="noopener noreferrer">Game of Life</Badge></h2>
                    
                    
                        <CardImg className = "gamepic" src={game} alt='game'/>
                        <CardText>Conway's the game of life is a grid based game in which one creates an intial configuration
                            and watches how the game progresses, iteration by iteration. 
                        </CardText>
                        <div className = "pinfo">
                        <CardSubtitle>React - Algorithms - 2D arrays - CSS - hooks</CardSubtitle>
                        <a href = 'https://github.com/neel7777/CSbuild1' target="_blank" rel="noopener noreferrer">
                        <CardImg src={git} alt = 'git' className = 'gitpic'/>
                        </a>
                        </div>

                    
                </CardBody>
            </Card >
                
            
            <Card className = "firstcard">
                <CardBody>
                <h2><Badge color="success" className = "badges" href = 'https://tftproj.vercel.app/' target="_blank" rel="noopener noreferrer">Team Fight Tactics Comps</Badge></h2>
                
                    <CardImg src={tft} alt='tft'/>
                    <CardText>A personal project I created to track the best strategies for a popular auto battler game.</CardText>
                    <div className = "pinfo">
                        <CardSubtitle>React - Reactstrap - CSS - Hooks</CardSubtitle>
                        <a href = 'https://github.com/neel7777/tftproj' target="_blank" rel="noopener noreferrer">
                        <CardImg src={git} alt = 'git' className = 'gitpic'/>
                        </a>
                        </div>
                </CardBody>
            </Card>

            <Card className = "firstcard">
                <CardBody>
                <h2><Badge color="success" className = "badges" href = 'https://react-redux-app-rust.vercel.app/' target="_blank" rel="noopener noreferrer">Jokes with Redux</Badge></h2>
                    <CardImg src={jokes} alt='jokes'/>
                    <CardText>Simple app to practice the use of Redux. User is able to fetch jokes from an API</CardText>
                    <div className = "pinfo">
                        <CardSubtitle>React - Styled Components - Redux</CardSubtitle>
                        <a href = 'https://github.com/neel7777/React-Redux-App' target="_blank" rel="noopener noreferrer">
                        <CardImg src={git} alt = 'git' className = 'gitpic'/>
                        </a>
                        </div>
                </CardBody>
            </Card>
            <Card className = "firstcard">
                <CardBody>
                <h2><Badge color="success" className = "badges" href = 'https://redrquiz.vercel.app/' target="_blank" rel="noopener noreferrer">Red Rising Quiz</Badge></h2>
                    <CardImg src={redr} alt='redr'/>
                    <CardText>Simple quiz app about a popular Sci-Fi series.</CardText>
                    <div className = "pinfo">
                        <CardSubtitle>React - Styled Components - React-Bootstrap - Hooks</CardSubtitle>
                        <a href = 'https://github.com/neel7777/redrquiz' target="_blank" rel="noopener noreferrer">
                        <CardImg src={git} alt = 'git' className = 'gitpic'/>
                        </a>
                        </div>
                </CardBody>
            </Card>
           

        </div>
    )

}

export default Projects;