import Navbar from './navbar'

export default function Layout({children}: any) {
  return (
    <>
			<Navbar/>
      <main className="container block">{children}</main>
      <div className="footer">footer</div>
    </>
  )
}
