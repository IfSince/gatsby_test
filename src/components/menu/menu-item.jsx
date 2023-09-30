import { Link } from 'gatsby';
import { Trans } from 'react-i18next';

export const MenuItem = ({ link, description }) => (
  <li className="mr-8">
    <Link to={ link }>
      <Trans>{ description }</Trans>
    </Link>
  </li>
)