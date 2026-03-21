import React from "react";
import Image from "next/image";

const Plan4 = () => {
  return (
    <>
      <div>
        <section className="swarna-sakthi-plan-header">
          <div className="col-12 px-4 text-center">
            <div className="h6 py-3 text-red fw-bold">
              One-Time Lump-Sum Advance Plan (Tenure: 330 Days)
            </div>
          </div>
        </section>

        <section className="swarna-sakthi-plan-content">
          <div className="container  pb-5 py-md-5">
            <div className="row bg-red">
              <div className="col-12 col-lg-5 col-xl-4 order-1 order-lg-0 p-4 m-auto">
                <div className="text-white">
                  To Join this plan, Customer will order Jewellery by paying in
                  onetime lump-sum advance, (or) Old gold Jewellery, After 11
                  months ( 330 days ) customer will receive Jewellery equivalent
                  to her / his ordered value With “0% VA”.
                </div>
              </div>
              <div className="col-12 col-lg-7 col-xl-8 order-0 order-lg-1 p-0">
                <Image
                  alt="plan 3 banner"
                  className="img-fluid"
                  width={1100}
                  height={521}
                  src="/plan4-banner.webp"
                />
              </div>
            </div>

            <div className="col-12 my-5 plan-terms">Terms & Conditions</div>

            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="mb-4">
                  <div className="plan-terms_title mb-2">VA Waiver</div>
                  <div className="plan-terms_text">0% VA </div>
                </div>

                <div className="mb-4">
                  <div className="plan-terms_title mb-2">Tenure & Maturity</div>
                  <div className="plan-terms_text">330 days.</div>
                </div>

                <div className="mb-4">
                  <div className="plan-terms_title mb-2">
                    Minimum Advance Amount
                  </div>
                  <div className="plan-terms_text">Rs.25,00,000/-</div>
                </div>

                <div className="mb-4">
                  <div className="plan-terms_title mb-2">
                    Minimum Quantity of gold
                  </div>
                  <div className="plan-terms_text">250 gms.</div>
                </div>

                <div className="mb-4">
                  <div className="plan-terms_title mb-2">
                    The gold ornaments / coins / bars
                  </div>
                  <div className="plan-terms_text">
                    The gold ornaments / coins / bars received from customers
                    towards the order of making new Jewellery under Wedding
                    Jewellery plan will be melted and refined, Hence the same
                    cannot be returned in its original form. The equivalent
                    quantum of gold received and its 916 purity is denoted in
                    the voucher.
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="mb-4">
                  <div className="plan-terms_title mb-2">
                    Customer can join in an advance{" "}
                  </div>
                  <div className="plan-terms_text">
                    Customer can join in an advance amount & old gold jewellery
                    worth the value of Rs.25,00,000.{" "}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="plan-terms_title mb-2">
                    Gold rate will be fixed{" "}
                  </div>
                  <div className="plan-terms_text">
                    Gold Rate will be fixed at the time of enrollment as per the
                    prevailing rate of the day. It cannot be changed later under
                    any circumstances.
                  </div>
                </div>

                <div className="mb-4">
                  <div className="plan-terms_title mb-2">GST </div>
                  <div className="plan-terms_text">
                    GST will be charged extra as per government norms.
                  </div>
                </div>

                <div className="mb-4">
                  <div className="plan-terms_title mb-2">Pre-closure </div>
                  <div className="plan-terms_text">
                    Customer needs to complete minimum period of 3 month
                    (90 days)  to avail pre closure benefits maximum of up to 10
                    % on VA.
                  </div>
                </div>

                <div className="mb-4">
                  <div className="plan-terms_title mb-2">For Example </div>
                  <div className="plan-terms_text">
                    If the customer wants to buy within 6 months, they get
                    benefit of 1%x6 = 6% waiver OFF on VA for the Advance given
                    in this scheme. Please refer to the table below
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container py-5">
            <div className="col-12 col-lg-10 m-auto">
              <div className="table-responsive">
                <table className="table  table-bordered">
                  <thead>
                    <tr>
                      <th colSpan={6}>Maturity benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-black fw-bold">Example</td>
                      <td className="text-black fw-bold">Scenario 1</td>
                      <td className="text-black fw-bold">Scenario 2</td>
                      <td className="text-black fw-bold">Scenario 3</td>
                      <td className="text-black fw-bold">Scenario 4</td>
                      <td className="text-black fw-bold">Scenario 5</td>
                    </tr>

                    <tr>
                      <td>Scheme Value</td>
                      <td>25,00,000</td>
                      <td>25,00,000</td>
                      <td>25,00,000</td>
                      <td>25,00,000</td>
                      <td>25,00,000</td>
                    </tr>

                    <tr>
                      <td>Open Date</td>
                      <td>01/07/2023</td>
                      <td>01/07/2023</td>
                      <td>01/07/2023</td>
                      <td>01/07/2023</td>
                      <td>01/07/2023</td>
                    </tr>

                    <tr>
                      <td>Closure Date</td>
                      <td>25/05/2024 </td>
                      <td>23/05/2024 </td>
                      <td>26/02/2024</td>
                      <td>04/10/2023</td>
                      <td>19/09/2023</td>
                    </tr>

                    <tr>
                      <td>Days</td>
                      <td>330</td>
                      <td>328</td>
                      <td>241</td>
                      <td>96</td>
                      <td>81</td>
                    </tr>

                    <tr>
                      <td>Months</td>
                      <td>11</td>
                      <td>10</td>
                      <td>8</td>
                      <td>3</td>
                      <td>2</td>
                    </tr>

                    <tr>
                      <td>Benefit (VA)</td>
                      <td>NO VA</td>
                      <td>10%</td>
                      <td>8%</td>
                      <td>3%</td>
                      <td>0%</td>
                    </tr>

                    <tr>
                      <td className="text-red fw-bold">VA Benefit Maximum</td>
                      <td className="text-red fw-bold">NO VA</td>
                      <td className="text-red fw-bold">2,50,000</td>
                      <td className="text-red fw-bold">2,00,000</td>
                      <td className="text-red fw-bold">75,000</td>
                      <td className="text-red fw-bold">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section
          className="wedding-jewelry-section"
          style={{
            backgroundImage: "url('/swarna-sakthi/bg.webp')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 py-5">
                <div className="display-4 plan4-banner-section__title mb-2">
                  A Golden <br />
                  Future Awaits
                </div>
                <div className="fs-3 mb-2  plan4-banner-section__sub-title">
                  Start Your Journey Now!
                </div>
                <div className="text-red fs-6 mb-2 fw-medium fst-italic">
                  Non-Redemption on Maturity
                </div>
                <div className="mb-4">
                  If the customer does not purchase Jewellery at the end of 330
                  days from the date of enrollment and grace period of 10 days
                  given by the company from the maturity of scheme, then the
                  total advance amount will be invoiced with an equivalent
                  weight of 22 karat gold coin as per the rate fixed by the
                  customer without any benefit, (For example: a customer has
                  given Rs.1,00,000 in the scheme and a Gold Rate is fixed as
                  Rs.4,500 per gram, then the refund will be in the form of
                  22.220 (approx.) grams of 22k gold coin).
                </div>
                <div>GST will be charged extra as per government norms.</div>
              </div>
              <div className="col-12 col-md-5 pb-5">
                <Image
                  alt="chain"
                  className="img-fluid"
                  width={400}
                  height={510}
                  src="/swarna-sakthi/chain.webp"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="col-12 mb-4">
            <div className="plan-terms_title">General Terms</div>
          </div>
          <div className="row general-terms">
            <div className="col-12 col-lg-6">
              <ul>
                <li>
                  The Swarna Sakthi Wedding Jewellery Plan “0% VA” Benefits can
                  apply only for Gold Jewellery & Gold Coins. Not applicable for
                  Diamond Jewellery, Platinum Jewellery and Silver Jewellery.
                </li>
                <li>
                  No Customization Orders accepted/allowed for Swarna Sakthi
                  wedding Jewellery Plan. The Customer can place the order from
                  our Existing Design Bank.
                </li>
                <li>
                  No Partial Withdrawal from the Advance paid will be allowed.
                </li>
                <li>
                  No cash refund will be permitted for the Swarna Sakthi Wedding
                  Jewellery Plan.
                </li>
                <li>
                  Customers should produce their identity proof and the bank
                  account details with documentary proof, which is mandatory at
                  the time of enrollment and redemption. The customer should
                  also produce the original receipt during the closure.
                </li>
              </ul>
            </div>

            <div className="col-12 col-lg-6">
              <ul>
                <li>
                  Any promotional offers/existing discounts will not be clubbed
                  with Swarna Sakthi redemption value.
                </li>
                <li>
                  If the customer buys extra gold over and above the accumulated
                  weight in Swarna sakthi, Actual VA is applicable for the extra
                  weight. They can also avail prevailing offers at the time of
                  purchase for the extra gold.
                </li>
                <li>GST will be charged extra as per government norms.</li>
                <li>
                  Stone charges are as applicable. (Waiver of VA is applicable
                  only on 916 Gold jewellery)
                </li>
                <li>
                  If any assistance is needed in opting for NEFT/RTGS payment,
                  kindly contact your nearest jewel one showroom (or) call Toll
                  free : 1800 1033 916.
                </li>
                <li>
                  Any dispute would be subject to Coimbatore jurisdiction only.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Plan4;
