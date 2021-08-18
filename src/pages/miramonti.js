import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import MiramontiLogo from "../components/SiteLogos/miramonti-logo"

const contact = "miramonti@viglietti-le.co.za"

const Miramonti = () => (  
    <Layout pageInfo={{ pageName: "miramonti" }} logo={<MiramontiLogo />} contact={contact}>
      <SEO title="Miramonti Olive Oil" />

        <div class="container-fluid">
            <div class="row">
                <div class="col-4 p-0 m-0">
                    <StaticImage class="img-fluid" src="../images/Miramonti/VLE_MIRAMONTI-OLIVE-OIL-1200x1200-01.webp" alt="Miramonti Olive Oil Man Picking Olives" />
                </div>

                <div class="col-4 p-0 m-0">
                    <StaticImage class="img-fluid" src="../images/Miramonti/VLE_MIRAMONTI-OLIVE-OIL-1200x1200-02.webp" alt="Miramonti Olive Oil Man Pouring Olive Oil" />
                </div>

                <div class="col-4 p-0 m-0">
                    <StaticImage class="img-fluid" src="../images/Miramonti/VLE_MIRAMONTI-OLIVE-OIL-1200x1200-03.webp" alt="Miramonti Olive Oil and Limes on Table" />
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row mt-4">
                <div class="col-12 col-lg-8 pt-4 m-0">
                    <h2 class="pb-4">OUR STORY</h2>
                    <p class="mb-4 para-2"><span class="myDropcap">G</span>abriele Viglietti imported the first Oliomio olive press from Italy to South Africa in 1997.
                        On a small holding outside Stellenbosch, his father-in-law Harry Hands had planted a couple hundred olive trees,
                        after being stationed in Tuscany during World War 2. For the first time in over forty years,
                        olive oil was produced on the farm. Since that first oil in 1997, Gabriele and his son Piero,
                        have produced olive oil for the past two decades and have a loyal following among family and friends.
                            Like many delicious, artisanal Italian products, olive oil is to be shared over a meal with family and friends.
                            We hope you enjoy yours – with saluti, greetings from our family to yours.</p>
                            
                            <hr class="pt-2 pb-2"/>

                            <p>If you would like to stock our olive oil in your store or buy directly from the farm, please contact us.</p>
                            <Link class="btn btn-primary mb-2" to="/contact">BUY OUR OLIVE OIL</Link>


                    
                </div>
                <div class="col-1 col-0 col-lg-1 p-0 m-0"></div>
                <div class="col-12 col-lg-3 mt-4 p-4 m-0 border-left">
                    <h2 class="pb-4">ARTICLE</h2>
                    <a href={"/files/olive_oil_brocher.pdf"} target="_blank">
                        <StaticImage class="img-fluid" alt="Craft Olive Oil PDF" src="../images/Miramonti/VLE_MIRAMONTI-OLIVE-OIL-1200x1200-04-Pdf-article-image.webp"/>
                    </a>
                    <p class="mt-2">Miramonti Olive Oil was featured in the Wine-Style Magazine article 'Liquid Gold'. Click on the image to view a pdf of the article.</p>
                </div>
            </div>            
        </div>

    </Layout>
)

export default Miramonti