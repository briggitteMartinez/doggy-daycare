import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HSection.css';

function HSection() {
    return (
        <div className='h-container'>
         <h1>Welcome to Doggy Daycare</h1>
        < p>With us, your dog should feel safe and have fun during the day.</p>
         <div className='h-btns'>
          {/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>SEE THE GALLERY</Button>
          <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>FIND YOUR DOG</Button> */}
         </div>
        </div>
    )
}

export default HSection;