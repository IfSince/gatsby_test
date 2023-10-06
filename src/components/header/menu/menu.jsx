import { MenuEntry } from './menu-entry';

const MENU_ENTRIES = [
  {
    link: 'product',
    name: 'Product',
  },
  {
    link: 'about-us',
    name: 'About us',
  },
  {
    link: 'references',
    name: 'References',
  },
]
export const Menu = () => {
  return (
    <nav>
      <ul className="flex">
        {
          MENU_ENTRIES.map(entry => <MenuEntry key={ entry.link } { ...entry }></MenuEntry>)
        }
      </ul>
    </nav>
  )

}