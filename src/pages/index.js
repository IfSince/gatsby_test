import Layout from '../components/layout';
import Seo from '../components/seo';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';

const IndexPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={ t('Home Page') }>
      <div className="flex h-screen w-full items-end bg-gray-400 p-20">
        <motion.h1 className="relative text-8xl font-bold"
                   initial={ { y: 100, opacity: 0 } }
                   whileInView={ { y: 0, opacity: 1 } }
                   viewport={ { once: true } }
                   transition={ {
                     type: 'spring', duration: 0.1, damping: 100, stiffness: 500, delay: 0.5,
                   } }>
          Parallax
        </motion.h1>
      </div>
      <div className="flex h-screen w-full p-20 bg-gray-200">
        <motion.h1 className="relative text-8xl font-bold"
                   initial={ { y: 100, opacity: 0 } }
                   whileInView={ { y: 0, opacity: 1 } }
                   viewport={ { once: true } }
                   transition={ {
                     type: 'spring', duration: 0.1, damping: 100, stiffness: 500, delay: 0.2,
                   } }>
          Parallax
        </motion.h1>
      </div>
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