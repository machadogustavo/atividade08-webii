import { useState, useEffect } from "react";
import Time from "../Time/time";

const Greeting = (props) => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    updateGreeting();
  }, [<Time />]);

  const updateGreeting = () => {
    let now = new Date();
    let hours = now.getHours();
    if (hours > 0 && hours < 12) {
      setGreeting(`Bom dia`);
    } else if (hours >= 12 && hours < 18) {
      setGreeting(`Boa tarde`);
    } else {
      setGreeting(`Boa noite`);
    }
  };

  console.log("GREETING =>>", greeting);

  return (
    <h3>
      {greeting}, {props.myName}.
    </h3>
  );
};

export default Greeting;
