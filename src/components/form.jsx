import React, { useState } from "react";
import "./form.css";
// import html2pdf from "html2pdf.js";
// import emailjs from "emailjs-com";
// import generatePDF from "./pdf/pdf";

function Form() {



    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [dob, setDob] = useState("");
    const [dis, setDis] = useState();
    const [sta, setSta] = useState();
    const [block, setBlock] = useState();
    const [gender, setGen] = useState();
    
    
    const [phVal0, setPhVal0] = useState();
    const [phVal1, setPhVal1] = useState();
    const [phVal2, setPhVal2] = useState();
    const [phVal3, setPhVal3] = useState();
    const [phVal4, setPhVal4] = useState();
    const [phVal5, setPhVal5] = useState();
    const [phVal6, setPhVal6] = useState();
    const [phVal7, setPhVal7] = useState();
    const [phVal8, setPhVal8] = useState();
    const [phVal9, setPhVal9] = useState();
    
    
    const [adVal0, setAdVal0] = useState();
    const [adVal1, setAdVal1] = useState();
    const [adVal2, setAdVal2] = useState();
    const [adVal3, setAdVal3] = useState();
    const [adVal4, setAdVal4] = useState();
    const [adVal5, setAdVal5] = useState();
    const [adVal6, setAdVal6] = useState();
    const [adVal7, setAdVal7] = useState();
    const [adVal8, setAdVal8] = useState();
    const [adVal9, setAdVal9] = useState();

    const [adVal10, setAdVal10] = useState();
    const [adVal11, setAdVal11] = useState();
    const [adVal12, setAdVal12] = useState();
    const [adVal13, setAdVal13] = useState();
    const [adVal14, setAdVal14] = useState();
    const [adVal15, setAdVal15] = useState();


    // const [YOE, setYOE] = useState("");
    const [email, setEmail] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("+91");
    // const [adhaar, setAdhaar] = useState("");

    // // const [postGradDegree, setPGDegree] = useState("");
    // const [postGradInst, setPGInst] = useState("");
    // const [postGradDegreeYear, setPGDegreeYear] = useState("");
    // const [underGradInst, setUGInst] = useState("");
    // // const [underGradDegree, setUGDegree] = useState("");
    // const [underGradDegreeYear, setUGDegreeYear] = useState("");
    // // const [otherCerti, setOtherCerti] = useState("");
    // const [otherCertiInst, setOtherCertiInst] = useState("");
    // const [otherCertiYear, setOtherCertiYear] = useState("");

    // const [stream12, setStream12] = useState();
    // const [UGStream, setUGStream] = useState();
    // const [PGStream, setPGStream] = useState();

    // const [ITI, setITI] = useState();
    // const [diploma, setDiploma] = useState();
    // const [anyOther, setAnyOther] = useState();




    // // dropdown for langs
    // const [lang2, setLang2] = useState("");

    // const [lang1Read, setLang1Read] = useState();
    // const [lang1Write, setLang1Write] = useState();
    // const [lang1Speak, setLang1Speak] = useState();

    // const [lang2Read, setLang2Read] = useState();
    // const [lang2Write, setLang2Write] = useState();
    // const [lang2Speak, setLang2Speak] = useState();

    // const [employeer1, setEmployeer1] = useState("");
    // const [employeer2, setEmployeer2] = useState("");
    // const [employeer3, setEmployeer3] = useState("");


    // const [employeerFrom1, setEmployeerFrom1] = useState("");
    // const [employeerSector1, setEmployeerSector1] = useState("");
    // const [employeerTo1, setEmployeerTo1] = useState("");
    // const [employeerPosition1, setEmployeerPosition1] = useState("");

    // const [employeerFrom2, setEmployeerFrom2] = useState("");
    // const [employeerSector2, setEmployeerSector2] = useState("");
    // const [employeerTo2, setEmployeerTo2] = useState("");
    // const [employeerPosition2, setEmployeerPosition2] = useState("");

    // const [employeerFrom3, setEmployeerFrom3] = useState("");
    // const [employeerSector3, setEmployeerSector3] = useState("");
    // const [employeerTo3, setEmployeerTo3] = useState("");
    // const [employeerPosition3, setEmployeerPosition3] = useState("");

    // const [summary, setSummary] = useState("");

    // const [photo, setPhoto] = useState();
    // // const [resume, setResume] = useState();
    // const [photoData, setPhotoData] = useState(null);
    // const handleFile = (e) => {
    //     const file = e.target.files[0];
    //     if (e.target.name === "photo") {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setPhotoData(reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //     } else if (e.target.name === "resume") {
    //         // Handle resume file
    //     } else {
    //         window.alert("Please select a file");
    //     }
    // };
    // const handleAdhaarInputChange = (e) => {
    //     const inputValue = e.target.value;

    //     // Ensure the input value doesn't exceed 16 characters
    //     if (inputValue.length <= 16) {
    //         setAdhaar(inputValue);
    //     }
    // };



    // const handlephoneInputChange = (e) => {
    //     const inputValue = e.target.value;

    //     // Ensure the input is a number and starts with "+91"
    //     if (/^\+91\d{0,10}$/.test(inputValue)) {
    //         setPhoneNumber(inputValue);
    //     }
    // };

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


    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Validation logic...

    //     // Call the PDF generation function
    //     generatePDF({ name, designation, dob, dis, email, phoneNumber, adhaar, postGradDegreeYear, underGradDegreeYear, otherCertiYear, lang2, lang1Read, lang1Speak, lang1Write, lang2Read, lang2Speak, lang2Write, employeer1, employeer2, employeerFrom1, employeerFrom2, employeerPosition1, employeerPosition2, employeerTo1, employeerTo2, summary, postGradInst, underGradInst, otherCertiInst }, photoData);
    // };
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




    // const logo = require("./logo.png");
    // const user = require("./user.png");
    return (
        <div className="container">

            <div className="header">
                {/* <img className="logo" src={logo} alt="logo" /> */}
                <h1>
                    Logo
                </h1>
            </div>
            <div className="wrapper">

                <form>
                    <div className="pdfContainer" id="pdf-content">

                        <div className="uploadContainer">
                            {/* <div className="uploadPhoto">
                                
                                 <img className="userImg" src={photoData ? photoData : user} alt="img"/>
                                 <div className="discrip">
                                    <p className="topP">To add a photo to your resume, click the button and select a file to upload.</p>
                                    <p className="bottomP">Supported file formats are .jpg, .gif and .png. The file size limit is set at 10 MB.</p>
                                    <label className="inputFile">

                                    <input type="file" name="photo" className="photo" required onChange={handleFile} id="phone" />
                                    Upload Photo
                                    </label>
                                 </div>
                            </div> */}


                        </div>
                        {/* <hr /> */}

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
                                    <label htmlFor="age">State</label>
                                    <select value={sta} onChange={(e) => setSta(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Telangana">Telangana</option>
                                    </select>
                                    {/* <input type="number" value={age} required onChange={handleAgeInputChange} name="age" id="age" /> */}
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
                                <div className="indiDetails">
                                    <label htmlFor="age">Block</label>
                                    <select value={block} onChange={(e) => setBlock(e.target.value)}>
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
                                    <label htmlFor="email">Gender</label>
                                    <select value={gender} onChange={(e) => setGen(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                        
                                    </select>
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} name="email" id="email" />
                                </div>

                                
                            </div>
                            <div className="indiDetails">
                                    <label htmlFor="phone">Phone Number (+91)</label>
                                    {/* <p>+91 </p> */}
                                    <div className="phoneNumber">
                                    <select  className="phoneVal" value={phVal0} onChange={(e) => setPhVal0(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="phoneVal" value={phVal1} onChange={(e) => setPhVal1(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="phoneVal" value={phVal2} onChange={(e) => setPhVal2(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="phoneVal" value={phVal3} onChange={(e) => setPhVal3(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="phoneVal" value={phVal4} onChange={(e) => setPhVal4(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="phoneVal" value={phVal5} onChange={(e) => setPhVal5(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="phoneVal" value={phVal6} onChange={(e) => setPhVal6(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="phoneVal" value={phVal7} onChange={(e) => setPhVal7(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="phoneVal" value={phVal8} onChange={(e) => setPhVal8(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="phoneVal" value={phVal9} onChange={(e) => setPhVal9(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    </div>
                                    {/* <input type="tel" value={phoneNumber} maxLength={13} required onChange={handlephoneInputChange} name="phone" id="phone" /> */}
                                    
                                </div>
                            <div className="indiDetails">
                                    <label htmlFor="adh">Adhaar Number</label>
                                    {/* <input type="number" value={adhaar} required onChange={handleAdhaarInputChange} maxLength={16} name="adh" id="adh" /> */}
                                    <div className="adhNumber">
                                    <select  className="adhVal" value={adVal0} onChange={(e) => setAdVal0(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="adhVal" value={adVal1} onChange={(e) => setAdVal1(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="adhVal" value={adVal2} onChange={(e) => setAdVal2(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="adhVal" value={adVal3} onChange={(e) => setAdVal3(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="adhVal" value={adVal4} onChange={(e) => setAdVal4(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="adhVal" value={adVal5} onChange={(e) => setAdVal5(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="adhVal" value={adVal6} onChange={(e) => setAdVal6(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="adhVal" value={adVal7} onChange={(e) => setAdVal7(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="adhVal" value={adVal8} onChange={(e) => setAdVal8(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="adhVal" value={adVal9} onChange={(e) => setAdVal9(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="adhVal" value={adVal10} onChange={(e) => setAdVal10(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="adhVal" value={adVal11} onChange={(e) => setAdVal11(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="adhVal" value={adVal12} onChange={(e) => setAdVal12(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="adhVal" value={adVal13} onChange={(e) => setAdVal13(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="adhVal" value={adVal14} onChange={(e) => setAdVal14(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    <select  className="adhVal" value={adVal15} onChange={(e) => setAdVal15(e.target.value)}>
                                        <option value=""></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                    </div>
                                
                                </div>

                        </div>
                        <hr />

                    </div>



                    <button type="submit">Submit</button>

                </form>
            </div>

        </div>
    )
}

export default Form;