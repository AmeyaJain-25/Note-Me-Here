import React from "react";
import "./background.css";
import NoteCard from "../NoteCard/noteCard.js";

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      currentNote: "",
    };
  }

  onTextChange = (event) => {
    this.setState({
      currentNote: event.target.value,
    });
  };

  onAddNote = () => {
    if (this.state.currentNote == "") {
      return;
    }
    const updateNoteArray = [...this.state.note];
    updateNoteArray.push(this.state.currentNote);
    console.log(this.state.updateNoteArray);
    // localStorage.setItem("note", JSON.stringify(this.state.updateNoteArray));
    this.setState({
      note: updateNoteArray,
      currentNote: "",
    });
  };

  render = () => {
    return (
      <div className="background-container">
        <div className="top-part">
          <div className="logo"></div>
          <h4 className="title">
            <span className="title1">NOTE</span>{" "}
            <span className="title2">ME</span>{" "}
            <span className="title3">HERE</span>
          </h4>
          <div className="input-container">
            <input
              onChange={this.onTextChange}
              value={this.state.currentNote}
              type="text"
              className="input-text"
            />
            <button onClick={this.onAddNote} className="addBtn">
              +
            </button>
          </div>
        </div>

        <div className="bottom-part">
          {this.state.note.map((elements) => {
            return <NoteCard key={elements} noteText={elements} />;
          })}
        </div>
      </div>
    );
  };
}

export default Background;
