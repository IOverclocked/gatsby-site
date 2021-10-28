import React from 'react'
import { Link } from 'gatsby'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/abount">About</Link>
        </li>
      </ul>
    </nav>
  )
}
