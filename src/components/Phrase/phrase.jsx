import { useEffect, useState } from "react";
import axios from "axios";

const Phrase = () => {
  const [phrase, setPhrase] = useState("");
  const [phraseAuthor, setPhraseAuthor] = useState("");

  let categoria = 'happiness'

  const options = {
    method: "GET",
    url: `https://api.api-ninjas.com/v1/quotes?category=${categoria}`,
    headers: {
      "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    },
    contentType: "application/json",
  };

  useEffect(() => {
    const getPhrase = async () => {
      axios
        .request(options)
        .then(function (response) {
          console.log(response);
        })

        .then(function (error) {
          console.log(error);
        })
        .then(function (response) {
          data = response.json();
          console.log(data);
          setPhrase(data.quote);
          setPhraseAuthor(data.author);
        })
        .finally(function () {});
    };
    getPhrase();
  }, []);

  return (
    <div className="bottom">
      <div className="phrase">
        "{phrase}"<div className="author">{phraseAuthor}</div>
      </div>
    </div>
  );
};

export default Phrase;
