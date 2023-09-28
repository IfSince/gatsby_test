import { useSiteMetadata } from '../hooks/use-site-metadata';

const Seo = ({ description, title, children }) => {
  const { title: metaTitle, description: metaDescription, author, siteUrl, image } = useSiteMetadata()

  const resultDescription = description || metaDescription

  return (
    <>
      <title>{ metaTitle ? `${ title } | ${ metaTitle }` : title }</title>
      <meta name="description" content={ resultDescription }/>
      <meta name="image" content={ image }/>
      <meta property="og:title" content={ title }/>
      <meta property="og:description" content={ resultDescription }/>
      <meta property="og:type" content="website"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={ title }/>
      <meta name="twitter:url" content={ siteUrl }/>
      <meta name="twitter:description" content={ resultDescription }/>
      <meta name="twitter:image" content={ image }/>
      <meta name="twitter:creator" content={ author || `` }/>
      { children }
    </>
  )
};

export default Seo
