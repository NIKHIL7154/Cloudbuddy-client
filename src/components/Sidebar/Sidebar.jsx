
import { Link } from "react-router-dom"
import "./Sidebar.css"
const Sidebar = () => {
  return (
    <div>
      <ul>
        
        <li className="list-item-sidebar" name="">
            <Link to="">Home</Link>
            
            
        </li>
        <li className="list-item-sidebar">
        <Link to="websites">Websites</Link>
            
        </li>
        <li className="list-item-sidebar">
        <Link to="upload">Upload</Link>
            
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
