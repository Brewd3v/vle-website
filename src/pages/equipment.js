import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VigliettiIndustries from "../components/SiteLogos/viglietti-industries"
import '../styles/equipment.scss'

function equipment() {
    return (
    <Layout pageInfo={{ pageName: "viglietti-industries" }} logo={<VigliettiIndustries />}>
      <SEO title="Viglietti Industries" />

        <div class="container-fluid">
            <div class="row">
                <div class="col-4 p-0 m-0">
                    <StaticImage class="img-fluid" src="../images/Equipment/VLE_EQUIPMENT_1200x1200-01.webp" alt="Miramonti Olive Oil Man Picking Olives" />
                </div>

                <div class="col-4 p-0 m-0">
                    <StaticImage class="img-fluid" src="../images/Equipment/VLE_EQUIPMENT_1200x1200-02.webp" alt="Miramonti Olive Oil Man Pouring Olive Oil" />
                </div>

                <div class="col-4 p-0 m-0">
                    <StaticImage class="img-fluid" src="../images/Equipment/VLE_EQUIPMENT_1200x1200-03.webp" alt="Miramonti Olive Oil and Limes on Table" />
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row mt-4">
                    <div class="col-0 col-lg-2"></div>
                    <div class="col-12 col-lg-8 pt-4 m-0">
                        <h2 class="pb-4">OUR STORY</h2>
                        <p class="mb-4"><span class="myDropcap">T</span>he equipment section of Viglietti Lifestyle Estate which is Viglietti Industries was opened in 2011 where Gabriele and Piero Viglietti became the importers of the below suppliers: <strong>MORI-TEM</strong>, <strong>Spadoni</strong>, <strong>Quinti</strong>, <strong>Cipriani</strong>, <strong>Ghidi</strong>, <strong>Comac</strong>.</p>
                        <p>
                            Gabriele’s love for producing Olive oil which he does on a MORI-TEM machine which was the first of these machines in South Africa. He along with the Zichella family soon started importing and maintaining these machines all over South Africa. Now with over 150 machine countries wide we continue to import and maintain these machines with Benedetta Lami who is the Agent for South Africa. 
                        </p>

                        <p>
                            When Piero decided to leave Viglietti Motors in 2012 and join Gabriele he put structure into the business and launched Viglietti Industries. Noticing the business was very seasonal Gabriele and Piero went to Italy to source more suppliers in the beer and tank industry.                        
                        </p>

                        <p>
                            With securing the above suppliers Viglietti Industries soon became the largest brewery supplier in South Africa and now since 2021 have installed 36 Microbreweries and hope to install many more.
                        </p>
                        <p>
                            <strong>Viglietti Industries offers:</strong>
                        </p>
                        <ul>
                            <li>Turn-key olive oil production facilities.</li>
                            <li>Turn-key Breweries.</li>
                            <li>Imported Stainless tanks.</li>
                            <li>Bottling lines for wine, olive oil, beer, any soda drinks.</li>
                            <li> Turn-key olive oil production facilities</li>
                            <li> Turn-key olive oil production facilities</li>
                        </ul>                                                
                        <div class="container">
                            <div class="row mt-4">
                                <div class="justify-content-center py-2">
                                    <StaticImage class="img-fluid img-h" height="100" src="../images/Breweries/01-Wild-clover.png" alt="wild clover brewery logo" />
                                    <StaticImage class="img-fluid img-h" height="100" src="../images/Breweries/02-Saggy-stone.png" alt="saggy stone brewery" />
                                    <StaticImage class="img-fluid img-h" height="100" src="../images/Breweries/03-MBCo.jpg" alt="mountain brewing company" />
                                    <StaticImage class="img-fluid img-h" height="100" src="../images/Breweries/04-Hog-House-Brewery.jpeg" alt="hog house brewery" />
                                    <StaticImage class="img-fluid img-h" height="100" src="../images/Breweries/05-Happy-days-logo.jpg" alt="happy days brewery" />
                                    <StaticImage class="img-fluid img-h" height="100" src="../images/Breweries/06-Long-Beach-brewery.jpg" alt="long beach brewery" />
                                    <StaticImage class="img-fluid img-h" height="100" src="../images/Breweries/07-Oostenbrau.jpg" alt="ootenbrau brewery" />
                                    <StaticImage class="img-fluid img-h" height="100" src="../images/Breweries/08-Paternoster-brewery.webp" alt="paternoster brewery" />
                                    <StaticImage class="img-fluid img-h" height="100" src="../images/Breweries/09-Buffels-brew_op2-can-you-extract-this_.jpg" alt="buffels brew" />
                                    <StaticImage class="img-fluid img-h" height="100" src="../images/Breweries/11-DosSantos.jpeg" alt="dos santos brewery" />
                                    <StaticImage class="img-fluid img-h" height="100" src="../images/Breweries/12-TheFranschhoekBeerCoEmail.png" alt="The Franschoek brewing company" />
                                    <StaticImage class="img-fluid img-h" height="100" src="../images/Breweries/13-TIJB-LOGO-260x150.png" alt="the italian job brewery" />
                                    <StaticImage class="img-fluid img-h" height="100" src="../images/Breweries/14-Ukhamba_logo_300x.webp" alt="ukhamba brewery" />
                                </div>
                            </div>
                        </div>          
                        <hr class="pt-2 pb-2"/>
                        <p>If you are interested in investing please email Piero for more details.</p>
                        <a class="btn btn-primary mb-4" href="mailto:piero@viglietti-le.co.za">CONTACT PIERO</a>               
                    </div>            
            </div>
        </div>  
        
    </Layout>

    )
}

export default equipment
