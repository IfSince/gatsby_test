/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require('react');
/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHeadComponents([
    <link rel="preload" href="/fonts/Kollektif.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/>,
    <link rel="preload" href="/fonts/Kollektif-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/>,
    <link rel="preload" href="/fonts/Kollektif-BoldItalic.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/>,
    <link rel="preload" href="/fonts/Kollektif-Italic.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/>,
  ])

  setHtmlAttributes({ lang: 'en' })
}
