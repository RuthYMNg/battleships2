import React from 'react';
import propTypes from 'prop-types';

const Instructions = props => {
   return <div className='instructions center'>
       <h5>The aim of the game is to sink of of your opponent's ships... before they sink yours!</h5>
       <p>Your ships will be placed on a grid representing the ocean, divided into squares on the left.</p>
       <p>Their ships will be placed on a grid on ther right.</p>
       <p>You and the computer will take it in turns to guess where the ships are.</p>
       <p>Make your guess by clicking to attempt to sink them by firing at them.</p>
       <p className='button mt-30' onClick={props.toggleInstructions}>Got It!</p>
   </div>
};

Instructions.propTypes = {
  toggleInstructions: propTypes.func.isRequired
};

export default Instructions;