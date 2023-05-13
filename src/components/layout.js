
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "@fontsource/inter";
import "../theme/style.css";
import Header from "./lending/header-page/header";
import Footer from "./lending/footer-page/footer";
import "@fontsource/inter";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
