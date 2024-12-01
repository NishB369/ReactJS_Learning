import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });
  
  const [is24HourFormat, setIs24HourFormat] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const formattedHours = is24HourFormat
    ? time.hours.toString().padStart(2, "0")
    : ((time.hours % 12) || 12).toString().padStart(2, "0"); // Handle 12-hour format with AM/PM logic

  return (
    <>
      <div className="main-ctr">
        <div>{formattedHours}</div>
        <div>:</div>
        <div>{time.minutes.toString().padStart(2, "0")}</div>
        <div>:</div>
        <div>{time.seconds.toString().padStart(2, "0")}</div>
        {!is24HourFormat && (
          <span>{time.hours >= 12 ? " PM" : " AM"}</span> // Show AM/PM for 12-hour format
        )}
      </div>
      <div className="btn-ctr">
        <div
          className="btn"
          onClick={() => setIs24HourFormat(true)}
        >
          24 hrs format
        </div>
        <div
          className="btn"
          onClick={() => setIs24HourFormat(false)}
        >
          12 hrs format
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
