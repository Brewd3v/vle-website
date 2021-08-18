import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import './CarsGallery.scss'

function CarsGallery() {
    return (
        <div className="container-fluid mt-5 mb-5 text-light p-5" id="gallery">
            <h2 className="pb-4 ">Gallery</h2>
            
            <div className="row custom" id="gallery" data-toggle="modal" data-target="#exampleModal">
                <div className="col-12 col-sm-6 col-lg-4">
                  <StaticImage className="w-100" src="../images/Cars/VLE_CARS_1200x1200-04-Gallery-01.webp" alt="First slide" data-target="#carouselExample" data-slide-to="0" />
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <StaticImage className="w-100" src="../images/Cars/VLE_CARS_1200x1200-04-Gallery-02.webp" alt="First slide" data-target="#carouselExample" data-slide-to="1" />
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <StaticImage className="w-100" src="../images/Cars/VLE_CARS_1200x1200-04-Gallery-03.webp" alt="First slide" data-target="#carouselExample" data-slide-to="2" />
                </div>

              </div>
              
              <div className="modal fade custom" id="exampleModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div id="carouselExample" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                          <li data-target="#carouselExample" data-slide-to="0" className="active"></li>
                          <li data-target="#carouselExample" data-slide-to="1"></li>
                          <li data-target="#carouselExample" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <StaticImage className="d-block w-100" src="../images/Cars/VLE_CARS_1200x1200-04-Gallery-01.webp" alt="First slide" />
                          </div>
                          <div className="carousel-item">
                            <StaticImage className="d-block w-100" src="../images/Cars/VLE_CARS_1200x1200-04-Gallery-02.webp" alt="Second slide" />
                          </div>
                          <div className="carousel-item">
                            <StaticImage className="d-block w-100" src="../images/Cars/VLE_CARS_1200x1200-04-Gallery-03.webp" alt="Third slide" />
                          </div>
 
                        </div>
                        <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

              
              
              


        </div>
    )
}

export default CarsGallery
