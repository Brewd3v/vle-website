import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TIJB from "../components/SiteLogos/tijb"

const BeerGarden = () => (
  <Layout pageInfo={{ pageName: "beer" }} logo={<TIJB />}>
  <SEO title="Beer Garden" />

    <div class="container-fluid">
        <div class="row">
          <div class="col p-0 m-0">
              <StaticImage class="img-fluid" alt="Beer Garden Viglietti Farm View" src="../images/Beer/VLE-BEER-GARDEN-1920x800-hero.webp"/>  
          </div>
        </div>
    </div>

    <div class="container">
                
        <div class="row mt-4">
            <div class="col-0 col-lg-2"></div>
            <div class="col-12 col-lg-8 pt-4 m-0">
            <h2 class="pb-4">OUR STORY</h2>
                <p class="mb-4"><span class="myDropcap">T</span>
                    he Viglietti family have always lived to their true passions in life being family, friends, fast cars, good wine, good olive oil and of course great food.
                </p>
                <p>
                    Situated on a small estate in the heart of the winelands Gabriele and family’s ultimate goal and plan is to create a building which incorporates all of their passions.
                </p>
                <p>
                    At this stage all the building plans have been approved and as much of the work that can be done by the Viglietti’s and their team is being done. The family would love to find a like-minded investor to help accelerate this project and get it off the ground.
                </p>
                <p>
                    The building we have designed will have a beer garden where you will find a small Italian restaurant which serves the highest of quality family cuisine and adds weekly seasonal specials over the weekends. This fun restaurant will also do a family dinner experience where the Viglietti family are the chefs for one night and you truly taste the heart of Italy.
                </p>
                <p>
                    From the Restaurant/beer Garden you will have the views of the beautiful Stellenbosch Mountains and False Bay. Inside you will be surrounded by a beautiful brewery which produces the Italian Job Brewery beers which you can enjoy on tap and buy some to fill your fridge at home.
                </p>
                <p>
                    Also, inside the restaurant you will find a small car showroom where Viglietti Customs and Restoration will display their finished cars before being delivered to their new owners from the restaurant after enjoying a good meal. This is really exciting as these displays will change regularly and these projects are every boys/ man’s dream.
                </p>
                <p>
                    In the cold Cape winters the inside of the restaurant will also have an amazing center fire pit where you can warm up while you enjoy the estate’s amazing Barbera red wine.
                </p>
                <p>
                    If you are sitting outside in the beautiful garden, you will also be able to see from your seat the olive oil production facility and winery where the boutique/garagiste Miramonti olive oil and wines are produced.
                </p>
                <p>
                    The beer garden will be designed specifically for everybody to enjoy, families where the kids can play in the most exciting kids’ playground so the moms can relax, and the dads can enjoy their favorite sport and amazing beers the beer garden has to offer.
                </p>
                <p>
                    There will also be an amazing private roof top bar which you can see all around: Table Mountain in Cape Town, the Stellenbosch mountains, False Bay, both Rooi-els and Cape Point and the Paarl mountains. This roof top bar will be available to book for special occasions or business events, and will have its own exclusive lounge and bar inside, which gets catered by the restaurant.
                </p>
                <p>
                    If this is not all enough there will be a beautiful little deli where you can buy all the amazing products that the estate produces from beautifully fresh bread to enjoy with the amazing olive oil, lovely healthy breakfasts, to The Italian Job Brewery merchandise.
                </p>
                <p>
                    The Viglietti Lifestyle Estate truly tries to offer an experience or taste of what the most import things in life are and those things should always be shared with the ones we love.
                </p>


                <hr class="pt-2 pb-2" />
                <p>If you are interested in investing please email Piero for more details.</p>
                <a class="btn btn-primary mb-2" href="mailto:piero@viglietti-le.co.za">CONTACT PIERO</a>                   
            </div>
        </div>            
    </div>

</Layout>
     







)

export default BeerGarden