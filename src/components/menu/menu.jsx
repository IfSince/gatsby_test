import { Link } from 'gatsby';
import { MenuItem } from './menu-item';
import { LanguageSwitcher } from '../shared/language-switcher';
import { DarkModeToggle } from '../shared/dark-mode-toggle';
import { Trans } from 'react-i18next';

const MENU_ITEMS = [
  { link: '/', description: 'Product' },
  { link: '/', description: 'About us' },
  { link: '/', description: 'References' },
  { link: '/', description: 'Contact' },
]
export const Menu = () => {
  return (
    <nav className="flex justify-between py-8 text-sm min-w-[50%] text-custom-gray dark:text-off-white">
      <ul className="mr-10 flex">
        { MENU_ITEMS.map(item => <MenuItem { ...item } key={ item.description }/>) }
      </ul>

      <div className="flex h-full gap-8">

        <LanguageSwitcher/>

        <DarkModeToggle/>

        <Link className=""
              to="/"><Trans>Get in Touch</Trans></Link>
      </div>
    </nav>
  )
}