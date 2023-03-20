import { ThpaceGL } from 'thpace';
import { useEffect } from 'react';
import './LandingPage.css'



const settings = {
	colors: ['#4CB1EF', '#424959', '#FF4B44'],
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
      
          <canvas id="bg-canvas"></canvas>
      
    )
  }
  
  export default LandingPage