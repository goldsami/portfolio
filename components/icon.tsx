import {Icons} from "../types/icons";
import Link from 'next/link'

interface IconProps {
  icon: Icons
  link: string
}

export default function Icon({icon, link}: IconProps) {
  return (
    <Link href={link}>
      <a className="icon is-medium is-clickable">
        <i className={`fa fa-lg ${icon}`}></i>
      </a>
    </Link>
  )
}