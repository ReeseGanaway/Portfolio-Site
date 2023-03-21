import { ThpaceGL } from 'thpace';
import { Fragment, useEffect } from 'react';
import './Game.css'
import Background from './Background';



const settings = {
	colors: ['#EC3819', '#F51B8B','#1D35AA'],
    //'#4CB1EF', '#424959', '#FF4B44', '#39F71F',
	triangleSize: 100,
};

const canvas = document.querySelector('#bg-canvas');
ThpaceGL.create(canvas, settings);

function Game() {
    
  
    return (
        <Fragment>
          <Background/>
          <div id = 'game-div'>
            <canvas id='canvas2'></canvas>
            <h1 id = 'header'>IM HERE</h1>
          </div>
          
      </Fragment>
    )
  }
  
  export default Game;