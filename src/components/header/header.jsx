import { Link } from 'gatsby';
import { Menu } from './menu/menu';
import { motion, useScroll, useSpring } from 'framer-motion';

export const Header = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30, restDelta: 0.001,
  });

  return (
    <>
      <motion.header className={ `fixed top-0 z-50 flex w-full items-center justify-between px-20 py-6 font-medium text-gray-50` }>
        <motion.div className="absolute top-0 left-0 -z-10 h-20 w-full gradient-top" style={ { opacity } }></motion.div>
        <Link to="/">
          <div className="flex items-center justify-center rounded-lg bg-amber-700 h-[44px] w-[130px]">Logo</div>
        </Link>

        <Menu/>
      </motion.header>
    </>
  )
}