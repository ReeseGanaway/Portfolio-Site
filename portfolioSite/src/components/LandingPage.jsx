import { Fragment } from 'react';
import Background from './Background';
import Drawer from './Drawer';

function LandingPage() {
    
  
    return (
        <Fragment>
          <Drawer/>
          <Background/>
          {/* <button id = 'button' class="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
                Button 16
                </button>
           */}
      </Fragment>
    )
  }
  
  export default LandingPage