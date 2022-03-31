import Icon from "./icon";
import {Icons} from "../types/icons";
import {DataService} from "../services";

export default function Footer() {
  const {name} = DataService.me()
  const {github, linkedin, telegram} = DataService.contacts()

  return (
    <footer className="footer pb-6">
      <div className="content columns is-mobile">
        <div className="column is-half">
          Developed by <b style={{whiteSpace: 'nowrap'}}>{name}</b>
        </div>
        <div className="column is-half has-text-right">
          <Icon icon={Icons.github} link={github} />
          <Icon icon={Icons.linkedin} link={linkedin} />
          <Icon icon={Icons.telegram} link={telegram} />
        </div>
      </div>
    </footer>
  )
}