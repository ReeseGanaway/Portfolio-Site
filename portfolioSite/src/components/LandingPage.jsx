import { ThpaceGL } from 'thpace';
import { useEffect } from 'react';
import './LandingPage.css'
import Background from './Background';



const settings = {
	colors: ['#EC3819', '#F51B8B','#1D35AA'],
    //'#4CB1EF', '#424959', '#FF4B44', '#39F71F',
	triangleSize: 100,
};

const canvas = document.querySelector('#bg-canvas');
ThpaceGL.create(canvas, settings);

function LandingPage() {

    useEffect(() => {
        const canvas = document.querySelector('#bg-canvas');
        canvas.width = document.body.scrollWidth
        canvas.height = document.body.scrollHeight
        ThpaceGL.create(canvas, settings);
    }, [])
    
  
    return (
      <div id = 'parent-div'>
          <Background/>
          <div id = 'game-div'>
            <canvas id='canvas2'></canvas>
          </div>
      </div>
    )
  }
  
  export default LandingPage