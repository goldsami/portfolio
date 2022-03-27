import Link from 'next/link'
import {useState} from "react";
import {DataService} from "../services";

export default function Navbar() {
  const [showDropdown, toggleDropdown] = useState(false)

  const {name, position} = DataService.me()

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item is-flex is-flex-direction-column">
            <div className="is-size-4 has-text-weight-semibold">{name}</div>
            <div className="is-size-7">{position}</div>
          </a>
        </Link>

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
          <Link href="/projects">
            <a className="navbar-item">
              Projects
            </a>
          </Link>

          <Link href="/experience">
            <a className="navbar-item">
              Skills & Experience
            </a>
          </Link>

          <Link href="/contacts">
            <a className="navbar-item">
              Contacts
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
