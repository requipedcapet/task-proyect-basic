import React from 'react';
import { CiCircleRemove } from 'react-icons/ci';

function DeleteIcon({ color, size}) {
    return(
      <CiCircleRemove fill={color} size={size}/>  
    );
}

export { DeleteIcon };