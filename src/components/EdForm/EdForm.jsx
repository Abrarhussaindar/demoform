import React, { useState } from 'react';
import "../form.css"

function EdForm() {
    const [edu, setEdu] = useState();
    const [otherEdu, setOtherEdu] = useState();
    const [empd, setEmpd] = useState();
    const [empStatus, setEmpStatus] = useState();
    const [OtherEmpStatus, setOtherEmpStatus] = useState();
    const [satisfied, setSatisfied] = useState();
    return (
        <div className='container'>
            <div className='header'>
                <h1>
                    <span className="de">DeCent</span><span className="ar">ArCadia </span>
                </h1>
            </div>
            <div className='wrapper'>
                <h3>
                    Education Details :
                </h3>
                <form>
                    <div className='pdfContainer'>
                        <div className='mainDetails'>
                            <div className="topIndi empDetails">
                                <div className="indiDetails">
                                    <label htmlFor="email">Education</label>
                                    <select value={edu} onChange={(e) => setEdu(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="No Formal Education">No Formal Education</option>
                                        <hr />
                                        <option value="Below 10th">Below 10th</option>
                                        <hr />
                                        <option value="10 Pass">10 Pass</option>
                                        <hr />
                                        <option value="12th Pass">12th Pass</option>
                                        <hr />
                                        <option value="Under Graduate">Under Graduate</option>
                                        <hr />
                                        <option value="Graduate">Graduate</option>
                                        <hr />
                                        <option value="Post Graduate">Post Graduate</option>
                                        <hr />
                                        <option value="Mphill">Mphill</option>
                                        <hr />
                                        <option value="Phd">Phd</option>
                                        <hr />
                                        <option value="Proffessional">Proffessional</option>
                                        <hr />
                                        <option value="Diploma">Diploma</option>
                                        <hr />
                                        <option value="ITI">ITI</option>
                                        <hr />
                                        <option value="Other">Other</option>
                                    </select>
                                    {
                                        edu === "Other"
                                        ?   
                                        <div className='other'>
                                            <h5>
                                                Other:
                                            </h5>
                                            <input type="text" value={otherEdu} required onChange={(e) => setOtherEdu(e.target.value)} name="name" id="name" />
                                        </div>
                                        :   ""
                                    }
                                    
                                    
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="email">Are you currently Employeed?</label>
                                    <select value={empd} onChange={(e) => setEmpd(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="Yes">Yes</option>
                                        <hr />
                                        <option value="No">No</option>
                                        

                                    </select>
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="email">What is you current employment status?</label>
                                    <select value={empStatus} onChange={(e) => setEmpStatus(e.target.value)}>
                                    <option value="">Select Option</option>
                                        <hr />
                                        <option value="Govt Employee">Govt Employee</option>
                                        <hr />
                                        <option value="Priviate Employee">Priviate Employee</option>
                                        <hr />
                                        <option value="Part Time Employee">Part Time Employee</option>
                                        <hr />
                                        <option value="Odd Jobs">Odd Jobs</option>
                                        <hr />
                                        <option value="Bussiness">Bussiness</option>
                                        <hr />
                                        <option value="Self Employment">Self Employment</option>
                                        <hr />
                                        <option value="Enterpurner">Enterpurner</option>
                                        <hr />
                                        <option value="Start up">Start up</option>
                                        <hr />
                                        <option value="Actively seeking employment">Actively seeking employment</option>
                                        <hr />
                                        <option value="Student">Student</option>
                                        <hr />
                                        <option value="Homemaker">Homemaker</option>
                                        <hr />
                                        
                                        <option value="Other">Other</option>

                                    </select>
                                    {
                                        empStatus === "Other"
                                        ?
                                        <div className='other'>
                                            <h5>
                                                Other: 
                                            </h5>
                                            <input type="text" value={OtherEmpStatus} required onChange={(e) => setOtherEmpStatus(e.target.value)} name="name" id="name" />
                                        </div>   
                                        :   ""
                                    }
                                    
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="email">How satisfied are you with your current employment/business situation?</label>
                                    <select value={satisfied} onChange={(e) => setSatisfied(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="Very satisfied">Very satisfied</option>
                                        <hr />
                                        <option value="Satisfied">Satisfied</option>
                                        <hr />
                                        <option value="Neutral">Neutral</option>
                                        <hr />
                                        <option value="Dissatisfied">Dissatisfied</option>
                                        <hr />
                                        <option value="Very dissatisfied">Very dissatisfied</option>

                                    </select>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <button type="submit">Next</button>
                </form>
            </div>
        </div>
    );
}

export default EdForm;