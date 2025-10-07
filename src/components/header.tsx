const menuItems: MenuItem[] = [
  { label: 'About Us', url: '/about-us' },
  { label: 'Contact Us', url: '/contact-us' }
]
type MenuItem = { label: string; url: string }

type HeaderProps = {
  menuItems: MenuItem[]
}

function Header({}: ) {
  return (
    <header className="header">
      <nav>
        <h1>Site Header</h1>
        <ul></ul>
      </nav>
    </header>
  )
}
export default Header
