import React, { useState } from 'react';

function GoohoggerMain() {
  const [goohoggerClicked, setGoohoggerClicked] = useState(false);

  const handleClick = () => {
    setGoohoggerClicked(!goohoggerClicked);
  };

  return (
    <div className="image-container" id="goohogger-image-container">
      <img
        src="goohogger-head-on.png"
        alt="goohogger head ON"
        role="image"
        id="goohogger-image"
        onClick={handleClick}
      />
      <img
        src="f-you.png"
        alt="f you"
        role="overlayImage"
        id="overlay-image"
        hidden={!goohoggerClicked}
      />
    </div>
  );
}

export default GoohoggerMain;
