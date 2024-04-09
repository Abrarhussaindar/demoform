import React, { useContext } from 'react';
import "../form.css"
import { multiStepContext } from '../../StepContext';

function EdForm() {
    // const [edu, setEdu] = useState();
    // const [empd, setEmpd] = useState();
    // const [empStatus, setEmpStatus] = useState();
    // const [OtherEmpStatus, setOtherEmpStatus] = useState();
    // const [satisfied, setSatisfied] = useState();

    // const [stream, setStream] = useState();
    // const [subject, setSubject] = useState();

    // const [unGradCourse, setUnGradCourse] = useState();
    // const [unGradBranch, setUnGradBranch] = useState();
    // const [unGradField, setUnGradField] = useState();

    // const [GradCourse, setGradCourse] = useState();
    // const [GradBranch, setGradBranch] = useState();
    // const [GradField, setGradField] = useState();

    // const [PGCourse, setPGradCourse] = useState();
    // const [PGBranch, setPGradBranch] = useState();
    // const [PGField, setPGradField] = useState();

    // const [dipCourse, setDipCourse] = useState();
    // const [itiCourse, setItiCourse] = useState();
    // const [mphill, setMphill] = useState();
    // const [phd, setPhd] = useState();
    // const [pro, setPro] = useState();



    
    // const [rateAva, setRateAva] = useState();
    
    // const [otherEdu, setOtherEdu] = useState();
    // const [otherStrm, setOtherStrm] = useState();
    // const [otherSub, setOtherSub] = useState();
    // const [otherUGCourse, setOtherUGCourse] = useState();
    // const [otherUGField, setOtherUGField] = useState();
    // const [otherUGBranch, setOtherUGBranch] = useState();
    // const [otherGradCourse, setOtherGradCourse] = useState();
    // const [otherGradField, setOtherGradField] = useState();
    // const [otherGradBranch, setOtherGradBranch] = useState();
    // const [otherPGCourse, setOtherPGCourse] = useState();
    // const [otherPGField, setOtherPGField] = useState();
    // const [otherPGBranch, setOtherPGBranch] = useState();
    // const [otherDip, setOtherDip] = useState();
    // const [otherIti, setOtherIti] = useState();
    // // const arrow = require("../arrow-down-sign-to-navigate.png");

    // const [keySkills, setKeySkills] = useState();
    // const [otherKeySkill, setOtherKeySkill] = useState();
    // const [impJob, setImpJob] = useState();
    // const [otherImpJob, setOtherImpJob] = useState();




    const { userData, setUserData } = useContext(multiStepContext);
    
    return (

        <div className="topIndi empDetails">
            <div className="indiDetails">
                <label htmlFor="email">What your current Educational Qualification?</label>
                <div className="customSelect">

                    <select value={userData['Qualification']} required onChange={(e) => setUserData({...userData, "Qualification": e.target.value})}>
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
                        <option value="Other">Other (please specify)</option>
                    </select>
                    <span className="customArrow">
                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                    </span>
                </div>
                {
                    userData.Qualification === "Other"
                        ?
                        <div className='other'>
                            <h5>
                                Specify:
                            </h5>
                            <input type="text" value={userData['OtherQualification']} required onChange={(e) => setUserData({...userData, "OtherQualification": e.target.value})} name="name" id="name" />
                        </div>
                        : ""
                }


            </div>

            <div className='topEd'>
                <div className='top'>
                    {
                        userData.Qualification === "12th Pass"
                            ?
                            <>

                                <div className="indiDetails">
                                    <label htmlFor="email">Stream</label>
                                    <div className='customSelect'>
                                        <select value={userData['Stream']} required onChange={(e) => setUserData({...userData, "Stream": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Science">Science</option>
                                            <hr />
                                            <option value="Commerce">Commerce</option>
                                            <hr />
                                            <option value="Humanities or Arts">Humanities or Arts</option>
                                            <hr />
                                            <option value="Other">Other (please specify)</option>


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.Stream === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherStream']} required onChange={(e) => setUserData({...userData, "OtherStream": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="email">Main Subjects</label>
                                    <div className='customSelect'>
                                        <select value={userData['Subject']} required onChange={(e) => setUserData({...userData, "Subject": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            {
                                                userData.Stream === "Science"
                                                    ?
                                                    <>
                                                        <option value="PCB">Physics, Chemistry, Biology (PCB)</option>
                                                        <hr />
                                                        <option value="PCM">Physics, Chemistry, Mathematics (PCM)</option>
                                                        <hr />
                                                        <option value="PCCS">Physics, Chemistry, Computer Science (PCCS)</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.Stream === "Commerce"
                                                    ?
                                                    <>
                                                        <option value="Accountancy">Accountancy</option>
                                                        <hr />
                                                        <option value="Business Studies">Business Studies</option>
                                                        <hr />
                                                        <option value="Economics">Economics</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.Stream === "Humanities or Arts"
                                                    ?
                                                    <>
                                                        <option value="History">History</option>
                                                        <hr />
                                                        <option value="Geography">Geography</option>
                                                        <hr />
                                                        <option value="Political Science">Political Science</option>
                                                        <hr />
                                                        <option value="Sociology">Sociology</option>
                                                        <hr />
                                                        <option value="Psychology">Psychology</option>
                                                        <hr />
                                                        <option value="Economics">Economics</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }




                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.Subject === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherSubject']} required onChange={(e) => setUserData({...userData, "OtherSubject": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.Qualification === "Under Graduate"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Course</label>
                                    <div className='customSelect'>
                                        <select value={userData['UnderGradCourse']} required onChange={(e) => setUserData({...userData, "UnderGradCourse": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Bachelor of Arts (B.A.)">Bachelor of Arts (B.A.)</option>
                                            <hr />
                                            <option value="Bachelor of Science (B.Sc.)">Bachelor of Science (B.Sc.)</option>
                                            <hr />
                                            <option value="Bachelor of Commerce (B.Com.)">Bachelor of Commerce (B.Com.)</option>
                                            <hr />
                                            <option value="Professional Degrees">Professional Degrees</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}
                                            <hr />
                                            <option value="Other">Other (please specify)</option>


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.UnderGradCourse === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherUnderGradCourse']} required onChange={(e) => setUserData({...userData, "OtherUnderGradCourse": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="email">Field</label>
                                    <div className='customSelect'>
                                        <select value={userData['UnderGradField']} required onChange={(e) => setUserData({...userData, "UnderGradField": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            {
                                                userData.UnderGradCourse === "Bachelor of Arts (B.A.)"
                                                    ?
                                                    <>
                                                        <option value="English Literature">English Literature</option>
                                                        <hr />
                                                        <option value="History">History</option>
                                                        <hr />
                                                        <option value="Political Science">Political Science</option>
                                                        <hr />
                                                        <option value="Economics">Economics</option>
                                                        <hr />
                                                        <option value="Sociology">Sociology</option>
                                                        <hr />
                                                        <option value="Psychology">Psychology</option>
                                                        <hr />
                                                        <option value="Geography">Geography</option>
                                                        <hr />
                                                        <option value="Philosophy">Philosophy</option>
                                                        <hr />
                                                        <option value="Languages (e.g., Hindi, Urdu, Sanskrit)">Languages (e.g., Hindi, Urdu, Sanskrit)</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.UnderGradCourse === "Bachelor of Science (B.Sc.)"
                                                    ?
                                                    <>
                                                        <option value="Mathematics">Mathematics</option>
                                                        <hr />
                                                        <option value="Physics">Physics</option>
                                                        <hr />
                                                        <option value="Chemistry">Chemistry</option>
                                                        <hr />
                                                        <option value="Biology">Biology</option>
                                                        <hr />
                                                        <option value="Computer Science">Computer Science</option>
                                                        <hr />
                                                        <option value="Environmental Science">Environmental Science</option>
                                                        <hr />
                                                        <option value="Statistics">Statistics</option>
                                                        <hr />
                                                        <option value="Electronics">Electronics</option>
                                                        <hr />
                                                        <option value="Geology">Geology</option>
                                                        <hr />
                                                        <option value="Botany">Botany</option>
                                                        <hr />
                                                        <option value="Zoology">Zoology</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.UnderGradCourse === "Bachelor of Commerce (B.Com.)"
                                                    ?
                                                    <>
                                                        <option value="Accountancy">Accountancy</option>
                                                        <hr />
                                                        <option value="Business Studies">Business Studies</option>
                                                        <hr />
                                                        <option value="Economics">Economics</option>
                                                        <hr />
                                                        <option value="Financial Management">Financial Management</option>
                                                        <hr />
                                                        <option value="Taxation">Taxation</option>
                                                        <hr />
                                                        <option value="Business Law">Business Law</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.UnderGradCourse === "Professional Degrees"
                                                    ?
                                                    <>
                                                        <option value="Bachelor of Engineering (B.E.)">Bachelor of Engineering (B.E.)</option>
                                                        <hr />
                                                        <option value="Bachelor of Technology (B.Tech.)">Bachelor of Technology (B.Tech.)</option>
                                                        <hr />
                                                        <option value="Bachelor of Computer Applications (BCA)">Bachelor of Computer Applications (BCA)</option>
                                                        <hr />
                                                        <option value="Bachelor of Business Administration (BBA)">Bachelor of Business Administration (BBA)</option>
                                                        <hr />
                                                        <option value="Bachelor of Architecture (B.Arch.)">Bachelor of Architecture (B.Arch.)</option>
                                                        <hr />
                                                        <option value="Bachelor of Pharmacy (B.Pharm)">Bachelor of Pharmacy (B.Pharm)</option>
                                                        <hr />
                                                        <option value="Bachelor of Education (B.Ed.)">Bachelor of Education (B.Ed.)</option>
                                                        <hr />
                                                        <option value="Bachelor of Tourism">Bachelor of Tourism</option>
                                                        <hr />
                                                        <option value="Bachelor of IT">Bachelor of IT</option>
                                                        <hr />
                                                        <option value="Bachelor of Hotel Manangment">Bachelor of Hotel Manangment</option>
                                                        <hr />
                                                        <option value="Bachelor of Fashion Technology">Bachelor of Fashion Technology</option>
                                                        <hr />
                                                        <option value="Bachelor of Mass Communication">Bachelor of Mass Communication</option>
                                                        <hr />
                                                        <option value="Bachelor of Agriculture">Bachelor of Agriculture</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }




                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.UnderGradField === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherUnderGradField']} required onChange={(e) => setUserData({...userData, "OtherUnderGradField": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div></>
                            : ""
                    }
                    {/* under grad fields */}
                    {
                        userData.UnderGradField === "Bachelor of Engineering (B.E.)"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Branch</label>
                                    <div className='customSelect'>
                                        <select value={userData['UnderGradBranch']} required onChange={(e) => setUserData({...userData, "UnderGradBranch": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Civil Engineering">Civil Engineering</option>
                                            <hr />
                                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                                            <hr />
                                            <option value="Electrical Engineering">Electrical Engineering</option>
                                            <hr />
                                            <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                            <hr />
                                            <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                                            <hr />
                                            <option value="Chemical Engineering">Chemical Engineering</option>
                                            <hr />
                                            <option value="Aerospace Engineering">Aerospace Engineering</option>
                                            <hr />
                                            <option value="Biomedical Engineering">Biomedical Engineering</option>
                                            <hr />
                                            <option value="Environmental Engineering">Environmental Engineering</option>
                                            <hr />
                                            <option value="Industrial Engineering">Industrial Engineering</option>
                                            <hr />
                                            <option value="Agricultural Engineering">Agricultural Engineering</option>
                                            <hr />
                                            <option value="Mining Engineering">Mining Engineering</option>
                                            <hr />
                                            <option value="Petroleum Engineering">Petroleum Engineering</option>
                                            <hr />
                                            <option value="Textile Engineering">Textile Engineering</option>
                                            <hr />
                                            <option value="Metallurgical Engineering">Metallurgical Engineering</option>
                                            <hr />
                                            <option value="Automobile Engineering">Automobile Engineering</option>
                                            <hr />
                                            <option value="Instrumentation Engineering">Instrumentation Engineering</option>
                                            <hr />
                                            <option value="Ceramic Engineering">Ceramic Engineering</option>
                                            <hr />
                                            <option value="Marine Engineering">Marine Engineering</option>
                                            <hr />
                                            <option value="Fire Engineering">Fire Engineering</option>

                                            <hr />
                                            <option value="Other">Other (please specify)</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.UnderGradBranch === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherUnderGradBranch']} required onChange={(e) => setUserData({...userData, "OtherUnderGradBranch": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.UnderGradField === "Bachelor of Technology (B.Tech.)"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Branch</label>
                                    <div className='customSelect'>
                                        <select value={userData['UnderGradBranch']} required onChange={(e) => setUserData({...userData, "UnderGradBranch": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Computer Science and Engineering (CSE)">Computer Science and Engineering (CSE)</option>
                                            <hr />
                                            <option value="Mechanical Engineering (ME)">Mechanical Engineering (ME)</option>
                                            <hr />
                                            <option value="Electrical Engineering (EE)">Electrical Engineering (EE)</option>
                                            <hr />
                                            <option value="Civil Engineering (CE)">Civil Engineering (CE)</option>
                                            <hr />
                                            <option value="Electronics and Communication Engineering (ECE)">Electronics and Communication Engineering (ECE)</option>
                                            <hr />
                                            <option value="Information Technology (IT)">Information Technology (IT)</option>
                                            <hr />
                                            <option value="Chemical Engineering (ChemE)">Chemical Engineering (ChemE)</option>
                                            <hr />
                                            <option value="Aerospace Engineering">Aerospace Engineering</option>
                                            <hr />
                                            <option value="Biotechnology Engineering">Biotechnology Engineering</option>
                                            <hr />
                                            <option value="Automobile Engineering">Automobile Engineering</option>
                                            <hr />
                                            <option value="Instrumentation Engineering">Instrumentation Engineering</option>
                                            <hr />
                                            <option value="Environmental Engineering">Environmental Engineering</option>
                                            <hr />
                                            <option value="Industrial Engineering">Industrial Engineering</option>
                                            <hr />
                                            <option value="Agricultural Engineering">Agricultural Engineering</option>
                                            <hr />
                                            <option value="Petroleum Engineering">Petroleum Engineering</option>
                                            <hr />
                                            <option value="Mining Engineering">Mining Engineering</option>
                                            <hr />
                                            <option value="Metallurgical Engineering">Metallurgical Engineering</option>
                                            <hr />
                                            <option value="Textile Engineering">Textile Engineering</option>
                                            <hr />
                                            <option value="Bioinformatics">Bioinformatics</option>
                                            <hr />
                                            <option value="Food Technology">Food Technology</option>

                                            <hr />
                                            <option value="Other">Other (please specify)</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.UnderGradBranch === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherUnderGradBranch']} required onChange={(e) => setUserData({...userData, "OtherUnderGradBranch": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.Qualification === "Graduate"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Course</label>
                                    <div className='customSelect'>
                                        <select value={userData['GradCourse']} required onChange={(e) => setUserData({...userData, "GradCourse": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Bachelor of Arts (B.A.)">Bachelor of Arts (B.A.)</option>
                                            <hr />
                                            <option value="Bachelor of Science (B.Sc.)">Bachelor of Science (B.Sc.)</option>
                                            <hr />
                                            <option value="Bachelor of Commerce (B.Com.)">Bachelor of Commerce (B.Com.)</option>
                                            <hr />
                                            <option value="Professional Degrees">Professional Degrees</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}
                                            <hr />
                                            <option value="Other">Other (please specify)</option>


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.GradCourse === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherGradCourse']} required onChange={(e) => setUserData({...userData, "OtherGradCourse": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="email">Field</label>
                                    <div className='customSelect'>
                                        <select value={userData['GradField']} required onChange={(e) => setUserData({...userData, "GradField": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            {
                                                userData.GradCourse === "Bachelor of Arts (B.A.)"
                                                    ?
                                                    <>
                                                        <option value="English Literature">English Literature</option>
                                                        <hr />
                                                        <option value="History">History</option>
                                                        <hr />
                                                        <option value="Political Science">Political Science</option>
                                                        <hr />
                                                        <option value="Economics">Economics</option>
                                                        <hr />
                                                        <option value="Sociology">Sociology</option>
                                                        <hr />
                                                        <option value="Psychology">Psychology</option>
                                                        <hr />
                                                        <option value="Geography">Geography</option>
                                                        <hr />
                                                        <option value="Philosophy">Philosophy</option>
                                                        <hr />
                                                        <option value="Languages (e.g., Hindi, Urdu, Sanskrit)">Languages (e.g., Hindi, Urdu, Sanskrit)</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.GradCourse === "Bachelor of Science (B.Sc.)"
                                                    ?
                                                    <>
                                                        <option value="Mathematics">Mathematics</option>
                                                        <hr />
                                                        <option value="Physics">Physics</option>
                                                        <hr />
                                                        <option value="Chemistry">Chemistry</option>
                                                        <hr />
                                                        <option value="Biology">Biology</option>
                                                        <hr />
                                                        <option value="Computer Science">Computer Science</option>
                                                        <hr />
                                                        <option value="Environmental Science">Environmental Science</option>
                                                        <hr />
                                                        <option value="Statistics">Statistics</option>
                                                        <hr />
                                                        <option value="Electronics">Electronics</option>
                                                        <hr />
                                                        <option value="Geology">Geology</option>
                                                        <hr />
                                                        <option value="Botany">Botany</option>
                                                        <hr />
                                                        <option value="Zoology">Zoology</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.GradCourse === "Bachelor of Commerce (B.Com.)"
                                                    ?
                                                    <>
                                                        <option value="Accountancy">Accountancy</option>
                                                        <hr />
                                                        <option value="Business Studies">Business Studies</option>
                                                        <hr />
                                                        <option value="Economics">Economics</option>
                                                        <hr />
                                                        <option value="Financial Management">Financial Management</option>
                                                        <hr />
                                                        <option value="Taxation">Taxation</option>
                                                        <hr />
                                                        <option value="Business Law">Business Law</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.GradCourse === "Professional Degrees"
                                                    ?
                                                    <>
                                                        <option value="Bachelor of Engineering (B.E.)">Bachelor of Engineering (B.E.)</option>
                                                        <hr />
                                                        <option value="Bachelor of Technology (B.Tech.)">Bachelor of Technology (B.Tech.)</option>
                                                        <hr />
                                                        <option value="Bachelor of Business Administration (BBA)">Bachelor of Business Administration (BBA)</option>
                                                        <hr />
                                                        <option value="Bachelor of Architecture (B.Arch.)">Bachelor of Architecture (B.Arch.)</option>
                                                        <hr />
                                                        <option value="Bachelor of Pharmacy (B.Pharm)">Bachelor of Pharmacy (B.Pharm)</option>
                                                        <hr />
                                                        <option value="Bachelor of Education (B.Ed.)">Bachelor of Education (B.Ed.)</option>
                                                        <hr />
                                                        <option value="Bachelor of Tourism">Bachelor of Tourism</option>
                                                        <hr />
                                                        <option value="Bachelor of IT">Bachelor of IT</option>
                                                        <hr />
                                                        <option value="Bachelor of Hotel Manangment">Bachelor of Hotel Manangment</option>
                                                        <hr />
                                                        <option value="Bachelor of Fashion Technology">Bachelor of Fashion Technology</option>
                                                        <hr />
                                                        <option value="Bachelor of Mass Communication">Bachelor of Mass Communication</option>
                                                        <hr />
                                                        <option value="Bachelor of Agriculture">Bachelor of Agriculture</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }




                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.GradField === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherGradField']} required onChange={(e) => setUserData({...userData, "OtherGradField": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div></>
                            : ""
                    }
                    {/* under grad fields */}
                    {
                        userData.GradField === "Bachelor of Engineering (B.E.)"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Branch</label>
                                    <div className='customSelect'>
                                        <select value={userData['GradBranch']} required onChange={(e) => setUserData({...userData, "GradBranch": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Civil Engineering">Civil Engineering</option>
                                            <hr />
                                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                                            <hr />
                                            <option value="Electrical Engineering">Electrical Engineering</option>
                                            <hr />
                                            <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                            <hr />
                                            <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                                            <hr />
                                            <option value="Chemical Engineering">Chemical Engineering</option>
                                            <hr />
                                            <option value="Aerospace Engineering">Aerospace Engineering</option>
                                            <hr />
                                            <option value="Biomedical Engineering">Biomedical Engineering</option>
                                            <hr />
                                            <option value="Environmental Engineering">Environmental Engineering</option>
                                            <hr />
                                            <option value="Industrial Engineering">Industrial Engineering</option>
                                            <hr />
                                            <option value="Agricultural Engineering">Agricultural Engineering</option>
                                            <hr />
                                            <option value="Mining Engineering">Mining Engineering</option>
                                            <hr />
                                            <option value="Petroleum Engineering">Petroleum Engineering</option>
                                            <hr />
                                            <option value="Textile Engineering">Textile Engineering</option>
                                            <hr />
                                            <option value="Metallurgical Engineering">Metallurgical Engineering</option>
                                            <hr />
                                            <option value="Automobile Engineering">Automobile Engineering</option>
                                            <hr />
                                            <option value="Instrumentation Engineering">Instrumentation Engineering</option>
                                            <hr />
                                            <option value="Ceramic Engineering">Ceramic Engineering</option>
                                            <hr />
                                            <option value="Marine Engineering">Marine Engineering</option>
                                            <hr />
                                            <option value="Fire Engineering">Fire Engineering</option>

                                            <hr />
                                            <option value="Other">Other (please specify)</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.GradBranch === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherGradBranch']} required onChange={(e) => setUserData({...userData, "OtherGradBranch": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.GradField === "Bachelor of Technology (B.Tech.)"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Branch</label>
                                    <div className='customSelect'>
                                        <select value={userData['GradBranch']} required onChange={(e) => setUserData({...userData, "GradBranch": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Computer Science and Engineering (CSE)">Computer Science and Engineering (CSE)</option>
                                            <hr />
                                            <option value="Mechanical Engineering (ME)">Mechanical Engineering (ME)</option>
                                            <hr />
                                            <option value="Electrical Engineering (EE)">Electrical Engineering (EE)</option>
                                            <hr />
                                            <option value="Civil Engineering (CE)">Civil Engineering (CE)</option>
                                            <hr />
                                            <option value="Electronics and Communication Engineering (ECE)">Electronics and Communication Engineering (ECE)</option>
                                            <hr />
                                            <option value="Information Technology (IT)">Information Technology (IT)</option>
                                            <hr />
                                            <option value="Chemical Engineering (ChemE)">Chemical Engineering (ChemE)</option>
                                            <hr />
                                            <option value="Aerospace Engineering">Aerospace Engineering</option>
                                            <hr />
                                            <option value="Biotechnology Engineering">Biotechnology Engineering</option>
                                            <hr />
                                            <option value="Automobile Engineering">Automobile Engineering</option>
                                            <hr />
                                            <option value="Instrumentation Engineering">Instrumentation Engineering</option>
                                            <hr />
                                            <option value="Environmental Engineering">Environmental Engineering</option>
                                            <hr />
                                            <option value="Industrial Engineering">Industrial Engineering</option>
                                            <hr />
                                            <option value="Agricultural Engineering">Agricultural Engineering</option>
                                            <hr />
                                            <option value="Petroleum Engineering">Petroleum Engineering</option>
                                            <hr />
                                            <option value="Mining Engineering">Mining Engineering</option>
                                            <hr />
                                            <option value="Metallurgical Engineering">Metallurgical Engineering</option>
                                            <hr />
                                            <option value="Textile Engineering">Textile Engineering</option>
                                            <hr />
                                            <option value="Bioinformatics">Bioinformatics</option>
                                            <hr />
                                            <option value="Food Technology">Food Technology</option>

                                            <hr />
                                            <option value="Other">Other (please specify)</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.GradBranch === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherGradBranch']} required onChange={(e) => setUserData({...userData, "OtherGradBranch": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }

                    {
                        userData.Qualification === "Post Graduate"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Course</label>
                                    <div className='customSelect'>
                                        <select value={userData['PGCourse']} required onChange={(e) => setUserData({...userData, "PGCourse": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Masters in Arts (M.A.)">Masters in Arts (M.A.)</option>
                                            <hr />
                                            <option value="Masters in Science (M.Sc.)">Masters in Science (M.Sc.)</option>
                                            <hr />
                                            <option value="Masters in Commerce (M.Com.)">Masters in Commerce (M.Com.)</option>
                                            <hr />
                                            <option value="Professional Degrees">Professional Degrees</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}

                                            <hr />
                                            <option value="Other">Other (please specify)</option>

                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.PGCourse === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherPGCourse']} required onChange={(e) => setUserData({...userData, "OtherPGCourse": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="email">Field</label>
                                    <div className='customSelect'>
                                        <select value={userData['PGField']} required onChange={(e) => setUserData({...userData, "PGField": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            {
                                                userData.PGCourse === "Masters in Arts (M.A.)"
                                                    ?
                                                    <>
                                                        <option value="English Literature">English Literature</option>
                                                        <hr />
                                                        <option value="History">History</option>
                                                        <hr />
                                                        <option value="Political Science">Political Science</option>
                                                        <hr />
                                                        <option value="Economics">Economics</option>
                                                        <hr />
                                                        <option value="Sociology">Sociology</option>
                                                        <hr />
                                                        <option value="Psychology">Psychology</option>
                                                        <hr />
                                                        <option value="Geography">Geography</option>
                                                        <hr />
                                                        <option value="Philosophy">Philosophy</option>
                                                        <hr />
                                                        <option value="Languages (e.g., Hindi, Urdu, Sanskrit)">Languages (e.g., Hindi, Urdu, Sanskrit)</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.PGCourse === "Masters in Science (M.Sc.)"
                                                    ?
                                                    <>
                                                        <option value="Mathematics">Mathematics</option>
                                                        <hr />
                                                        <option value="Physics">Physics</option>
                                                        <hr />
                                                        <option value="Chemistry">Chemistry</option>
                                                        <hr />
                                                        <option value="Biology">Biology</option>
                                                        <hr />
                                                        <option value="Computer Science">Computer Science</option>
                                                        <hr />
                                                        <option value="Environmental Science">Environmental Science</option>
                                                        <hr />
                                                        <option value="Statistics">Statistics</option>
                                                        <hr />
                                                        <option value="Electronics">Electronics</option>
                                                        <hr />
                                                        <option value="Geology">Geology</option>
                                                        <hr />
                                                        <option value="Botany">Botany</option>
                                                        <hr />
                                                        <option value="Zoology">Zoology</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.PGCourse === "Masters in Commerce (M.Com.)"
                                                    ?
                                                    <>
                                                        <option value="Accountancy">Accountancy</option>
                                                        <hr />
                                                        <option value="Business Studies">Business Studies</option>
                                                        <hr />
                                                        <option value="Economics">Economics</option>
                                                        <hr />
                                                        <option value="Financial Management">Financial Management</option>
                                                        <hr />
                                                        <option value="Taxation">Taxation</option>
                                                        <hr />
                                                        <option value="Business Law">Business Law</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.PGCourse === "Professional Degrees"
                                                    ?
                                                    <>
                                                        <option value="Masters of Engineering (M.E.)">Masters of Engineering (M.E.)</option>
                                                        <hr />
                                                        <option value="Masters of Technology (M.Tech.)">Masters of Technology (M.Tech.)</option>
                                                        <hr />
                                                        <option value="Masters of Computer Applications (MCA)">Masters of Computer Applications (MCA)</option>
                                                        <hr />
                                                        <option value="Masters of Business Administration (MBA)">Masters of Business Administration (MBA)</option>
                                                        <hr />
                                                        <option value="Masters of Architecture (M.Arch.)">Masters of Architecture (M.Arch.)</option>
                                                        <hr />
                                                        <option value="Masters of Pharmacy (M.Pharm)">Masters of Pharmacy (M.Pharm)</option>
                                                        <hr />
                                                        <option value="Masters of Education (M.Ed.)">Mastersr of Education (M.Ed.)</option>
                                                        <hr />
                                                        <option value="Masters of Tourism">Masters of Tourism</option>
                                                        <hr />
                                                        <option value="Masters of IT">Masters of IT</option>
                                                        <hr />
                                                        <option value="Masters of Hotel Manangment">Masters of Hotel Manangment</option>
                                                        <hr />
                                                        <option value="Masters of Fashion Technology">Masters of Fashion Technology</option>
                                                        <hr />
                                                        <option value="Masters of Mass Communication">Masters of Mass Communication</option>
                                                        <hr />
                                                        <option value="Masters of Agriculture">Masters of Agriculture</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }




                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.PGField === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherPGField']} required onChange={(e) => setUserData({...userData, "OtherPGField": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div></>
                            : ""
                    }
                    {/* under grad fields */}
                    {
                        userData.PGField === "Masters of Engineering (M.E.)"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Branch</label>
                                    <div className='customSelect'>
                                        <select value={userData['PGBranch']} required onChange={(e) => setUserData({...userData, "PGBranch": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Civil Engineering">Civil Engineering</option>
                                            <hr />
                                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                                            <hr />
                                            <option value="Electrical Engineering">Electrical Engineering</option>
                                            <hr />
                                            <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                            <hr />
                                            <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                                            <hr />
                                            <option value="Chemical Engineering">Chemical Engineering</option>
                                            <hr />
                                            <option value="Aerospace Engineering">Aerospace Engineering</option>
                                            <hr />
                                            <option value="Biomedical Engineering">Biomedical Engineering</option>
                                            <hr />
                                            <option value="Environmental Engineering">Environmental Engineering</option>
                                            <hr />
                                            <option value="Industrial Engineering">Industrial Engineering</option>
                                            <hr />
                                            <option value="Agricultural Engineering">Agricultural Engineering</option>
                                            <hr />
                                            <option value="Mining Engineering">Mining Engineering</option>
                                            <hr />
                                            <option value="Petroleum Engineering">Petroleum Engineering</option>
                                            <hr />
                                            <option value="Textile Engineering">Textile Engineering</option>
                                            <hr />
                                            <option value="Metallurgical Engineering">Metallurgical Engineering</option>
                                            <hr />
                                            <option value="Automobile Engineering">Automobile Engineering</option>
                                            <hr />
                                            <option value="Instrumentation Engineering">Instrumentation Engineering</option>
                                            <hr />
                                            <option value="Ceramic Engineering">Ceramic Engineering</option>
                                            <hr />
                                            <option value="Marine Engineering">Marine Engineering</option>
                                            <hr />
                                            <option value="Fire Engineering">Fire Engineering</option>

                                            <hr />
                                            <option value="Other">Other (please specify)</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.PGBranch === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherPGBranch']} required onChange={(e) => setUserData({...userData, "OtherPGBranch": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.PGField === "Masters of Technology (M.Tech.)"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Branch</label>
                                    <div className='customSelect'>
                                        <select value={userData['PGBranch']} required onChange={(e) => setUserData({...userData, "PGBranch": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Computer Science and Engineering (CSE)">Computer Science and Engineering (CSE)</option>
                                            <hr />
                                            <option value="Mechanical Engineering (ME)">Mechanical Engineering (ME)</option>
                                            <hr />
                                            <option value="Electrical Engineering (EE)">Electrical Engineering (EE)</option>
                                            <hr />
                                            <option value="Civil Engineering (CE)">Civil Engineering (CE)</option>
                                            <hr />
                                            <option value="Electronics and Communication Engineering (ECE)">Electronics and Communication Engineering (ECE)</option>
                                            <hr />
                                            <option value="Information Technology (IT)">Information Technology (IT)</option>
                                            <hr />
                                            <option value="Chemical Engineering (ChemE)">Chemical Engineering (ChemE)</option>
                                            <hr />
                                            <option value="Aerospace Engineering">Aerospace Engineering</option>
                                            <hr />
                                            <option value="Biotechnology Engineering">Biotechnology Engineering</option>
                                            <hr />
                                            <option value="Automobile Engineering">Automobile Engineering</option>
                                            <hr />
                                            <option value="Instrumentation Engineering">Instrumentation Engineering</option>
                                            <hr />
                                            <option value="Environmental Engineering">Environmental Engineering</option>
                                            <hr />
                                            <option value="Industrial Engineering">Industrial Engineering</option>
                                            <hr />
                                            <option value="Agricultural Engineering">Agricultural Engineering</option>
                                            <hr />
                                            <option value="Petroleum Engineering">Petroleum Engineering</option>
                                            <hr />
                                            <option value="Mining Engineering">Mining Engineering</option>
                                            <hr />
                                            <option value="Metallurgical Engineering">Metallurgical Engineering</option>
                                            <hr />
                                            <option value="Textile Engineering">Textile Engineering</option>
                                            <hr />
                                            <option value="Bioinformatics">Bioinformatics</option>
                                            <hr />
                                            <option value="Food Technology">Food Technology</option>

                                            <hr />
                                            <option value="Other">Other (please specify)</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.PGBranch === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherPGBranch']} required onChange={(e) => setUserData({...userData, "OtherPGBranch": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }

                </div>
                <div className='bottom'>
                    {
                        userData.Qualification === "Mphill"
                            ?
                            <>
                                <div className="indiDetails">

                                    <h5>
                                        Specify:
                                    </h5>
                                    <input type="text" value={userData['Mphill']} required onChange={(e) => setUserData({...userData, "Mphill": e.target.value})} name="name" id="name" />
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.Qualification === "Phd"
                            ?
                            <>
                                <div className="indiDetails">

                                    <h5>
                                        Specify:
                                    </h5>
                                    <input type="text" value={userData['Phd']} required onChange={(e) => setUserData({...userData, "Phd": e.target.value})} name="name" id="name" />
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.Qualification === "Proffessional"
                            ?
                            <>
                                <div className="indiDetails">

                                    <h5>
                                        Specify:
                                    </h5>
                                    <input type="text" value={userData['Prof']} required onChange={(e) => setUserData({...userData, "Prof": e.target.value})} name="name" id="name" />
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.Qualification === "Diploma"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Course</label>
                                    <div className='customSelect'>
                                        <select value={userData['DipCourse']} required onChange={(e) => setUserData({...userData, "DipCourse": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Diploma in Civil Engineering">Diploma in Civil Engineering</option>
                                            <hr />
                                            <option value="Diploma in Mechanical Engineering">Diploma in Mechanical Engineering</option>
                                            <hr />
                                            <option value="Diploma in Electrical Engineering">Diploma in Electrical Engineering</option>
                                            <hr />
                                            <option value="Diploma in Electronics and Communication Engineering">Diploma in Electronics and Communication Engineering</option>
                                            <hr />
                                            <option value="Diploma in Computer Science and Engineering">Diploma in Computer Science and Engineering</option>
                                            <hr />
                                            <option value="Diploma in Chemical Engineering">Diploma in Chemical Engineering</option>
                                            <hr />
                                            <option value="Diploma in Automobile Engineering">Diploma in Automobile Engineering</option>
                                            <hr />
                                            <option value="Diploma in Instrumentation Engineering">Diploma in Instrumentation Engineering</option>
                                            <hr />
                                            <option value="Diploma in Mining Engineering">Diploma in Mining Engineering</option>
                                            <hr />
                                            <option value="Diploma in Petroleum Engineering">Diploma in Petroleum Engineering</option>
                                            <hr />
                                            <option value="Diploma in Textile Engineering">Diploma in Textile Engineering</option>
                                            <hr />
                                            <option value="Diploma in Metallurgical Engineering">Diploma in Metallurgical Engineering</option>
                                            <hr />
                                            <option value="Diploma in Agricultural Engineering">Diploma in Agricultural Engineering</option>
                                            <hr />
                                            <option value="Diploma in Marine Engineering">Diploma in Marine Engineering</option>
                                            <hr />
                                            <option value="Diploma in Ceramic Engineering">Diploma in Ceramic Engineering</option>
                                            <hr />
                                            <option value="Diploma in Industrial Engineering">Diploma in Industrial Engineering</option>
                                            <hr />
                                            <option value="Diploma in Environmental Engineering">Diploma in Environmental Engineering</option>
                                            <hr />
                                            <option value="Diploma in Fire Engineering">Diploma in Fire Engineering</option>
                                            <hr />
                                            <option value="Diploma in Biomedical Engineering">Diploma in Biomedical Engineering</option>
                                            <hr />
                                            <option value="Diploma in Aerospace Engineering">Diploma in Aerospace Engineering</option>


                                            <hr />
                                            <option value="Other">Other (please specify)</option>

                                        </select>
                                        <span className="customArrow">

                                        </span>
                                    </div>
                                    {
                                        userData.DipCourse === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherDipCourse']} required onChange={(e) => setUserData({...userData, "OtherDipCourse": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.Qualification === "ITI"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Course</label>
                                    <div className='customSelect'>
                                        <select value={userData['ItiCourse']} required onChange={(e) => setUserData({...userData, "ItiCourse": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Electrician">Electrician</option>
                                            <hr />
                                            <option value="Fitter">Fitter</option>
                                            <hr />
                                            <option value="Welder">Welder</option>
                                            <hr />
                                            <option value="Turner">Turner</option>
                                            <hr />
                                            <option value="Machinist">Machinist</option>
                                            <hr />
                                            <option value="Mechanic (Motor Vehicle)">Mechanic (Motor Vehicle)</option>
                                            <hr />
                                            <option value="Mechanic (Diesel)">Mechanic (Diesel)</option>
                                            <hr />
                                            <option value="Plumber">Plumber</option>
                                            <hr />
                                            <option value="Carpenter">Carpenter</option>
                                            <hr />
                                            <option value="Refrigeration and Air Conditioning Mechanic">Refrigeration and Air Conditioning Mechanic</option>
                                            <hr />
                                            <option value="Electronics Mechanic">Electronics Mechanic</option>
                                            <hr />
                                            <option value="Computer Operator and Programming Assistant (COPA)">Computer Operator and Programming Assistant (COPA)</option>
                                            <hr />
                                            <option value="Draughtsman (Civil/Mechanical)">Draughtsman (Civil/Mechanical)</option>
                                            <hr />
                                            <option value="Instrument Mechanic">Instrument Mechanic</option>
                                            <hr />
                                            <option value="Information Technology and Electronics System Maintenance (ITESM)">Information Technology and Electronics System Maintenance (ITESM)</option>
                                            <hr />
                                            <option value="Painter (General)">Painter (General)</option>
                                            <hr />
                                            <option value="Surveyor">Surveyor</option>
                                            <hr />
                                            <option value="Mason (Building Constructor)">Mason (Building Constructor)</option>
                                            <hr />
                                            <option value="Mechanic (Radio and Television)">Mechanic (Radio and Television)</option>
                                            <hr />
                                            <option value="Mechanic (Tractor)">Mechanic (Tractor)</option>

                                            <hr />
                                            <option value="Other">Other (please specify)</option>


                                        </select>
                                        <span className="customArrow">

                                        </span>
                                    </div>
                                    {
                                        userData.ItiCourse === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherItiCourse']} required onChange={(e) => setUserData({...userData, "OtherItiCourse": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }
                </div>


            </div>

            <div className="indiDetails">
                <label htmlFor="email">Are you currently Employeed?</label>
                <div className='customSelect'>
                    <select value={userData['Employeed']} required onChange={(e) => setUserData({...userData, "Employeed": e.target.value})}>
                        <option value="">Select Option</option>
                        <hr />
                        <option value="Yes">Yes</option>
                        <hr />
                        <option value="No">No</option>


                    </select>
                    <span className="customArrow">
                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                    </span>
                </div>
            </div>
            {
                userData.Employeed === "Yes"
                    ?
                    <>
                        <div className="indiDetails">
                            <label htmlFor="email">What is you current employment status?</label>
                            <div className='customSelect'>
                                <select value={userData['EmploymentStatus']} required onChange={(e) => setUserData({...userData, "EmploymentStatus": e.target.value})}>
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
                                <span className="customArrow">
                                    {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                </span>
                            </div>
                            {
                                userData.EmploymentStatus === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Other:
                                        </h5>
                                        <input type="text" value={userData['OtherEmploymentStatus']} required onChange={(e) => setUserData({...userData, "OtherEmploymentStatus": e.target.value})} name="name" id="name" />
                                    </div>
                                    : ""
                            }

                        </div>

                        <div className="indiDetails">
                            <label htmlFor="email">How satisfied are you with your current employment/business situation?</label>
                            <div className='customSelect'>
                                <select value={userData['Satisfaction']} required onChange={(e) => setUserData({...userData, "Satisfaction": e.target.value})}>
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
                                <span className="customArrow">
                                    {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                </span>
                            </div>
                        </div>
                    </>
                    : ""


            }
            

            
            <div className="indiDetails">
                <label htmlFor="email">According to you, what are the key skills/qualities required to secure a good job?</label>
                <div className='customSelect'>
                    <select value={userData['KeySkills']} required onChange={(e) => setUserData({...userData, "KeySkills": e.target.value})}>
                        <option value="">Select Option</option>
                        <hr />
                        <option value="Technical qualifications/trade-specific knowledge & skills">Technical qualifications/trade-specific knowledge & skills</option>
                        <hr />
                        <option value="IT/Computer Skills">IT/Computer Skills</option>
                        <hr />
                        <option value="Knowledge of the business">Knowledge of the business</option>
                        <hr />
                        <option value="Confidence">Confidence</option>
                        <hr />
                        <option value="Communication skills">Communication skills</option>
                        <hr />
                        <option value="Teamwork">Teamwork</option>
                        <hr />
                        <option value="Having completed an apprenticeship">Having completed an apprenticeship</option>
                        <hr />
                        <option value="Having contacts/ networks">Having contacts/ networks</option>
                        <hr />
                        <option value="Other">Others (please specify_____)</option>



                    </select>
                    <span className="customArrow">
                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                    </span>
                </div>
                {
                    userData.KeySkills === "Other"
                        ?
                        <div className='other'>
                            <h5>
                                Specify:
                            </h5>
                            <input type="text" value={userData['OtherKeySkills']} required onChange={(e) => setUserData({...userData, "OtherKeySkills": e.target.value})} name="name" id="name" />
                        </div>
                        : ""
                }
            </div>
            <div className="indiDetails">
                <label htmlFor="email">Which of the following do you consider to be most important when considering/evaluating/applying for a job</label>
                <div className='customSelect'>
                    <select value={userData['JobImp']} required onChange={(e) => setUserData({...userData, "JobImp": e.target.value})}>
                        <option value="">Select Option</option>
                        <hr />
                        <option value="Opportunities for promotion and career development">Opportunities for promotion and career development</option>
                        <hr />
                        <option value="Salary (wages)">Salary (wages)</option>
                        <hr />
                        <option value="Job security">Job security</option>
                        <hr />
                        <option value="Company brand value">Company brand value</option>
                        <hr />
                        <option value="Flexible work arrangements">Flexible work arrangements</option>
                        <hr />
                        <option value="Location">Location</option>
                        <hr />
                        <option value="Safety at work">Safety at work</option>
                        <hr />
                        <option value="Benefits (housing, transport, retirement benefits, etc.)">Benefits (housing, transport, retirement benefits, etc.)</option>
                        <hr />
                        <option value="Sector of job">Sector of job</option>
                        <hr />
                        <option value="Job Roles/responsibilities">Job Roles/responsibilities</option>
                        <hr />
                        <option value="Other">Others (please specify_____)</option>


                    </select>
                    <span className="customArrow">
                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                    </span>
                </div>
                {
                    userData.JobImp === "Other"
                        ?
                        <div className='other'>
                            <h5>
                                Specify:
                            </h5>
                            <input type="text" value={userData['OtherJobImp']} required onChange={(e) => setUserData({...userData, "OtherJobImp": e.target.value})} name="name" id="name" />
                        </div>
                        : ""
                }
            </div>
            <div className="indiDetails">
                <label htmlFor="email">How would you rate the availability of appropriate wage employment opportunities nowadays in J&K UT?</label>
                <div className='customSelect'>
                    <select value={userData['RateAva']} required onChange={(e) => setUserData({...userData, "RateAva": e.target.value})}>
                        <option value="">Select Option</option>
                        <hr />
                        <option value="Very inadequate">Very inadequate</option>
                        <hr />
                        <option value="Somewhat inadequate">Somewhat inadequate</option>
                        <hr />
                        <option value="Neither adequate nor inadequate">Neither adequate nor inadequate</option>
                        <hr />
                        <option value="Somewhat adequate">Somewhat adequate</option>
                        <hr />
                        <option value="Very adequate">Very adequate</option>
                        <hr />
                        <option value="Don’t Know">Don’t Know</option>


                    </select>
                    <span className="customArrow">
                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                    </span>
                </div>
            </div>

        </div>
    );
}

export default EdForm;