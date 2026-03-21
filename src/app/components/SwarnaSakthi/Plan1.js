import Image from 'next/image';


const Plan1 = () => {
  return (
    <div>
         <section className="swarna-sakthi-plan-header">
        <div className="col-12 px-4 text-center">
          <div className="h6 py-3 text-red fw-bold">
            Gold Ornaments Purchase Advance Scheme (GOPAS)
          </div>
        </div>
      </section>

      <section className="swarna-sakthi-plan-content">
        <div className="container pb-5 py-md-5">
          <div className="row bg-red">
            <div className="col-12 col-lg-5 col-xl-4 order-1 order-lg-0 p-4 m-auto">
              <div className="h2 text-gold">Grammage Accumulation</div>
              <div className="text-white">
                A customer can select any Jewellery design of Her/His choice and
                place an order. Customer can pay the estimated order value in
                installments at regular monthly basis as per His/Her
                convenience. On or before the end of every month, as 11 Equated
                Monthly Advance (EMA).
              </div>
            </div>
            <div className="col-12 col-lg-7 col-xl-8 order-0 order-lg-1 p-0">
              <Image
                alt="plan 1 banner"
                className="img-fluid"
                width={1100}
                height={521}
                src="/plan1-banner.webp"
              />
            </div>
          </div>

          <div className="col-12 my-5 plan-terms">Terms & Conditions</div>

          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="mb-4">
                <div className="plan-terms_title mb-2">A. VA Waiver</div>
                <div className="plan-terms_text">
                  On maturity, “Gold Jewellery & Gold Coin” can be purchased in
                  this scheme with a waiver of up to 18% VA (Value Addition) or
                  on actuals, whichever is lower.
                </div>
              </div>

              <div className="mb-4">
                <div className="plan-terms_title mb-2">
                  B. No. of Advance Payments
                </div>
                <div className="plan-terms_text">
                  11 Equated Monthly advances.
                </div>
              </div>

              <div className="mb-4">
                <div className="plan-terms_title mb-2">C. Tenure</div>
                <div className="plan-terms_text">330 days.</div>
              </div>

              <div className="mb-4">
                <div className="plan-terms_title mb-2">
                  D. Minimum Monthly Advance
                </div>
                <div className="plan-terms_text">
                  Rs. 2000 per month and in multiples of Rs.1000,i.e., Rs.2000,
                  Rs.3000
                </div>
              </div>

              <div className="mb-4">
                <div className="plan-terms_title mb-2">E. Gold Rate</div>
                <div className="plan-terms_text mb-3">
                  1. The EMA paid by the customer will be converted from
                  ‘amount’ to ‘gold weight’. The prevailing Gold Rate for the
                  day will be applicable at the time of EMA payment.
                </div>
                <div className="plan-terms_text">
                  2. When customers pay their EMA using Virtual Account, Cheque
                  or any Online payment mode, prevailing gold rate at the time
                  of payment realization in the company bank accounts, will be
                  applicable.
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="mb-4">
                <div className="plan-terms_title mb-2">
                  F. Swarna Sakthi Order Redemption
                </div>
                <div className="plan-terms_text">
                  At the end of the 330 days (i.e., joining date + 329 days)
                  Example: A customer joins Swarna Sakthi on 15th January + 329
                  days I.e., 10th December of the same year will be the
                  redemption date.
                </div>
              </div>

              <div className="mb-4">
                <div className="plan-terms_title mb-2">G. Maturity</div>
                <div className="plan-terms_text">
                  Maturity is on completion of the 330 days and this tenure of
                  330 days cannot be extended under any circumstances.
                </div>
              </div>

              <div className="mb-4">
                <div className="plan-terms_title mb-2">H. Refund</div>
                <div className="plan-terms_text">
                  Refund is not permitted in this plan under any circumstances
                  as EMA is converted to gold weight at the time of payment
                  itself.
                </div>
              </div>

              <div className="mb-4">
                <div className="plan-terms_title mb-2">
                  I. GST & other Levies
                </div>
                <div className="plan-terms_text">
                  GST & other Levies will be charged extra as per government
                  norms.
                </div>
              </div>

              <div className="mb-4">
                <div className="plan-terms_title mb-2">J. Eligibility</div>
                <div className="plan-terms_text">
                  Wavier of upto 18% VA will be given only if EMA payments are
                  paid continuously without any default.
                </div>
              </div>

              <div className="mb-4">
                <div className="plan-terms_title mb-2">
                  K. After-maturity Benefits
                </div>
                <div className="plan-terms_text">
                  In case of default, eligible benefit will be based on the
                  number of EMAs (complete minimum period of 90 days). Customer
                  will get benefit of 1% VA for each EMA paid month. Customer
                  can avail maximum of upto 10% on VA. Please refer to the table
                  below.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
     
      <section className='bg-white'>
        <div className="container py-5">
          <div className="col-12 col-lg-10 m-auto">
            <div className="table-responsive">
              <table className="table  table-bordered">
                <thead>
                  <tr>
                   
                    <th colSpan={5}>Maturity benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-black fw-bold">Example</td>
                    <td className="text-black fw-bold">Scenario 1</td>
                    <td className="text-black fw-bold">Scenario 2</td>
                    <td className="text-black fw-bold">Scenario 3</td>
                    <td className="text-black fw-bold">Scenario 4</td>
                  </tr>

                  <tr>
                    <td>Scheme Value</td>
                    <td>1,10,000</td>
                    <td>1,10,000</td>
                    <td>1,10,000</td>
                    <td>1,10,000</td>
                  </tr>

                  <tr>
                    <td>EMA Value</td>
                    <td>10,000</td>
                    <td>10,000</td>
                    <td>10,000</td>
                    <td>10,000</td>
                  </tr>

                  <tr>
                    <td>No. of EMAs to be paid</td>
                    <td>11</td>
                    <td>11</td>
                    <td>11</td>
                    <td>11</td>
                  </tr>

                  <tr>
                    <td>No. of EMAs paid</td>
                    <td>11</td>
                    <td>8</td>
                    <td>6</td>
                    <td>2</td>
                  </tr>

                  <tr>
                    <td>Total Amount paid</td>
                    <td>1,10,000</td>
                    <td>80,000</td>
                    <td>60,000</td>
                    <td>20,000</td>
                  </tr>

                  <tr>
                    <td>Open Date</td>
                    <td>01/04/2022</td>
                    <td>01/04/2022</td>
                    <td>01/04/2022</td>
                    <td>01/04/2022</td>
                  </tr>

                  <tr>
                    <td>Closure Date</td>
                    <td>24/02/2023</td>
                    <td>24/02/2023</td>
                    <td>24/02/2023</td>
                    <td>24/02/2023</td>
                  </tr>

                  <tr>
                    <td>Days</td>
                    <td>330</td>
                    <td>330</td>
                    <td>330</td>
                    <td>330</td>
                  </tr>

                  <tr>
                    <td>Benefit (VA)</td>
                    <td>18%</td>
                    <td>8%</td>
                    <td>6%</td>
                    <td>0%</td>
                  </tr>

                  <tr>
                    <td className="text-red fw-bold">VA Benefit Maximum</td>
                    <td className="text-red fw-bold">19,800</td>
                    <td className="text-red fw-bold">6,400</td>
                    <td className="text-red fw-bold">3,600</td>
                    <td className="text-red fw-bold">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Plan1