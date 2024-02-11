import React, { useRef } from "react";
import "./Notes.css";
import notes from "../../assets/notes-preview.png";
import encrypted from "../../assets/encrypted.png";

function Notes({ groups, selectedGroup, setGroups }) {
  function handleNotes() {
    const res = groups.find((group) => group.name === selectedGroup);
    console.log(res);
    const userInput = useRef(null);
    function handleAddNotes() {
      if (userInput.current.value)
        setGroups((prevGroups) => {
          const updatedGroups = prevGroups.map((group) =>
            group.name === selectedGroup
              ? { ...group, notes: [...group.notes, userInput.current.value] }
              : group
          );
          localStorage.setItem("groups", JSON.stringify(updatedGroups));
          userInput.current.value = "";
          return updatedGroups;
        });
    }
    return (
      <div className="user-notes">
        <div className="header-notes">
          <h1>{res.name}</h1>
          <h1>{res.name}</h1>
        </div>
        <div className="content-notes">
          {res.notes.map((note) => {
            return <p>{note}</p>;
          })}

          <p>{res.date}</p>
        </div>
        <textarea
          ref={userInput}
          name="note"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={handleAddNotes}>Add Notes</button>
      </div>
    );
  }
  return (
    <div className="Notes" id="Notes">
      {selectedGroup !== "" ? (
        handleNotes()
      ) : (
        <div className="default-notes">
          {" "}
          <img className="default-notes-img" src={notes} alt="" />
          <div className="default-notes-text">
            <h1>Pocket Notes</h1>
            <p>
              Send and receive messages without keeping your phone online. Use
              Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
          <div className="footer">
            <img src={encrypted} alt="" />
            <p>end-to-end encrypted</p>
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default Notes;
