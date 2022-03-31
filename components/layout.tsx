import Navbar from './navbar'
import Footer from './footer'

export default function Layout({children}: any) {
  return (
    <>
      <Navbar/>
      <div className="main-container is-flex is-flex-direction-column">
        <main className="container block is-flex-grow-1 mt-6 px-4">{children}</main>
        <Footer />
      </div>
    </>
  )
}
