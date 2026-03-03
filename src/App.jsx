import data from "./data/fs.json"
import FileIcon from "./components/fileIcon/fileIcon.jsx"
import "./App.css"

function TreeNode({ name, node }) {
  const isFolder = node.type === "folder"
  const type = isFolder ? "folder" : "file"

  return (
    <div style={{ marginLeft: 20 }}>
      <div className={type}>
        <span>{FileIcon(type)}</span>
        <span>{name}</span>
      </div>

      {isFolder &&
        Object.entries(node.children).map(([childName, childNode]) => (
          <TreeNode
            key={childName}
            name={childName}
            node={childNode}
          />
        ))}
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <h2>File Structure</h2>

      {Object.entries(data.root).map(([name, node]) => (
        <TreeNode key={name} name={name} node={node} />
      ))}
    </div>
  )
}

export default App