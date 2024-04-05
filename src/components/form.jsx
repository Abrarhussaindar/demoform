import React, { useState } from "react";
import "./form.css";
// import html2pdf from "html2pdf.js";
// import emailjs from "emailjs-com";
// import generatePDF from "./pdf/pdf";

function Form() {



    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [dob, setDob] = useState("");
    const [dis, setDis] = useState();
    const [division, setDiv] = useState();
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

    const [email, setEmail] = useState("");

    const logo = require("./Decent Arcadia.jpg");
    // const user = require("./user.png");
    return (
        <div className="container">

            <div className="header">
                <img className="logo" src={logo} alt="logo" />
                <h1>
                    <span className="de">DeCent</span><span className="ar">ArCadia </span>
                </h1>
            </div>
            <div className="wrapper">

                <form>
                    <div className="pdfContainer" id="pdf-content">
                        <div className="mainDetails">

                            <div className="topIndi">
                                <div className="indiDetails">
                                    <label htmlFor="name">First Name</label>
                                    <input type="text" value={firstName} required onChange={(e) => setFirstName(e.target.value)} name="name" id="name" />
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="name">Last Name</label>
                                    <input type="text" value={lastName} required onChange={(e) => setLastName(e.target.value)} name="name" id="name" />
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="desig">Address</label>
                                    <input type="text" value={address} required onChange={(e) => setAddress(e.target.value)} name="desig" id="desig" />
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="desig">Pin Code</label>
                                    <input type="text" value={pinCode} maxLength={6} required onChange={(e) => setPinCode(e.target.value)} name="desig" id="desig" />
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="dob">DOB</label>
                                    <input className="dob" type="date" value={dob} required onChange={(e) => setDob(e.target.value)} name="dob" id="dob" />
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
                                        <option value="Transgender">Transgender</option>

                                    </select>
                                </div>

                            </div>
                            <div className="indiDetails">
                                <label htmlFor="email">Email ID</label>
                                <input className="email" type="email" value={email} required onChange={(e) => setEmail(e.target.value)} name="email" id="email" />
                            </div>
                            <div className="bottomIndi">
                                <div className="indiDetails">
                                    <label htmlFor="age">Division</label>
                                    <select value={division} onChange={(e) => setDiv(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="Jammu">JAM</option>
                                        <option value="Kashmir">KMR</option>

                                    </select>
                                    {/* <input type="number" value={age} required onChange={handleAgeInputChange} name="age" id="age" /> */}
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="age">District</label>
                                    <select value={dis} onChange={(e) => setDis(e.target.value)}>
                                        <option value="">Select Option</option>
                                        {
                                            division === "Jammu"
                                                ?
                                                <>
                                                    <option value="Doda">Doda</option>
                                                    <option value="Jammu">Jammu</option>
                                                    <option value="Kathua">Kathua</option>
                                                    <option value="Kishtwar">Kishtwar</option>
                                                    <option value="Poonch">Poonch</option>
                                                    <option value="Rajouri">Rajouri</option>
                                                    <option value="Ramban">Ramban</option>
                                                    <option value="Reasi">Reasi</option>
                                                    <option value="Samba">Samba</option>
                                                    <option value="Udhampur">Udhampur</option>
                                                </>
                                                : ""
                                        }

                                        {
                                            division === "Kashmir"
                                                ?
                                                <>
                                                    <option value="Anantnag">Anantnag</option>
                                                    <option value="Bandipora">Bandipora</option>
                                                    <option value="Baramullah">Baramullah</option>
                                                    <option value="Budgam">Budgam</option>
                                                    <option value="Gandarbal">Gandarbal</option>
                                                    <option value="Kulgam">Kulgam</option>
                                                    <option value="Kupwara">Kupwara</option>
                                                    <option value="Pulwama">Pulwama</option>
                                                    <option value="Sopian">Sopian</option>
                                                    <option value="Srinagar">Srinagar</option>
                                                </>
                                                : ""
                                        }

                                    </select>
                                    {/* <input type="number" value={age} required onChange={handleAgeInputChange} name="age" id="age" /> */}
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="age">Block</label>
                                    <select value={block} onChange={(e) => setBlock(e.target.value)}>
                                        <option value="">Select Option</option>

                                            {/* Jammu District Blocks */}
                                        {
                                            dis === "Jammu"
                                                ?
                                                <>
                                                    <option value="Akhnoor">Akhnoor</option>
                                                    <option value="Bhalwal">Bhalwal</option>
                                                    <option value="Bishnah">Bishnah</option>
                                                    <option value="Dansal">Dansal</option>
                                                    <option value="Jammu East">Jammu East</option>
                                                    <option value="Jammu West">Jammu West</option>
                                                    <option value="Marh">Marh</option>
                                                    <option value="Nagrota">Nagrota</option>
                                                    <option value="Nowshera">Nowshera</option>
                                                    <option value="Pargwal">Pargwal</option>
                                                    <option value="R.S. Pura">R.S. Pura</option>
                                                    <option value="R. S. Pura Khour">R. S. Pura Khour</option>
                                                    <option value="Satwari">Satwari</option>
                                                    <option value="Sohanjana">Sohanjana</option>
                                                    <option value="Suchetgarh">Suchetgarh</option>
                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Doda"
                                                ?
                                                <>
                                                    <option value="Assar">Assar</option>
                                                    <option value="Bhaderwah">Bhaderwah</option>
                                                    <option value="Bhagwah">Bhagwah</option>
                                                    <option value="Bharath">Bharath</option>
                                                    <option value="Bhalla">Bhalla</option>
                                                    <option value="Chiralla">Chiralla</option>
                                                    <option value="Dessa">Dessa</option>
                                                    <option value="Doda">Doda</option>
                                                    <option value="Gandoh">Gandoh</option>
                                                    <option value="Ghat">Ghat</option>
                                                    <option value="Gundana">Gundana</option>
                                                    <option value="Kahara">Kahara</option>
                                                    <option value="Kastigarh">Kastigarh</option>
                                                    <option value="Marmat">Marmat</option>
                                                    <option value="Thathri">Thathri</option>
                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Kathua"
                                                ?
                                                <>
                                                    <option value="Basholi">Basholi</option>
                                                    <option value="Billawar">Billawar</option>
                                                    <option value="Bani">Bani</option>
                                                    <option value="Barnoti">Barnoti</option>
                                                    <option value="Basohli">Basohli</option>
                                                    <option value="Duggan">Duggan</option>
                                                    <option value="Hiranagar">Hiranagar</option>
                                                    <option value="Kathua">Kathua</option>
                                                    <option value="Lohai-Malhar">Lohai-Malhar</option>
                                                    <option value="Mahanpur">Mahanpur</option>
                                                    <option value="Malhar">Malhar</option>
                                                    <option value="Nagri-Parole">Nagri-Parole</option>
                                                    <option value="Rajbagh">Rajbagh</option>
                                                    
                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Ramban"
                                                ?
                                                <>
                                                    <option value="Banihal">Banihal</option>
                                                    <option value="Batote">Batote</option>
                                                    <option value="Gool">Gool</option>
                                                    <option value="Khari">Khari</option>
                                                    <option value="Ramban">Ramban</option>
                                                    <option value="Ramsoo">Ramsoo</option>
                                                    
                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Reasi"
                                                ?
                                                <>
                                                    <option value="Arnas">Arnas</option>
                                                    <option value="Dharmari">Dharmari</option>
                                                    <option value="Gulabgarh">Gulabgarh</option>
                                                    <option value="Katra">Katra</option>
                                                    <option value="Mahore">Mahore</option>
                                                    <option value="Pouni">Pouni</option>
                                                    <option value="Reasi">Reasi</option>
                                                    <option value="Thuroo">Thuroo</option>
                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Kishtwar"
                                                ?
                                                <>
                                                    <option value="Bounjwah">Bounjwah</option>
                                                    <option value="Chatroo">Chatroo</option>
                                                    <option value="Drabshalla">Drabshalla</option>
                                                    <option value="Inderwal">Inderwal</option>
                                                    <option value="Kishtwar">Kishtwar</option>
                                                    <option value="Marwah">Marwah</option>
                                                    <option value="Nagseni">Nagseni</option>
                                                    <option value="Paddar">Paddar</option>
                                                    <option value="Warwan">Warwan</option>
                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Poonch"
                                                ?
                                                <>
                                                    <option value="Buffliaz">Buffliaz</option>
                                                    <option value="Hajira">Hajira</option>
                                                    <option value="Loran">Loran</option>
                                                    <option value="Mandi">Mandi</option>
                                                    <option value="Mendhar">Mendhar</option>
                                                    <option value="Surankote">Surankote</option>
                                            
                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Rajouri"
                                                ?
                                                <>
                                                    <option value="Budhal">Budhal</option>
                                                    <option value="Darhal">Darhal</option>
                                                    <option value="Kalakote">Kalakote</option>
                                                    <option value="Nowshera">Nowshera</option>
                                                    <option value="Rajouri">Rajouri</option>
                                                    <option value="Sunderbani">Sunderbani</option>
                                                    <option value="Thanamandi">Thanamandi</option>
                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Udhampur"
                                                ?
                                                <>
                                                    <option value="Basantgarh">Basantgarh</option>
                                                    <option value="Chenani">Chenani</option>
                                                    <option value="Dudu">Dudu</option>
                                                    <option value="Ghordi">Ghordi</option>
                                                    <option value="Jib">Jib</option>
                                                    <option value="Majalta">Majalta</option>
                                                    <option value="Panchari">Panchari</option>
                                                    <option value="Ramnagar">Ramnagar</option>
                                                    <option value="Reasi">Reasi</option>
                                                    <option value="Moungri">Moungri</option>
                                                    <option value="Udhampur">Udhampur</option>
                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Samba"
                                                ?
                                                <>
                                                    <option value="Bari Brahmana">Bari Brahmana</option>
                                                    <option value="Ghagwal">Ghagwal</option>
                                                    <option value="Nud">Nud</option>
                                                    <option value="Purmandal">Purmandal</option>
                                                    <option value="Ramgarh">Ramgarh</option>
                                                    <option value="Samba">Samba</option>
                                                    <option value="Vijaypur">Vijaypur</option>
                                                    
                                                </>
                                                : ""
                                        }

                                            {/* Kashmir District Blocks */}
                                        {
                                            dis === "Srinagar"
                                                ?
                                                <>
                                                    <option value="Batamaloo">Batamaloo</option>
                                                    <option value="Brein">Brein</option>
                                                    <option value="Braine">Braine</option>
                                                    <option value="Chattabal">Chattabal</option>
                                                    <option value="Eidgah">Eidgah</option>
                                                    <option value="Fateh Kadal">Fateh Kadal</option>
                                                    <option value="Harwan">Harwan</option>
                                                    <option value="Hazratbal">Hazratbal</option>
                                                    <option value="Khanyar">Khanyar</option>
                                                    <option value="Lal Bazaar">Lal Bazaar</option>
                                                    <option value="Lal Ded">Lal Ded</option>
                                                    <option value="Nawakadal">Nawakadal</option>
                                                    <option value="Nishat">Nishat</option>
                                                    <option value="Nowgam">Nowgam</option>
                                                    <option value="Pantha Chowk">Pantha Chowk</option>
                                                    <option value="Parimpora">Parimpora</option>
                                                    <option value="Rainawari">Rainawari</option>
                                                    <option value="Shalimar">Shalimar</option>
                                                    <option value="Soura">Soura</option>
                                                    <option value="Zadibal">Zadibal</option>
                                                    
                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Anantnag"
                                                ?
                                                <>
                                                    <option value="Achabal">Achabal</option>
                                                    <option value="Aishmuqam">Aishmuqam</option>
                                                    <option value="Bijbehara">Bijbehara</option>
                                                    <option value="Breng">Breng</option>
                                                    <option value="Dachnipora">Dachnipora</option>
                                                    <option value="Dooru">Dooru</option>
                                                    <option value="Kokernag">Kokernag</option>
                                                    <option value="Larnoo">Larnoo</option>
                                                    <option value="Pahalgam">Pahalgam</option>
                                                    <option value="Qazigund">Qazigund</option>
                                                    <option value="Sallar">Sallar</option>
                                                    <option value="Seer Hamdan">Seer Hamdan</option>
                                                    <option value="Shangus">Shangus</option>
                                                    <option value="Vailoo">Vailoo</option>
                                                    
                                                    
                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Pulwama"
                                                ?
                                                <>
                                                <option value="Awantipora">Awantipora</option>
                                                <option value="Kakapora">Kakapora</option>
                                                <option value="Pampore">Pampore</option>
                                                <option value="Pulwama">Pulwama</option>
                                                <option value="Rajpora">Rajpora</option>
                                                <option value="Tral">Tral</option>
                                                
                                                
                                                
                                            </>
                                                : ""
                                        }
                                        {
                                            dis === "Kupwara"
                                                ?
                                                <>
                                                    <option value="Handwara">Handwara</option>
                                                    <option value="Karnah">Karnah</option>
                                                    <option value="Kralpora">Kralpora</option>
                                                    <option value="Langate">Langate</option>
                                                    <option value="Lolab">Lolab</option>
                                                    <option value="Ramhall">Ramhall</option>
                                                    <option value="Sogam">Sogam</option>
                                                    <option value="Tangdar">Tangdar</option>
                                                
                                                
                                                
                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Sopian"
                                                ?
                                                <>
                                                    <option value="Shopian">Shopian</option>
                                                    <option value="Keller">Keller</option>
                                                    <option value="Hermain">Hermain</option>
                                                    <option value="Zainapora">Zainapora</option>
                                                    <option value="Chitragam">Chitragam</option>
                                                    <option value="Ramnagri">Ramnagri</option>

                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Gandarbal"
                                                ?
                                                <>
                                                    <option value="Ganderbal">Ganderbal</option>
                                                    <option value="Kangan">Kangan</option>
                                                    <option value="Lar">Lar</option>
                                                    <option value="Wakoora">Wakoora</option>
                                                    <option value="Gund">Gund</option>
                                                    <option value="Tullamulla">Tullamulla</option>

                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Bandipora"
                                                ?
                                                <>
                                                    <option value="Bandipora">Bandipora</option>
                                                    <option value="Hajin">Hajin</option>
                                                    <option value="Sonawari">Sonawari</option>
                                                    <option value="Sumbal">Sumbal</option>
                                                    

                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Baramullah"
                                                ?
                                                <>
                                                    <option value="Baramulla">Baramulla</option>
                                                    <option value="Boniyar">Boniyar</option>
                                                    <option value="Kreeri">Kreeri</option>
                                                    <option value="Pattan">Pattan</option>
                                                    <option value="Rafiabad">Rafiabad</option>
                                                    <option value="Sangrama">Sangrama</option>
                                                    <option value="Sopore">Sopore</option>
                                                    <option value="Tangmarg">Tangmarg</option>
                                                    <option value="Uri">Uri</option>
                                                    <option value="Watergam">Watergam</option>
                                                    

                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Budgam"
                                                ?
                                                <>
                                                    <option value="Beerwah">Beerwah</option>
                                                    <option value="Budgam">Budgam</option>
                                                    <option value="Charar-i-Sharief">Charar-i-Sharief</option>
                                                    <option value="Chadoora">Chadoora</option>
                                                    <option value="Khag">Khag</option>
                                                    <option value="Magam">Magam</option>
                                                    <option value="Nagam">Nagam</option>
                                                    <option value="Soibug">Soibug</option>
                                                    
                                                    

                                                </>
                                                : ""
                                        }
                                        {
                                            dis === "Kulgam"
                                                ?
                                                <>
                                                    <option value="Kulgam">Kulgam</option>
                                                    <option value="Devsar">Devsar</option>
                                                    <option value="Frisal">Frisal</option>
                                                    <option value="Homeshalibugh">Homeshalibugh</option>
                                                    <option value="Qaimoh">Qaimoh</option>

                                                </>
                                                : ""
                                        }
                                        
                                    </select>
                                    
                                </div>




                            </div>
                            <div className="indiDetails">
                                <label htmlFor="phone">Phone Number (+91)</label>
                                {/* <p>+91 </p> */}
                                <div className="phoneNumber">
                                    <select className="phoneVal" value={phVal0} onChange={(e) => setPhVal0(e.target.value)}>
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
                                    <select className="phoneVal" value={phVal1} onChange={(e) => setPhVal1(e.target.value)}>
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
                                    <select className="phoneVal" value={phVal2} onChange={(e) => setPhVal2(e.target.value)}>
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
                                    <select className="phoneVal" value={phVal3} onChange={(e) => setPhVal3(e.target.value)}>
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
                                    <select className="phoneVal" value={phVal4} onChange={(e) => setPhVal4(e.target.value)}>
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
                                    <select className="phoneVal" value={phVal5} onChange={(e) => setPhVal5(e.target.value)}>
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
                                    <select className="phoneVal" value={phVal6} onChange={(e) => setPhVal6(e.target.value)}>
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
                                    <select className="phoneVal" value={phVal7} onChange={(e) => setPhVal7(e.target.value)}>
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
                                    <select className="phoneVal" value={phVal8} onChange={(e) => setPhVal8(e.target.value)}>
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
                                    <select className="phoneVal" value={phVal9} onChange={(e) => setPhVal9(e.target.value)}>
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
                                    <select className="adhVal" value={adVal0} onChange={(e) => setAdVal0(e.target.value)}>
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
                                    <select className="adhVal" value={adVal1} onChange={(e) => setAdVal1(e.target.value)}>
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
                                    <select className="adhVal" value={adVal2} onChange={(e) => setAdVal2(e.target.value)}>
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
                                    <select className="adhVal" value={adVal3} onChange={(e) => setAdVal3(e.target.value)}>
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
                                    <div>

                                    </div>
                                    <select className="adhVal" value={adVal4} onChange={(e) => setAdVal4(e.target.value)}>
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
                                    <select className="adhVal" value={adVal5} onChange={(e) => setAdVal5(e.target.value)}>
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
                                    <select className="adhVal" value={adVal6} onChange={(e) => setAdVal6(e.target.value)}>
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
                                    <select className="adhVal" value={adVal7} onChange={(e) => setAdVal7(e.target.value)}>
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
                                    <div>

                                    </div>
                                    <select className="adhVal" value={adVal8} onChange={(e) => setAdVal8(e.target.value)}>
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
                                    <select className="adhVal" value={adVal9} onChange={(e) => setAdVal9(e.target.value)}>
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
                                    <select className="adhVal" value={adVal10} onChange={(e) => setAdVal10(e.target.value)}>
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
                                    <select className="adhVal" value={adVal11} onChange={(e) => setAdVal11(e.target.value)}>
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
                            
                            
                            <div className="lowerDetails">
                                <div className="indiDetails">
                                    <label htmlFor="email">Class</label>
                                    <select value={gender} onChange={(e) => setGen(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="Urban">Urban</option>
                                        <option value="Rural">Rural</option>
                                        

                                    </select>
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="email">Social Class</label>
                                    <select className="sc" value={gender} onChange={(e) => setGen(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="Scheduled Castes (SC)">Scheduled Castes (SC)</option>
                                        <option value="Scheduled Tribes (ST)">Scheduled Tribes (ST)</option>
                                        <option value="Other Backward Classes (OBC)">Other Backward Classes (OBC)</option>
                                        <option value="Economically Weaker Sections (EWS)">Economically Weaker Sections (EWS)</option>
                                        <option value="Socially and Educationally Backward Classes (SEBC)">Socially and Educationally Backward Classes (SEBC)</option>
                                        <option value="Physically Challenged (Physically Handicapped/Persons with Disabilities)">Physically Challenged (Physically Handicapped/Persons with Disabilities)</option>
                                        <option value="Destitute/Underprivileged">Destitute/Underprivileged</option>
                                        <option value="Below Poverty Line (BPL)">Below Poverty Line (BPL)</option>
                                        <option value="Women, particularly in marginalized communities">Women, particularly in marginalized communities</option>
                                        <option value="Minority communities such as Muslims, Sikhs, Christians, Buddhists, etc.">Minority communities such as Muslims, Sikhs, Christians, Buddhists, etc.</option>
                                        <option value="Transgender persons">Transgender persons</option>
                                        <option value="Ex-Servicemen">Ex-Servicemen</option>
                                        <option value="Refugees (depending on the context, such as refugees from Pakistan-administered Kashmir)">Refugees (depending on the context, such as refugees from Pakistan-administered Kashmir)</option>
                                        <option value="Farmers, agricultural workers, and rural laborers">Farmers, agricultural workers, and rural laborers</option>
                                        <option value="Urban poor and homeless">Urban poor and homeless</option>
                                        <option value="Above Poverty Line">Above Poverty Line</option>

                                    </select>
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="email">Age Group</label>
                                    <select value={gender} onChange={(e) => setGen(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="Below 15">Below 15</option>
                                        <option value="15-18">15-18</option>
                                        <option value="19-24">19-24</option>
                                        <option value="25-30">25-30</option>
                                        <option value="30-35">30-35</option>
                                        <option value="35-40">35-40</option>
                                        <option value="40 Above">40 Above</option>

                                    </select>
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="email">Monthly Family Inco.</label>
                                    <select value={gender} onChange={(e) => setGen(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="Below 5000">Below 5000</option>
                                        <option value="5000-10000">5000-10000</option>
                                        <option value="10000-15000">10000-15000</option>
                                        <option value="15000-30000">15000-30000</option>
                                        <option value="30000-50000">30000-50000</option>
                                        <option value="50000-100000">50000-100000</option>
                                        <option value="above 100000">above 100000</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>



                    <button type="submit">Next</button>

                </form>
            </div>

        </div>
    )
}

export default Form;