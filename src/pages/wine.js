import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MiramontiLogo from "../components/SiteLogos/miramonti-logo"
import {Link} from "gatsby"

function wine() {
    return (
    <Layout pageInfo={{ pageName: "wine" }} logo={<MiramontiLogo />}>
      <SEO title="Miramonti Wine" />

        <div class="container-fluid">
            <div class="row">
                <div class="col-4 p-0 m-0">
                    <StaticImage class="img-fluid" src="../images/Wine/VLE_MIRAMONTI-WINE_1200x1200-01.webp" alt="Miramonti Olive Oil Man Picking Olives" />
                </div>

                <div class="col-4 p-0 m-0">
                    <StaticImage class="img-fluid" src="../images/Wine/VLE_MIRAMONTI-WINE_1200x1200-02.webp" alt="Miramonti Olive Oil Man Pouring Olive Oil" />
                </div>

                <div class="col-4 p-0 m-0">
                    <StaticImage class="img-fluid" src="../images/Wine/VLE_MIRAMONTI-WINE_1200x1200-03.webp" alt="Miramonti Olive Oil and Limes on Table" />
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row mt-4">
                    <div class="col-0 col-lg-2"></div>
                    <div class="col-12 col-lg-8 pt-4 m-0">
                        <h2 class="pb-4">OUR STORY</h2>
                        <p class="mb-4 para-2"><span class="myDropcap">T</span>he Viglietti Family come from a small part of Italy called Gassino which is in the Torino region. This region of Italy is famous for the Barbera cultivar wine and because of this both Gabriele and Piero wanted to plant this cultivar on our family farm in South Africa. This cultivar is a very rare cultivar in South Africa and with a lot of effort and some amazing inside family knowledge from the wine legend our Gran Phyllis Hands, we planted half a hectare of Barbera, in 2014. Our goal is to produce this wine focusing on the methods to make sure it is of the highest quality as the vineyard will only produce 3000 bottles a year and sell only from Viglietti Lifestyle Estate. And so the <em>La Nonna</em> Barbera was born: named after our Italian Nonna from Piemonte, and our wine guru South African Gran.
                        </p>
                        <hr class="pt-2 pb-2"/>
                        <Link class="btn btn-primary mb-2" to="/contact">BUY OUR WINE</Link>           
                    </div>            
            </div>
        </div>            
        

    </Layout>

    )
}

export default wine
