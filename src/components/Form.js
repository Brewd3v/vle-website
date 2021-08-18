import React from 'react'

function Form() {
    return (
        <>
            <h2>Contact us</h2>
            <form id="contact" action="https://getform.io/f/a9a93fb0-0014-4a69-89d2-b724c1768995" method="POST">
                <div class="form-row form-group mb-2">
                    <div class="col-12 col-lg-4 mb-2">
                        <input name="name" required min={3} type="text" class="form-control" placeholder="Name"/>
                    </div>
                    <div class="col-12 col-lg-4 mb-2">
                        <input name="email" required type="email" class="form-control" placeholder="Email"/>
                    </div>
                    <div class="col-12 col-lg-4">
                        <input name="subject" required type="text" class="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
                    </div>
                </div>

                <div class="form-group">
                    <textarea name="message" required class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="7"></textarea>
                </div>

                <button type="submit" class="btn btn-primary mb-2">SEND</button>
            </form>
        </>
    )
}

export default Form
