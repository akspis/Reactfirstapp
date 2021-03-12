import { useState } from "react";
import "./styles.css";
import React from "react";

var emojiDictionary = {
  "🙂": "smiling",
  "🐵": "monkey",
  "🦍": "Gorilla",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": " Cat Face",
  "🦁": " Lion",
  "🐯": "Tiger Face",
  "🐴": "Horse Face",
  "🦄": "Unicorn",
  "🦓": "Zebra",
  "🦌": "Deer",
  "🐶": "Dog"
};

var emojiweKnow = Object.keys(emojiDictionary);

export default function App() {
  const [inputuser, setinputuser] = useState("");

  function onchangeEvent(event) {
    const user = event.target.value;
    const inputuser = emojiDictionary[user];
    console.log(inputuser);
    setinputuser(inputuser);
  }

  function onclickchangeHandler(emoji) {
    const inputuser = emojiDictionary[emoji];
    setinputuser(inputuser);
  }

  return (
    <div className="App">
      <h1>Animal Emoji Dictionary</h1>
      <input onChange={onchangeEvent}></input>
      <div> {inputuser} </div>

      <h2> Animal Emoji We Know </h2>
      {emojiweKnow.map((emoji) => {
        return (
          <span
            onClick={() => onclickchangeHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
