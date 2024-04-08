import React, { useState } from 'react';
import "../form.css"

function Support() {

    const [bigChal, setBigChal] = useState()
    const [OtherBigChal, setOtherBigChal] = useState()
    const [WTE, setWTE] = useState()

    const [sor, setSor] = useState()
    const [otherSor, setOtherSor] = useState()
    const [sector, setSector] = useState()
    const [otherSector, setOtherSector] = useState()
    const [sectorEnterp, setSectorEnterp] = useState()
    const [otherSectorEnterp, setOtherSectorEnterp] = useState()
    const [monthIncome, setMonthIncome] = useState()
    const [sst, setSST] = useState()
    const [othersst, setOtherSST] = useState()
    const [chal, setChal] = useState()
    const [otherChal, setOtherChal] = useState()


    return (

        <div className="topIndi empDetails">
            <div className="indiDetails">
                <label htmlFor="email">What are the biggest challenges you face in pursuing your career aspirations?</label>
                <div className="customSelect">

                    <select value={bigChal} onChange={(e) => setBigChal(e.target.value)}>
                        <option value="">Select Option</option>
                        <hr />
                        <option value="Lack of financial resources">Lack of financial resources</option>
                        <hr />
                        <option value="Limited access to educational or training opportunities">Limited access to educational or training opportunities</option>
                        <hr />
                        <option value="Lack of guidance or mentorship">Lack of guidance or mentorship</option>
                        <hr />
                        <option value="Family responsibilities">Family responsibilities</option>
                        <hr />
                        <option value="Discrimination or bias">Discrimination or bias</option>
                        <hr />
                        <option value="Other">Other (please specify)</option>
                    </select>
                    <span className="customArrow">
                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                    </span>
                </div>
                {
                    bigChal === "Other"
                        ?
                        <div className='other'>
                            <h5>
                                Specify:
                            </h5>
                            <input type="text" value={OtherBigChal} required onChange={(e) => setOtherBigChal(e.target.value)} name="name" id="name" />
                        </div>
                        : ""
                }

            </div>
            <div className="indiDetails">
                <label htmlFor="email">Are you willing to explore your aspirations or job/career opportunities outside Valley?</label>
                <div className="customSelect">

                    <select value={WTE} onChange={(e) => setWTE(e.target.value)}>
                        <option value="">Select Option</option>
                        <hr />
                        <option value="Yes">Yes</option>
                        <hr />
                        <option value="No ">No </option>
                        <hr />
                        <option value="Maybe">Maybe</option>
                    </select>
                    <span className="customArrow">
                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                    </span>
                </div>


            </div>
            {
                WTE === "Yes"
                    ?
                    <>
                        <div className="indiDetails">
                            <label htmlFor="email">What kind of support or resources do you believe would help you achieve your career goals?</label>
                            <div className="customSelect">

                                <select value={sor} onChange={(e) => setSor(e.target.value)}>
                                    <option value="">Select Option</option>
                                    <hr />
                                    <option value="Skill Training">Skill Training</option>
                                    <hr />
                                    <option value="Handholding">Handholding</option>
                                    <hr />
                                    <option value="Marketing linkage">Marketing linkage</option>
                                    <hr />
                                    <option value="Financial Assistance">Financial Assistance</option>
                                    <hr />
                                    <option value="Global promotion">Global promotion</option>
                                    <hr />
                                    <option value="Industry setup">Industry setup</option>
                                    <hr />
                                    <option value="Incubation centers">Incubation centers</option>
                                    <hr />
                                    <option value="National or international trade shows">National or international trade shows</option>
                                    <hr />
                                    <option value="Robust forward and reverse logistics">Robust forward and reverse logistics</option>
                                    <hr />
                                    <option value="Brand Promotions">Brand Promotions</option>
                                    <hr />
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow">
                                    {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                </span>
                            </div>
                            {
                                sor === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={otherSor} required onChange={(e) => setOtherSor(e.target.value)} name="name" id="name" />
                                    </div>
                                    : ""
                            }

                        </div>
                        <div className="indiDetails">
                            <label htmlFor="email">In which sector do you want to get employment (wage/salaried)?</label>
                            <div className="customSelect">

                                <select value={sector} onChange={(e) => setSector(e.target.value)}>
                                    <option value="">Select Option</option>
                                    <hr />
                                    <option value="Agro-business">Agro-business</option>
                                    <hr />
                                    <option value="Auto and Auto Components">Auto and Auto Components</option>
                                    <hr />
                                    <option value="Banking Financial Services and Insurance">Banking Financial Services and Insurance</option>
                                    <hr />
                                    <option value="Beauty & Wellness">Beauty & Wellness</option>
                                    <hr />
                                    <option value="Building, Construction Industry">Building, Construction Industry</option>
                                    <hr />
                                    <option value="Chemical & Pharmaceuticals">Chemical & Pharmaceuticals</option>
                                    <hr />
                                    <option value="Education and Skill Development">Education and Skill Development</option>
                                    <hr />
                                    <option value="Electronic & IT Hardware">Electronic & IT Hardware</option>
                                    <hr />
                                    <option value="Food Processing">Food Processing</option>
                                    <hr />
                                    <option value="Furniture and Furnishing">Furniture and Furnishing</option>
                                    <hr />
                                    <option value="Gems & Jewellery">Gems & Jewellery</option>
                                    <hr />
                                    <option value="Handloom & Handicrafts">Handloom & Handicrafts</option>
                                    <hr />
                                    <option value="Healthcare Services">Healthcare Services</option>
                                    <hr />
                                    <option value="Iron & Steel">Iron & Steel</option>
                                    <hr />
                                    <option value="IT & ITES">IT & ITES</option>
                                    <hr />
                                    <option value="Leather & Leather Goods">Leather & Leather Goods</option>
                                    <hr />
                                    <option value="Media and Entertainment">Media and Entertainment</option>
                                    <hr />
                                    <option value="Mining & Quarrying">Mining & Quarrying</option>
                                    <hr />
                                    <option value="Oil, Gas & Hydrocarbon">Oil, Gas & Hydrocarbon</option>
                                    <hr />
                                    <option value="Power">Power</option>
                                    <hr />
                                    <option value="Real Estate">Real Estate</option>
                                    <hr />
                                    <option value="Renewable Energy & Green Jobs">Renewable Energy & Green Jobs</option>
                                    <hr />
                                    <option value="Retail">Retail</option>
                                    <hr />
                                    <option value="Security">Security</option>
                                    <hr />
                                    <option value="Sports">Sports</option>
                                    <hr />
                                    <option value="Telecom">Telecom</option>
                                    <hr />
                                    <option value="Textile and apparel">Textile and apparel</option>
                                    <hr />
                                    <option value="Tourism, Travel, Hospitality">Tourism, Travel, Hospitality</option>
                                    <hr />
                                    <option value="Transport, Logistics, Warehousing & Packaging">Transport, Logistics, Warehousing & Packaging</option>
                                    <hr />
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow">
                                    {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                </span>
                            </div>
                            {
                                sector === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={otherSector} required onChange={(e) => setOtherSector(e.target.value)} name="name" id="name" />
                                    </div>
                                    : ""
                            }

                        </div>
                        <div className="indiDetails">
                            <label htmlFor="email">In which sector do you want to be an entrepreneur or set up your startup?</label>
                            <div className="customSelect">

                                <select value={sectorEnterp} onChange={(e) => setSectorEnterp(e.target.value)}>
                                    <option value="">Select Option</option>
                                    <hr />
                                    <option value="Agro-business">Agro-business</option>
                                    <hr />
                                    <option value="Auto and Auto Components">Auto and Auto Components</option>
                                    <hr />
                                    <option value="Banking Financial Services and Insurance">Banking Financial Services and Insurance</option>
                                    <hr />
                                    <option value="Beauty & Wellness">Beauty & Wellness</option>
                                    <hr />
                                    <option value="Building, Construction Industry">Building, Construction Industry</option>
                                    <hr />
                                    <option value="Chemical & Pharmaceuticals">Chemical & Pharmaceuticals</option>
                                    <hr />
                                    <option value="Education and Skill Development">Education and Skill Development</option>
                                    <hr />
                                    <option value="Electronic & IT Hardware">Electronic & IT Hardware</option>
                                    <hr />
                                    <option value="Food Processing">Food Processing</option>
                                    <hr />
                                    <option value="Furniture and Furnishing">Furniture and Furnishing</option>
                                    <hr />
                                    <option value="Gems & Jewellery">Gems & Jewellery</option>
                                    <hr />
                                    <option value="Handloom & Handicrafts">Handloom & Handicrafts</option>
                                    <hr />
                                    <option value="Healthcare Services">Healthcare Services</option>
                                    <hr />
                                    <option value="Iron & Steel">Iron & Steel</option>
                                    <hr />
                                    <option value="IT & ITES">IT & ITES</option>
                                    <hr />
                                    <option value="Leather & Leather Goods">Leather & Leather Goods</option>
                                    <hr />
                                    <option value="Media and Entertainment">Media and Entertainment</option>
                                    <hr />
                                    <option value="Mining & Quarrying">Mining & Quarrying</option>
                                    <hr />
                                    <option value="Oil, Gas & Hydrocarbon">Oil, Gas & Hydrocarbon</option>
                                    <hr />
                                    <option value="Power">Power</option>
                                    <hr />
                                    <option value="Real Estate">Real Estate</option>
                                    <hr />
                                    <option value="Renewable Energy & Green Jobs">Renewable Energy & Green Jobs</option>
                                    <hr />
                                    <option value="Retail">Retail</option>
                                    <hr />
                                    <option value="Security">Security</option>
                                    <hr />
                                    <option value="Sports">Sports</option>
                                    <hr />
                                    <option value="Telecom">Telecom</option>
                                    <hr />
                                    <option value="Textile and apparel">Textile and apparel</option>
                                    <hr />
                                    <option value="Tourism, Travel, Hospitality">Tourism, Travel, Hospitality</option>
                                    <hr />
                                    <option value="Transport, Logistics, Warehousing & Packaging">Transport, Logistics, Warehousing & Packaging</option>
                                    <hr />
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow">
                                    {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                </span>
                            </div>
                            {
                                sectorEnterp === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={otherSectorEnterp} required onChange={(e) => setOtherSectorEnterp(e.target.value)} name="name" id="name" />
                                    </div>
                                    : ""
                            }

                        </div>
                        <div className="indiDetails">
                            <label htmlFor="email">What is your minimum monthly income/wage expectation (Rs)?</label>
                            <div className="customSelect">

                                <select value={monthIncome} onChange={(e) => setMonthIncome(e.target.value)}>
                                    <option value="">Select Option</option>
                                    <hr />
                                    <option value="Less than 5000">Less than 5000</option>
                                    <hr />
                                    <option value="5001 - 10,000">5001 - 10,000</option>
                                    <hr />
                                    <option value="10,001 - 15,000">10,001 - 15,000</option>
                                    <hr />
                                    <option value="15,001 - 20,000">15,001 - 20,000</option>
                                    <hr />
                                    <option value="20,001 - 25,000">20,001 - 25,000</option>
                                    <hr />
                                    <option value="25,001 - 30,000">25,001 - 30,000</option>
                                    <hr />
                                    <option value="30,001 - 35,000">30,001 - 35,000</option>
                                    <hr />
                                    <option value="Greater than 35,000">Greater than 35,000</option>
                                    <hr />
                                    <option value="No expectations">No expectations</option>



                                </select>
                                <span className="customArrow">
                                    {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                </span>
                            </div>

                        </div>
                        <div className="indiDetails">
                            <label htmlFor="email">Which specific skill do you want the training in?</label>
                            <div className="customSelect">

                                <select value={sst} onChange={(e) => setSST(e.target.value)}>
                                    <option value="">Select Option</option>
                                    <hr />
                                    <option value="Accounting/Financial Management">Accounting/Financial Management</option>
                                    <hr />
                                    <option value="Leadership/ Decision making skills">Leadership/ Decision making skills</option>
                                    <hr />
                                    <option value="Sales and Marketing">Sales and Marketing</option>
                                    <hr />
                                    <option value="Business planning">Business planning</option>
                                    <hr />
                                    <option value="Law">Law</option>
                                    <hr />
                                    <option value="Product/service development">Product/service development</option>
                                    <hr />
                                    <option value="Mentoring">Mentoring</option>
                                    <hr />
                                    <option value="No training required">No training required</option>
                                    <hr />
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow">
                                    {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                </span>
                            </div>
                            {
                                sst === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={othersst} required onChange={(e) => setOtherSST(e.target.value)} name="name" id="name" />
                                    </div>
                                    : ""
                            }

                        </div>
                        <div className="indiDetails">
                            <label htmlFor="email">What challenges do you foresee in initiating self-employment or establishing your entrepreneurial venture (start/run your own business)?</label>
                            <div className="customSelect">

                                <select value={chal} onChange={(e) => setChal(e.target.value)}>
                                    <option value="">Select Option</option>
                                    <hr />
                                    <option value="Lack of funds/ seed funding">Lack of funds/ seed funding</option>
                                    <hr />
                                    <option value="Lack of financial institutions/credit providers">Lack of financial institutions/credit providers</option>
                                    <hr />
                                    <option value="Lack of entrepreneurial experience">Lack of entrepreneurial experience</option>
                                    <hr />
                                    <option value="Lack of Marketing Skills">Lack of Marketing Skills</option>
                                    <hr />
                                    <option value="Lack of accounting skills">Lack of accounting skills</option>
                                    <hr />
                                    <option value="Lack of authentic market information">Lack of authentic market information</option>
                                    <hr />
                                    <option value="Community does not encourage women entrepreneurs">Community does not encourage women entrepreneurs</option>
                                    <hr />
                                    <option value="Lack of support from parents/spouse">Lack of support from parents/spouse</option>
                                    <hr />
                                    <option value="Inability to dedicate enough time to household and childcare work">Inability to dedicate enough time to household and childcare work</option>
                                    <hr />
                                    <option value="Uncertainty associated with setting up own business">Uncertainty associated with setting up own business</option>
                                    <hr />
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow">
                                    {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                </span>
                            </div>
                            {
                                chal === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={otherChal} required onChange={(e) => setOtherChal(e.target.value)} name="name" id="name" />
                                    </div>
                                    : ""
                            }

                        </div>
                    </>
                    : ""
            }

        </div>

    );
}

export default Support;