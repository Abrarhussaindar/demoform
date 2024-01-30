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

    const [postGradDegree, setPGDegree] = useState("");
    const [postGradInst, setPGInst] = useState("");
    const [postGradDegreeYear, setPGDegreeYear] = useState("");
    const [underGradInst, setUGInst] = useState("");
    const [underGradDegree, setUGDegree] = useState("");
    const [underGradDegreeYear, setUGDegreeYear] = useState("");
    const [otherCerti, setOtherCerti] = useState("");
    const [otherCertiInst, setOtherCertiInst] = useState("");
    const [otherCertiYear, setOtherCertiYear] = useState("");

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


    const [employeerFrom1, setEmployeerFrom1] = useState("");
    const [employeerTo1, setEmployeerTo1] = useState("");
    const [employeerPosition1, setEmployeerPosition1] = useState("");

    const [employeerFrom2, setEmployeerFrom2] = useState("");
    const [employeerTo2, setEmployeerTo2] = useState("");
    const [employeerPosition2, setEmployeerPosition2] = useState("");

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
        generatePDF({ name, designation, dob, dis, email, phoneNumber, adhaar, postGradDegree, postGradDegreeYear, underGradDegree, underGradDegreeYear, otherCerti, otherCertiYear, lang2, lang1Read, lang1Speak, lang1Write, lang2Read, lang2Speak, lang2Write, employeer1, employeer2, employeerFrom1, employeerFrom2, employeerPosition1, employeerPosition2, employeerTo1, employeerTo2, summary, postGradInst, underGradInst, otherCertiInst }, photoData);
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
                            </div>
                            <div className="bottomIndi">
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
                            
                            <div className="indiDetails">
                                <label htmlFor="adh">Adhaar Number</label>
                                <input type="number" value={adhaar} required onChange={handleAdhaarInputChange} maxLength={16} name="adh" id="adh" />
                            </div>
                            </div>
                            
                            
                        </div>
                        <hr />
                        <div className="ed-details">
                            <h5>Education:</h5>
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

                                </div>
                                <div className="stream">
                                    <h5>Institute</h5>
                                    

                                    <input type="text" value={postGradInst} onChange={(e) => setPGInst(e.target.value)} name="stream" id="stream" />
                                    <input type="text" value={underGradInst} onChange={(e) => setUGInst(e.target.value)} name="stream" id="stream" />
                                    <input type="text" value={otherCertiInst} onChange={(e) => setOtherCertiInst(e.target.value)} name="stream" id="stream" />
                                    
                                </div>
                                <div className="stream">
                                    <h5>Stream</h5>
                                    

                                    <input type="text" value={postGradDegree} onChange={(e) => setPGDegree(e.target.value)} name="stream" id="stream" />
                                    <input type="text" value={underGradDegree} onChange={(e) => setUGDegree(e.target.value)} name="stream" id="stream" />
                                    <input type="text" value={otherCerti} onChange={(e) => setOtherCerti(e.target.value)} name="stream" id="stream" />
                                    
                                </div>
                                <div className="year">
                                    <h5>Year</h5>
                                    

                                    <input type="date" value={postGradDegreeYear} onChange={(e) => setPGDegreeYear(e.target.value)} name="stream" id="stream" />
                                    <input type="date" value={underGradDegreeYear} onChange={(e) => setUGDegreeYear(e.target.value)} name="stream" id="stream" />
                                    <input type="date" value={otherCertiYear} onChange={(e) => setOtherCertiYear(e.target.value)} name="stream" id="stream" />
                                    
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

                                Employment Record:
                            </h5>

                            <div className="employeer">
                                <div className="top">

                                    <div className="emp">
                                        <h5>
                                            Employer
                                        </h5>


                                        <input type="text" value={employeer1} onChange={(e) => setEmployeer1(e.target.value)} name="stream" id="stream" />
                                        <input type="text" value={employeer2} onChange={(e) => setEmployeer2(e.target.value)} name="stream" id="stream" />


                                    </div>
                                    <div className="from">
                                        <h5>From</h5>

                                        <input type="date" value={employeerFrom1} onChange={(e) => setEmployeerFrom1(e.target.value)} name="stream" id="stream" />
                                        <input type="date" value={employeerFrom2} onChange={(e) => setEmployeerFrom2(e.target.value)} name="stream" id="stream" />

                                    </div>
                                    <div className="to">
                                        <h5>To</h5>

                                        <input type="date" value={employeerTo1} onChange={(e) => setEmployeerTo1(e.target.value)} name="stream" id="stream" />
                                        <input type="date" value={employeerTo2} onChange={(e) => setEmployeerTo2(e.target.value)} name="stream" id="stream" />

                                    </div>
                                    <div className="posi">
                                        <h5>Position held</h5>

                                        <input type="text" value={employeerPosition1} onChange={(e) => setEmployeerPosition1(e.target.value)} name="stream" id="stream" />
                                        <input type="text" value={employeerPosition2} onChange={(e) => setEmployeerPosition2(e.target.value)} name="stream" id="stream" />

                                    </div>
                                </div>
                                <div className="bottom">
                                    <h5>
                                        Summary of Areas of Expertise
                                    </h5>

                                    <input type="text" value={summary} onChange={(e) => setSummary(e.target.value)} name="stream" id="stream" />
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
                    <hr />

                    <div className="uploadContainer">
                        <div className="uploadPhoto">
                            <label htmlFor="photo">Upload Photo</label>
                            <input type="file" name="photo" className="photo" required onChange={handleFile} id="phone" />
                        </div>
                        <div className="uploadResume">
                            <label htmlFor="resume">Upload Resume/CV</label>
                            <input type="file" name="resume" className="resume" onChange={handleFile} id="phone" />
                        </div>

                    </div>


                    <button type="submit">Submit</button>

                </form>
            </div>

        </div>
    )
}

export default Form;