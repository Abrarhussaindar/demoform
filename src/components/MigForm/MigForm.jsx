import React, { useState } from 'react';
import "../form.css"

function MigForm() {
    const [WTE, setWTE] = useState()
    const [wjopp, setWjopp] = useState();
    const [wmhl, setWmhl] = useState();
    const [wmoutdis, setWmoutdis] = useState();
    const [disWm, setDisWm] = useState();
    const [districtWm, setDistrictWm] = useState();
    const [wmoutUT, setWmoutUT] = useState();
    const [cityToMigrate, setCityToMigrate] = useState();
    const [ReasoncityToMigrate, setReasonCityToMigrate] = useState();
    const [wmoutInd, setWmoutInd] = useState();
    const [NotwmoutInd, setNotWmoutInd] = useState();
    const [countryToMigrate, setCountryToMigrate] = useState();
    const [ReasonCountryToMigrate, setReasonCountryToMigrate] = useState();
    return (
        <div className="topIndi empDetails">
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
                {
                    WTE === "Yes"
                        ?
                        <>
                            <div className="indiDetails">
                                <label htmlFor="email">Are you willing to explore new and emerging job opportunities even if they are not traditionally associated with Jammu and Kashmir?</label>
                                <div className='customSelect'>
                                    <select value={wjopp} onChange={(e) => setWjopp(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="Yes">Yes</option>
                                        <hr />
                                        <option value="No">No</option>
                                        <hr />
                                        <option value="Maybe">Maybe</option>


                                    </select>
                                    <span className="customArrow">

                                    </span>
                                </div>
                            </div>
                        </>
                        : ""

                }
                {
                    wjopp === "Yes"
                        ?
                        <>
                            <div className="indiDetails">
                                <label htmlFor="email">Are you willing to migrate from your home location for job opportunities?</label>
                                <div className='customSelect'>
                                    <select value={wmhl} onChange={(e) => setWmhl(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="Yes">Yes</option>
                                        <hr />
                                        <option value="No">No</option>
                                        <hr />
                                        <option value="Maybe">Maybe</option>


                                    </select>
                                    <span className="customArrow">
                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                    </span>
                                </div>
                            </div>
                        </>
                        : ""
                }
                {
                    wjopp === "No"
                        ?
                        <>
                            <div className="indiDetails">
                                <label htmlFor="email">Please state the reason(s) for not willing to migrate for employment opportunities</label>
                                <div className='customSelect'>
                                    <select value={NotwmoutInd} onChange={(e) => setNotWmoutInd(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="Want to stay close to my family">Want to stay close to my family</option>
                                        <hr />
                                        <option value="Safety issues">Safety issues</option>
                                        <hr />
                                        <option value="Will not be able to adapt to a newer environment ">Will not be able to adapt to a newer environment </option>
                                        <hr />
                                        <option value="Language barrier">Language barrier</option>
                                        <hr />
                                        <option value="Not aware of opportunities">Not aware of opportunities</option>
                                        <hr />

                                        <option value="Others">Others (please specify)</option>



                                    </select>
                                    <span className="customArrow">
                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                    </span>
                                </div>
                            </div>
                        </>
                        : ""
                }

                {
                    wmhl === "Yes"
                        ?
                        <>
                            <div className="indiDetails">
                                <label htmlFor="email">Are you willing to migrate-outside the district of residence but within UT of J&K?</label>
                                <div className='customSelect'>
                                    <select value={wmoutdis} onChange={(e) => setWmoutdis(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="Yes">Yes</option>
                                        <hr />
                                        <option value="No">No</option>
                                        <hr />
                                        <option value="Maybe">Maybe</option>


                                    </select>
                                    <span className="customArrow">
                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                    </span>
                                </div>
                            </div>
                        </>
                        : ""
                }
                {
                    wmoutdis === "Yes"
                        ?
                        <>
                            <div className="indiDetails">
                                <label htmlFor="email">Which district within the UT of J&K are you willing to migrate to?</label>
                                <div className='customSelect'>
                                    <select value={disWm} onChange={(e) => setDisWm(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="Jammu">Jammu Districts</option>
                                        <hr />
                                        <option value="Kashmir">Kashmir Districts</option>



                                    </select>
                                    <span className="customArrow">
                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                    </span>
                                </div>
                            </div>
                            <div className="indiDetails">
                                <label htmlFor="age">District</label>
                                <div className="customSelect">
                                    <select value={districtWm} onChange={(e) => setDistrictWm(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        {
                                            disWm === "Jammu"
                                                ?
                                                <>
                                                    <option value="Doda">Doda</option>
                                                    <hr />
                                                    <option value="Jammu">Jammu</option>
                                                    <hr />
                                                    <option value="Kathua">Kathua</option>
                                                    <hr />
                                                    <option value="Kishtwar">Kishtwar</option>
                                                    <hr />
                                                    <option value="Poonch">Poonch</option>
                                                    <hr />
                                                    <option value="Rajouri">Rajouri</option>
                                                    <hr />
                                                    <option value="Ramban">Ramban</option>
                                                    <hr />
                                                    <option value="Reasi">Reasi</option>
                                                    <hr />
                                                    <option value="Samba">Samba</option>
                                                    <hr />
                                                    <option value="Udhampur">Udhampur</option>
                                                </>
                                                : ""
                                        }

                                        {
                                            disWm === "Kashmir"
                                                ?
                                                <>
                                                    <option value="Anantnag">Anantnag</option>
                                                    <hr />
                                                    <option value="Bandipora">Bandipora</option>
                                                    <hr />
                                                    <option value="Baramullah">Baramullah</option>
                                                    <hr />
                                                    <option value="Budgam">Budgam</option>
                                                    <hr />
                                                    <option value="Gandarbal">Gandarbal</option>
                                                    <hr />
                                                    <option value="Kulgam">Kulgam</option>
                                                    <hr />
                                                    <option value="Kupwara">Kupwara</option>
                                                    <hr />
                                                    <option value="Pulwama">Pulwama</option>
                                                    <hr />
                                                    <option value="Sopian">Sopian</option>
                                                    <hr />
                                                    <option value="Srinagar">Srinagar</option>

                                                </>
                                                : ""
                                        }

                                    </select>
                                    <span className="customArrow"></span>
                                </div>
                                {/* <input type="number" value={age} required onChange={handleAgeInputChange} name="age" id="age" /> */}
                            </div>
                        </>
                        :
                        ""

                }

                {
                    wmoutdis === "No"
                        ?
                        <>
                            <div className="indiDetails">
                                <label htmlFor="email">Are you willing to migrate-outside the UT of J&K but within India?</label>
                                <div className='customSelect'>
                                    <select value={wmoutUT} onChange={(e) => setWmoutUT(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="Yes">Yes</option>
                                        <hr />
                                        <option value="No">No</option>
                                        <hr />
                                        <option value="Maybe">Maybe</option>



                                    </select>
                                    <span className="customArrow">
                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                    </span>
                                </div>
                            </div>
                        </>
                        : ""
                }
                {
                    wmoutUT === "Yes"
                        ?
                        <>
                            <div className="indiDetails">
                                <label htmlFor="email">Which city do you want to migrate to in India?</label>
                                <div className='customSelect'>
                                    <select value={cityToMigrate} onChange={(e) => setCityToMigrate(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="Bangalore (Bengaluru)">Bangalore (Bengaluru)</option>
                                        <hr />
                                        <option value="Hyderabad">Hyderabad</option>
                                        <hr />
                                        <option value="Mumbai">Mumbai</option>
                                        <hr />
                                        <option value="Delhi">Delhi</option>
                                        <hr />
                                        <option value="Pune">Pune</option>
                                        <hr />
                                        <option value="Chennai">Chennai</option>
                                        <hr />
                                        <option value="Ahmedabad">Ahmedabad</option>
                                        <hr />
                                        <option value="Kolkata">Kolkata</option>
                                        <hr />
                                        <option value="Chandigarh">Chandigarh</option>
                                        <hr />
                                        <option value="Gurgaon (Gurugram)">Gurgaon (Gurugram)</option>
                                        <hr />
                                        <option value="Noida">Noida</option>
                                        <hr />
                                        <option value="Kochi (Cochin)">Kochi (Cochin)</option>
                                        <hr />
                                        <option value="Others">Others (please specify)</option>



                                    </select>
                                    <span className="customArrow">
                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                    </span>
                                </div>
                            </div>
                            <div className="indiDetails">
                                <label htmlFor="email">Please state why (s) for your willingness to migrate outside the UT but </label>
                                <div className='customSelect'>
                                    <select value={ReasoncityToMigrate} onChange={(e) => setReasonCityToMigrate(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="No suitable job opportunities at UT">No suitable job opportunities at UT</option>
                                        <hr />
                                        <option value="Better Salary">Better Salary</option>
                                        <hr />
                                        <option value="Better work culture">Better work culture</option>
                                        <hr />
                                        <option value="Job as per skill attainment">Job as per skill attainment</option>
                                        <hr />
                                        <option value="Job relevant to my career aspiration">Job relevant to my career aspiration</option>
                                        <hr />
                                        <option value="It is easier to get a job in other states">It is easier to get a job in other states</option>
                                        <hr />
                                        <option value="The presence of extended family or friends">The presence of extended family or friends</option>
                                        <hr />
                                        <option value="Better exposure and learning environment">Better exposure and learning environment</option>
                                        <hr />
                                        <option value="Others">Others (please specify)</option>



                                    </select>
                                    <span className="customArrow">
                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                    </span>
                                </div>
                            </div>
                        </>
                        : ""
                }
                {
                    wmoutUT === "No"
                        ?
                        <>
                            <div className="indiDetails">
                                <label htmlFor="email">Do you want to migrate-outside India?</label>
                                <div className='customSelect'>
                                    <select value={wmoutInd} onChange={(e) => setWmoutInd(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="Yes">Yes</option>
                                        <hr />
                                        <option value="No">No</option>
                                        <hr />
                                        <option value="Maybe">Maybe</option>



                                    </select>
                                    <span className="customArrow">
                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                    </span>
                                </div>
                            </div>
                        </>
                        : ""
                }
                {
                    wmoutInd === "Yes"
                        ?
                        <>
                            <div className="indiDetails">
                                <label htmlFor="email">Which country do you want to migrate to?</label>
                                <div className='customSelect'>
                                    <select value={countryToMigrate} onChange={(e) => setCountryToMigrate(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="USA">USA</option>
                                        <hr />
                                        <option value="UK">UK</option>
                                        <hr />
                                        <option value="Canada">Canada</option>
                                        <hr />
                                        <option value="Germany">Germany</option>
                                        <hr />
                                        <option value="Spain">Spain</option>
                                        <hr />
                                        <option value="Portugal">Portugal</option>
                                        <hr />
                                        <option value="Australia">Australia</option>
                                        <hr />
                                        <option value="Switzerland">Switzerland</option>
                                        <hr />
                                        <option value="Singapore">Singapore</option>
                                        <hr />
                                        <option value="Netherlands">Netherlands</option>
                                        <hr />
                                        <option value="Sweden">Sweden</option>
                                        <hr />
                                        <option value="Norway">Norway</option>
                                        <hr />
                                        <option value="Denmark">Denmark</option>
                                        <hr />
                                        <option value="Finland">Finland</option>
                                        <hr />
                                        <option value="New Zealand">New Zealand</option>
                                        <hr />
                                        <option value="United Arab Emirates (UAE)">United Arab Emirates (UAE)</option>
                                        <hr />
                                        <option value="Qatar">Qatar</option>
                                        <hr />
                                        <option value="Japan">Japan</option>
                                        <hr />
                                        <option value="South Korea">South Korea</option>
                                        <hr />
                                        <option value="Luxembourg">Luxembourg</option>
                                        <hr />
                                        <option value="Ireland">Ireland</option>
                                        <hr />
                                        <option value="Austria">Austria</option>
                                        <hr />

                                        <option value="Others">Others (please specify)</option>



                                    </select>
                                    <span className="customArrow">
                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                    </span>
                                </div>
                            </div>
                            <div className="indiDetails">
                                <label htmlFor="email">Please state the reason(s) for your willingness to migrate outside the country.</label>
                                <div className='customSelect'>
                                    <select value={ReasonCountryToMigrate} onChange={(e) => setReasonCountryToMigrate(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="No suitable job opportunities in the country">No suitable job opportunities in the country</option>
                                        <hr />
                                        <option value="Better Salary">Better Salary</option>
                                        <hr />
                                        <option value="Better work culture">Better work culture</option>
                                        <hr />
                                        <option value="Job as per skill attainment">Job as per skill attainment</option>
                                        <hr />
                                        <option value="Job relevant to my career aspiration">Job relevant to my career aspiration</option>
                                        <hr />
                                        <option value="Easier to get a job in other countries">Easier to get a job in other countries</option>
                                        <hr />
                                        <option value="Influence -Friends/relatives (working/staying abroad)">Influence -Friends/relatives (working/staying abroad)</option>
                                        <hr />
                                        <option value="Better exposure and learning environment">Better exposure and learning environment</option>
                                        <hr />
                                        <option value="Others">Others (please specify)</option>



                                    </select>
                                    <span className="customArrow">
                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                    </span>
                                </div>
                            </div>

                        </>
                        : ""
                }
                {
                    wmoutInd === "No"
                        ?
                        <>
                            <div className="indiDetails">
                                <label htmlFor="email">Please state the reason(s) for not willing to migrate for employment opportunities</label>
                                <div className='customSelect'>
                                    <select value={NotwmoutInd} onChange={(e) => setNotWmoutInd(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="Want to stay close to my family">Want to stay close to my family</option>
                                        <hr />
                                        <option value="Safety issues">Safety issues</option>
                                        <hr />
                                        <option value="Will not be able to adapt to a newer environment ">Will not be able to adapt to a newer environment </option>
                                        <hr />
                                        <option value="Language barrier">Language barrier</option>
                                        <hr />
                                        <option value="Not aware of opportunities">Not aware of opportunities</option>
                                        <hr />

                                        <option value="Others">Others (please specify)</option>



                                    </select>
                                    <span className="customArrow">
                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                    </span>
                                </div>
                            </div>
                        </>
                        : ""
                }



            </div>
        </div>
    );
}

export default MigForm;