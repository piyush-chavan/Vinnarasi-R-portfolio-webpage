import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div>
        <div className="nav-title">
          Water Extremes Research Group
        </div>
      </div>
      <div className='nav-link-container'>
        <div><Link className="nav-links" to="/">Home</Link></div>
        <div><Link className="nav-links" to="/research">Research</Link></div>
        <div><Link className="nav-links" to="/team">Team</Link></div>
        <div><Link className="nav-links" to="/publication">Publications</Link></div>
        <div className='dropdown'>
          <Link className="nav-links dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tools</Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/tools">Go to tools...</Link></li>
            <li><a class="dropdown-item" target='_blank' href="https://piyush-chavan.github.io/Intern_Project_Map_Basin/">Design Flood Estimation <br /> Webtool</a></li>
            <li><a class="dropdown-item" target='_blank' href="https://github.com/UsmanMohseni/TRUE-Time-varying_Returnlevels_of_Univariate_Extremes">TRUE</a></li>
          </ul>
        </div>

        <div><Link className="nav-links" to="/gallary">Gallery</Link></div>

      </div>
    </nav>
  )
}

