import React from 'react'
import { Link } from "gatsby"

import MiramontiLogo from './SiteLogos/miramonti-logo'
import TIJB from './SiteLogos/tijb'
import VigliettiCustoms from './SiteLogos/viglietti-customs'
import VigliettiIndustries from './SiteLogos/viglietti-industries'

function LogoStrip() {
    return (
        <div class="container-fluid my-5">
            <div class="row">
                <div class="bottom-logo-wrapper flex-wrap d-lg-flex justify-lg-content-evenly justify-content-evenly mx-auto text-center">

                    <div class="my-4 mx-lg-3">
                        <Link to="/beer">
                            <TIJB />
                        </Link>
                    </div>
                    <div class="my-4 mx-lg-3">
                        <Link to="/miramonti">
                            <MiramontiLogo />
                        </Link>
                    </div>
                    <div class="my-4 mx-lg-3">
                        <Link to="/equipment">
                            <VigliettiIndustries />
                        </Link>
                    </div>
                    <div class="my-4 mx-lg-3">
                        <Link to="/cars">
                            <VigliettiCustoms />  
                        </Link>              
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LogoStrip