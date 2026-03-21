import Image from "next/image";
import React from "react";


const BrideGrid = () => {
    return (
        <section className="bride-grid-section position-relative">
            <div>
                <Image className="img-fluid position-absolute top-0 bride-grid-section_overlay-top" src="/tvam/desktop_flower_line.png" width={1920} height={223} alt="desktop flower line" />
            </div>
            <div className="container py-5">
                <div>
                    <div className="col-12 text-center bride-grid-section_content m-auto p-5">
                        <div className="mb-4">You're a modern woman. You love your roots, but you also love rocking the latest trends. And your wedding? It's gotta be the perfect blend of both.</div>
                        <div>
                        That's where <b>TVAM, the new bridal collection from Jewel One</b>, comes in. It's like the coolest fusion of your grandma's temple jewellery and the hottest fashion magazine.

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 bride-grid-section_items">




                    <div className="bride-grid-section_item text-center">
                           <div>
                                <Image className="img-fluid" width={315} height={533} src="/tvam/bride-grid-img-5.webp" alt="bride image" />
                           </div>
                           <div>
                                <div className="h2"><span className="font-secondary fw-bold">Engagement Jewellery</span></div>
                           </div>
                        </div>



                        <div className="bride-grid-section_item text-center">
                           <div>
                                <Image className="img-fluid" width={315} height={533} src="/tvam/bride-grid-img-3.webp" alt="bride image" />
                           </div>
                           <div>
                                <div className="h2"> <span className="font-secondary fw-bold">Mehendi Jewellery</span></div>
                           </div>
                        </div>


                        <div className="bride-grid-section_item text-center">
                           <div>
                                <Image className="img-fluid" width={315} height={533} src="/tvam/bride-grid-img-6.webp" alt="bride image" />
                           </div>
                           <div>
                                <div className="h2"><span className="font-secondary fw-bold">Sangeet Jewellery</span></div>
                           </div>
                        </div>

                        <div className="bride-grid-section_item text-center">
                           <div>
                                <Image className="img-fluid" width={315} height={533} src="/tvam/bride-grid-img-4.webp" alt="bride image" />
                           </div>
                           <div>
                                <div className="h2"> <span className="font-secondary fw-bold">Reception Jewellery</span></div>
                           </div>
                        </div>
                       

                        <div className="bride-grid-section_item text-center">
                           <div>
                                <Image className="img-fluid" width={315} height={533} src="/tvam/bride-grid-img-2.webp" alt="bride image" />
                           </div>
                           <div>
                                <div className="h2"> <span className="font-secondary fw-bold">Muhurtham Jewellery</span></div>
                           </div>
                        </div>


                       


                       

                      
                        <div className="bride-grid-section_item text-center">
                           <div>
                                <Image className="img-fluid" width={315} height={533} src="/tvam/bride-grid-img-1.webp" alt="bride image" />
                           </div>
                           <div>
                                <div className="h2"><span className="font-secondary fw-bold">Bridal Jewellery</span></div>
                           </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrideGrid;
