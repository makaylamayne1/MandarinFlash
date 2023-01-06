import React from "react";
import song from "./test.mp3";


class Menu extends React.Component {
  render() {
    return (
      <h3
        style={{
          textAlign: "center",
          padding: "10px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          margin: "10%",
        }}
      >
        Welcome to {this.props.name}'s Mandarin Flashcard Website!
      </h3>
    );
  }
}

export default Menu;
