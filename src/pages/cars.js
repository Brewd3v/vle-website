import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import SEO from "../components/seo"

import Carousel from 'react-bootstrap/Carousel'

import VigliettiCustoms from '../components/SiteLogos/viglietti-customs'
import CarsGallery from '../components/CarsGallery'

import slide1 from '../images/Cars/VLE-CARS-1920x800-01-Slider-1.webp'
import slide2 from '../images/Cars/VLE-CARS-1920x800-01-Slider-2.webp'
import slide3 from '../images/Cars/VLE-CARS-1920x800-01-Slider-3.webp'

function cars() {
    return (
    <Layout pageInfo={{ pageName: "cars" }} logo={<VigliettiCustoms />} isDark={true}>
        <SEO title="Viglietti Customs & Restoration" />
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide1}
                alt="man making part on milling machine"
                />  
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide2}
                alt="mechanics fixing ferrari engine"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide3}
                alt="mechanics working on maserati"
                />
            </Carousel.Item>
        </Carousel>

        <div class="container-fluid p-0 m-0 sticky-top">
            <div class="cars-nav ">
                <nav class="my-md-0 p-4 navbar-white bg-white text-center ">
                    <a href="#our-story" class="p-2 text-dark">Our Story</a>
                    <a href="#what" class="p-2 text-dark">What we do</a>
                    <a href="#gallery" class="p-2 text-dark">Gallery</a>
                    <a href="#contact" class="p-2 text-dark">Contact Us</a>
                </nav>
            </div>
        </div>


        <div class="container-fluid text-light p-0 m-0" id="our-story">
            <div class="row m-0 p-0">
                <div class="col-12 col-lg-6 p-5 m-0 my-auto">
                    <h2 class="pb-4">OUR STORY</h2>
                    <p class="para-2"><span class="myDropcap">T</span>he Viglietti family true to their Italian heritage are born with the passion for cars and this resulted in them going from a workshop in Woodstock to becoming Importers for Ferrari and Maserati in South Africa.

                        Since then the Viglietti brothers have retired from the Ferrari and Maserati Importership but the passion has by no means ended. On a small farm in Stellenbosch father and son team Gabriele and Piero Viglietti have built a one of a kind workshop where the magic still continues.
                        
                        Taken the experience from Gabriele Viglietti over the years and the Modern electronics from Piero we have setup a workshop that has very little limitations from full restorations on classic cars at con-course level to completely one of a kind custom machine.
                        
                        Our passion is driven by the absolute love for what we do and the ability to make whatever is in our minds a reality from our own special edition projects or the projects for our customers.</p>

                </div>
                <div class="col-12 col-lg-6 m-0 p-0">
                    <StaticImage class="img-fluid p-0 m-0" alt="Our Story Image - Gabe and Piero Viglietti" src="../images/Cars/VLE_CARS_1200x1200-02-Our-Story.webp"/>                
                </div>
            </div>
        </div>


        <div class="container-fluid text-light p-0 m-0" id="what">
            <div class="row m-0 p-0 flex-column-reverse flex-column-reverse flex-lg-row">
                <div class="col-12 col-lg-6 m-0 p-0">
                    <StaticImage class="img-fluid p-0 m-0" alt="Responsive image" src="../images/Cars/VLE_CARS_1200x1200-03-What-we-do.webp"/>                
                </div>
                <div class="col-12 col-lg-6 p-5 m-0  my-auto">                    

                        <h2 class="pb-4">WHAT WE DO</h2>
                        <p class="">Our skill set is very broad and we are very open to new challenges but we specialize in the following:</p><br/>
    
                        <ul class="col-space">
                            <li>Ferrari, Maserati, Lancia, Lamborghini and Alfa from restoration to servicing of the vehicles out of warranty.</li>
                            <li>Land Rover defenders from Series 1 until 2019: Complete performance upgrades and custom body work. Retro fitting bigger motors with the work as
                                if it comes out the factory that way. Complete off-road conversions with guaranteed reliability.</li>
                            <li>Muscle cars. Updating old mechanicals with all new innovation</li>
                            <li>Once offs</li>
                            <li>Any classic car restorations.</li>
    
                        </ul>

                        <p>
                            We are very selective of the projects we take on and make sure it 
                            will be one of a kind as it will come with special touch and be 
                            loved by anyone that may see it on the road and become a true part of your family.
                        </p>                   

                </div>
            </div>
        </div>

        <CarsGallery />

    </Layout>
    )
}

export default cars
