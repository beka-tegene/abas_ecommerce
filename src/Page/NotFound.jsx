import React from 'react'
import not from "../image/10.png";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={not} alt="Not Found" />
      <p>NotFound</p>
    </div>
  );
}

export default NotFound