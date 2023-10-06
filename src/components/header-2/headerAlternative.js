import { Link } from 'gatsby'
import { motion } from 'framer-motion';
import { Menu } from '../menu/menu';

const HeaderAlternative = ({ siteTitle }) => (

  <header className="fixed top-0 left-0 w-full px-6 pt-6">
    <motion.div className="h-auto rounded-2xl bg-off-white dark:bg-custom-gray"
                whileHover={ { height: '300px' } }>
      <div className="flex w-full items-center justify-between px-10">
        <Link to="/">
          <div className="flex h-10 w-20 items-center justify-center rounded-md bg-amber-400 text-sm font-medium">Logo</div>
        </Link>

        <Menu/>
      </div>

    </motion.div>

  </header>
)

export default HeaderAlternative
