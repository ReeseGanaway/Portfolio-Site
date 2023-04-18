import { ThpaceGL } from 'thpace';
import { Fragment, useEffect } from 'react';
import './Game.css'
import Background from './Background';
import Drawer from './Drawer';



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
          <div className= "grid grid-cols-5 gap-4">
            <div className='col-span-1'>
              <Drawer />
            </div>

            <div className='flex justify-center col-span-4  h-screen items-center'>
              <div id = 'game-div '>
                <canvas id='canvas2'></canvas>
              </div>
            </div>
          </div>  
      </Fragment>
    )
  }
  
  export default Game;