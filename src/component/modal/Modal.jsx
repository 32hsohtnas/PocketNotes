import React, { useEffect, useRef, useState } from "react";
import "./Modal.css";
function Modal({ groups, setGroups, modal, setModal }) {
  const groupName = useRef(null);
  const colourOptions = [
    "lightblue",
    "lightgreen",
    "blue",
    "pink",
    "orange",
    "violet",
  ];
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
    <div className={`mod Modal`} id="modal">
      <h1 className="mod" style={{ fontSize: "1.1rem" }}>
        Create New Group
      </h1>
      <div className="mod group-name-field ">
        <label
          className="mod"
          htmlFor="group-name"
          style={{ fontSize: "1rem", fontWeight: "bold" }}
        >
          Group Name{" "}
        </label>
        <input
          className="mod"
          type="text"
          id="group-name"
          placeholder="Enter Group name"
          ref={groupName}
        />
      </div>

      <div className="mod colour-options">
        <h1 className="mod" style={{ marginRight: "1rem", fontSize: "1rem" }}>
          Choose Colour
        </h1>
        {colourOptions.map((col, index) => (
          <div
            className={`${
              col === colour ? `${col} selected-colour mod` : `${col} mod`
            }`}
            style={{
              background: colourOptions[index],
              width: "1.5rem",
              height: "1.5rem",
              borderRadius: "50%",
            }}
            key={index}
            onClick={(e) => {
              setColour(colourOptions[index]);

              e.target.classList.toggle("selected");
            }}
          ></div>
        ))}
      </div>
      <button className="mod create-group-btn" onClick={handleCreateGroup}>
        Create
      </button>
    </div>
  );
}

export default Modal;
