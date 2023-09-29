import { Link } from 'gatsby';

export const MenuItem = ({ link, description }) => (
  <li className="mr-8">
    <Link to={ link }>{ description }</Link>
  </li>
)