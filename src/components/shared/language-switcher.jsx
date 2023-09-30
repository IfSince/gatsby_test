import { Link, useI18next } from 'gatsby-plugin-react-i18next';

export const LanguageSwitcher = () => {
  const { languages, originalPath } = useI18next()
  return (
    <ul className="flex gap-2 uppercase">
      { languages.map(language => (
        <li key={ language }>
          <Link to={ originalPath } language={ language }>
            { language }
          </Link>
        </li>
      )) }
    </ul>
  )
}