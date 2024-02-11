import React, { useRef, useState } from "react";
import "./Modal.css";
function Modal({ groups, setGroups, modal, setModal }) {
  const groupName = useRef(null);
  const colourOptions = ["lightblue", "lightgreen", "blue", "pink", "orange"];
  const [colour, setColour] = useState(0);
  function handleCreateGroup() {
    const newGroupName = groupName.current.value.trim();

    if (!newGroupName || groups.find((group) => group.name === newGroupName)) {
      return;
    }
    const profileName = groupName.current.value
      .split(" ")
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase();

    const newGroup = {
      name: newGroupName,
      notes: [],
      colour: colour,
      profileName: profileName,
    };
    setGroups((prevGroups) => [...prevGroups, newGroup]);
    groupName.current.value = "";
    localStorage.setItem("groups", JSON.stringify([...groups, newGroup]));
    setModal(false);
  }

  return (
    <div className="Modal">
      <h1>Create New Group</h1>
      <input type="text" ref={groupName} />
      <div className="colour-options">
        <h1>Choose Colour</h1>
        {colourOptions.map((colour, index) => (
          <div
            style={{
              background: colourOptions[index],
              width: "1rem",
              height: "1rem",
              borderRadius: "50%",
            }}
            key={index}
            onClick={() => setColour(colourOptions[index])}
          ></div>
        ))}
      </div>
      <button onClick={handleCreateGroup}>Create Group</button>
    </div>
  );
}

export default Modal;
