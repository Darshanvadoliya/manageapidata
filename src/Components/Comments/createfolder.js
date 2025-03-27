import { useState } from "react";

const App = () => {
  const [folders, setFolders] = useState([]);
  console.log("folder",folders);
  
  const [selectedFolder, setSelectedFolder] = useState(null);
  console.log("selectedFolder",selectedFolder);
  

  // Function to add a new folder
  const addFolder = () => {
    const folderName = prompt("Enter folder name:");
    if (!folderName) return;

    const newFolder = {
      id: Date.now(),
      name: folderName,
      children: [],
    };

    if (!selectedFolder) {
      // root folder
      setFolders([...folders, newFolder]);
    } else {
      //  inside the selected folder
      setFolders(updateFolderTree(folders, selectedFolder, newFolder));
    }
  };

  // Recursive function to update the folder tree
  const updateFolderTree = (folders, parentId, newFolder) => {
    return folders.map((folder) => {
      if (folder.id === parentId) {
        return { ...folder, children: [...folder.children, newFolder] };
      } else if (folder.children.length > 0) {
        return { ...folder, children: updateFolderTree(folder.children, parentId, newFolder) };
      }
      return folder;
    });
  };

  return (
    <div>
      <button onClick={addFolder}>New Folder</button>
      <FolderList folders={folders} setSelectedFolder={setSelectedFolder} />
    </div>
  );
};

// Recursive folder component
const FolderList = ({ folders, setSelectedFolder }) => {
  return (
    <ul>
      {folders.map((folder) => (
        <li style={{cursor:"pointer"}} id={folder.id} key={folder.id} onClick={(e) => {
          e.stopPropagation();
          setSelectedFolder(folder.id);
        }}>
          📂{folder.name}
          {folder.children.length > 0 && <FolderList folders={folder.children} setSelectedFolder={setSelectedFolder} />}
        </li>
      ))}
    </ul>
  );
};

export default App;
