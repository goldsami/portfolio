import Link from 'next/link'
import {useState} from "react";

export default function Navbar() {
  const [showDropdown, toggleDropdown] = useState(false)

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a role="button" onClick={() => toggleDropdown(!showDropdown)}
           className={`navbar-burger ${showDropdown && 'is-active'}`}
           aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${showDropdown && 'is-active'}`}>
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">
              Home
            </a>
          </Link>

          <Link href="/projects">
            <a className="navbar-item">
              Projects
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
