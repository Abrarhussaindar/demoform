import React, { useState } from 'react';
import "../form.css"

function EdForm() {
    const [edu, setEdu] = useState();
    const [otherEdu, setOtherEdu] = useState();
    const [empd, setEmpd] = useState();
    const [empStatus, setEmpStatus] = useState();
    const [OtherEmpStatus, setOtherEmpStatus] = useState();
    const [satisfied, setSatisfied] = useState();

    const [stream, setStream] = useState();
    const [subject, setSubject] = useState();

    const [unGradCourse, setUnGradCourse] = useState();
    const [unGradBranch, setUnGradBranch] = useState();
    const [unGradField, setUnGradField] = useState();

    const [GradCourse, setGradCourse] = useState();
    const [GradBranch, setGradBranch] = useState();
    const [GradField, setGradField] = useState();

    const [PGCourse, setPGradCourse] = useState();
    const [PGBranch, setPGradBranch] = useState();
    const [PGField, setPGradField] = useState();

    const [dipCourse, setDipCourse] = useState();
    const [itiCourse, setItiCourse] = useState();
    const [mphill, setMphill] = useState();
    const [phd, setPhd] = useState();
    const [pro, setPro] = useState();

    // const arrow = require("../arrow-down-sign-to-navigate.png");
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
                                    <label htmlFor="email">What your current Educational Qualification?</label>
                                    <div className="customSelect">

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
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        edu === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Other:
                                                </h5>
                                                <input type="text" value={otherEdu} required onChange={(e) => setOtherEdu(e.target.value)} name="name" id="name" />
                                            </div>
                                            : ""
                                    }


                                </div>

                                <div className='topEd'>
                                    <div className='top'>
                                        {
                                            edu === "12th Pass"
                                                ?
                                                <>

                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Stream</label>
                                                        <div className='customSelect'>
                                                            <select value={stream} onChange={(e) => setStream(e.target.value)}>
                                                                <option value="">Select Option</option>
                                                                <hr />
                                                                <option value="Science">Science</option>
                                                                <hr />
                                                                <option value="Commerce">Commerce</option>
                                                                <hr />
                                                                <option value="Humanities or Arts">Humanities or Arts</option>


                                                            </select>
                                                            <span className="customArrow">
                                                                {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Main Subjects</label>
                                                        <div className='customSelect'>
                                                            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                                                                <option value="">Select Option</option>
                                                                <hr />
                                                                {
                                                                    stream === "Science"
                                                                        ?
                                                                        <>
                                                                            <option value="PCB">Physics, Chemistry, Biology (PCB)</option>
                                                                            <hr />
                                                                            <option value="PCM">Physics, Chemistry, Mathematics (PCM)</option>
                                                                            <hr />
                                                                            <option value="PCCS">Physics, Chemistry, Computer Science (PCCS)</option>
                                                                        </>
                                                                        : ""
                                                                }
                                                                {
                                                                    stream === "Commerce"
                                                                        ?
                                                                        <>
                                                                            <option value="Accountancy">Accountancy</option>
                                                                            <hr />
                                                                            <option value="Business Studies">Business Studies</option>
                                                                            <hr />
                                                                            <option value="Economics">Economics</option>

                                                                        </>
                                                                        : ""
                                                                }
                                                                {
                                                                    stream === "Humanities or Arts"
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
                                                                        </>
                                                                        : ""
                                                                }



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
                                            edu === "Under Graduate"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Course</label>
                                                        <div className='customSelect'>
                                                            <select value={unGradCourse} onChange={(e) => setUnGradCourse(e.target.value)}>
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


                                                            </select>
                                                            <span className="customArrow">
                                                                {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Field</label>
                                                        <div className='customSelect'>
                                                            <select value={unGradField} onChange={(e) => setUnGradField(e.target.value)}>
                                                                <option value="">Select Option</option>
                                                                <hr />
                                                                {
                                                                    unGradCourse === "Bachelor of Arts (B.A.)"
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

                                                                        </>
                                                                        : ""
                                                                }
                                                                {
                                                                    unGradCourse === "Bachelor of Science (B.Sc.)"
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

                                                                        </>
                                                                        : ""
                                                                }
                                                                {
                                                                    unGradCourse === "Bachelor of Commerce (B.Com.)"
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
                                                                        </>
                                                                        : ""
                                                                }
                                                                {
                                                                    unGradCourse === "Professional Degrees"
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
                                                                        </>
                                                                        : ""
                                                                }




                                                            </select>
                                                            <span className="customArrow">
                                                                {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                                            </span>
                                                        </div>
                                                    </div></>
                                                : ""
                                        }
                                        {/* under grad fields */}
                                        {
                                            unGradField === "Bachelor of Engineering (B.E.)"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Branch</label>
                                                        <div className='customSelect'>
                                                            <select value={unGradBranch} onChange={(e) => setUnGradBranch(e.target.value)}>
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

                                                                {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


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
                                            unGradField === "Bachelor of Technology (B.Tech.)"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Branch</label>
                                                        <div className='customSelect'>
                                                            <select value={unGradBranch} onChange={(e) => setUnGradBranch(e.target.value)}>
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

                                                                {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


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
                                            edu === "Graduate"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Course</label>
                                                        <div className='customSelect'>
                                                            <select value={GradCourse} onChange={(e) => setGradCourse(e.target.value)}>
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


                                                            </select>
                                                            <span className="customArrow">
                                                                {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Field</label>
                                                        <div className='customSelect'>
                                                            <select value={GradField} onChange={(e) => setGradField(e.target.value)}>
                                                                <option value="">Select Option</option>
                                                                <hr />
                                                                {
                                                                    GradCourse === "Bachelor of Arts (B.A.)"
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

                                                                        </>
                                                                        : ""
                                                                }
                                                                {
                                                                    GradCourse === "Bachelor of Science (B.Sc.)"
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

                                                                        </>
                                                                        : ""
                                                                }
                                                                {
                                                                    GradCourse === "Bachelor of Commerce (B.Com.)"
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
                                                                        </>
                                                                        : ""
                                                                }
                                                                {
                                                                    GradCourse === "Professional Degrees"
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
                                                                        </>
                                                                        : ""
                                                                }




                                                            </select>
                                                            <span className="customArrow">
                                                                {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                                            </span>
                                                        </div>
                                                    </div></>
                                                : ""
                                        }
                                        {/* under grad fields */}
                                        {
                                            GradField === "Bachelor of Engineering (B.E.)"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Branch</label>
                                                        <div className='customSelect'>
                                                            <select value={GradBranch} onChange={(e) => setGradBranch(e.target.value)}>
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

                                                                {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


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
                                            GradField === "Bachelor of Technology (B.Tech.)"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Branch</label>
                                                        <div className='customSelect'>
                                                            <select value={GradBranch} onChange={(e) => setGradBranch(e.target.value)}>
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

                                                                {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


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
                                            edu === "Post Graduate"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Course</label>
                                                        <div className='customSelect'>
                                                            <select value={PGCourse} onChange={(e) => setPGradCourse(e.target.value)}>
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


                                                            </select>
                                                            <span className="customArrow">
                                                                {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Field</label>
                                                        <div className='customSelect'>
                                                            <select value={PGField} onChange={(e) => setPGradField(e.target.value)}>
                                                                <option value="">Select Option</option>
                                                                <hr />
                                                                {
                                                                    PGCourse === "Masters in Arts (M.A.)"
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

                                                                        </>
                                                                        : ""
                                                                }
                                                                {
                                                                    PGCourse === "Masters in Science (M.Sc.)"
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

                                                                        </>
                                                                        : ""
                                                                }
                                                                {
                                                                    PGCourse === "Masters in Commerce (M.Com.)"
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
                                                                        </>
                                                                        : ""
                                                                }
                                                                {
                                                                    PGCourse === "Professional Degrees"
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
                                                                        </>
                                                                        : ""
                                                                }




                                                            </select>
                                                            <span className="customArrow">
                                                                {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                                            </span>
                                                        </div>
                                                    </div></>
                                                : ""
                                        }
                                        {/* under grad fields */}
                                        {
                                            PGField === "Masters of Engineering (M.E.)"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Branch</label>
                                                        <div className='customSelect'>
                                                            <select value={PGBranch} onChange={(e) => setPGradBranch(e.target.value)}>
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

                                                                {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


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
                                            PGField === "Masters of Technology (M.Tech.)"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Branch</label>
                                                        <div className='customSelect'>
                                                            <select value={PGBranch} onChange={(e) => setPGradBranch(e.target.value)}>
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

                                                                {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


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
                                    <div className='bottom'>
                                        {
                                            edu === "Mphill"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        
                                                        <h5>
                                                            Specify:
                                                        </h5>
                                                        <input type="text" value={mphill} required onChange={(e) => setMphill(e.target.value)} name="name" id="name" />
                                                    </div>
                                                </>
                                                : ""
                                        }
                                        {
                                            edu === "Phd"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        
                                                        <h5>
                                                            Specify:
                                                        </h5>
                                                        <input type="text" value={phd} required onChange={(e) => setPhd(e.target.value)} name="name" id="name" />
                                                    </div>
                                                </>
                                                : ""
                                        }
                                        {
                                            edu === "Proffessional"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        
                                                        <h5>
                                                            Specify:
                                                        </h5>
                                                        <input type="text" value={pro} required onChange={(e) => setPro(e.target.value)} name="name" id="name" />
                                                    </div>
                                                </>
                                                : ""
                                        }
                                        {
                                            edu === "Diploma"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Course</label>
                                                        <div className='customSelect'>
                                                            <select value={dipCourse} onChange={(e) => setDipCourse(e.target.value)}>
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



                                                            </select>
                                                            <span className="customArrow">

                                                            </span>
                                                        </div>
                                                    </div>
                                                </>
                                                : ""
                                        }
                                        {
                                            edu === "ITI"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Course</label>
                                                        <div className='customSelect'>
                                                            <select value={itiCourse} onChange={(e) => setItiCourse(e.target.value)}>
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



                                                            </select>
                                                            <span className="customArrow">

                                                            </span>
                                                        </div>
                                                    </div>
                                                </>
                                                : ""
                                        }
                                    </div>


                                </div>

                                <div className="indiDetails">
                                    <label htmlFor="email">Are you currently Employeed?</label>
                                    <div className='customSelect'>
                                        <select value={empd} onChange={(e) => setEmpd(e.target.value)}>
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
                                <div className="indiDetails">
                                    <label htmlFor="email">What is you current employment status?</label>
                                    <div className='customSelect'>
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
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        empStatus === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Other:
                                                </h5>
                                                <input type="text" value={OtherEmpStatus} required onChange={(e) => setOtherEmpStatus(e.target.value)} name="name" id="name" />
                                            </div>
                                            : ""
                                    }

                                </div>

                                <div className="indiDetails">
                                    <label htmlFor="email">How satisfied are you with your current employment/business situation?</label>
                                    <div className='customSelect'>
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
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
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