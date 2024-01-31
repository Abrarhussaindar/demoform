import React, { useState } from "react";
import "./form.css";
// import html2pdf from "html2pdf.js";
// import emailjs from "emailjs-com";
import generatePDF from "./pdf/pdf";

function Form() {



    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [dob, setDob] = useState("");
    const [dis, setDis] = useState();
    // const [YOE, setYOE] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("+91");
    const [adhaar, setAdhaar] = useState("");

    // const [postGradDegree, setPGDegree] = useState("");
    const [postGradInst, setPGInst] = useState("");
    const [postGradDegreeYear, setPGDegreeYear] = useState("");
    const [underGradInst, setUGInst] = useState("");
    // const [underGradDegree, setUGDegree] = useState("");
    const [underGradDegreeYear, setUGDegreeYear] = useState("");
    // const [otherCerti, setOtherCerti] = useState("");
    const [otherCertiInst, setOtherCertiInst] = useState("");
    const [otherCertiYear, setOtherCertiYear] = useState("");

    const [stream12, setStream12] = useState();
    const [UGStream, setUGStream] = useState();
    const [PGStream, setPGStream] = useState();

    const [ITI, setITI] = useState();
    const [diploma, setDiploma] = useState();
    const [anyOther, setAnyOther] = useState();




    // dropdown for langs
    const [lang2, setLang2] = useState("");

    const [lang1Read, setLang1Read] = useState();
    const [lang1Write, setLang1Write] = useState();
    const [lang1Speak, setLang1Speak] = useState();

    const [lang2Read, setLang2Read] = useState();
    const [lang2Write, setLang2Write] = useState();
    const [lang2Speak, setLang2Speak] = useState();

    const [employeer1, setEmployeer1] = useState("");
    const [employeer2, setEmployeer2] = useState("");
    const [employeer3, setEmployeer3] = useState("");


    const [employeerFrom1, setEmployeerFrom1] = useState("");
    const [employeerSector1, setEmployeerSector1] = useState("");
    const [employeerTo1, setEmployeerTo1] = useState("");
    const [employeerPosition1, setEmployeerPosition1] = useState("");

    const [employeerFrom2, setEmployeerFrom2] = useState("");
    const [employeerSector2, setEmployeerSector2] = useState("");
    const [employeerTo2, setEmployeerTo2] = useState("");
    const [employeerPosition2, setEmployeerPosition2] = useState("");

    const [employeerFrom3, setEmployeerFrom3] = useState("");
    const [employeerSector3, setEmployeerSector3] = useState("");
    const [employeerTo3, setEmployeerTo3] = useState("");
    const [employeerPosition3, setEmployeerPosition3] = useState("");

    const [summary, setSummary] = useState("");

    // const [photo, setPhoto] = useState();
    // const [resume, setResume] = useState();
    const [photoData, setPhotoData] = useState(null);
    const handleFile = (e) => {
        const file = e.target.files[0];
        if (e.target.name === "photo") {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoData(reader.result);
            };
            reader.readAsDataURL(file);
        } else if (e.target.name === "resume") {
            // Handle resume file
        } else {
            window.alert("Please select a file");
        }
    };
    const handleAdhaarInputChange = (e) => {
        const inputValue = e.target.value;

        // Ensure the input value doesn't exceed 16 characters
        if (inputValue.length <= 16) {
            setAdhaar(inputValue);
        }
    };



    const handlephoneInputChange = (e) => {
        const inputValue = e.target.value;

        // Ensure the input is a number and starts with "+91"
        if (/^\+91\d{0,10}$/.test(inputValue)) {
            setPhoneNumber(inputValue);
        }
    };

    // const handleFile = (e) => {
    //     const file = e.target.files[0];
    //     console.log(file);
    //     if (e.target.name === "photo") {
    //         setPhoto(file);
    //     } else if (e.target.name === "resume") {
    //         setResume(file);
    //     }
    //     else {
    //         window.alert("Please select a file");
    //     }
    // }


    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation logic...

        // Call the PDF generation function
        generatePDF({ name, designation, dob, dis, email, phoneNumber, adhaar, postGradDegreeYear, underGradDegreeYear, otherCertiYear, lang2, lang1Read, lang1Speak, lang1Write, lang2Read, lang2Speak, lang2Write, employeer1, employeer2, employeerFrom1, employeerFrom2, employeerPosition1, employeerPosition2, employeerTo1, employeerTo2, summary, postGradInst, underGradInst, otherCertiInst }, photoData);
    };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // Validation logic
    //     if (!name || !designation || !dob || !age || !YOE || !email || !phoneNumber || !adhaar) {
    //       alert("Please fill in all required fields.");
    //       return;
    //     }

    //     // Additional validation for specific fields (e.g., email format, age, etc.)

    //     // Generate PDF
    //     const pdfContent = document.getElementById("pdf-content");
    //     const pdfOptions = { margin: 10, filename: `${name}_cv.pdf` };
    //     await html2pdf().from(pdfContent).set(pdfOptions).outputPdf();

    //     // Send email
    //     const templateParams = {
    //       to_email: "abrardar988651@gmail.com",  // Replace with the recipient's email            // Replace with your name
    //       message_html: "Please find attached CV.",
    //       attachment: pdfOptions.filename,
    //       from_name: `${name}`,
    //       from_email: `${email}`,
    //       from_phone: `${phoneNumber}`,
    //       cc: `${email}`,
    //     };

    //     emailjs.send("service_wy90w7f", "template_h791hle", templateParams, "OKL3cmWsEx_IRms0X")
    //       .then((response) => {
    //         console.log("Email sent:", response);
    //       })
    //       .catch((error) => {
    //         console.error("Error sending email:", error);
    //       });
    //   };




    const logo = require("./logo.png");
    const user = require("./user.png");
    return (
        <div className="container">

            <div className="header">
                <img className="logo" src={logo} alt="logo" />
                <h1>
                    CV <span>(for job fairs)</span>
                </h1>
            </div>
            <div className="wrapper">

                <form onSubmit={handleSubmit}>
                    <div className="pdfContainer" id="pdf-content">

                        <div className="uploadContainer">
                            <div className="uploadPhoto">
                                {/* <label htmlFor="photo">Upload Photo</label> 
                                 */}
                                 <img className="userImg" src={photoData ? photoData : user} alt="img"/>
                                 <div className="discrip">
                                    <p className="topP">To add a photo to your resume, click the button and select a file to upload.</p>
                                    <p className="bottomP">Supported file formats are .jpg, .gif and .png. The file size limit is set at 10 MB.</p>
                                    <label className="inputFile">

                                    <input type="file" name="photo" className="photo" required onChange={handleFile} id="phone" />
                                    Upload Photo
                                    </label>
                                 </div>
                            </div>


                        </div>
                        <hr />

                        <div className="mainDetails">

                            <div className="topIndi">
                                <div className="indiDetails">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" value={name} required onChange={(e) => setName(e.target.value)} name="name" id="name" />
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="desig">Address</label>
                                    <input type="text" value={designation} required onChange={(e) => setDesignation(e.target.value)} name="desig" id="desig" />
                                </div>
                                
                            </div>
                            <div className="bottomIndi">
                            <div className="indiDetails">
                                    <label htmlFor="age">District</label>
                                    <select value={dis} onChange={(e) => setDis(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="Anantnag">Anantnag</option>
                                        <option value="Badgam">Badgam</option>
                                        <option value="Doda">Doda</option>
                                        <option value="Jammu">Jammu</option>
                                        <option value="Kargil">Kargil</option>
                                        <option value="Kulgam">Kulgam</option>
                                        <option value="Shopain">Shopain</option>
                                        <option value="Srinagar">Srinagar</option>
                                    </select>
                                    {/* <input type="number" value={age} required onChange={handleAgeInputChange} name="age" id="age" /> */}
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="dob">DOB</label>
                                    <input type="date" value={dob} required onChange={(e) => setDob(e.target.value)} name="dob" id="dob" />
                                </div>

                                {/* <div className="indiDetails">
                                <label htmlFor="expe">Total Years of Experience</label>
                                <input type="number" value={YOE} required onChange={(e) => setYOE(e.target.value)} name="expe" id="expe" />
                            </div> */}
                                <div className="indiDetails">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" value={phoneNumber} maxLength={13} required onChange={handlephoneInputChange} name="phone" id="phone" />
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} name="email" id="email" />
                                </div>

                                
                            </div>
                            <div className="indiDetails">
                                    <label htmlFor="adh">Adhaar Number</label>
                                    <input type="number" value={adhaar} required onChange={handleAdhaarInputChange} maxLength={16} name="adh" id="adh" />
                                </div>

                        </div>
                        <hr />
                        <div className="ed-details">
                            <div className="topInner">
                                <h5>Educational Qualification:</h5>
                                <div className="innder_ed">
                                    <div className="degree">
                                        <h5>
                                            Degree(Specialization)
                                        </h5>


                                        <h5>
                                            10th
                                        </h5>
                                        <h5>
                                            12th
                                        </h5>
                                        <h5 >
                                            Graduation
                                        </h5>
                                        <h5 >
                                            Post-Graduation
                                        </h5>

                                    </div>
                                    <div className="stream">
                                        <h5>Institute</h5>


                                        <input type="text" value={postGradInst} onChange={(e) => setPGInst(e.target.value)} name="stream" id="stream" />
                                        <input type="text" value={underGradInst} onChange={(e) => setUGInst(e.target.value)} name="stream" id="stream" />
                                        <input type="text" value={otherCertiInst} onChange={(e) => setOtherCertiInst(e.target.value)} name="stream" id="stream" />
                                        <input type="text" value={otherCertiInst} onChange={(e) => setOtherCertiInst(e.target.value)} name="stream" id="stream" />

                                    </div>
                                    <div className="stream">
                                        <h5>Stream</h5>


                                        {/* <input type="text" value={postGradDegree} onChange={(e) => setPGDegree(e.target.value)} name="stream" id="stream" />
                                    <input type="text" value={underGradDegree} onChange={(e) => setUGDegree(e.target.value)} name="stream" id="stream" />
                                    <input type="text" value={otherCerti} onChange={(e) => setOtherCerti(e.target.value)} name="stream" id="stream" />
                                    <input type="text" value={otherCerti} onChange={(e) => setOtherCerti(e.target.value)} name="stream" id="stream" />
                                     */}
                                        <select value={lang1Read} onChange={(e) => setLang1Read(e.target.value)}>
                                            <option value="Not Applicable">Not Applicable</option>

                                        </select>
                                        <select value={stream12} onChange={(e) => setStream12(e.target.value)}>
                                            <option value="">Select Option</option>
                                            <option value="Medical">Medical</option>
                                            <option value="Non-Medical">Non-Medical</option>
                                            <option value="Arts">Arts</option>
                                            <option value="Commerce">Commerce</option>

                                        </select>
                                        <select value={UGStream} onChange={(e) => setUGStream(e.target.value)}>
                                            <option value="">Select Option</option>
                                            <option value="Bachelor of Arts (B.A.)">Bachelor of Arts (B.A.)</option>
                                            <option value="Bachelor of Science (B.Sc.)">Bachelor of Science (B.Sc.)</option>
                                            <option value="Bachelor of Business Administration (BBA)">Bachelor of Business Administration (BBA)</option>
                                            <option value="Bachelor of Commerce (B.Com.)">Bachelor of Commerce (B.Com.)</option>
                                            <option value="Bachelor of Computer">Bachelor of Computer</option>

                                            <option value="Bachelor of Architecture">Bachelor of Architecture</option>
                                            <option value="Bachelor of Designing & Fashion Courses">Bachelor of Designing & Fashion Courses</option>
                                            <option value="Bachelor of Physical Education Courses">Bachelor of Physical Education Courses</option>
                                            <option value="Bachelor of Commercial Pilot Courses">Bachelor of Commercial Pilot Courses</option>
                                            <option value="Bachelor of Actuarial/Chartered Accountant">Bachelor of Actuarial/Chartered Accountant</option>

                                            <option value="Bachelor of Engineering (B.E.)">Bachelor of Engineering (B.E.)</option>
                                            <option value="Bachelor of Technology (B.Tech)">Bachelor of Technology (B.Tech)</option>
                                            <option value="Bachelor of Medicine, Bachelor of Surgery (MBBS)">Bachelor of Medicine, Bachelor of Surgery (MBBS)</option>
                                            <option value="Bachelor of Dental Surgery (BDS)">Bachelor of Dental Surgery (BDS)</option>
                                            <option value="Bachelor of Pharmacy (B.Pharm)">Bachelor of Pharmacy (B.Pharm)</option>

                                            <option value="Bachelor of Education (B.Ed)">Bachelor of Education (B.Ed)</option>
                                            <option value="Bachelor of Law (LLB)">Bachelor of Law (LLB)</option>
                                            <option value="Bachelor of Veterinary Science & Animal Husbandry (B.V.Sc & AH)">Bachelor of Veterinary Science & Animal Husbandry (B.V.Sc & AH)</option>
                                            <option value="Bachelor of Physical Education (B.P.Ed)">Bachelor of Physical Education (B.P.Ed)</option>
                                            <option value="Bachelor of Social Work (BSW)">Bachelor of Social Work (BSW)</option>

                                            <option value="Bachelor of Science (B.Sc) in Physics">Bachelor of Science (B.Sc) in Physics</option>
                                            <option value="Bachelor of Science (B.Sc) in Chemistry">Bachelor of Science (B.Sc) in Chemistry</option>
                                            <option value="Bachelor of Science (B.Sc) in Computer Science">Bachelor of Science (B.Sc) in Computer Science</option>
                                            <option value="Bachelor of Science (B.Sc) in Mathematics">Bachelor of Science (B.Sc) in Mathematics</option>
                                            <option value="Bachelor of Science (B.Sc) in Zoology">Bachelor of Science (B.Sc) in Zoology</option>

                                            <option value="Bachelor Of Engineering">Bachelor Of Engineering</option>
                                            <option value="Bachelor Of Technology">Bachelor Of Technology</option>
                                            <option value="Bachelor Of Education">Bachelor Of Education</option>
                                            <option value="Bachelor Of Medicine, Bachelor Of Surgery">Bachelor Of Medicine, Bachelor Of Surgery</option>
                                            <option value="Bachelor Of Medicine, Bachelor Of Surgery">Bachelor Of Medicine, Bachelor Of Surgery</option>

                                            <option value="Bachelor of Science (B.Sc) in Botany">Bachelor of Science (B.Sc) in Botany</option>
                                            <option value="Bachelor of Science (B.Sc) in Biotechnology">Bachelor of Science (B.Sc) in Biotechnology</option>
                                            <option value="Bachelor of Science (B.Sc) in Microbiology">Bachelor of Science (B.Sc) in Microbiology</option>
                                            <option value="Bachelor of Science (B.Sc) in Information Technology">Bachelor of Science (B.Sc) in Information Technology</option>
                                            <option value="Bachelor of Science (B.Sc) in Statistics">Bachelor of Science (B.Sc) in Statistics</option>

                                            <option value="Bachelor of Science (B.Sc) in Electronics">Bachelor of Science (B.Sc) in Electronics</option>
                                            <option value="Bachelor of Science (B.Sc) in Biochemistry">Bachelor of Science (B.Sc) in Biochemistry</option>
                                            <option value="Bachelor of Science (B.Sc) {Hons.} in Mathematics">Bachelor of Science (B.Sc) (Hons.) in Mathematics</option>
                                            <option value="Bachelor of Science (B.Sc) {Hons.} in Chemistry">Bachelor of Science (B.Sc) (Hons.) in Chemistry</option>
                                            <option value="Bachelor of Science (B.Sc) {Hons.} in Physics">Bachelor of Science (B.Sc) (Hons.) in Physics</option>

                                            <option value="Bachelor of Science (B.Sc) {Hons.} in Zoology">Bachelor of Science (B.Sc) (Hons.) in Zoology</option>
                                            <option value="Bachelor of Science (B.Sc) {Hons.} in Botany">Bachelor of Science (B.Sc) (Hons.) in Botany</option>
                                            <option value="Bachelor of Science (B.Sc) {Hons.} in Computer Science">Bachelor of Science (B.Sc) (Hons.) in Computer Science</option>
                                            <option value="Bachelor of Fine Arts (BFA)">Bachelor of Fine Arts (BFA)</option>
                                            <option value="Bachelor of Hotel Management (BHM)">Bachelor of Hotel Management (BHM)</option>

                                            <option value="Bachelor of Library Science (B.Lib.Sc.)">Bachelor of Library Science (B.Lib.Sc.)</option>
                                            <option value="Bachelor of Mass Communications (B.M.C.)">Bachelor of Mass Communications (B.M.C.)</option>
                                            <option value="Bachelor of Physical Therapy (BPT)">Bachelor of Physical Therapy (BPT)</option>
                                            <option value="Bachelor of Occupational Therapy (BOT)">Bachelor of Occupational Therapy (BOT)</option>
                                            <option value="Bachelor of Social Work (BSW)">Bachelor of Social Work (BSW)</option>

                                            <option value="Bachelor of Travel and Tourism Management (BTTM)">Bachelor of Travel and Tourism Management (BTTM)</option>
                                            <option value="Bachelor of Visual Arts (BVA)">Bachelor of Visual Arts (BVA)</option>
                                            <option value="Bachelor of Hospitality and Tourism Management (BHTM)">Bachelor of Hospitality and Tourism Management (BHTM)</option>
                                            <option value="Bachelor of Public Relations (BPR)">Bachelor of Public Relations (BPR)</option>
                                            <option value="Bachelor of Arts (B.A.)">Bachelor of Arts (B.A.)</option>

                                        </select>
                                        <select value={PGStream} onChange={(e) => setPGStream(e.target.value)}>
                                        <option value="">Select Option</option>
                                            <option value="Master of Business Administration (MBA)">Master of Business Administration (MBA)</option>
                                            <option value="Master of Technology (M.Tech.)">Master of Technology (M.Tech.)</option>
                                            <option value="Master of Science (M.Sc)">Master of Science (M.Sc)</option>
                                            <option value="Master of Arts (M.A.)">Master of Arts (M.A.)</option>
                                            <option value="Master of Commerce (M.Com.)">Master of Commerce (M.Com.)</option>

                                            <option value="Master of Computer Applications (MCA)">Master of Computer Applications (MCA)</option>
                                            <option value="Master of Surgery (MS)">Master of Surgery (MS)</option>
                                            <option value="Master of Education (M.Ed.)">Master of Education (M.Ed.)</option>
                                            <option value="Master of Laws (LLM)">Master of Laws (LLM)</option>
                                            <option value="Master of Pharmacy (M.Pharm)">Master of Pharmacy (M.Pharm)</option>

                                            <option value="Master of Physical Education (M.P.Ed)">Master of Physical Education (M.P.Ed)</option>
                                            <option value="Master of Social Work (MSW)">Master of Social Work (MSW)</option>
                                            <option value="Post Graduate Diploma in Information Technology (PGDIT)">Post Graduate Diploma in Information Technology (PGDIT)</option>
                                            <option value="Post Graduate Diploma in Taxation">Post Graduate Diploma in Taxation</option>
                                            <option value="Post Graduate Diploma in Business Law (PGDBL)">Post Graduate Diploma in Business Law (PGDBL)</option>

                                            <option value="Post Graduate Diploma in Corporate Law (PGDCL)">Post Graduate Diploma in Corporate Law (PGDCL)</option>
                                            <option value="Post Graduate Diploma in Cyber Law">Post Graduate Diploma in Cyber Law</option>
                                            <option value="Post Graduate courses in Banking and Finance">Post Graduate courses in Banking and Finance</option>
                                            <option value="Post Graduate courses in Digital Marketing">Post Graduate courses in Digital Marketing</option>
                                            <option value="Post Graduate courses in Social Work">Post Graduate courses in Social Work</option>

                                            <option value="Master of Philosophy (M.Phil.)">Master of Philosophy (M.Phil.)</option>
                                            <option value="Master of Technology (M.Tech.) in Advanced Manufacturing">Master of Technology (M.Tech.) in Advanced Manufacturing</option>
                                            <option value="Master of Technology (M.Tech.) in Embedded Systems">Master of Technology (M.Tech.) in Embedded Systems</option>
                                            <option value="Master of Technology (M.Tech.) in Information Security">Master of Technology (M.Tech.) in Information Security</option>
                                            <option value="Master of Technology (M.Tech.) in Intelligent System">Master of Technology (M.Tech.) in Intelligent System</option>

                                            <option value="Master of Technology (M.Tech.) in Mechatronics">Master of Technology (M.Tech.) in Mechatronics</option>
                                            <option value="Master of Science (M.Sc.) in Medical Biochemistry">Master of Science (M.Sc.) in Medical Biochemistry</option>
                                            <option value="Master of Science (M.Sc.) in Medical Microbiology">Master of Science (M.Sc.) in Medical Microbiology</option>
                                            <option value="Master of Surgery (MS) in E.N.T.">Master of Surgery (MS) in E.N.T.</option>
                                            <option value="Master of Surgery (MS) in Ayurveda">Master of Surgery (MS) in Ayurveda</option>

                                            <option value="Master of Surgery (MS) in Anaesthesiology">Master of Surgery (MS) in Anaesthesiology</option>
                                            <option value="Master of Science (M.Sc.) in Mathematics">Master of Science (M.Sc.) in Mathematics</option>
                                            <option value="Master of Science (M.Sc.) in Genetics">Master of Science (M.Sc.) in Genetics</option>
                                            <option value="Master of Science (M.Sc.) in Geography">Master of Science (M.Sc.) in Geography</option>
                                            <option value="Master of Science (M.Sc.) in Geoinformatics">Master of Science (M.Sc.) in Geoinformatics</option>

                                            <option value="Master of Science (M.Sc.) in Geology">Master of Science (M.Sc.) in Geology</option>
                                            <option value="Master of Arts (M.A.) in various specializations">Master of Arts (M.A.) in various specializations</option>
                                            <option value="Master of Arts (M.A.) in Public Policy">Master of Arts (M.A.) in Public Policy</option>
                                            <option value="Master of Arts (M.A.) in Dance">Master of Arts (M.A.) in Dance</option>
                                            <option value="Master of Arts (M.A.) in Home Science">Master of Arts (M.A.) in Home Science</option>

                                            <option value="Master of Arts (M.A.) in Astrology">Master of Arts (M.A.) in Astrology</option>
                                            {/* <option value="Diploma in Labour Law">Diploma in Labour Law</option> */}
                                            <option value="Post Graduate Diploma in Business Law">Post Graduate Diploma in Business Law</option>
                                            <option value="Post Graduate Diploma in Corporate Law">Post Graduate Diploma in Corporate Law</option>
                                            <option value="Post Graduate Diploma in Cyber Law">Post Graduate Diploma in Cyber Law</option>

                                            <option value="Post Graduate Diploma in Computer Applications">Post Graduate Diploma in Computer Applications</option>
                                            <option value="Post Graduate Diploma in Forensic Science">Post Graduate Diploma in Forensic Science</option>
                                            <option value="Post Graduate Diploma in Marketing Management">Post Graduate Diploma in Marketing Management</option>
                                            <option value="Post Graduate Diploma in Business Analytics">Post Graduate Diploma in Business Analytics</option>
                                            <option value="Post Graduate Diploma in Industrial Engineering">Post Graduate Diploma in Industrial Engineering</option>

                                        </select>

                                    </div>
                                    <div className="year">
                                        <h5>Year</h5>


                                        <input type="date" value={postGradDegreeYear} onChange={(e) => setPGDegreeYear(e.target.value)} name="stream" id="stream" />
                                        <input type="date" value={underGradDegreeYear} onChange={(e) => setUGDegreeYear(e.target.value)} name="stream" id="stream" />
                                        <input type="date" value={otherCertiYear} onChange={(e) => setOtherCertiYear(e.target.value)} name="stream" id="stream" />
                                        <input type="date" value={otherCertiYear} onChange={(e) => setOtherCertiYear(e.target.value)} name="stream" id="stream" />

                                    </div>
                                </div>
                            </div>
                            <div className="bottomInner">
                                <h5>Other Professional Courses:</h5>
                                <div className="innder_ed">
                                    <div className="courses">
                                        <h5>
                                            Courses
                                        </h5>
                                        <div className="iti">
                                            <h5>
                                                ITI
                                            </h5>
                                            <select value={ITI} onChange={(e) => setITI(e.target.value)}>
                                                <option value="">Select Option</option>
                                                <option value="Architectural Draughtsman">Architectural Draughtsman </option>
                                                <option value="Draughtsman (Civil) ">Draughtsman (Civil) </option>
                                                <option value="Draughtsman (Mechanical)">Draughtsman (Mechanical)</option>
                                                <option value="Fitter ">Fitter </option>
                                                <option value="Machinist">Machinist</option>

                                                <option value="Turner">Turner </option>
                                                <option value="Instrument Mechanic ">Instrument Mechanic </option>
                                                <option value="Electronics Mechanic">Electronics Mechanic</option>
                                                <option value="Mechanic Motor Vehicle ">Mechanic Motor Vehicle </option>
                                                <option value="Electrician">Electrician</option>

                                                <option value="Information &amp; Comm Tech System Maintenance">Information &amp; Comm Tech System Maintenance </option>
                                                <option value="Mechanic Consumer Electronic Appliances ">Mechanic Consumer Electronic Appliances </option>
                                                <option value="Mechanic Industrial Electronics">Mechanic Industrial Electronics</option>
                                                <option value="Painter (General) ">Painter (General) </option>
                                                <option value="Carpenter">Carpenter</option>

                                                <option value="Plumber">Plumber </option>
                                                <option value="Interior Design and Decoration ">Interior Design and Decoration </option>
                                                <option value="Welder">Welder</option>
                                                <option value="Tractor Mechanic ">Tractor Mechanic </option>
                                                <option value="Mechanic Diesel">Mechanic Diesel</option>

                                                <option value="Mason (Building Constructor)">Mason (Building Constructor) </option>
                                                <option value="Mechanic Auto Electrical &amp; Electronics ">Mechanic Auto Electrical &amp; Electronics </option>
                                                <option value="Mechanic Agricultural Machinery">Mechanic Agricultural Machinery</option>
                                                <option value="Urdu Calligraphy ">Urdu Calligraphy </option>
                                                <option value="Computer Operator &amp; Programming Assistant">Computer Operator &amp; Programming Assistant</option>

                                                <option value="Computer Hardware &amp; Network Maintenance">Computer Hardware &amp; Network Maintenance </option>
                                                <option value="Sewing Technology ">Sewing Technology </option>
                                                <option value="Desktop Publishing Operator">Desktop Publishing Operator</option>
                                                <option value="Digital Photographer ">Digital Photographer </option>
                                                <option value="Dress Making">Dress Making</option>

                                                <option value="Fashion Design &amp; Technology">Fashion Design &amp; Technology </option>
                                                <option value="Front Office Assistant ">Front Office Assistant </option>
                                                <option value="Cosmetology">Cosmetology</option>
                                                <option value="Health Sanitary Inspector ">Health Sanitary Inspector </option>
                                                <option value="Horticulture">Horticulture</option>

                                                <option value="Early Childhood Educator">Early Childhood Educator </option>
                                                <option value="Fruits and Vegetables Processing ">Fruits and Vegetables Processing </option>
                                                <option value="Secretarial Practice (English)">Secretarial Practice (English)</option>
                                                <option value="Stenographer Secretarial Assistant (English) ">Stenographer Secretarial Assistant (English) </option>
                                                <option value="Tourist Guide">Tourist Guide</option>

                                                <option value="House keeper">House keeper </option>
                                                <option value=" Multimedia Animation &amp; Special Effects"> Multimedia Animation &amp; Special Effects</option>
                                                <option value="Floriculture &amp; Landscaping">Floriculture &amp; Landscaping</option>
                                                <option value="IOT Technician (Smart Agriculture) ">IOT Technician (Smart Agriculture) </option>
                                                <option value="Dairying">Dairying</option>

                                                <option value="Soil Testing &amp; Crop Technician">Soil Testing &amp; Crop Technician </option>
                                                <option value="Nursery &amp; Orchard Management ">Nursery &amp; Orchard Management </option>
                                                <option value="Data Entry Operator">Data Entry Operator</option>
                                                <option value="Driver cum Mechanic (LMV) ">Driver cum Mechanic (LMV) </option>
                                                <option value="Corporate House Keeping">Electrician</option>
                                            </select>
                                        </div>


                                        <div className="iti">
                                            <h5>
                                                Diploma
                                            </h5>
                                            <select value={diploma} onChange={(e) => setDiploma(e.target.value)}>
                                                <option value="">Select Option</option>
                                                <option value="Diploma in Civil Engineering">Diploma in Civil Engineering</option>
                                                <option value="Diploma in Electronics and Communication engineering">Diploma in Electronics and Communication engineering</option>
                                                <option value="Diploma in Mechanical Engineering">Diploma in Mechanical Engineering</option>
                                                <option value="Diploma in Automobile Engineering">Diploma in Automobile Engineering</option>
                                                <option value="Diploma in Computer Engineering">Diploma in Computer Engineering</option>


                                                <option value="Diploma in  Electronics and communication Engineering">Diploma in  Electronics and communication Engineering</option>
                                                <option value="Diploma in Leather Technology">Diploma in Leather Technology</option>
                                                <option value="Diploma in  Instrumentation and Control">Diploma in  Instrumentation and Control</option>
                                                <option value="Diploma in Wood Technology">Diploma in Wood Technology</option>
                                                <option value="Diploma in Information technology">Diploma in Information technology</option>

                                                <option value="Diploma in Electrical Engineering">Diploma in Electrical Engineering</option>
                                                <option value="Diploma in Textile Designing">Diploma in Textile Designing</option>
                                                <option value="Diploma in Medical Lab Technology">Diploma in Medical Lab Technology</option>
                                                <option value="Diploma in Architechtute assistantship">Diploma in Architechtute assistantship</option>
                                                <option value="Diploma in office management and computer Applications">Diploma in office management and computer Applications</option>

                                                <option value="Diploma in Travel and Tourism">Diploma in Travel and Tourism</option>
                                                <option value="Diploma in Food Technology">Diploma in Food Technology</option>
                                                <option value=" Diploma in  Garment Technology"> Diploma in  Garment Technology</option>
                                            </select>
                                        </div>

                                        <div className="iti">
                                            <h5>
                                                Any other
                                            </h5>
                                            <input type="text" value={anyOther} onChange={(e) => setAnyOther(e.target.value)} name="stream" id="stream" />
                                            {/* <select value={anyOther} onChange={(e) => setAnyOther(e.target.value)}>
                                                <option value="">Select Option</option>
                                                <option value="Dummy 1">Dummy 1</option>
                                                <option value="Dummy 2">Dummy 2</option>
                                                <option value="Dummy 3">Dummy 3</option>

                                            </select> */}
                                        </div>

                                        {/* <h5>
                                        10th
                                    </h5>
                                    <h5>
                                        12th
                                    </h5>
                                    <h5 >
                                    Graduation
                                    </h5> */}

                                    </div>
                                    <div className="stream">
                                        <h5>Institute</h5>


                                        <input type="text" value={postGradInst} onChange={(e) => setPGInst(e.target.value)} name="stream" id="stream" />
                                        <input type="text" value={underGradInst} onChange={(e) => setUGInst(e.target.value)} name="stream" id="stream" />
                                        <input type="text" value={otherCertiInst} onChange={(e) => setOtherCertiInst(e.target.value)} name="stream" id="stream" />

                                    </div>
                                    {/* <div className="stream">
                                    <h5>Stream</h5>
                                    

                                    <input type="text" value={postGradDegree} onChange={(e) => setPGDegree(e.target.value)} name="stream" id="stream" />
                                    <input type="text" value={underGradDegree} onChange={(e) => setUGDegree(e.target.value)} name="stream" id="stream" />
                                    
                                    
                                </div> */}
                                    <div className="year">
                                        <h5>Year</h5>


                                        <input type="date" value={postGradDegreeYear} onChange={(e) => setPGDegreeYear(e.target.value)} name="stream" id="stream" />
                                        <input type="date" value={underGradDegreeYear} onChange={(e) => setUGDegreeYear(e.target.value)} name="stream" id="stream" />
                                        <input type="date" value={otherCertiYear} onChange={(e) => setOtherCertiYear(e.target.value)} name="stream" id="stream" />

                                    </div>
                                </div>
                            </div>


                        </div>

                        <hr />
                        <div className="langs-details">
                            <h5>

                                Languages &amp; Degree of Proficiency:
                            </h5>

                            <div className="langs_inner">
                                <div className="langs">
                                    <h5>
                                        Languages
                                    </h5>
                                    <h5>
                                        English
                                    </h5>
                                    <div className="other_lang">

                                        <h5>
                                            Any Other
                                        </h5>
                                        <input type="text" value={lang2} onChange={(e) => setLang2(e.target.value)} style={{ width: 100 }} name="lang2" id="stream" />
                                    </div>

                                </div>
                                <div className="read">
                                    <h5>Read</h5>

                                    <select value={lang1Read} onChange={(e) => setLang1Read(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Proficient">Proficient</option>
                                    </select>

                                    <select value={lang2Read} onChange={(e) => setLang2Read(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Proficient">Proficient</option>
                                    </select>

                                </div>
                                <div className="write">
                                    <h5>Write</h5>

                                    <select value={lang1Write} onChange={(e) => setLang1Write(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Proficient">Proficient</option>
                                    </select>

                                    <select value={lang2Write} onChange={(e) => setLang2Write(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Proficient">Proficient</option>
                                    </select>

                                </div>
                                <div className="speak">
                                    <h5>Speak</h5>

                                    <select value={lang1Speak} onChange={(e) => setLang1Speak(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Proficient">Proficient</option>
                                    </select>

                                    <select value={lang2Speak} onChange={(e) => setLang2Speak(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Proficient">Proficient</option>
                                    </select>

                                </div>
                            </div>
                        </div>

                        <hr />
                        <div className="employeer-details">
                            <h5>

                                Employment / Experience:
                            </h5>

                            <div className="employeer">
                                <div className="top">

                                    <div className="emp">
                                        <h5>
                                            Employer
                                        </h5>


                                        <input type="text" value={employeer1} onChange={(e) => setEmployeer1(e.target.value)} name="stream" id="stream" />
                                        <input type="text" value={employeer2} onChange={(e) => setEmployeer2(e.target.value)} name="stream" id="stream" />
                                        <input type="text" value={employeer3} onChange={(e) => setEmployeer3(e.target.value)} name="stream" id="stream" />


                                    </div>
                                    <div className="from">
                                        <h5>Sector</h5>

                                        <input type="text" value={employeerSector1} onChange={(e) => setEmployeerSector1(e.target.value)} name="stream" id="stream" />
                                        <input type="text" value={employeerSector2} onChange={(e) => setEmployeerSector2(e.target.value)} name="stream" id="stream" />
                                        <input type="text" value={employeerSector3} onChange={(e) => setEmployeerSector3(e.target.value)} name="stream" id="stream" />

                                    </div>
                                    <div className="from">
                                        <h5>From</h5>

                                        <input type="date" value={employeerFrom1} onChange={(e) => setEmployeerFrom1(e.target.value)} name="stream" id="stream" />
                                        <input type="date" value={employeerFrom2} onChange={(e) => setEmployeerFrom2(e.target.value)} name="stream" id="stream" />
                                        <input type="date" value={employeerFrom3} onChange={(e) => setEmployeerFrom3(e.target.value)} name="stream" id="stream" />

                                    </div>
                                    <div className="to">
                                        <h5>To</h5>

                                        <input type="date" value={employeerTo1} onChange={(e) => setEmployeerTo1(e.target.value)} name="stream" id="stream" />
                                        <input type="date" value={employeerTo2} onChange={(e) => setEmployeerTo2(e.target.value)} name="stream" id="stream" />
                                        <input type="date" value={employeerTo3} onChange={(e) => setEmployeerTo3(e.target.value)} name="stream" id="stream" />

                                    </div>
                                    <div className="posi">
                                        <h5>Position held</h5>

                                        <input type="text" value={employeerPosition1} onChange={(e) => setEmployeerPosition1(e.target.value)} name="stream" id="stream" />
                                        <input type="text" value={employeerPosition2} onChange={(e) => setEmployeerPosition2(e.target.value)} name="stream" id="stream" />
                                        <input type="text" value={employeerPosition3} onChange={(e) => setEmployeerPosition3(e.target.value)} name="stream" id="stream" />

                                    </div>
                                </div>
                                <div className="bottom">
                                    <h5>
                                        Summary of Areas of Expertise
                                    </h5>

                                    <textarea type="text" rows={5} value={summary} onChange={(e) => setSummary(e.target.value)} name="stream" id="stream" />
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="certify">
                            <p><span>Certification:</span> I, the undersigned, certify that to the best of my knowledge and belief, this CV
                                correctly describes myself, my qualifications, and my experience. I understand that any willful
                                misstatement described herein may lead to my disqualification or dismissal, if engaged.</p>
                        </div>
                    </div>



                    <button type="submit">Submit</button>

                </form>
            </div>

        </div>
    )
}

export default Form;