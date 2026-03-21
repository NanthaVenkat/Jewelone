import React from 'react'
import "./Contact.css"

const ContactSection2 = () => {
  return (
    <div className='contact-section2 section-padding'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <div className='contact-section-title contact2-section-title mb-3'>Visit our office or warehouse!</div>
                    <div className='contact-section-text mb-3'>Praesent sapien lacus, molestie vitae arcu in, elementum congue justo. Aenean aliquam semper velit eu pretium. Suspendisse mattis luctus quam nec vehicula. Donec scelerisque tristique metus a vestibulum.</div>
                    <div>
                        <a className='btn contact2-section-link'>GET DIRECTION</a>
                    </div>


                </div>


                <div className='col-12 col-md-6 mt-5 mt-md-0'>
                    <div className='card mt-5 mt-md-0'>
                        <div className='card-body text-center pt-5'>
                        <div className='mb-4'>
                        <div className='card-label'>Monday - Friday</div>
                        <div className='card-text'>9:30am - 8:30pm</div>
                        </div>


                        <div className='mb-4'>
                        <div className='card-label'>Saturdays</div>
                        <div className='card-text'>11am - 5pm</div>
                        </div>


                        <div className='mb-4'>
                        <div className='card-label'>Sundays</div>
                        <div className='card-text'>9am - 3pm</div>
                        </div>




                        </div>


                        <div className='card-overlay btn'>
                            HOURS
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ContactSection2