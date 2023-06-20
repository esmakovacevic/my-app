import React from 'react';

import './style.css';


const MyButton=({children, className="",...props})=>{
    return(
        <button className={className} {...props}>
          {children}
        </button>
    )
};

  export default MyButton;