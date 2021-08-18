/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"


import Navbar from "./navBar"
import ContactStrip from "./ContactStrip"

const Layout = ({ children, pageInfo, logo, isHome, isDark, contact }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className={isDark ? "p-0 main bg-dark" : "p-0 main"}>
          <Navbar pageInfo={pageInfo} logo={logo} />
          <Row noGutters>
            <Col>
              <Container fluid className="px-0">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <ContactStrip logo={logo} display={isHome ? false : true} contact={contact}/>
        <Container fluid className="px-0">
          <hr class="mb-0" />
          <footer class="p-4 text-center">
              <div class="copyright p-2 m-0">
                  © {new Date().getFullYear()} Viglietti Lifestyle Estate | Made with <span class="heart">♥</span> by Brewdev
              </div>
          </footer>
        </Container>
      </>
    )}
  />
)

export default Layout
