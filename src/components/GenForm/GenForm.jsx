import React, { useState } from "react";
import "../form.css";


function GenForm() {



    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [dob, setDob] = useState("");
    const [dis, setDis] = useState();
    const [division, setDiv] = useState();
    const [block, setBlock] = useState();
    const [gender, setGen] = useState();

    const [clas, setClas] = useState();
    const [socialClas, setSocailClas] = useState();
    const [ageGroup, setAgeGroup] = useState();
    const [monthlyIncome, setMonthlyIncome] = useState();
    const [pinArea, setPinArea] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(new Array(10).fill(''))
    const [adhNumber, setAdhNumber] = useState(new Array(12).fill(''))

    const changePhoneFoucs = (target, index) => {
        if (isNaN(target.value)) {
            return false
        }
        setPhoneNumber([...phoneNumber.map((v, ind) => (ind === index ? target.value : v))])
        if (target.nextSibling) {
            target.nextSibling.focus();
        }
    }
    const changeAdhFoucs = (target, index) => {
        if (isNaN(target.value)) {
            return false
        }
        setAdhNumber([...adhNumber.map((v, ind) => (ind === index ? target.value : v))])
        if (target.nextSibling) {
            target.nextSibling.focus();
        }
    }

    // const [phVal0, setPhVal0] = useState();
    // const [phVal1, setPhVal1] = useState();
    // const [phVal2, setPhVal2] = useState();
    // const [phVal3, setPhVal3] = useState();
    // const [phVal4, setPhVal4] = useState();
    // const [phVal5, setPhVal5] = useState();
    // const [phVal6, setPhVal6] = useState();
    // const [phVal7, setPhVal7] = useState();
    // const [phVal8, setPhVal8] = useState();
    // const [phVal9, setPhVal9] = useState();
    const [age, setAge] = useState("")

    const calculateAge = (event) => {
        setDob(event.target.value);
        const today = new Date();
        const birthDate = new Date(dob);
        let agee = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            agee--;
        }
        console.log(agee);
        const yearsDifference = today.getFullYear() - birthDate.getFullYear();
        const monthsDifference = today.getMonth() - birthDate.getMonth();
        const daysDifference = today.getDate() - birthDate.getDate();

        let accurateAge = yearsDifference;

        if (monthsDifference < 0 || (monthsDifference === 0 && daysDifference < 0)) {
            accurateAge--;
        }

        setAge(accurateAge);
    };
    console.log(age);
    // const [adVal0, setAdVal0] = useState();
    // const [adVal1, setAdVal1] = useState();
    // const [adVal2, setAdVal2] = useState();
    // const [adVal3, setAdVal3] = useState();
    // const [adVal4, setAdVal4] = useState();
    // const [adVal5, setAdVal5] = useState();
    // const [adVal6, setAdVal6] = useState();
    // const [adVal7, setAdVal7] = useState();
    // const [adVal8, setAdVal8] = useState();
    // const [adVal9, setAdVal9] = useState();
    console.log(pinCode);
    // const [adVal10, setAdVal10] = useState();
    // const [adVal11, setAdVal11] = useState();

    const [email, setEmail] = useState("");

    const [pinCodes, setPinCodes] = useState({
        "184104": ["Mini Sect. (Kathua)"],
        "181205": ["Muthi"],
        "185151": ["Noashera"],
        "184121": ["Samba"],
        "180019": ["Sidhara Housing Colony"],
        "185202": ["Solki", "Kalakote"],
        "185153": ["Sunderbani"],
        "184120": ["Vijaypur"],
        "182121": ["Garhi", "Pampore"],
        "184101": ["Kathua"],
        "182301": ["Katra"],
        "185155": ["Bhawani"],
        "185233": ["Budhal"],
        "185135": ["Darhal Malkan"],
        "185111": ["D. Mendhar"],
        "185132": ["Jawaharnagar"],
        // "185202": ["Kalakote"],
        "185156": ["Kangri"],
        "185152": ["Lamberi"],
        "185102": ["Mandi"],
        // "185151": ["Humhama"],
        "185101": ["Poonch"],
        "185131": ["Rajouri"],
        "185121": ["Samote"],

        // "185153": ["Humhama"],
        "185212": ["Thanamandi"],
        "182311": ["Reasi"],
        "182125": ["Roan"],
        "182101": ["Udhampur"],
        "192122": ["Awantipora"],
        "190018": ["Bemina-Chowk"],
        "190004": ["Batwara"],
        "190020": ["Buchpora"],
        "191111": ["Budgam"],
        "191201": ["Ganderbal"],
        "190021": ["Humhama"],
        "190014": ["Hyderpora"],

        "190008": ["Jawahar Nagar"],
        "192304": ["Kakpora"],
        "190010": ["Karan Nagar"],
        "190006": ["Kashmir University"],
        "192102": ["Khanabal"],
        "193103": ["Khawaja-Bagh"],
        "190015": ["Natipora"],
        "190011": ["Naushara"],
        "190009": ["New Secretariat"],
        "191101": ["Pantha Chowk"],
        "190017": ["Parimpora"],
        "190003": ["Rainawari"],
        "190007": ["SKAirport"],
        "190002": ["SRGanj"],
        "190005": ["Sanat Nagar"],
        "190012": ["Zainakote"],
        "192101": ["Anantnag"],
        "193101": ["Baramulla"],
        "192124": ["Bijbehara"],
        // "182121": ["Pampore"],
        "193121": ["Pattan"],
        "192301": ["Pulwama"],
        "193201": ["Sopore"],
        "180001": ["A.G.office", "Bakshinagar", "Darbargarh", "Dhounthly Bazar", "Jammu", "Kachi Chowni", "Link Road", "New Sectt.jammu", "O.h.Road", "Peermitha", "Raghunath Bazar", "Shaheedi Chowk Jammu", "Shaktinagar Jammu"],
        "180002": ["Talab Tillo", "Akalpur", "Bhadrod", "Gol Gujral", "Sangrampur", "Suryavihar"],
        // "180002": ["Humhama"],
        "180003": ["Industrial Estate", "Jammu Cantt", "Makwal Branch Office", "Mandal Branch Office", "Natc Sub Office", "Sohanjana Branch Office"],
        "180004": ["Gandhinagar Head Office", "Guru Nanak Nagar Sub Office", "Transport Yard Sub Office"],
        "180005": ["Kotli Colony", "Puran Nagar", "Rehari Mohalla", "Subash Nagar Jammu"],
        // "180005": ["Rehari Mohalla"],
        // "180006": ["Humhama"],
        "180006": ["New University Campus", "Bain Bajalta Branch Office", "Qilla Bahu Sub Office"],
        "180007": ["Janipur"],
        "180009": ["Bhour Camp Branch Office"],
        "180010": ["Gangyal Sub Office", "Kalu Chak Branch Office"],
        // "180011": ["Humhama"],
        "180011": ["Sainik Colony", "Chowadi Branch Office", "Sunjwan Branch Office"],
        "180012": ["Railway Station", "New Fruit Market", "Trikuta Nagar Sub Office"],
        // "180012": ["Humhama"],
        "180013": ["Roop Nagar"],
        // "180013": ["Humhama"],
        "180015": ["Channi Himat"],
        "180016": ["Vinaik Bazar", "General Bus Stand", "Krishna Nagar", "University Campus"],
        // "180016": ["Humhama"],
        "180017": ["Aitham Branch Office", "Kanachirgal Branch Office", "Surinsar Branch Office"],
        "181008": ["Gho Manhasan Branch Office"],
        "181101": ["Miran Sahib Sub Office", "Gadigarh Branch Office", "Kirpind Branch Office", "Langotian Branch Office", "Rattisn Branch Office"],
        // "181101": ["Humhama"],
        "181102": ["R S Pura", "R.S.Pura Adda Sub Office", "R.S.Pura Sub Office", "Agra Chak Branch Office",
            "Chakrohi", "Chohala", "Faloura Branch Office", "Jassore Branch Office", "Kotlishah Daula Branch Office", "Rangpur Malania Branch Office", "Satrayan Branch Office", "Shamka Branch Office", "Suchetgarh Branch Office"
        ],
        // "181102": ["Humhama"],
        "181103": ["Badyal Brahmna"],
        "181104": ["Simble Camp"],
        "181111": ["Dablehar Sub Office", "Goondla Branch Office", "Magowali Branch Office", "Rathana Branch Office", "Salehar Branch Office"],
        // "181121": ["Humhama"],
        "181121": ["Paloura", "Topsherkhania"],
        "181122": ["Baran Branch Office", "Bhalwal", "Gharota", "Jandial", "Kot Branch Office", "Rabta Branch Office", "Ranjan Branch Office", "Sarote Branch Office", "Seri Panditan"],
        "181123": ["Bantalab", "Raipur"],
        "181124": ["Bsf Camp Paloura"],
        "181131": ["Arnia Sub Office"],
        "181132": ["Banachak Branch Office", "Bishnah Adda Sub Office", "Bishnah Sub Office", "Chak Umrah", "Darap Branch Office", "Deoli Branch Office", "Kanhal Branch Office", "Kheri Branch Office", "Kotli Mian Fateh Branch Office", "Palli Branch Office", "Pandorian Manhasan Branch Office", "Rehal Branch Office"],
        "181133": ["Adlehar Branch Office", "Allah Branch Office", "Kalyana Branch Office", "Kool Kalan Branch Office", "Parlah Branch Office", "Pindicharka Kalan Branch Office", "Rangpur Trewa Branch Office", "Sai Kalan Branch Office"],
        "181151": ["Raika"],
        // "181201": ["Humhama"],
        "181201": ["Akhnoor", "Akhnoor Sub Office", "Ambaran", "Bala Branch Office", "Bamal Colony", "Brui Branch Office", "Gandharwan Branch Office", "Gharatal", "Gurha Brahmna", "Kaink Jagir", "Kathar", "Lehar Branch Office", "Mandarian", "Mawa Brahmna", "Pacca Danga Akhnoor", "Sungal"],
        "181202": ["Bakore Branch Office", "Bhalwal Brahmna Branch Office", "Chak Kirpalpur Branch Office", "Datial Branch Office", "Devipur Branch Office", "Dhoke Khalsa Branch Office", "Jourian", "Maira Branch Office"],
        "181203": ["Chak Malal", "Danwal", "Gigrial Branch Office", "Kaleetg Branch Office", "Kharah", "Khour", "Naryana", "Nathal", "Nikkian", "Sainth"],
        // "181204": ["Humhama"],
        "181204": ["Pallan-Walla", "Bardoh", "Kot Maira"],
        // "181205": ["Humhama"],
        "181206": ["Batehra", "Chak Shama", "Domana", "Gajanso Branch Office", "Garkhal Branch Office", "Kanachak", "Kangrial Branch Office", "Karloop", "Mishriwala", "Nagbani Branch Office", "Paryal"],
        "181207": ["Gurah Manhasan", "Pargwal"],
        "181208": ["Halqa Branch Office"],
        "181209": ["Hamirpur Sidhar Branch Office"],
        "181221": ["Jhajjar kotli", "Jagti Branch Office", "Kandoli Nagrota", "Nadore Branch Office", "Panjgrain", "Shiba Branch Office"],
        "181224": ["Bhatyari Branch Office", "Dansal", "Jindrah Branch Office", "Kanyala Branch Office", "Kishanpur Branch Office", "Kothar", "Tahra Branch Office"]
    })
    const [filteredAreas, setFilteredAreas] = useState([]);

    const handleDigitInput = (event) => {
        const digit = event.target.value;
        setPinCode(digit)
        filterAreas(digit);
        setPinCodes(prevPinCodes => ({
            ...prevPinCodes, "0": "a"
        }))
    };

    const filterAreas = (digit) => {
        const filteredAreas = Object.keys(pinCodes)
            .filter(pinCode => pinCode.includes(digit))
            .reduce((acc, pinCode) => acc.concat(pinCodes[pinCode]), []);

        setFilteredAreas(filteredAreas);
    };

    const logo = require("../Decent Arcadia type 4.jpg");
    // const arrow = require("../arrow-down-sign-to-navigate.png");
    // const user = require("./user.png");
    return (
        <>
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
                    <label htmlFor="email">Gender</label>
                    <div className="customSelect">
                        <select value={gender} onChange={(e) => setGen(e.target.value)}>
                            <option value="">Select Option</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Transgender">Transgender</option>

                        </select>
                        <span className="customArrow"></span>
                    </div>
                </div>

                <div className="indiDetails">
                    <label htmlFor="dob">DOB</label>
                    <input className="dob" type="date" value={dob} required onChange={calculateAge} name="dob" id="dob" />
                </div>

                <div className="indiDetails">
                    <label htmlFor="dob">Age</label>
                    {age ? age : ""} Years Old
                    {/* <input className="dob" type="date" value={dob} required onChange={(e) => setDob(e.target.value)} name="dob" id="dob" /> */}
                </div>




            </div>
            <div className="indiDetails">
                <label htmlFor="email">Email ID</label>
                <input className="email" type="email" value={email} required onChange={(e) => setEmail(e.target.value)} name="email" id="email" />
            </div>
            <div className="bottomIndi">
                <div className="indiDetails">
                    <label htmlFor="age">Division</label>
                    <div className="customSelect">

                        <select value={division} onChange={(e) => setDiv(e.target.value)}>
                            <option value="">Select Option</option>
                            <hr />
                            <option value="Jammu">JAM</option>
                            <hr />
                            <option value="Kashmir">KMR</option>

                        </select>
                        <span className="customArrow">
                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                        </span>
                    </div>
                    {/* <input type="number" value={age} required onChange={handleAgeInputChange} name="age" id="age" /> */}
                </div>
                <div className="indiDetails">
                    <label htmlFor="age">District</label>
                    <div className="customSelect">
                        <select value={dis} onChange={(e) => setDis(e.target.value)}>
                            <option value="">Select Option</option>
                            <hr />
                            {
                                division === "Jammu"
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
                        <span className="customArrow"></span>
                    </div>
                    {/* <input type="number" value={age} required onChange={handleAgeInputChange} name="age" id="age" /> */}
                </div>
                <div className="indiDetails">
                    <label htmlFor="age">Block</label>
                    <div className="customSelect">
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
                        <span className="customArrow"></span>
                    </div>
                </div>




            </div>
            <div className="pin">
                <div className="indiDetails">
                    <label htmlFor="desig">Pin Code</label>
                    {/* onChange={(e) => setPinCodes(e.target.value)} */}
                    {/* <input type="text" value={""} maxLength={6} required name="desig" id="desig" /> */}
                    <div className="innerDiv">
                        <input type="text" onChange={handleDigitInput} maxLength={6} placeholder="Enter a digit" />
                        <div className="innerInnerDiv">
                            <h4>Filtered Areas:</h4>
                            <div className="customSelect">
                                <select className="pincode" value={pinArea} onChange={(e) => setPinArea(e.target.value)}>
                                    {filteredAreas.map(area => (
                                        <option key={area}>{area}</option>
                                    ))}
                                    {
                                        filteredAreas.length === 1 ?

                                            <option value="">Select Option</option>
                                            : ""
                                    }

                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="indiDetails">
                    <label htmlFor="desig">Area</label>
                    {pinArea ? pinArea : ""}
                </div>
            </div>

            <div className="indiDetails">
                <label htmlFor="phone">Phone Number (+91)</label>
                <div className="phoneNumber">
                    {
                        phoneNumber.map((each, index) => {
                            return (
                                <input value={each} className="phoneInput" key={index} maxLength={1} type="text" onChange={(e) => changePhoneFoucs(e.target, index)} onFocus={e => e.target.select()} />
                            )
                        })
                    }
                </div>
                {/* <p>+91 </p> */}
                {/* {
                                    phoneNumber.map((each, index) => {
                                        return (
                                            <select value={each} key={index}  type="text" onChange={(e) => changeFoucs(e.target, index)} onFocus={e => e.target.select()} >
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
                                        )
                                    })
                                } */}
                {/* <div className="phoneNumber">
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
                                </div> */}
                {/* <input type="tel" value={phoneNumber} maxLength={13} required onChange={handlephoneInputChange} name="phone" id="phone" /> */}

            </div>
            <div className="indiDetails">
                <label htmlFor="adh">Adhaar Number</label>
                {/* <input type="number" value={adhaar} required onChange={handleAdhaarInputChange} maxLength={16} name="adh" id="adh" /> */}
                {/* <div className="adhNumber">
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




                                </div> */}
                <div className="adhNumber">
                    {
                        adhNumber.map((each, index) => {
                            return (
                                <input value={each} className="adhInput" key={index} maxLength={1} type="text" onChange={(e) => changeAdhFoucs(e.target, index)} onFocus={e => e.target.select()} />
                            )
                        })
                    }
                </div>

            </div>


            <div className="lowerDetails">
                <div className="indiDetails">
                    <label htmlFor="email">Category</label>
                    <div className="customSelect">
                        <select value={clas} onChange={(e) => setClas(e.target.value)}>
                            <option value="">Select Option</option>
                            <option value="Urban">Urban</option>
                            <option value="Rural">Rural</option>


                        </select>
                        <span className="customArrow"></span>
                    </div>
                </div>
                <div className="indiDetails">
                    <label htmlFor="email">Social Class</label>
                    <div className="customSelect">
                        <select className="sc" value={socialClas} onChange={(e) => setSocailClas(e.target.value)}>
                            <option value="">Select Option</option>
                            <option value="SC">Scheduled Castes (SC)</option>
                            <option value="ST">Scheduled Tribes (ST)</option>
                            <option value="OBC">Other Backward Classes (OBC)</option>
                            <option value="EWS">Economically Weaker Sections (EWS)</option>
                            <option value="SEBC">Socially and Educationally Backward Classes (SEBC)</option>
                            <option value="PHWD">Physically Challenged (Physically Handicapped/Persons with Disabilities)</option>
                            <option value="DU">Destitute/Underprivileged</option>
                            <option value="BPL">Below Poverty Line (BPL)</option>
                            <option value="WMC">Women, particularly in marginalized communities</option>
                            <option value="Min">Minority communities such as Muslims, Sikhs, Christians, Buddhists, etc.</option>
                            <option value="TRANS">Transgender persons</option>
                            <option value="XSER">Ex-Servicemen</option>
                            <option value="REF">Refugees (depending on the context, such as refugees from Pakistan-administered Kashmir)</option>
                            <option value="AGRI">Farmers, agricultural workers, and rural laborers</option>
                            <option value="UPH">Urban poor and homeless</option>
                            <option value="APL">Above Poverty Line</option>

                        </select>
                        <span className="customArrow"></span>
                    </div>
                </div>
                <div className="indiDetails">
                    <label htmlFor="email">Age Group</label>
                    <div className="customSelect">
                        <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
                            <option value="">Select Option</option>
                            <option value="Below 15">Below 15</option>
                            <option value="15-18">15-18</option>
                            <option value="19-24">19-24</option>
                            <option value="25-30">25-30</option>
                            <option value="30-35">30-35</option>
                            <option value="35-40">35-40</option>
                            <option value="40 Above">40 Above</option>

                        </select>
                        <span className="customArrow"></span>
                    </div>
                </div>
                <div className="indiDetails">
                    <label htmlFor="email">Mont. Family Income</label>
                    <div className="customSelect">
                        <select value={monthlyIncome} onChange={(e) => setMonthlyIncome(e.target.value)}>
                            <option value="">Select Option</option>
                            <option value="Below 5000">Below 5000</option>
                            <option value="5000-10000">5000-10000</option>
                            <option value="10000-15000">10000-15000</option>
                            <option value="15000-30000">15000-30000</option>
                            <option value="30000-50000">30000-50000</option>
                            <option value="50000-100000">50000-100000</option>
                            <option value="above 100000">above 100000</option>
                        </select>
                        <span className="customArrow"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenForm;