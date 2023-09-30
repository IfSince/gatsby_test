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

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header/>

      <div className="flex flex-col items-center justify-center p-10 space-y-7">
        <motion.div
          className="bg-black"
          initial={ false }
          animate={ {
            height: isBig ? 200 : 100, width: isBig ? 200 : 100,
          } }
        ></motion.div>
        <button
          onClick={ () => setIsBig((isBig) => !isBig) }
          className="cursor-pointer border-2 border-black pt-1 font-medium text-black decoration-0 px-2.5 pb-0.5"
        >
          { isBig ? 'Make it small' : 'Make it big' }
        </button>
      </div>

      <div className="flex items-center gap-8 flex-col p-8 bg-gray-100 w-full min-h-screen">
        <motion.div className="w-8 h-8 bg-green-400"
                    whileHover={ { scale: 1.2 } }
                    whileTap={ { scale: 1.1 } }
                    drag="x"
                    dragConstraints={ { left: -100, right: 100 } }
        />


        <motion.nav
          initial={ false }
          animate={ isOpen ? 'open' : 'closed' }
          className="w-[300px]">
          <motion.button className="bg-gray-400 py-2 px-5 w-[300px] flex justify-between items-center"
                         whileTap={ { scale: 0.97 } }
                         onClick={ () => setIsOpen(!isOpen) }>
            Menu
            <motion.div
              variants={ {
                open: { rotate: 180 },
                closed: { rotate: 0 },
              } }
              transition={ { duration: 0.2 } }
              style={ { originY: 0.55 } }>
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16"/>
              </svg>
            </motion.div>
          </motion.button>
          <motion.ul
            variants={ {
              open: {
                clipPath: 'inset(0% 0% 0% 0% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: 'inset(10% 50% 90% 50% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.3,
                },
              },
            } }
            style={ { pointerEvents: isOpen ? 'auto' : 'none' } }
            className="flex flex-col bg-green-400 p-[10px]"
          >
            <motion.li className="block text-gray-700 px-2 py-3" variants={ itemVariants }>Item 1</motion.li>
            <motion.li className="block text-gray-700 px-2 py-3" variants={ itemVariants }>Item 2</motion.li>
            <motion.li className="block text-gray-700 px-2 py-3" variants={ itemVariants }>Item 3</motion.li>
            <motion.li className="block text-gray-700 px-2 py-3" variants={ itemVariants }>Item 4</motion.li>
            <motion.li className="block text-gray-700 px-2 py-3" variants={ itemVariants }>Item 5</motion.li>
          </motion.ul>
        </motion.nav>


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