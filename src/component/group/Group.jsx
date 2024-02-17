import React, { useEffect, useState } from "react";
import "./Group.css";
import Modal from "../modal/Modal";

function Group({
  groups,
  selectedGroup,
  setSelectedGroup,
  modal,
  setModal,
  screenWidth,
}) {
  const addButton = document.querySelector(".add-group-btn");

  function handleNotes(e) {
    let cls = e.target.closest("li")?.className;

    setSelectedGroup(cls.split(" ")[0]);
  }

  return (
    <div
      style={{
        overflowY: `${groups.length > 6 ? "overlay" : "none"}`,
      }}
      className={`Group ${modal ? "blur" : ""} ${
        screenWidth < 800 && selectedGroup !== "" ? "hidden" : ""
      }`}
      id="Group"
    >
      <h1>Pocket Notes</h1>
      <div className="group-list">
        <ul>
          {groups.map((group) => {
            return (
              <li
                onClick={handleNotes}
                className={`${
                  group.name === selectedGroup
                    ? `${group?.name} selected`
                    : `${group?.name}`
                }`}
                key={group.name}
              >
                <h1
                  style={{ background: group?.colour }}
                  className="profile-pic"
                >
                  {group.profileName}
                </h1>
                <h1 className="group-name">{group.name}</h1>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <button onClick={() => setModal(!modal)} className="add-group-btn">
          +
        </button>
      </div>
    </div>
  );
}

export default Group;
