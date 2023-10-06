import { Link } from 'gatsby';

export const MenuEntry = ({ link, name }) => {
  return (
    <li className="ml-8">
      <Link to={ link }>
        { name }
      </Link>
    </li>
  )
}