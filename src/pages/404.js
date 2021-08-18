import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"

const NotFoundPage = () => (
  <Layout pageInfo={{ pageName: "404" }} logo={<Logo />}>
    <SEO title="404: Not found" />
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <div class="row">
        <div class="col-md-12 my-5">
          <div class="error-template">

              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div class="error-details">
                  Sorry, an error has occured, Requested page not found!
              </div>
              <div class="error-actions my-4">
                  <Link to="/" class="btn btn-primary btn-lg">Take Me Home</Link>
              </div>

            </div>
          </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
