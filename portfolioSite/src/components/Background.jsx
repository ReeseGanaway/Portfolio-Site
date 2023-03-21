import { ThpaceGL } from 'thpace';
import { useEffect } from 'react';
import './Background.css'

function Background() {

    useEffect(() => {
        const settings = {
            colors: ['#EC3819', '#F51B8B','#1D35AA'],
            //'#4CB1EF', '#424959', '#FF4B44', '#39F71F',
            triangleSize: 100,
        };
        const canvas = document.querySelector('#bg-canvas');
        canvas.width = document.body.scrollWidth
        canvas.height = document.body.scrollHeight
        ThpaceGL.create(canvas, settings);
    }, [])
    
  
    return (
      <div id = 'parent-div'>
          <canvas id="bg-canvas"></canvas>
      </div>
    )
  }
  
  export default Background;