import Navbar from './navbar'

export default function Layout({children}: any) {
  return (
    <>
      <Navbar/>
      <div className="main-container is-flex is-flex-direction-column">
        <main className="container block is-flex-grow-1 mt-6 px-4">{children}</main>
        <footer className="footer pb-6">
          <div className="content columns is-mobile">
            <div className="column is-half">
              {/*todo: get from data.json*/}
              Developed by <b style={{whiteSpace: 'nowrap'}}>Max Zolotarenko</b>
            </div>
            <div className="column is-half has-text-right">
              <span className="icon is-medium is-clickable">
                <i className="fa fa-lg fa-github"></i>
              </span>
              <span className="icon is-medium is-clickable">
                <i className="fa fa-lg fa-linkedin"></i>
              </span>
              <span className="icon is-medium is-clickable">
                <i className="fa fa-lg fa-telegram"></i>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
