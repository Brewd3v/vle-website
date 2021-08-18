import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LogoStrip from "../components/logo-strip"
import Logo from "../components/logo"


const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }} logo={<Logo />} isHome={true}>
    <SEO title="Home" keywords={[`Viglietti Lifestyle Estate`]} />
        <div class="container-fluid">
            <div class="row">
                <div class="col-6 col-xl-6 col-md-12 d-md-flex p-0 m-0">

                    <div class="position-relative featured-index">
                        <Link to="/miramonti">
                            <figure class="featured-text">
                                <h3>Miramonti<br/> Olive Oil</h3>                        
                            </figure>                            
                            <StaticImage class="img-fluid featured" src="../images/miramonti.webp" alt="Miramonti Olive Oil" />
                        </Link>
                    </div>

                    <div class="position-relative featured-index">
                        <Link to="/wine">
                            <figure class="featured-text">
                                <h3>Miramonti Wine</h3>                        
                            </figure>
                            <StaticImage class="img-fluid featured" src="../images/wine.webp" alt="Miramonti Wine" />
                        </Link>
                    </div>

                    <div class="position-relative featured-index">
                        <Link to="https://theitalianjobbrewery.co.za">
                            <figure class="featured-text">
                                <h3>The Italian Job Brewery</h3>                        
                            </figure>
                            <StaticImage class="img-fluid featured" src="../images/tijb.webp" alt="The Italian Job Brewery" />
                        </Link>
                    </div>
               
                </div>
                <div class="col-6 col-xl-6 col-md-12 d-md-flex p-0 m-0">
                    <div class="position-relative featured-index">
                        <Link to="/beer">
                            <figure class="featured-text">
                                <h3>Beer Garden</h3>                        
                            </figure>
                            <StaticImage class="img-fluid featured" src="../images/beer-garden.webp" alt="The Italian Job Beer Garden" />
                        </Link>
                    </div>
                    <div class="position-relative featured-index">
                        <Link to="/cars">
                            <figure class="featured-text">
                                <h3>Cars</h3>                        
                            </figure>
                            <StaticImage class="img-fluid featured" src="../images/cars.webp" alt="Viglietti Customs and Restorations" />
                        </Link>
                    </div>
                    <div class="position-relative featured-index">
                        <Link to="/equipment">
                            <figure class="featured-text">
                                <h3>Equipment</h3>                        
                            </figure>
                            <StaticImage class="img-fluid featured" src="../images/equipment.webp" alt="Viglietti Industries Brewing Equipment" />
                        </Link>
                    </div>

                </div>
                <div class="col-12 p-0 m-0 ">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe loading="lazy" class="embed-responsive-item" src="https://player.vimeo.com/video/488464381?title=0&byline=0&portrait=0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>

        <LogoStrip />

  </Layout>
)

export default IndexPage
