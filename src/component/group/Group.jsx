import React, { useState } from "react";
import "./Group.css";
import Modal from "../modal/Modal";

function Group({ groups, selectedGroup, setSelectedGroup, modal, setModal }) {
  function handleNotes(e) {
    let cls = e.target.closest("li").className;
    setSelectedGroup(cls);
  }

  return (
    <div className="Group" id="Group">
      <h1>Pocket Notes</h1>
      <div className="group-list">
        <ul>
          {groups.map((group) => {
            return (
              <li
                onClick={handleNotes}
                className={group.name}
                key={group.profileName}
              >
                <h1
                  style={{ background: group.colour }}
                  className="profile-pic"
                >
                  {group.profileName}
                </h1>
                <h1>{group.name}</h1>
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
