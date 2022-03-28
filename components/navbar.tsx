import Link from 'next/link'
import {useState} from "react";
import {DataService} from "../services";
import {useTheme} from "next-themes";

export default function Navbar() {
  const [showDropdown, toggleDropdown] = useState(false)

  const {name, position} = DataService.me()

  const {theme, setTheme} = useTheme()

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item is-flex is-flex-direction-column">
            <div className="is-size-4 has-text-weight-semibold">{name}</div>
            {/*<div className="is-size-7">{position}</div>*/}
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
          <Link href="/experience">
            <a className="navbar-item">
              Skills & Experience
            </a>
          </Link>

          <Link href="/projects">
            <a className="navbar-item">
              Projects
            </a>
          </Link>
        </div>


        <div className="navbar-end is-flex">
          <div className="navbar-item">
            <span className="icon is-medium is-clickable">
              <i className="fa fa-lg fa-github"></i>
            </span>
          </div>
          <div className="navbar-item">
            <span className="icon is-medium is-clickable">
              <i className="fa fa-lg fa-linkedin"></i>
            </span>
          </div>
          <div className="navbar-item">
            <span className="icon is-medium is-clickable">
              <i className="fa fa-lg fa-telegram"></i>
            </span>
          </div>
          {/*todo: add margin on desktop*/}
          <div className="navbar-item" style={{marginLeft: 'auto'}}>
            <span className="icon is-medium is-clickable"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <i className="fa fa-lg fa-moon-o" style={{color: 'orange'}}></i>
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
