import { Link } from 'gatsby'
import Header from './header';
import { motion } from 'framer-motion';
import { useState } from 'react';

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

  const [isBig, setIsBig] = useState(false);

  return (
    <>
      <Header/>

      <div className="flex flex-col items-center justify-center p-10 space-y-7">
        <motion.div
          className="bg-black"
          initial={ false }
          animate={ {
            height: isBig ? 200 : 100,
            width: isBig ? 200 : 100,
          } }
        ></motion.div>
        <button
          onClick={ () => setIsBig((isBig) => !isBig) }
          className="cursor-pointer border-2 border-black pt-1 font-medium text-black decoration-0 px-2.5 pb-0.5"
        >
          { isBig ? 'Make it small' : 'Make it big' }
        </button>
      </div>


      <div className="m-auto mt-80 flex flex-col items-center bg-gray-200 h-[800px]">
        <nav>
          <ul className="flex">
            <li className="pr-8 underline">
              <Link to="/" className="text-gray-800">Home</Link>
            </li>
            <li className="pr-8 underline">
              <Link to="/about" className="text-gray-800">About</Link>
            </li>
            <li className="pr-8 underline">
              <Link to="/blog" className="text-gray-800">Blog</Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 className="mt-2 mb-4 text-4xl font-bold text-purple-600">{ pageTitle }</h1>
          { children }
        </main>
      </div>
    </>
  )
}

export default Layout