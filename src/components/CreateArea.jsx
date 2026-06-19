import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
          <input
              name="title"
              placeholder="Title"
              value={props.note.title}
              onChange={props.handleInput}
          />

          <textarea
              name="content"
              placeholder="Take a note..."
              value={props.note.content}
              onChange={props.handleInput}
          />
        <button onClick={props.addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
