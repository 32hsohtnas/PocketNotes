import { useEffect, useState } from "react";
import "./App.css";
import Group from "./component/group/Group";
import Notes from "./component/notes/Notes";
import Modal from "./component/modal/Modal";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, [screenWidth]);
  const [groups, setGroups] = useState(() => {
    const storedGroups = JSON.parse(localStorage?.getItem("groups"));
    return storedGroups || [];
  });
  const [selectedGroup, setSelectedGroup] = useState("");
  const [modal, setModal] = useState(false);
  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (modal === true) {
        if (
          e.target.className !== "add-group-btn" &&
          !e.target.classList.contains("mod")
        ) {
          e.stopPropagation();
          setModal(false);
        }
      }
    });
  }, [modal]);

  return (
    <div className={`App`}>
      <Group
        groups={groups}
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
        modal={modal}
        setModal={setModal}
        screenWidth={screenWidth}
      />
      <Notes
        groups={groups}
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
        setGroups={setGroups}
        modal={modal}
        screenWidth={screenWidth}
      />
      {modal ? (
        <Modal
          groups={groups}
          setGroups={setGroups}
          modal={modal}
          setModal={setModal}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
