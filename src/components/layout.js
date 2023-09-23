import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="m-auto max-w-[500px]">
      <nav>
        <ul className="flex">
          <li className="pr-8 underline">
            <Link to="/" className="text-gray-800">Home</Link>
          </li>
          <li className="pr-8 underline">
            <Link to="/about" className="text-gray-800">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="text-purple-600 text-4xl mb-4 mt-2 font-bold">{ pageTitle }</h1>
        { children }
      </main>
    </div>
  )
}

export default Layout