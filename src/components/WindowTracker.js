import React from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth );

    return function(){
        window.removeEventListener("resize",watchWidth)
    }
  });
  return <div> Window is : {windowWidth}</div>;
};

export default WindowTracker;
