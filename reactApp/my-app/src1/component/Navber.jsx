import React from 'react'
import { Link } from "react-router-dom";
function Navber() {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/videos">Video</Link>
        </nav>
    </div>
  )
}

export default Navber