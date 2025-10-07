export type MenuItem = { label: string; url: string }
export type SiteLogo = { src: string; alt: string; url: string | undefined }

export type HeaderProps = {
  siteLogo: SiteLogo
  menuItems: MenuItem[]
}

function Header({ siteLogo, menuItems }: HeaderProps) {
  return (
    <header className="header">
      <nav>
        <a href={siteLogo.url}>
          <img alt={siteLogo.alt} src={siteLogo.src} />
        </a>
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
