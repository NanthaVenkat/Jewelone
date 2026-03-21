import React from "react";
import Image from "next/image";

const Plan2 = () => {
  return (
    <div>
      <section className="swarna-sakthi-plan-header">
        <div className="col-12 px-4 text-center">
          <div className="h6 py-3 text-red fw-bold">
            One -Time Lump-Sum Advance Plan (Tenure: 330 Days)
          </div>
        </div>
      </section>

      <section className="swarna-sakthi-plan-content">
        <div className="container pb-5 py-md-5">
          <div className="row bg-red">
            <div className="col-12 col-lg-5 col-xl-4 order-1 order-lg-0 p-4 m-auto">
              <div className="text-white">
                In this plan, Customers can order their choice of Jewellery by
                paying a one-time lump-sum as advance. After 330 days, the
                customer will receive Jewellery equivalent to His/Her ordered
                value.
              </div>
            </div>
            <div className="col-12 col-lg-7 col-xl-8 order-0 order-lg-1 p-0">
              <Image
                alt="plan 2 banner"
                className="img-fluid"
                width={1100}
                height={521}
                src="/plan2-banner.webp"
              />
            </div>
          </div>

          <div className="col-12 my-5 plan-terms">Terms & Conditions</div>

          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="mb-4">
                <div className="plan-terms_title mb-2">A. VA Waiver</div>
                <div className="plan-terms_text">
                  On maturity, “Gold jewellery & Gold Coin” can be purchased in
                  this scheme, with a waiver of up to 18% VA (Value Addition) or
                  on actuals, whichever is lower.
                </div>
              </div>

              <div className="mb-4">
                <div className="plan-terms_title mb-2">
                  B. Tenure & Maturity{" "}
                </div>
                <div className="plan-terms_text">330 Days. </div>
              </div>

              <div className="mb-4">
                <div className="plan-terms_title mb-2">C. Minimum Advance</div>
                <div className="plan-terms_text">
                  A minimum amount of Rs.25,000/- is to be paid to enroll in the
                  Swarna Sakthi Plan II.
                </div>
              </div>

              <div className="mb-4">
                <div className="plan-terms_title mb-2">D. Gold Rate </div>
                <div className="plan-terms_text">
                  1. Gold Rate will be fixed at the time of enrollment as per
                  the prevailing rate of the day. It cannot be changed later
                  under any circumstances.
                </div>
                <div className="plan-terms_text">
                  2. During any online payment / or cheque as payment mode, the
                  prevailing Gold Rate at the time of payment realization in the
                  company bank accounts, will be applicable.{" "}
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="mb-4">
                <div className="plan-terms_title mb-2">E. Refund </div>
                <div className="plan-terms_text">
                  On maturity , “Gold jewellery & Gold Coin” can be purchased in
                  this scheme, with a waiver of up to 18% VA (Value Addition) or
                  on actuals, whichever is lower.
                </div>
              </div>

              <div className="mb-4">
                <div className="plan-terms_title mb-2">
                  F. GST and other Levies
                </div>
                <div className="plan-terms_text">
                  GST and other Levies will be charged extra as per government
                  norms.
                </div>
              </div>

              <div className="mb-4">
                <div className="plan-terms_title mb-2">G. Pre-closure</div>
                <div className="plan-terms_text">
                  Benefit can be availed from the fourth month itself. On
                  completion of 90 days, customer can get a benefit of 1% VA for
                  each month completed. Customer can avail a maximum of up to
                  10% on VA. Please refer to the table below.
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
                    <td>1,00,000</td>
                    <td>1,00,000</td>
                    <td>1,00,000</td>
                    <td>1,00,000</td>
                    <td>1,10,000</td>
                  </tr>

                  <tr>
                    <td>Open Date</td>
                    <td>01/04/2022</td>
                    <td>01/04/2022</td>
                    <td>01/04/2022</td>
                    <td>01/04/2022</td>
                    <td>01/04/2022</td>
                  </tr>

                  <tr>
                    <td>Closure Date</td>
                    <td>24/02/2023</td>
                    <td>22/02/2023</td>
                    <td>27/11/2022</td>
                    <td>05/07/2022</td>
                    <td>20/06/2022</td>
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
                    <td>Benefit (VA)</td>
                    <td>18%</td>
                    <td>10%</td>
                    <td>8%</td>
                    <td>3%</td>
                    <td>0%</td>
                  </tr>

                  <tr>
                    <td className="text-red fw-bold">VA Benefit Maximum</td>
                    <td className="text-red fw-bold">18,000</td>
                    <td className="text-red fw-bold">10,000</td>
                    <td className="text-red fw-bold">8,000</td>
                    <td className="text-red fw-bold">3,000</td>

                    <td className="text-red fw-bold">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plan2;
