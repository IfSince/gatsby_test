import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
import { Trans, useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

const IndexPage = () => {
  const { languages, originalPath } = useI18next()
  const { t } = useTranslation()

  return (
    <Layout pageTitle={ t('Home Page') }>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <p><Trans>This gets translated</Trans></p>
      <ul className="languages">
        { languages.map((lng) => (
          <li key={ lng }>
            <Link to={ originalPath } language={ lng }>
              { lng }
            </Link>
          </li>
        )) }
      </ul>

      <StaticImage src="../images/example.png"
                   alt="Alt Image Text"/>
    </Layout>
  )
}

export const query = graphql`
    query($language: String!) {
        locales: allLocale(filter: {language: {eq: $language}}) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;

export const Head = () => <Seo title="Home Page"/>

export default IndexPage