import { DataService } from "../services";

export default function Footer() {
  const { name } = DataService.me()

  return (
    <footer className="footer pb-6">
      <div className="content columns is-mobile">
        <div className="column is-half">
          Developed by <b style={{ whiteSpace: 'nowrap' }}>{name}</b>
        </div>
      </div>
    </footer>
  )
}