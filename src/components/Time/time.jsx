import { useState,useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    let timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const updateTime = () => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let hourStr = hours < 10 ? "0" + hours : hours.toString();
    let minStr = minutes < 10 ? "0" + minutes : minutes.toString();

    setTime(`${hourStr}:${minStr}`);
  };

  return <h1>{time}</h1>;
};

export default Time;
