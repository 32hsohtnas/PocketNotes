import { useState } from "react";
import "./App.css";
import Group from "./component/group/Group";
import Notes from "./component/notes/Notes";
import Modal from "./component/modal/Modal";

function App() {
  const [groups, setGroups] = useState(() => {
    const storedGroups = JSON.parse(localStorage?.getItem("groups"));
    return storedGroups || [];
  });
  const [selectedGroup, setSelectedGroup] = useState("");
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <Group
        groups={groups}
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
        modal={modal}
        setModal={setModal}
      />
      <Notes
        groups={groups}
        selectedGroup={selectedGroup}
        setGroups={setGroups}
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
