/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'

const SEO = () => (
  <Helmet>
    {/* <!-- Primary Meta Tags --> */}
    <title>Jakub Semik - Fullstack developer</title>
    <meta name="title" content="Jakub Semik - Fullstack developer" />
    <meta name="description" content="Jakub Semik - Fullstack developer" />
    <meta
      name="keywords"
      content="Developer, portfolio, Python, React, JavaScript, JakubSemik, Jakub, Semik"
    />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta name="author" content="Jakub Semik" />

    {/* <!-- Open Graph / Facebook --> */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://jakubsemik.com/" />
    <meta property="og:title" content="Jakub Semik - Fullstack developer" />
    <meta property="og:description" content="Jakub Semik - Fullstack developer" />
    <meta property="og:image" content="" />

    {/* <!-- Twitter --> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://jakubsemik.com/" />
    <meta property="twitter:title" content="Jakub Semik - Fullstack developer" />
    <meta property="twitter:description" content="Jakub Semik - Fullstack developer" />
    <meta property="twitter:image" content="" />
  </Helmet>
)

export default SEO
