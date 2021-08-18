import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"

function Contact() {
    return (
    <Layout pageInfo={{ pageName: "contact" }} logo={<Logo />}>
      <SEO title="Contact Us" />

      <div class="container mt-5">
            <div class="row">
                <div class="col-6 p-4">
                    <StaticImage src="../images/Contact/VLE-CONTACT-US.webp"  />
                </div>
                <div class="col-6 m-auto">
                    <h3>We'd love to hear from you</h3>
                    For general enquiries please email us at: 
                    <a href="mailto:piero@viglietti-le.co.za"> piero@viglietti-le.co.za</a>
                    <p>and we will direct you to the relevant person.</p>
                </div>
            </div>
        </div>         
        

    </Layout>

    )
}

export default Contact
