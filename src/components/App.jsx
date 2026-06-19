import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [note, createNote] = useState({
        title: "",
        content: "",
    });
    const [notes, setNotes] = useState([]);


    const handleInput = (e)  => {
        const {name, value} = e.target;

        createNote((prevItem) => {
            if (name === "title") {
                return { title: value, content: prevItem.content}
            } else {
                return { title: prevItem.title , content: value}
            }
        })

    }

    const addNote = (e) => {
        setNotes([...notes, note]);

        createNote({title: "", content: ""});
        e.preventDefault();
    }

    const deleteNote = (id) => {
        setNotes((prevNotes) => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

  return (
    <div>
      <Header />
        <CreateArea
            note={note}
            handleInput={handleInput}
            addNote={addNote}
        />
        {notes.map((note, index) => (
            <Note
                key={index}
                id={index}
                note={note}
                content={note.content}
                deleteNote={deleteNote}
            />
        ))}
      <Footer />
    </div>
  );
}

export default App;
