import React from 'react'
import { Link } from 'react-router-dom'
import Themes from './Users/Themes'

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" type="button" data-toggle="modal" data-target="#exampleModal">
              Contect
              </a>
            </li>
          </ul>
            <Themes />
        </div>
      </nav>
    </>
  )
}

export default NavBar