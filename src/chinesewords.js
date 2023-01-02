import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function ChineseWords(props) {
  const [flip, setFlip] = useState(false);
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState(!state);
  };

  return (
    <ReactCardFlip isFlipped={flip} flipDirection="vertical">
      <div style={{ visibility: state ? "visible" : "hidden" }}>
        <div
          style={{
            width: "500px",
            height: "200px",
            background: "#fddef7",
            fontSize: "40px",
            color: "#9559ac",
            margin: "20px",
            borderRadius: "4px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          Translate: {props.english}
          <br></br>
          <button
            style={{
              width: "150px",
              padding: "10px",
              fontSize: "20px",
              background: "#d789f5",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
            onClick={() => setFlip(!flip)}
          >
            Flip
          </button>
          <br></br>
          <button onClick={handleToggle}>I got this right</button>
        </div>
      </div>
      <div
        style={{
          width: "500px",
          height: "200px",
          background: "#fbd7f8",
          fontSize: "40px",
          color: "blue",
          margin: "20px",
          borderRadius: "4px",
          textAlign: "center",
          padding: "20px",
        }}
      >
        Translation : {props.chinese}
        <br />
        <button
          style={{
            width: "150px",
            padding: "10px",
            fontSize: "20px",
            background: "#d789f5",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
          onClick={() => {
            setFlip(!flip);
          }}
        >
          Flip
        </button>
      </div>
    </ReactCardFlip>
  );
}
