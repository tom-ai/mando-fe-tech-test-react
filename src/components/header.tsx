export type MenuItem = { label: string; url: string }

export type HeaderProps = {
  siteHeader: string
  menuItems: MenuItem[]
}

function Header({ siteHeader, menuItems }: HeaderProps) {
  return (
    <header className="header">
      <nav>
        <h1>{siteHeader}</h1>

        <ul>
          {menuItems.map((item) => (
            <li>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
export default Header
