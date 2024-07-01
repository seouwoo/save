import React from 'react'
import Navber from '../component/Navber'
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div>
        <Navber/>
        <Outlet/>
    </div>
  )
}

export default Root