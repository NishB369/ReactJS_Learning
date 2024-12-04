import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import Header from "./Header";

const ErrorComp = () => {
  const plateRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      plateRef.current, 
      { rotate: "0deg", scale: 1 }, 
      {
        rotate: "360deg", 
        scale: 1.5,
        duration: 2,
        repeat: -1, 
        ease: "linear", 
      }
    );
  }, []);

  return (
    <>
    {/* <Header /> */}
    <div className="error-comp">
      <div
        ref={plateRef}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "lightblue",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>404</span>
      </div>
    </div>
    </>
  );
};

export default ErrorComp;
