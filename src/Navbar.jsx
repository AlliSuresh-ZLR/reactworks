import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { routes_names } from './Constants';

const Navbar = () => {

  return (
    <div className='navbar'>
      {routes_names.map(e=><Link to={e}>{e.split("/")[1]}</Link>)}
    </div>
  )
}
export default Navbar;