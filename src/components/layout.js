import { Header } from './header/header';
import { SmoothScroll } from './scroll/smooth-scroll';

const Layout = ({ pageTitle, children }) => {
//  const data = useStaticQuery(graphql`
//      query {
//          site {
//              siteMetadata {
//                  title
//              }
//          }
//      }
//  `)

  return (
    (
      <>
        <Header/>
        <SmoothScroll>
          { children }

        </SmoothScroll>

      </>
    )
  )
}

export default Layout