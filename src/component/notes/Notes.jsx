import React, { useRef } from "react";
import "./Notes.css";
import notes from "../../assets/notes-preview.png";
import encrypted from "../../assets/encrypted.png";
import addNotes from "../../assets/add-notes.png";

function Notes({ groups, selectedGroup, setGroups }) {
  function handleNotes() {
    const res = groups.find((group) => group.name === selectedGroup);
    console.log(res);
    const userInput = useRef(null);
    function handleAddNotes() {
      if (userInput.current.value) {
        const date = new Date();
        const formattedDate = date
          .toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })
          .replace(",", " ");

        setGroups((prevGroups) => {
          const updatedGroups = prevGroups.map((group) =>
            group.name === selectedGroup
              ? {
                  ...group,
                  notes: [...group.notes, userInput.current.value],
                  date: formattedDate,
                }
              : group
          );
          localStorage.setItem("groups", JSON.stringify(updatedGroups));
          userInput.current.value = "";
          return updatedGroups;
        });
      }
    }
    return (
      <div className="user-notes">
        <div className="header-notes">
          {/* <h1>{res.name}</h1>
          <h1>{res.name}</h1> */}
          <h1 style={{ background: res.colour }} className="profile-pic">
            {res.profileName}
          </h1>
          <h1 className="group-name">{res.name}</h1>
        </div>
        <div className="content-notes">
          {res.notes.map((note, index) => {
            return (
              <div key={index}>
                {" "}
                <p className="actual-notes">{note}</p>{" "}
                <p className="date-notes">{res.date}</p>{" "}
              </div>
            );
          })}
        </div>
        <div className="text-area">
          <textarea
            className="text-box"
            ref={userInput}
            name="note"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="add-notes-btn" onClick={handleAddNotes}>
            <img src={addNotes} alt="" />
          </button>
        </div>
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
