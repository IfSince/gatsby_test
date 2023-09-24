import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)

  return (
    <div className="m-auto max-w-[500px]">
      <header className="text-5xl text-gray-500 font-bold my-12">{ data.site.siteMetadata.title }</header>
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
  )
}

export default Layout