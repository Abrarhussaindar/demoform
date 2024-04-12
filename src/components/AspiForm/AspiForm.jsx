import React, { useContext } from 'react';
import "../form.css"

import { multiStepContext } from '../../StepContext';

function AspiForm() {
    // const [dreamCareer, setDreamCareer] = useState()
    // const [otherDreamCareer, setOtherDreamCareer] = useState()
    // const [dreamCareerField, setDreamCareerField] = useState()
    // const [otherDreamCareerField, setOtherDreamCareerField] = useState()
    // const [influence, setInfluence] = useState()
    // const [otherInfluence, setOtherInfluence] = useState()
    // const [scale, setScale] = useState()

    // const [suppGov, setSuppGov] = useState()
    // const [GovSchemes, setGovSchemes] = useState()
    // const [formalTraining, setFormalTraining] = useState()
    // const [EdTrainProg, setEdTrainProg] = useState()
    // const [OtherEdTrainProg, setOtherEdTrainProg] = useState()
    // const [FurEdTrain, setFurEdTrain] = useState()

    const { userData, setUserData } = useContext(multiStepContext);
    // console.log("userdata: ", userData);

    return (

        <div className="topIndi empDetails">
            <div className="indiDetails">
                <label htmlFor="email">What is your dream career or occupation?</label>
                <div className="customSelect">

                    <select value={userData['DreamCareer']} required onChange={(e) => setUserData({ ...userData, "DreamCareer": e.target.value })}>
                        <option value="">Select Option</option>
                        <hr />
                        <option value="Tourism and Allied">Tourism and Allied</option>
                        <hr />
                        <option value="Agriculture and Allied">Agriculture and Allied</option>
                        <hr />
                        <option value="Handlooms and Handicrafts">Handlooms and Handicrafts</option>
                        <hr />
                        <option value="Horticulture and Allied">Horticulture and Allied</option>
                        <hr />
                        <option value="Import & Export">Import & Export</option>
                        <hr />
                        <option value="Distribution and Retail">Distribution and Retail</option>
                        <hr />
                        <option value="Banking and Finance">Banking and Finance</option>
                        <hr />
                        <option value="Transport and allied">Transport and allied</option>
                        <hr />
                        <option value="Manufacturing and allied">Manufacturing and allied</option>
                        <hr />
                        <option value="Construction and Real estate">Construction and Real estate</option>
                        <hr />
                        <option value="Healthcare and allied">Healthcare and allied</option>
                        <hr />
                        <option value="ITeS and allied">ITeS and allied</option>
                        <hr />
                        <option value="Hospitality and allied">Hospitality and allied</option>
                        <hr />
                        <option value="Other">Other (please specify)</option>
                    </select>
                    <span className="customArrow">
                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                    </span>
                </div>
                {
                    userData.DreamCareer === "Other"
                        ?
                        <div className='other'>
                            <h5>
                                Specify:
                            </h5>
                            <input type="text" value={userData['OtherDreamCareer']} required onChange={(e) => setUserData({ ...userData, "OtherDreamCareer": e.target.value })} name="name" id="name" />
                        </div>
                        : ""
                }

                {
                    userData.DreamCareer
                        ? userData.DreamCareer === "Other"
                            ?
                            ""
                            :
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Field</label>
                                    <div className="customSelect">

                                        <select value={userData['DreamCareerField']} required onChange={(e) => setUserData({ ...userData, "DreamCareerField": e.target.value })}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            {
                                                userData.DreamCareer === "Tourism and Allied"
                                                    ?
                                                    <>
                                                        <option value="Tour Guide">Tour Guide</option>
                                                        <hr />
                                                        <option value="Travel Agent">Travel Agent</option>
                                                        <hr />
                                                        <option value="Tour Operator">Tour Operator</option>
                                                        <hr />
                                                        <option value="Travel Consultant">Travel Consultant</option>
                                                        <hr />
                                                        <option value="Destination Manager">Destination Manager</option>
                                                        <hr />
                                                        <option value="Tourism Manager">Tourism Manager</option>
                                                        <hr />
                                                        <option value="Hotel Manager">Hotel Manager</option>
                                                        <hr />
                                                        <option value="Front Office Manager">Front Office Manager</option>
                                                        <hr />
                                                        <option value="Food and Beverage Manager">Food and Beverage Manager</option>
                                                        <hr />
                                                        <option value="Event Coordinator/Manager">Event Coordinator/Manager</option>
                                                        <hr />
                                                        <option value="Concierge">Concierge</option>
                                                        <hr />
                                                        <option value="Reservation Agent">Reservation Agent</option>
                                                        <hr />
                                                        <option value="Customer Service Representative (in tourism-related businesses)">Customer Service Representative (in tourism-related businesses)</option>
                                                        <hr />
                                                        <option value="Sales Executive (in hotels, travel agencies, etc.)">Sales Executive (in hotels, travel agencies, etc.)</option>
                                                        <hr />
                                                        <option value="Marketing Manager (specifically for tourism businesses)">Marketing Manager (specifically for tourism businesses)</option>
                                                        <hr />
                                                        <option value="Public Relations Officer">Public Relations Officer</option>
                                                        <hr />
                                                        <option value="Tourism Development Officer">Tourism Development Officer</option>
                                                        <hr />
                                                        <option value="Adventure Tour Guide">Adventure Tour Guide</option>
                                                        <hr />
                                                        <option value="Cultural Tour Guide">Cultural Tour Guide</option>
                                                        <hr />
                                                        <option value="Wildlife Tour Guide">Wildlife Tour Guide</option>
                                                        <hr />
                                                        <option value="Ecotourism Guide">Ecotourism Guide</option>
                                                        <hr />
                                                        <option value="Heritage Site Interpreter">Heritage Site Interpreter</option>
                                                        <hr />
                                                        <option value="Cruise Director">Cruise Director</option>
                                                        <hr />
                                                        <option value="Travel Writer/Blogger">Travel Writer/Blogger</option>
                                                        <hr />
                                                        <option value="Photographer/Videographer (specializing in travel and tourism)">Photographer/Videographer (specializing in travel and tourism)</option>
                                                        <hr />
                                                        <option value="Travel Journalist">Travel Journalist</option>
                                                        <hr />
                                                        <option value="Airline Staff (pilots, flight attendants, ground crew)">Airline Staff (pilots, flight attendants, ground crew)</option>
                                                        <hr />
                                                        <option value="Airport Staff (security, check-in agents, baggage handlers)">Airport Staff (security, check-in agents, baggage handlers)</option>
                                                        <hr />
                                                        <option value="Travel Insurance Agent">Travel Insurance Agent</option>
                                                        <hr />
                                                        <option value="Sustainable Tourism Specialist">Sustainable Tourism Specialist</option>
                                                        <hr />
                                                        <option value="Resort Activities Coordinator">Resort Activities Coordinator</option>
                                                        <hr />
                                                        <option value="Spa Therapist">Spa Therapist</option>
                                                        <hr />
                                                        <option value="Tour Bus Driver">Tour Bus Driver</option>
                                                        <hr />
                                                        <option value="Airport Transfer Driver">Airport Transfer Driver</option>
                                                        <hr />
                                                        <option value="Event Planner">Event Planner</option>
                                                        <hr />
                                                        <option value="Catering Manager">Catering Manager</option>
                                                        <hr />
                                                        <option value="Sommelier (Wine Expert)">Sommelier (Wine Expert)</option>
                                                        <hr />
                                                        <option value="Night Auditor (Hotel)">Night Auditor (Hotel)</option>
                                                        <hr />
                                                        <option value="Housekeeping Staff">Housekeeping Staff</option>
                                                        <hr />
                                                        <option value="Tour Dispatcher">Tour Dispatcher</option>
                                                        <hr />
                                                        <option value="Travel Technology Specialist (for online booking platforms, travel apps, etc.)">Travel Technology Specialist (for online booking platforms, travel apps, etc.)</option>
                                                        <hr />
                                                        <option value="Cultural Exchange Coordinator">Cultural Exchange Coordinator</option>
                                                        <hr />
                                                        <option value="Hospitality Trainer/Instructor">Hospitality Trainer/Instructor</option>
                                                        <hr />
                                                        <option value="Travel Safety and Security Manager">Travel Safety and Security Manager</option>
                                                        <hr />
                                                        <option value="Tourism Researcher/Analyst">Tourism Researcher/Analyst</option>
                                                        <hr />
                                                        <option value="Visitor Services Coordinator (in museums, cultural sites, etc.)">Visitor Services Coordinator (in museums, cultural sites, etc.)</option>
                                                        <hr />
                                                        <option value="Travel Accountant/Financial Manager">Travel Accountant/Financial Manager</option>
                                                        <hr />
                                                        <option value="Travel Nurse (for medical tourism)">Travel Nurse (for medical tourism)</option>
                                                        <hr />
                                                        <option value="Language Interpreter/Translator (for international tourists)">Language Interpreter/Translator (for international tourists)</option>
                                                        <hr />
                                                        <option value="Volunteer Coordinator (for voluntourism programs)">Volunteer Coordinator (for voluntourism programs)</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.DreamCareer === "Agriculture and Allied"
                                                    ?
                                                    <>
                                                        <hr />
                                                        <option value="Farmer">Farmer</option>
                                                        <hr />
                                                        <option value="Agricultural Extension Officer">Agricultural Extension Officer</option>
                                                        <hr />
                                                        <option value="Agronomist">Agronomist</option>
                                                        <hr />
                                                        <option value="Soil Scientist">Soil Scientist</option>
                                                        <hr />
                                                        <option value="Crop Consultant">Crop Consultant</option>
                                                        <hr />
                                                        <option value="Horticulturist">Horticulturist</option>
                                                        <hr />
                                                        <option value="Livestock Farmer">Livestock Farmer</option>
                                                        <hr />
                                                        <option value="Dairy Farmer">Dairy Farmer</option>
                                                        <hr />
                                                        <option value="Poultry Farmer">Poultry Farmer</option>
                                                        <hr />
                                                        <option value="Aquaculturist (Fish Farmer)">Aquaculturist (Fish Farmer)</option>
                                                        <hr />
                                                        <option value="Agricultural Engineer">Agricultural Engineer</option>
                                                        <hr />
                                                        <option value="Irrigation Specialist">Irrigation Specialist</option>
                                                        <hr />
                                                        <option value="Agricultural Economist">Agricultural Economist</option>
                                                        <hr />
                                                        <option value="Agribusiness Manager">Agribusiness Manager</option>
                                                        <hr />
                                                        <option value="Farm Manager">Farm Manager</option>
                                                        <hr />
                                                        <option value="Agricultural Inspector">Agricultural Inspector</option>
                                                        <hr />
                                                        <option value="Agricultural Technician">Agricultural Technician</option>
                                                        <hr />
                                                        <option value="Seed Technologist">Seed Technologist</option>
                                                        <hr />
                                                        <option value="Plant Breeder/Geneticist">Plant Breeder/Geneticist</option>
                                                        <hr />
                                                        <option value="Pest Control Technician">Pest Control Technician</option>
                                                        <hr />
                                                        <option value="Agricultural Biotechnologist">Agricultural Biotechnologist</option>
                                                        <hr />
                                                        <option value="Food Scientist/Technologist">Food Scientist/Technologist</option>
                                                        <hr />
                                                        <option value="Agricultural Researcher">Agricultural Researcher</option>
                                                        <hr />
                                                        <option value="Farm Equipment Mechanic">Farm Equipment Mechanic</option>
                                                        <hr />
                                                        <option value="Veterinary Doctor">Veterinary Doctor</option>
                                                        <hr />
                                                        <option value="Animal Nutritionist">Animal Nutritionist</option>
                                                        <hr />
                                                        <option value="Agricultural Economist">Agricultural Economist</option>
                                                        <hr />
                                                        <option value="Agricultural Journalist">Agricultural Journalist</option>
                                                        <hr />
                                                        <option value="Agricultural Educator/Trainer">Agricultural Educator/Trainer</option>
                                                        <hr />
                                                        <option value="Agricultural Policy Analyst">Agricultural Policy Analyst</option>
                                                        <hr />
                                                        <option value="Agricultural Marketing Specialist">Agricultural Marketing Specialist</option>
                                                        <hr />
                                                        <option value="Farm Laborer">Farm Laborer</option>
                                                        <hr />
                                                        <option value="Harvest Supervisor">Harvest Supervisor</option>
                                                        <hr />
                                                        <option value="Greenhouse Manager">Greenhouse Manager</option>
                                                        <hr />
                                                        <option value="Organic Certification Inspector">Organic Certification Inspector</option>
                                                        <hr />
                                                        <option value="Farm-to-Table Coordinator">Farm-to-Table Coordinator</option>
                                                        <hr />
                                                        <option value="Agricultural Supply Chain Manager">Agricultural Supply Chain Manager</option>
                                                        <hr />
                                                        <option value="Agricultural Finance Officer">Agricultural Finance Officer</option>
                                                        <hr />
                                                        <option value="Agricultural Risk Manager">Agricultural Risk Manager</option>
                                                        <hr />
                                                        <option value="Precision Agriculture Specialist">Precision Agriculture Specialist</option>
                                                        <hr />
                                                        <option value="Agricultural Software Developer">Agricultural Software Developer</option>
                                                        <hr />
                                                        <option value="Agricultural Biologist">Agricultural Biologist</option>
                                                        <hr />
                                                        <option value="Agricultural Economist">Agricultural Economist</option>
                                                        <hr />
                                                        <option value="Agricultural Statistician">Agricultural Statistician</option>
                                                        <hr />
                                                        <option value="Livestock Feed Sales Representative">Livestock Feed Sales Representative</option>
                                                        <hr />
                                                        <option value="Crop Protection Sales Representative">Crop Protection Sales Representative</option>
                                                        <hr />
                                                        <option value="Agricultural Loan Officer">Agricultural Loan Officer</option>
                                                        <hr />
                                                        <option value="Agri-Tourism Coordinator">Agri-Tourism Coordinator</option>
                                                        <hr />
                                                        <option value="Agricultural Waste Management Specialist">Agricultural Waste Management Specialist</option>
                                                        <hr />
                                                        <option value="Agricultural Insurance Agent">Agricultural Insurance Agent</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.DreamCareer === "Handlooms and Handicrafts"
                                                    ?
                                                    <>
                                                        <hr />
                                                        <option value="Weaver">Weaver</option>
                                                        <hr />
                                                        <option value="Embroiderer">Embroiderer</option>
                                                        <hr />
                                                        <option value="Handloom Operator">Handloom Operator</option>
                                                        <hr />
                                                        <option value="Textile Designer">Textile Designer</option>
                                                        <hr />
                                                        <option value="Master Craftsman">Master Craftsman</option>
                                                        <hr />
                                                        <option value="Block Printer">Block Printer</option>
                                                        <hr />
                                                        <option value="Dyeing Technician">Dyeing Technician</option>
                                                        <hr />
                                                        <option value="Artisan">Artisan</option>
                                                        <hr />
                                                        <option value="Pottery Maker">Pottery Maker</option>
                                                        <hr />
                                                        <option value="Wood Carver">Wood Carver</option>
                                                        <hr />
                                                        <option value="Metal Craftsman">Metal Craftsman</option>
                                                        <hr />
                                                        <option value="Lacquerware Craftsman">Lacquerware Craftsman</option>
                                                        <hr />
                                                        <option value="Basket Weaver">Basket Weaver</option>
                                                        <hr />
                                                        <option value="Jewelry Maker">Jewelry Maker</option>
                                                        <hr />
                                                        <option value="Leather Craftsman">Leather Craftsman</option>
                                                        <hr />
                                                        <option value="Handicrafts Trainer/Instructor">Handicrafts Trainer/Instructor</option>
                                                        <hr />
                                                        <option value="Handicrafts Exporter">Handicrafts Exporter</option>
                                                        <hr />
                                                        <option value="Handicrafts Entrepreneur">Handicrafts Entrepreneur</option>
                                                        <hr />
                                                        <option value="Handicrafts Marketing Manager">Handicrafts Marketing Manager</option>
                                                        <hr />
                                                        <option value="Handicrafts Product Development Manager">Handicrafts Product Development Manager</option>
                                                        <hr />
                                                        <option value="Handicrafts Quality Control Inspector">Handicrafts Quality Control Inspector</option>
                                                        <hr />
                                                        <option value="Handicrafts Retailer">Handicrafts Retailer</option>
                                                        <hr />
                                                        <option value="Handicrafts Buyer/Procurement Officer">Handicrafts Buyer/Procurement Officer</option>
                                                        <hr />
                                                        <option value="Handicrafts Export Documentation Officer">Handicrafts Export Documentation Officer</option>
                                                        <hr />
                                                        <option value="Handicrafts Production Supervisor">Handicrafts Production Supervisor</option>
                                                        <hr />
                                                        <option value="Handicrafts Warehouse Manager">Handicrafts Warehouse Manager</option>
                                                        <hr />
                                                        <option value="Handicrafts Exhibition Coordinator">Handicrafts Exhibition Coordinator</option>
                                                        <hr />
                                                        <option value="Handicrafts Conservationist/Restorer">Handicrafts Conservationist/Restorer</option>
                                                        <hr />
                                                        <option value="Handicrafts Researcher/Analyst">Handicrafts Researcher/Analyst</option>
                                                        <hr />
                                                        <option value="Handicrafts Policy Advisor">Handicrafts Policy Advisor</option>
                                                        <hr />
                                                        <option value="Handicrafts Photographer">Handicrafts Photographer</option>
                                                        <hr />
                                                        <option value="Handicrafts Social Media Manager">Handicrafts Social Media Manager</option>
                                                        <hr />
                                                        <option value="Handicrafts Blogger/Content Creator">Handicrafts Blogger/Content Creator</option>
                                                        <hr />
                                                        <option value="Handicrafts Tour Guide">Handicrafts Tour Guide</option>
                                                        <hr />
                                                        <option value="Handicrafts Consultant">Handicrafts Consultant</option>
                                                        <hr />
                                                        <option value="Handicrafts Art Director">Handicrafts Art Director</option>
                                                        <hr />
                                                        <option value="Handicrafts Workshop Facilitator">Handicrafts Workshop Facilitator</option>
                                                        <hr />
                                                        <option value="Handicrafts Artisan Support Worker">Handicrafts Artisan Support Worker</option>
                                                        <hr />
                                                        <option value="Handicrafts Supply Chain Manager">Handicrafts Supply Chain Manager</option>
                                                        <hr />
                                                        <option value="Handicrafts Finance Officer">Handicrafts Finance Officer</option>
                                                        <hr />
                                                        <option value="Handicrafts Cooperative Manager">Handicrafts Cooperative Manager</option>
                                                        <hr />
                                                        <option value="Handicrafts Exhibition Designer">Handicrafts Exhibition Designer</option>
                                                        <hr />
                                                        <option value="Handicrafts Packaging Designer">Handicrafts Packaging Designer</option>
                                                        <hr />
                                                        <option value="Handicrafts Sustainability Officer">Handicrafts Sustainability Officer</option>
                                                        <hr />
                                                        <option value="Handicrafts Cultural Ambassador">Handicrafts Cultural Ambassador</option>
                                                        <hr />
                                                        <option value="Handicrafts Legal Advisor (for intellectual property rights)">Handicrafts Legal Advisor (for intellectual property rights)</option>
                                                        <hr />
                                                        <option value="Handicrafts Documentation Specialist">Handicrafts Documentation Specialist</option>
                                                        <hr />
                                                        <option value="Handicrafts Museum Curator">Handicrafts Museum Curator</option>
                                                        <hr />
                                                        <option value="Handicrafts Event Planner">Handicrafts Event Planner</option>
                                                        <hr />
                                                        <option value="Handicrafts Online Marketplace Manager">Handicrafts Online Marketplace Manager</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.DreamCareer === "Horticulture and Allied"
                                                    ?
                                                    <>
                                                        <hr />
                                                        <option value="Horticulturist">Horticulturist</option>
                                                        <hr />
                                                        <option value="Crop Scientist">Crop Scientist</option>
                                                        <hr />
                                                        <option value="Pomologist (specialist in fruit cultivation)">Pomologist (specialist in fruit cultivation)</option>
                                                        <hr />
                                                        <option value="Olericulturist (specialist in vegetable cultivation)">Olericulturist (specialist in vegetable cultivation)</option>
                                                        <hr />
                                                        <option value="Floriculturist (specialist in flower cultivation)">Floriculturist (specialist in flower cultivation)</option>
                                                        <hr />
                                                        <option value="Nursery Manager">Nursery Manager</option>
                                                        <hr />
                                                        <option value="Plant Breeder">Plant Breeder</option>
                                                        <hr />
                                                        <option value="Seed Technologist">Seed Technologist</option>
                                                        <hr />
                                                        <option value="Plant Pathologist">Plant Pathologist</option>
                                                        <hr />
                                                        <option value="Entomologist (specialist in insects affecting plants)">Entomologist (specialist in insects affecting plants)</option>
                                                        <hr />
                                                        <option value="Soil Scientist">Soil Scientist</option>
                                                        <hr />
                                                        <option value="Irrigation Specialist">Irrigation Specialist</option>
                                                        <hr />
                                                        <option value="Pest Control Technician">Pest Control Technician</option>
                                                        <hr />
                                                        <option value="Greenhouse Manager">Greenhouse Manager</option>
                                                        <hr />
                                                        <option value="Orchard Manager">Orchard Manager</option>
                                                        <hr />
                                                        <option value="Vineyard Manager (for grape cultivation)">Vineyard Manager (for grape cultivation)</option>
                                                        <hr />
                                                        <option value="Farm Supervisor">Farm Supervisor</option>
                                                        <hr />
                                                        <option value="Agricultural Technician (specializing in horticulture)">Agricultural Technician (specializing in horticulture)</option>
                                                        <hr />
                                                        <option value="Agricultural Extension Officer (specializing in horticulture)">Agricultural Extension Officer (specializing in horticulture)</option>
                                                        <hr />
                                                        <option value="Research Scientist (in horticulture-related research institutes)">Research Scientist (in horticulture-related research institutes)</option>
                                                        <hr />
                                                        <option value="Agricultural Consultant (specializing in horticulture)">Agricultural Consultant (specializing in horticulture)</option>
                                                        <hr />
                                                        <option value="Landscape Designer">Landscape Designer</option>
                                                        <hr />
                                                        <option value="Landscape Architect">Landscape Architect</option>
                                                        <hr />
                                                        <option value="Garden Center Manager">Garden Center Manager</option>
                                                        <hr />
                                                        <option value="Garden Maintenance Worker">Garden Maintenance Worker</option>
                                                        <hr />
                                                        <option value="Arborist (tree care specialist)">Arborist (tree care specialist)</option>
                                                        <hr />
                                                        <option value="Urban Horticulturist">Urban Horticulturist</option>
                                                        <hr />
                                                        <option value="Parks and Recreation Manager">Parks and Recreation Manager</option>
                                                        <hr />
                                                        <option value="Botanical Garden Curator">Botanical Garden Curator</option>
                                                        <hr />
                                                        <option value="Soil Conservationist">Soil Conservationist</option>
                                                        <hr />
                                                        <option value="Agricultural Inspector (specializing in horticulture)">Agricultural Inspector (specializing in horticulture)</option>
                                                        <hr />
                                                        <option value="Horticultural Therapist">Horticultural Therapist</option>
                                                        <hr />
                                                        <option value="Horticultural Educator/Trainer">Horticultural Educator/Trainer</option>
                                                        <hr />
                                                        <option value="Sustainable Agriculture Specialist (in horticulture)">Sustainable Agriculture Specialist (in horticulture)</option>
                                                        <hr />
                                                        <option value="Agri-Tourism Coordinator (focusing on horticulture-related tourism)">Agri-Tourism Coordinator (focusing on horticulture-related tourism)</option>
                                                        <hr />
                                                        <option value="Agricultural Marketing Specialist (specializing in horticulture products)">Agricultural Marketing Specialist (specializing in horticulture products)</option>
                                                        <hr />
                                                        <option value="Postharvest Technologist">Postharvest Technologist</option>
                                                        <hr />
                                                        <option value="Quality Control Inspector (for horticultural products)">Quality Control Inspector (for horticultural products)</option>
                                                        <hr />
                                                        <option value="Farm-to-Table Coordinator (promoting local horticultural products)">Farm-to-Table Coordinator (promoting local horticultural products)</option>
                                                        <hr />
                                                        <option value="Food Processing Technician (working with horticultural products)">Food Processing Technician (working with horticultural products)</option>
                                                        <hr />
                                                        <option value="Agricultural Economist (specializing in horticulture)">Agricultural Economist (specializing in horticulture)</option>
                                                        <hr />
                                                        <option value="Agricultural Journalist (reporting on horticulture-related topics)">Agricultural Journalist (reporting on horticulture-related topics)</option>
                                                        <hr />
                                                        <option value="Agricultural Sales Representative (selling horticultural products)">Agricultural Sales Representative (selling horticultural products)</option>
                                                        <hr />
                                                        <option value="Agricultural Supply Chain Manager (for horticultural products)">Agricultural Supply Chain Manager (for horticultural products)</option>
                                                        <hr />
                                                        <option value="Agricultural Loan Officer (providing financial support to horticultural ventures)">Agricultural Loan Officer (providing financial support to horticultural ventures)</option>
                                                        <hr />
                                                        <option value="Agricultural Policy Analyst (working on policies related to horticulture)">Agricultural Policy Analyst (working on policies related to horticulture)</option>
                                                        <hr />
                                                        <option value="Agricultural Researcher/Analyst (focusing on horticulture)">Agricultural Researcher/Analyst (focusing on horticulture)</option>
                                                        <hr />
                                                        <option value="Agricultural Software Developer (developing software for horticultural management)">Agricultural Software Developer (developing software for horticultural management)</option>
                                                        <hr />
                                                        <option value="Agritourism Coordinator (promoting horticultural tourism experiences)">Agritourism Coordinator (promoting horticultural tourism experiences)</option>
                                                        <hr />
                                                        <option value="Agricultural Waste Management Specialist (managing waste from horticultural activities)">Agricultural Waste Management Specialist (managing waste from horticultural activities)</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.DreamCareer === "Import & Export"
                                                    ?
                                                    <>
                                                        <hr />
                                                        <option value="Import/Export Manager">Import/Export Manager</option>
                                                        <hr />
                                                        <option value="International Trade Specialist">IInternational Trade SpecialistTI</option>
                                                        <hr />
                                                        <option value="Customs Broker">Customs Broker</option>
                                                        <hr />
                                                        <option value="Freight Forwarder">Freight Forwarder</option>
                                                        <hr />
                                                        <option value="Import/Export Coordinator">Import/Export Coordinator</option>
                                                        <hr />
                                                        <option value="Logistics Coordinator">Logistics Coordinator</option>
                                                        <hr />
                                                        <option value="Shipping Clerk">Shipping Clerk</option>
                                                        <hr />
                                                        <option value="Documentation Specialist">Documentation Specialist</option>
                                                        <hr />
                                                        <option value="Trade Compliance Specialist">Trade Compliance Specialist</option>
                                                        <hr />
                                                        <option value="International Sales Representative">International Sales Representative</option>
                                                        <hr />
                                                        <option value="Trade Finance Officer">Trade Finance Officer</option>
                                                        <hr />
                                                        <option value="Export Compliance Officer">Export Compliance Officer</option>
                                                        <hr />
                                                        <option value="Import/Export Analyst">Import/Export Analyst</option>
                                                        <hr />
                                                        <option value="Procurement Officer">Procurement Officer</option>
                                                        <hr />
                                                        <option value="Supply Chain Manager">Supply Chain Manager</option>
                                                        <hr />
                                                        <option value="International Marketing Manager">International Marketing Manager</option>
                                                        <hr />
                                                        <option value="Trade Operations Manager">Trade Operations Manager</option>
                                                        <hr />
                                                        <option value="Import/Export Compliance Manager">Import/Export Compliance Manager</option>
                                                        <hr />
                                                        <option value="International Trade Lawyer">International Trade Lawyer</option>
                                                        <hr />
                                                        <option value="Trade Policy Analyst">Trade Policy Analyst</option>
                                                        <hr />
                                                        <option value="Trade Negotiator">Trade Negotiator</option>
                                                        <hr />
                                                        <option value="Export Sales Representative">Export Sales Representative</option>
                                                        <hr />
                                                        <option value="Import/Export Administrator">Import/Export Administrator</option>
                                                        <hr />
                                                        <option value="International Purchasing Manager">International Purchasing Manager</option>
                                                        <hr />
                                                        <option value="Trade Documentation Clerk">Trade Documentation Clerk</option>
                                                        <hr />
                                                        <option value="Export Licensing Specialist">Export Licensing Specialist</option>
                                                        <hr />
                                                        <option value="International Market Research Analyst">International Market Research Analyst</option>
                                                        <hr />
                                                        <option value="Foreign Trade Zone Specialist">Foreign Trade Zone Specialist</option>
                                                        <hr />
                                                        <option value="Trade Finance Manager">Trade Finance Manager</option>
                                                        <hr />
                                                        <option value="Import/Export Accountant">Import/Export Accountant</option>
                                                        <hr />
                                                        <option value="Import/Export Compliance Auditor">Import/Export Compliance Auditor</option>
                                                        <hr />
                                                        <option value="Customs Compliance Manager">Customs Compliance Manager</option>
                                                        <hr />
                                                        <option value="International Business Development Manager">International Business Development Manager</option>
                                                        <hr />
                                                        <option value="Trade Promotion Specialist">Trade Promotion Specialist</option>
                                                        <hr />
                                                        <option value="Trade Data Analyst">Trade Data Analyst</option>
                                                        <hr />
                                                        <option value="Export Documentation Coordinator">Export Documentation Coordinator</option>
                                                        <hr />
                                                        <option value="Import/Export Customer Service Representative">Import/Export Customer Service Representative</option>
                                                        <hr />
                                                        <option value="International Logistics Manager">International Logistics Manager</option>
                                                        <hr />
                                                        <option value="Import/Export Operations Manager">Import/Export Operations Manager</option>
                                                        <hr />
                                                        <option value="Trade Risk Analyst">Trade Risk Analyst</option>
                                                        <hr />
                                                        <option value="Import/Export Compliance Consultant">Import/Export Compliance Consultant</option>
                                                        <hr />
                                                        <option value="Trade Documentation Manager">Trade Documentation Manager</option>
                                                        <hr />
                                                        <option value="Export Compliance Analyst">Export Compliance Analyst</option>
                                                        <hr />
                                                        <option value="Import/Export Compliance Trainer">Import/Export Compliance Trainer</option>
                                                        <hr />
                                                        <option value="International Trade Economist">International Trade Economist</option>
                                                        <hr />
                                                        <option value="Import/Export Sales Coordinator">Import/Export Sales Coordinator</option>
                                                        <hr />
                                                        <option value="Customs Clearance Agent">Customs Clearance Agent</option>
                                                        <hr />
                                                        <option value="Trade Facilitation Specialist">Trade Facilitation Specialist</option>
                                                        <hr />
                                                        <option value="Import/Export Pricing Analyst">Import/Export Pricing Analyst</option>
                                                        <hr />
                                                        <option value="International Trade Coordinator">International Trade Coordinator</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }

                                            {
                                                userData.DreamCareer === "Banking and Finance"
                                                    ?
                                                    <>
                                                        <hr />
                                                        <option value="Bank Teller">Bank Teller</option>
                                                        <hr />
                                                        <option value="Customer Service Representative (Banking)">Customer Service Representative (Banking)</option>
                                                        <hr />
                                                        <option value="Loan Officer">Loan Officer</option>
                                                        <hr />
                                                        <option value="Financial Analyst">Financial Analyst</option>
                                                        <hr />
                                                        <option value="Investment Banker">Investment Banker</option>
                                                        <hr />
                                                        <option value="Financial Planner/Advisor">Financial Planner/Advisor</option>
                                                        <hr />
                                                        <option value="Credit Analyst">Credit Analyst</option>
                                                        <hr />
                                                        <option value="Branch Manager">Branch Manager</option>
                                                        <hr />
                                                        <option value="Relationship Manager (Corporate/Commercial Banking)">Relationship Manager (Corporate/Commercial Banking)</option>
                                                        <hr />
                                                        <option value="Wealth Manager">Wealth Manager</option>
                                                        <hr />
                                                        <option value="Investment Manager">Investment Manager</option>
                                                        <hr />
                                                        <option value="Risk Manager">Risk Manager</option>
                                                        <hr />
                                                        <option value="Compliance Officer">Compliance Officer</option>
                                                        <hr />
                                                        <option value="Auditor (Internal or External)">Auditor (Internal or External)</option>
                                                        <hr />
                                                        <option value="Treasury Analyst">Treasury Analyst</option>
                                                        <hr />
                                                        <option value="Mortgage Advisor">Mortgage Advisor</option>
                                                        <hr />
                                                        <option value="Corporate Finance Analyst">Corporate Finance Analyst</option>
                                                        <hr />
                                                        <option value="Portfolio Manager">Portfolio Manager</option>
                                                        <hr />
                                                        <option value="Asset Manager">Asset Manager</option>
                                                        <hr />
                                                        <option value="Insurance Underwriter">Insurance Underwriter</option>
                                                        <hr />
                                                        <option value="Financial Controller">Financial Controller</option>
                                                        <hr />
                                                        <option value="Actuary">Actuary</option>
                                                        <hr />
                                                        <option value="Financial Consultant">Financial Consultant</option>
                                                        <hr />
                                                        <option value="Private Banker">Private Banker</option>
                                                        <hr />
                                                        <option value="Investment Analyst">Investment Analyst</option>
                                                        <hr />
                                                        <option value="Quantitative Analyst (Quant)">Quantitative Analyst (Quant)</option>
                                                        <hr />
                                                        <option value="Fund Accountant">Fund Accountant</option>
                                                        <hr />
                                                        <option value="Financial Reporting Analyst">Financial Reporting Analyst</option>
                                                        <hr />
                                                        <option value="Operations Manager (Banking)">Operations Manager (Banking)</option>
                                                        <hr />
                                                        <option value="Derivatives Specialist">Derivatives Specialist</option>
                                                        <hr />
                                                        <option value="Credit Risk Analyst">Credit Risk Analyst</option>
                                                        <hr />
                                                        <option value="Corporate Treasurer">Corporate Treasurer</option>
                                                        <hr />
                                                        <option value="Financial Systems Analyst">Financial Systems Analyst</option>
                                                        <hr />
                                                        <option value="Regulatory Affairs Specialist">Regulatory Affairs Specialist</option>
                                                        <hr />
                                                        <option value="Trust Officer">Trust Officer</option>
                                                        <hr />
                                                        <option value="Corporate Development Analyst">Corporate Development Analyst</option>
                                                        <hr />
                                                        <option value="Anti-Money Laundering (AML) Specialist">Anti-Money Laundering (AML) Specialist</option>
                                                        <hr />
                                                        <option value="Commercial Lender">Commercial Lender</option>
                                                        <hr />
                                                        <option value="Retail Banking Manager">Retail Banking Manager</option>
                                                        <hr />
                                                        <option value="Trade Finance Specialist">Trade Finance Specialist</option>
                                                        <hr />
                                                        <option value="Securities Trader">Securities Trader</option>
                                                        <hr />
                                                        <option value="Foreign Exchange (Forex) Trader">Foreign Exchange (Forex) Trader</option>
                                                        <hr />
                                                        <option value="Financial Engineer">Financial Engineer</option>
                                                        <hr />
                                                        <option value="Compliance Manager">Compliance Manager</option>
                                                        <hr />
                                                        <option value="Fixed Income Analyst">Fixed Income Analyst</option>
                                                        <hr />
                                                        <option value="Real Estate Analyst">Real Estate Analyst</option>
                                                        <hr />
                                                        <option value="Equity Research Analyst">Equity Research Analyst</option>
                                                        <hr />
                                                        <option value="Corporate Actions Analyst">Corporate Actions Analyst</option>
                                                        <hr />
                                                        <option value="Financial Crime Investigator">Financial Crime Investigator</option>
                                                        <hr />
                                                        <option value="Investment Banking Associate">Investment Banking Associate</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.DreamCareer === "Transport and allied"
                                                    ?
                                                    <>
                                                        <hr />
                                                        <option value="Truck Driver">Truck Driver</option>
                                                        <hr />
                                                        <option value="Delivery Driver">Delivery Driver</option>
                                                        <hr />
                                                        <option value="Bus Driver">Bus Driver</option>
                                                        <hr />
                                                        <option value="Taxi Driver">Taxi Driver</option>
                                                        <hr />
                                                        <option value="Train Driver">Train Driver</option>
                                                        <hr />
                                                        <option value="Pilot (Airline or Charter)">Pilot (Airline or Charter)</option>
                                                        <hr />
                                                        <option value="Flight Attendant">Flight Attendant</option>
                                                        <hr />
                                                        <option value="Ship Captain">Ship Captain</option>
                                                        <hr />
                                                        <option value="Deck Officer">Deck Officer</option>
                                                        <hr />
                                                        <option value="Port Worker">Port Worker</option>
                                                        <hr />
                                                        <option value="Shipping Coordinator">Shipping Coordinator</option>
                                                        <hr />
                                                        <option value="Logistics Coordinator">Logistics Coordinator</option>
                                                        <hr />
                                                        <option value="Freight Forwarder">Freight Forwarder</option>
                                                        <hr />
                                                        <option value="Customs Broker">Customs Broker</option>
                                                        <hr />
                                                        <option value="Warehouse Manager">Warehouse Manager</option>
                                                        <hr />
                                                        <option value="Transportation Manager">Transportation Manager</option>
                                                        <hr />
                                                        <option value="Dispatcher">Dispatcher</option>
                                                        <hr />
                                                        <option value="Traffic Controller">Traffic Controller</option>
                                                        <hr />
                                                        <option value="Railway Signal Operator">Railway Signal Operator</option>
                                                        <hr />
                                                        <option value="Air Traffic Controller">Air Traffic Controller</option>
                                                        <hr />
                                                        <option value="Marine Traffic Controller">Marine Traffic Controller</option>
                                                        <hr />
                                                        <option value="Transportation Planner">Transportation Planner</option>
                                                        <hr />
                                                        <option value="Route Planner">Route Planner</option>
                                                        <hr />
                                                        <option value="Operations Manager (Transport)">Operations Manager (Transport)</option>
                                                        <hr />
                                                        <option value="Fleet Manager">Fleet Manager</option>
                                                        <hr />
                                                        <option value="Aviation Maintenance Technician">Aviation Maintenance Technician</option>
                                                        <hr />
                                                        <option value="Aircraft Mechanic">Aircraft Mechanic</option>
                                                        <hr />
                                                        <option value="Marine Engineer">Marine Engineer</option>
                                                        <hr />
                                                        <option value="Port Operations Manager">Port Operations Manager</option>
                                                        <hr />
                                                        <option value="Cargo Handler">Cargo Handler</option>
                                                        <hr />
                                                        <option value="Aviation Safety Inspector">Aviation Safety Inspector</option>
                                                        <hr />
                                                        <option value="Marine Surveyor">Marine Surveyor</option>
                                                        <hr />
                                                        <option value="Transport Economist">Transport Economist</option>
                                                        <hr />
                                                        <option value="Transport Analyst">Transport Analyst</option>
                                                        <hr />
                                                        <option value="Transport Policy Analyst">Transport Policy Analyst</option>
                                                        <hr />
                                                        <option value="Public Transport Planner">Public Transport Planner</option>
                                                        <hr />
                                                        <option value="Rail Operations Manager">Rail Operations Manager</option>
                                                        <hr />
                                                        <option value="Airline Operations Manager">Airline Operations Manager</option>
                                                        <hr />
                                                        <option value="Airport Manager">Airport Manager</option>
                                                        <hr />
                                                        <option value="Seaport Manager">Seaport Manager</option>
                                                        <hr />
                                                        <option value="Courier">Courier</option>
                                                        <hr />
                                                        <option value="Bicycle Courier">Bicycle Courier</option>
                                                        <hr />
                                                        <option value="Ride-Hailing Service Driver (e.g., Uber, Lyft)">Ride-Hailing Service Driver (e.g., Uber, Lyft)</option>
                                                        <hr />
                                                        <option value="Limousine Driver">Limousine Driver</option>
                                                        <hr />
                                                        <option value="Road Safety Officer">Road Safety Officer</option>
                                                        <hr />
                                                        <option value="Environmental Sustainability Manager (Transport)">Environmental Sustainability Manager (Transport)</option>
                                                        <hr />
                                                        <option value="Traffic Engineer">Traffic Engineer</option>
                                                        <hr />
                                                        <option value="Rail Infrastructure Engineer">Rail Infrastructure Engineer</option>
                                                        <hr />
                                                        <option value="Aviation Security Officer">Aviation Security Officer</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.DreamCareer === "Manufacturing and allied"
                                                    ?
                                                    <>
                                                        <hr />
                                                        <option value="Production Supervisor">Production Supervisor</option>
                                                        <hr />
                                                        <option value="Manufacturing Engineer">Manufacturing Engineer</option>
                                                        <hr />
                                                        <option value="Quality Control Inspector">Quality Control Inspector</option>
                                                        <hr />
                                                        <option value="Production Operator">Production Operator</option>
                                                        <hr />
                                                        <option value="Assembly Line Worker">Assembly Line Worker</option>
                                                        <hr />
                                                        <option value="Machinist">Machinist</option>
                                                        <hr />
                                                        <option value="Welder">Welder</option>
                                                        <hr />
                                                        <option value="CNC Operator">CNC Operator</option>
                                                        <hr />
                                                        <option value="Maintenance Technician">Maintenance Technician</option>
                                                        <hr />
                                                        <option value="Industrial Electrician">Industrial Electrician</option>
                                                        <hr />
                                                        <option value="Process Engineer">Process Engineer</option>
                                                        <hr />
                                                        <option value="Materials Planner">Materials Planner</option>
                                                        <hr />
                                                        <option value="Inventory Control Specialist">Inventory Control Specialist</option>
                                                        <hr />
                                                        <option value="Logistics Coordinator">Logistics Coordinator</option>
                                                        <hr />
                                                        <option value="Supply Chain Manager">Supply Chain Manager</option>
                                                        <hr />
                                                        <option value="Operations Manager (Manufacturing)">Operations Manager (Manufacturing)</option>
                                                        <hr />
                                                        <option value="Plant Manager">Plant Manager</option>
                                                        <hr />
                                                        <option value="Production Planner/Scheduler">Production Planner/Scheduler</option>
                                                        <hr />
                                                        <option value="Lean Manufacturing Specialist">Lean Manufacturing Specialist</option>
                                                        <hr />
                                                        <option value="Six Sigma Black Belt">Six Sigma Black Belt</option>
                                                        <hr />
                                                        <option value="Safety Coordinator">Safety Coordinator</option>
                                                        <hr />
                                                        <option value="Environmental Health and Safety (EHS) Manager">Environmental Health and Safety (EHS) Manager</option>
                                                        <hr />
                                                        <option value="Continuous Improvement Manager">Continuous Improvement Manager</option>
                                                        <hr />
                                                        <option value="Automation Engineer">Automation Engineer</option>
                                                        <hr />
                                                        <option value="Robotics Technician">Robotics Technician</option>
                                                        <hr />
                                                        <option value="Tool and Die Maker">Tool and Die Maker</option>
                                                        <hr />
                                                        <option value="Maintenance Manager">Maintenance Manager</option>
                                                        <hr />
                                                        <option value="Quality Assurance Manager">Quality Assurance Manager</option>
                                                        <hr />
                                                        <option value="Research and Development Engineer">Research and Development Engineer</option>
                                                        <hr />
                                                        <option value="Industrial Designer">Industrial Designer</option>
                                                        <hr />
                                                        <option value="Packaging Engineer">Packaging Engineer</option>
                                                        <hr />
                                                        <option value="Technical Writer (for manufacturing documentation)">Technical Writer (for manufacturing documentation)</option>
                                                        <hr />
                                                        <option value="Regulatory Affairs Specialist">Regulatory Affairs Specialist</option>
                                                        <hr />
                                                        <option value="Manufacturing Systems Analyst">Manufacturing Systems Analyst</option>
                                                        <hr />
                                                        <option value="Production Control Clerk">Production Control Clerk</option>
                                                        <hr />
                                                        <option value="Facilities Manager">Facilities Manager</option>
                                                        <hr />
                                                        <option value="Production Illustrator">Production Illustrator</option>
                                                        <hr />
                                                        <option value="CAD/CAM Programmer">CAD/CAM Programmer</option>
                                                        <hr />
                                                        <option value="Product Tester">Product Tester</option>
                                                        <hr />
                                                        <option value="Supplier Quality Engineer">Supplier Quality Engineer</option>
                                                        <hr />
                                                        <option value="Manufacturing Trainer">Manufacturing Trainer</option>
                                                        <hr />
                                                        <option value="Documentation Control Specialist">Documentation Control Specialist</option>
                                                        <hr />
                                                        <option value="Manufacturing Accountant">Manufacturing Accountant</option>
                                                        <hr />
                                                        <option value="Manufacturing Sales Representative">Manufacturing Sales Representative</option>
                                                        <hr />
                                                        <option value="Customer Service Representative (Manufacturing)">Customer Service Representative (Manufacturing)</option>
                                                        <hr />
                                                        <option value="Procurement Officer">Procurement Officer</option>
                                                        <hr />
                                                        <option value="Industrial Relations Specialist">Industrial Relations Specialist</option>
                                                        <hr />
                                                        <option value="Product Development Manager">Product Development Manager</option>
                                                        <hr />
                                                        <option value="Business Development Manager (Manufacturing)">Business Development Manager (Manufacturing)</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.DreamCareer === "Construction and Real estate"
                                                    ?
                                                    <>
                                                        <hr />
                                                        <option value="Project Manager">Project Manager</option>
                                                        <hr />
                                                        <option value="Construction Manager">Construction Manager</option>
                                                        <hr />
                                                        <option value="Site Engineer">Site Engineer</option>
                                                        <hr />
                                                        <option value="Civil Engineer">Civil Engineer</option>
                                                        <hr />
                                                        <option value="Structural Engineer">Structural Engineer</option>
                                                        <hr />
                                                        <option value="Architect">Architect</option>
                                                        <hr />
                                                        <option value="Quantity Surveyor">Quantity Surveyor</option>
                                                        <hr />
                                                        <option value="Building Inspector">Building Inspector</option>
                                                        <hr />
                                                        <option value="Construction Foreman">Construction Foreman</option>
                                                        <hr />
                                                        <option value="Construction Worker">Construction Worker</option>
                                                        <hr />
                                                        <option value="Carpenter">Carpenter</option>
                                                        <hr />
                                                        <option value="Electrician">Electrician</option>
                                                        <hr />
                                                        <option value="Plumber">Plumber</option>
                                                        <hr />
                                                        <option value="HVAC Technician">HVAC Technician</option>
                                                        <hr />
                                                        <option value="Mason">Mason</option>
                                                        <hr />
                                                        <option value="Heavy Equipment Operator">Heavy Equipment Operator</option>
                                                        <hr />
                                                        <option value="Safety Manager">Safety Manager</option>
                                                        <hr />
                                                        <option value="Environmental Engineer">Environmental Engineer</option>
                                                        <hr />
                                                        <option value="Land Surveyor">Land Surveyor</option>
                                                        <hr />
                                                        <option value="Concrete Finisher">Concrete Finisher</option>
                                                        <hr />
                                                        <option value="Drywall Installer">Drywall Installer</option>
                                                        <hr />
                                                        <option value="Painter">Painter</option>
                                                        <hr />
                                                        <option value="Roofing Contractor">Roofing Contractor</option>
                                                        <hr />
                                                        <option value="Flooring Installer">Flooring Installer</option>
                                                        <hr />
                                                        <option value="Welder">Welder</option>
                                                        <hr />
                                                        <option value="Scaffolding Erector">Scaffolding Erector</option>
                                                        <hr />
                                                        <option value="Estimator">Estimator</option>
                                                        <hr />
                                                        <option value="Construction Scheduler">Construction Scheduler</option>
                                                        <hr />
                                                        <option value="Contracts Manager">Contracts Manager</option>
                                                        <hr />
                                                        <option value="Health and Safety Officer">Health and Safety Officer</option>
                                                        <hr />
                                                        <option value="Quality Control Inspector">Quality Control Inspector</option>
                                                        <hr />
                                                        <option value="Building Code Consultant">Building Code Consultant</option>
                                                        <hr />
                                                        <option value="Demolition Specialist">Demolition Specialist</option>
                                                        <hr />
                                                        <option value="Geotechnical Engineer">Geotechnical Engineer</option>
                                                        <hr />
                                                        <option value="Waterproofing Specialist">Waterproofing Specialist</option>
                                                        <hr />
                                                        <option value="Restoration Specialist">Restoration Specialist</option>
                                                        <hr />
                                                        <option value="Landscape Architect">Landscape Architect</option>
                                                        <hr />
                                                        <option value="Green Building Consultant">Green Building Consultant</option>
                                                        <hr />
                                                        <option value="Fire Protection Engineer">Fire Protection Engineer</option>
                                                        <hr />
                                                        <option value="Building Services Engineer">Building Services Engineer</option>
                                                        <hr />
                                                        <option value="Building Information Modeling (BIM) Specialist">Building Information Modeling (BIM) Specialist</option>
                                                        <hr />
                                                        <option value="Site Supervisor">Site Supervisor</option>
                                                        <hr />
                                                        <option value="Construction Materials Testing Technician">Construction Materials Testing Technician</option>
                                                        <hr />
                                                        <option value="Construction Equipment Sales Representative">Construction Equipment Sales Representative</option>
                                                        <hr />
                                                        <option value="Construction Consultant">Construction Consultant</option>
                                                        <hr />
                                                        <option value="Construction Attorney">Construction Attorney</option>
                                                        <hr />
                                                        <option value="Construction Recruiter">Construction Recruiter</option>
                                                        <hr />
                                                        <option value="Construction Technology Specialist">Construction Technology Specialist</option>
                                                        <hr />
                                                        <option value="Construction Trainer/Instructor">Construction Trainer/Instructor</option>
                                                        <hr />
                                                        <option value="Construction Photographer">Construction Photographer</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.DreamCareer === "Healthcare and allied"
                                                    ?
                                                    <>
                                                        <hr />
                                                        <option value="Physician (Doctor)">Physician (Doctor)</option>
                                                        <hr />
                                                        <option value="Surgeon">Surgeon</option>
                                                        <hr />
                                                        <option value="Nurse Practitioner">Nurse Practitioner</option>
                                                        <hr />
                                                        <option value="Registered Nurse (RN)">Registered Nurse (RN)</option>
                                                        <hr />
                                                        <option value="Licensed Practical Nurse (LPN)">Licensed Practical Nurse (LPN)</option>
                                                        <hr />
                                                        <option value="Certified Nursing Assistant (CNA)">Certified Nursing Assistant (CNA)</option>
                                                        <hr />
                                                        <option value="Physician Assistant (PA)">Physician Assistant (PA)</option>
                                                        <hr />
                                                        <option value="Pharmacist">Pharmacist</option>
                                                        <hr />
                                                        <option value="Pharmacy Technician">Pharmacy Technician</option>
                                                        <hr />
                                                        <option value="Medical Laboratory Technologist">Medical Laboratory Technologist</option>
                                                        <hr />
                                                        <option value="Radiologic Technologist (X-ray Tech)">Radiologic Technologist (X-ray Tech)</option>
                                                        <hr />
                                                        <option value="Medical Sonographer (Ultrasound Tech)">Medical Sonographer (Ultrasound Tech)</option>
                                                        <hr />
                                                        <option value="Respiratory Therapist">Respiratory Therapist</option>
                                                        <hr />
                                                        <option value="Physical Therapist">Physical Therapist</option>
                                                        <hr />
                                                        <option value="Occupational Therapist">Occupational Therapist</option>
                                                        <hr />
                                                        <option value="Speech-Language Pathologist">Speech-Language Pathologist</option>
                                                        <hr />
                                                        <option value="Dietitian/Nutritionist">Dietitian/Nutritionist</option>
                                                        <hr />
                                                        <option value="Medical Assistant">Medical Assistant</option>
                                                        <hr />
                                                        <option value="Medical Receptionist">Medical Receptionist</option>
                                                        <hr />
                                                        <option value="Medical Billing and Coding Specialist">Medical Billing and Coding Specialist</option>
                                                        <hr />
                                                        <option value="Health Information Technician">Health Information Technician</option>
                                                        <hr />
                                                        <option value="Hospital Administrator">Hospital Administrator</option>
                                                        <hr />
                                                        <option value="Clinic Manager">Clinic Manager</option>
                                                        <hr />
                                                        <option value="Medical Secretary">Medical Secretary</option>
                                                        <hr />
                                                        <option value="Patient Care Coordinator">Patient Care Coordinator</option>
                                                        <hr />
                                                        <option value="Medical Interpreter">Medical Interpreter</option>
                                                        <hr />
                                                        <option value="Emergency Medical Technician (EMT)">Emergency Medical Technician (EMT)</option>
                                                        <hr />
                                                        <option value="Paramedic">Paramedic</option>
                                                        <hr />
                                                        <option value="Medical Social Worker">Medical Social Worker</option>
                                                        <hr />
                                                        <option value="Clinical Psychologist">Clinical Psychologist</option>
                                                        <hr />
                                                        <option value="Psychiatrist">Psychiatrist</option>
                                                        <hr />
                                                        <option value="Mental Health Counselor">Mental Health Counselor</option>
                                                        <hr />
                                                        <option value="Behavioral Health Technician">Behavioral Health Technician</option>
                                                        <hr />
                                                        <option value="Clinical Research Coordinator">Clinical Research Coordinator</option>
                                                        <hr />
                                                        <option value="Clinical Research Associate">Clinical Research Associate</option>
                                                        <hr />
                                                        <option value="Epidemiologist">Epidemiologist</option>
                                                        <hr />
                                                        <option value="Public Health Specialist">Public Health Specialist</option>
                                                        <hr />
                                                        <option value="Health Educator">Health Educator</option>
                                                        <hr />
                                                        <option value="Community Health Worker">Community Health Worker</option>
                                                        <hr />
                                                        <option value="Healthcare Consultant">Healthcare Consultant</option>
                                                        <hr />
                                                        <option value="Healthcare Analyst">Healthcare Analyst</option>
                                                        <hr />
                                                        <option value="Medical Writer">Medical Writer</option>
                                                        <hr />
                                                        <option value="Biomedical Engineer">Biomedical Engineer</option>
                                                        <hr />
                                                        <option value="Medical Sales Representative">Medical Sales Representative</option>
                                                        <hr />
                                                        <option value="Medical Equipment Technician">Medical Equipment Technician</option>
                                                        <hr />
                                                        <option value="Clinical Informatics Specialist">Clinical Informatics Specialist</option>
                                                        <hr />
                                                        <option value="Telemedicine Technician">Telemedicine Technician</option>
                                                        <hr />
                                                        <option value="Palliative Care Nurse">Palliative Care Nurse</option>
                                                        <hr />
                                                        <option value="Hospice Worker">Hospice Worker</option>
                                                        <hr />
                                                        <option value="Home Health Aide">Home Health Aide</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.DreamCareer === "ITeS and allied"
                                                    ?
                                                    <>
                                                        <hr />
                                                        <option value="Software Developer">Software Developer</option>
                                                        <hr />
                                                        <option value="Software Engineer">Software Engineer</option>
                                                        <hr />
                                                        <option value="Web Developer">Web Developer</option>
                                                        <hr />
                                                        <option value="Mobile App Developer">Mobile App Developer</option>
                                                        <hr />
                                                        <option value="Full-Stack Developer">Full-Stack Developer</option>
                                                        <hr />
                                                        <option value="Front-End Developer">Front-End Developer</option>
                                                        <hr />
                                                        <option value="Back-End Developer">Back-End Developer</option>
                                                        <hr />
                                                        <option value="Database Administrator">Database Administrator</option>
                                                        <hr />
                                                        <option value="Systems Analyst">Systems Analyst</option>
                                                        <hr />
                                                        <option value="Quality Assurance Tester">Quality Assurance Tester</option>
                                                        <hr />
                                                        <option value="Technical Support Engineer">Technical Support Engineer</option>
                                                        <hr />
                                                        <option value="Help Desk Technician">Help Desk Technician</option>
                                                        <hr />
                                                        <option value="Network Administrator">Network Administrator</option>
                                                        <hr />
                                                        <option value="Systems Administrator">Systems Administrator</option>
                                                        <hr />
                                                        <option value="Cloud Computing Specialist">Cloud Computing Specialist</option>
                                                        <hr />
                                                        <option value="DevOps Engineer">DevOps Engineer</option>
                                                        <hr />
                                                        <option value="Data Analyst">Data Analyst</option>
                                                        <hr />
                                                        <option value="Business Intelligence Analyst">Business Intelligence Analyst</option>
                                                        <hr />
                                                        <option value="Data Scientist">Data Scientist</option>
                                                        <hr />
                                                        <option value="Machine Learning Engineer">Machine Learning Engineer</option>
                                                        <hr />
                                                        <option value="Artificial Intelligence Specialist">Artificial Intelligence Specialist</option>
                                                        <hr />
                                                        <option value="Cybersecurity Analyst">ITCybersecurity AnalystI</option>
                                                        <hr />
                                                        <option value="Information Security Consultant">Information Security Consultant</option>
                                                        <hr />
                                                        <option value="System Integration Specialist">System Integration Specialist</option>
                                                        <hr />
                                                        <option value="Network Engineer">Network Engineer</option>
                                                        <hr />
                                                        <option value="VoIP Engineer">VoIP Engineer</option>
                                                        <hr />
                                                        <option value="Remote Desktop Support Technician">Remote Desktop Support Technician</option>
                                                        <hr />
                                                        <option value="Technical Writer (IT Documentation)">Technical Writer (IT Documentation)</option>
                                                        <hr />
                                                        <option value="IT Security Analyst">IT Security Analyst</option>
                                                        <hr />
                                                        <option value="IT Project Manager">IT Project Manager</option>
                                                        <hr />
                                                        <option value="IT Consultant">IT Consultant</option>
                                                        <hr />
                                                        <option value="IT Auditor">IT Auditor</option>
                                                        <hr />
                                                        <option value="IT Trainer/Instructor">IT Trainer/Instructor</option>
                                                        <hr />
                                                        <option value="IT Sales Representative">IT Sales Representative</option>
                                                        <hr />
                                                        <option value="IT Recruiter">IT Recruiter</option>
                                                        <hr />
                                                        <option value="IT Procurement Specialist">IT Procurement Specialist</option>
                                                        <hr />
                                                        <option value="IT Asset Manager">IT Asset Manager</option>
                                                        <hr />
                                                        <option value="IT Governance Specialist">IT Governance Specialist</option>
                                                        <hr />
                                                        <option value="IT Risk Analyst">IT Risk Analyst</option>
                                                        <hr />
                                                        <option value="IT Compliance Officer">IT Compliance Officer</option>
                                                        <hr />
                                                        <option value="IT Business Analyst">IT Business Analyst</option>
                                                        <hr />
                                                        <option value="IT Service Delivery Manager">IT Service Delivery Manager</option>
                                                        <hr />
                                                        <option value="IT Operations Manager">IT Operations Manager</option>
                                                        <hr />
                                                        <option value="IT Support Specialist">IT Support Specialist</option>
                                                        <hr />
                                                        <option value="IT Disaster Recovery Specialist">IT Disaster Recovery Specialist</option>
                                                        <hr />
                                                        <option value="IT Change Management Specialist">IT Change Management Specialist</option>
                                                        <hr />
                                                        <option value="IT Architect">IT Architect</option>
                                                        <hr />
                                                        <option value="IT Business Development Manager">IT Business Development Manager</option>
                                                        <hr />
                                                        <option value="IT Account Manager">IT Account Manager</option>
                                                        <hr />
                                                        <option value="IT Customer Success Manager">IT Customer Success Manager</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.DreamCareer === "Hospitality and allied"
                                                    ?
                                                    <>
                                                        <hr />
                                                        <option value="Hotel Manager">Hotel Manager</option>
                                                        <hr />
                                                        <option value="General Manager (Hospitality)">General Manager (Hospitality)</option>
                                                        <hr />
                                                        <option value="Front Office Manager">Front Office Manager</option>
                                                        <hr />
                                                        <option value="Guest Relations Manager">Guest Relations Manager</option>
                                                        <hr />
                                                        <option value="Concierge">Concierge</option>
                                                        <hr />
                                                        <option value="Reservations Manager">Reservations Manager</option>
                                                        <hr />
                                                        <option value="Revenue Manager">Revenue Manager</option>
                                                        <hr />
                                                        <option value="Housekeeping Manager">Housekeeping Manager</option>
                                                        <hr />
                                                        <option value="Executive Housekeeper">Executive Housekeeper</option>
                                                        <hr />
                                                        <option value="Front Desk Receptionist">Front Desk Receptionist</option>
                                                        <hr />
                                                        <option value="Guest Service Agent">Guest Service Agent</option>
                                                        <hr />
                                                        <option value="Bellhop/Porter">Bellhop/Porter</option>
                                                        <hr />
                                                        <option value="Valet Attendant">Valet Attendant</option>
                                                        <hr />
                                                        <option value="Room Attendant/Housekeeper">Room Attendant/Housekeeper</option>
                                                        <hr />
                                                        <option value="Laundry Attendant">Laundry Attendant</option>
                                                        <hr />
                                                        <option value="Maintenance Technician (Hospitality)">Maintenance Technician (Hospitality)</option>
                                                        <hr />
                                                        <option value="Food and Beverage Manager">Food and Beverage Manager</option>
                                                        <hr />
                                                        <option value="Restaurant Manager">Restaurant Manager</option>
                                                        <hr />
                                                        <option value="Banquet Manager">Banquet Manager</option>
                                                        <hr />
                                                        <option value="Bar Manager">Bar Manager</option>
                                                        <hr />
                                                        <option value="Sommelier (Wine Steward)">Sommelier (Wine Steward)</option>
                                                        <hr />
                                                        <option value="Bartender">Bartender</option>
                                                        <hr />
                                                        <option value="Waiter/Waitress">Waiter/Waitress</option>
                                                        <hr />
                                                        <option value="Host/Hostess">Host/Hostess</option>
                                                        <hr />
                                                        <option value="Catering Manager">Catering Manager</option>
                                                        <hr />
                                                        <option value="Event Planner">Event Planner</option>
                                                        <hr />
                                                        <option value="Conference Services Manager">Conference Services Manager</option>
                                                        <hr />
                                                        <option value="Spa Manager">Spa Manager</option>
                                                        <hr />
                                                        <option value="Spa Therapist">Spa Therapist</option>
                                                        <hr />
                                                        <option value="Fitness Center Manager">Fitness Center Manager</option>
                                                        <hr />
                                                        <option value="Activities Coordinator">Activities Coordinator</option>
                                                        <hr />
                                                        <option value="Entertainment Manager">Entertainment Manager</option>
                                                        <hr />
                                                        <option value="Concierge Supervisor">Concierge Supervisor</option>
                                                        <hr />
                                                        <option value="Guest Services Supervisor">Guest Services Supervisor</option>
                                                        <hr />
                                                        <option value="Revenue Analyst">Revenue Analyst</option>
                                                        <hr />
                                                        <option value="Sales Manager (Hospitality)">Sales Manager (Hospitality)</option>
                                                        <hr />
                                                        <option value="Marketing Manager (Hospitality)">Marketing Manager (Hospitality)</option>
                                                        <hr />
                                                        <option value="Public Relations Manager (Hospitality)">Public Relations Manager (Hospitality)</option>
                                                        <hr />
                                                        <option value="Revenue Management Analyst">Revenue Management Analyst</option>
                                                        <hr />
                                                        <option value="Human Resources Manager (Hospitality)">Human Resources Manager (Hospitality)</option>
                                                        <hr />
                                                        <option value="Training Manager (Hospitality)">Training Manager (Hospitality)</option>
                                                        <hr />
                                                        <option value="Purchasing Manager (Hospitality)">Purchasing Manager (Hospitality)</option>
                                                        <hr />
                                                        <option value="Financial Controller (Hospitality)">Financial Controller (Hospitality)</option>
                                                        <hr />
                                                        <option value="Accounting Manager (Hospitality)">Accounting Manager (Hospitality)</option>
                                                        <hr />
                                                        <option value="IT Manager (Hospitality)">IT Manager (Hospitality)</option>
                                                        <hr />
                                                        <option value="Reservation Sales Agent">Reservation Sales Agent</option>
                                                        <hr />
                                                        <option value="Night Auditor">Night Auditor</option>
                                                        <hr />
                                                        <option value="Security Officer (Hospitality)">Security Officer (Hospitality)</option>
                                                        <hr />
                                                        <option value="Loss Prevention Manager">Loss Prevention Manager</option>
                                                        <hr />
                                                        <option value="Sustainability Manager (Hospitality)">Sustainability Manager (Hospitality)</option>
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
                                        userData.DreamCareer === "Distribution and Retail"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherDreamCareerField']} required onChange={(e) => setUserData({ ...userData, "OtherDreamCareerField": e.target.value })} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                    {
                                        userData.DreamCareerField === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherDreamCareerField']} required onChange={(e) => setUserData({ ...userData, "OtherDreamCareerField": e.target.value })} name="name" id="name" />
                                            </div>
                                            : ""
                                    }


                                </div>
                            </>
                        :
                        ""
                }


            </div>


            <div className="indiDetails">
                <label htmlFor="email">What factors influence your career aspirations?</label>
                <div className="customSelect">

                    <select value={userData['InfluenceFactor']} required onChange={(e) => setUserData({ ...userData, "InfluenceFactor": e.target.value })}>
                        <option value="">Select Option</option>
                        <hr />
                        <option value="Personal interests and passions">Personal interests and passions</option>
                        <hr />
                        <option value="Financial stability and earning potential">Financial stability and earning potential</option>
                        <hr />
                        <option value="Opportunities for career growth and advancement">Opportunities for career growth and advancement</option>
                        <hr />
                        <option value="Desire to make a positive impact on society">Desire to make a positive impact on society</option>
                        <hr />
                        <option value="Influence of family or peers">Influence of family or peers</option>
                        <hr />
                        <option value="Availability of job opportunities in the local area">Availability of job opportunities in the local area</option>
                        <hr />
                        <option value="Skills and Abilities">Skills and Abilities</option>
                        <hr />
                        <option value="Education and Qualifications">Education and Qualifications</option>
                        <hr />
                        <option value="Role Models and Influential Figures">Role Models and Influential Figures</option>
                        <hr />
                        <option value="Economic Factors">Economic Factors</option>
                        <hr />
                        <option value="Work-Life Balance">Work-Life Balance</option>
                        <hr />
                        <option value="Societal Trends and Market Demand">Societal Trends and Market Demand</option>
                        <hr />
                        <option value="Personal Values and Ethical Considerations">Personal Values and Ethical Considerations</option>
                        <hr />
                        <option value="Career Goals and Long-Term Vision">Career Goals and Long-Term Vision</option>
                        <hr />
                        <option value="Other">Other (please specify)</option>
                    </select>
                    <span className="customArrow">
                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                    </span>
                </div>
                {
                    userData.InfluenceFactor === "Other"
                        ?
                        <div className='other'>
                            <h5>
                                Specify:
                            </h5>
                            <input type="text" value={userData['OtherInfluenceFactor']} required onChange={(e) => setUserData({ ...userData, "OtherInfluenceFactor": e.target.value })} name="name" id="name" />
                        </div>
                        : ""
                }


            </div>
            <div className="indiDetails">
                <label htmlFor="email">On a scale of 1 to 5, how confident are you in achieving your career goals?</label>
                <div className="customSelect">

                    <select value={userData['Scale']} required onChange={(e) => setUserData({ ...userData, "Scale": e.target.value })}>
                        <option value="">Select Option</option>
                        <hr />
                        <option value="Not confident at all (1)">Not confident at all (1)</option>
                        <hr />
                        <option value="Slightly confident (2)">Slightly confident (2)</option>
                        <hr />
                        <option value="Moderately confident (3)">Moderately confident (3)</option>
                        <hr />
                        <option value="Very confident (4)">Very confident (4)</option>
                        <hr />
                        <option value="Extremely confident (5)">Extremely confident (5)</option>
                    </select>
                    <span className="customArrow">
                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                    </span>
                </div>



            </div>


            <h3>
                Education and Training Preferences :
            </h3>

            <div className="indiDetails">
                <label htmlFor="email">How supportive do you think the government and local authorities are in promoting youth employment and entrepreneurship in Jammu and Kashmir?</label>
                <div className="customSelect">

                    <select value={userData['GovSupport']} required onChange={(e) => setUserData({ ...userData, "GovSupport": e.target.value })}>
                        <option value="">Select Option</option>
                        <hr />
                        <option value="Very supportive">Very supportive</option>
                        <hr />
                        <option value="Supportive">Supportive</option>
                        <hr />
                        <option value="Neutral">Neutral</option>
                        <hr />
                        <option value="Not supportive">Not supportive</option>
                        <hr />
                        <option value="Not at all supportive">Not at all supportive</option>
                    </select>
                    <span className="customArrow">
                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                    </span>
                </div>
            </div>
            {
                userData.GovSupport
                    ?
                    <div className="indiDetails">
                        <label htmlFor="email">Are you aware of the listed skill development schemes/training programmes?</label>
                        <div className="customSelect">

                            <select value={userData['GovScheme']} required onChange={(e) => setUserData({ ...userData, "GovScheme": e.target.value })}>
                                <option value="">Select Option</option>
                                <hr />
                                <option value="Pradhan Mantri Kaushal Vikas Yojana (PMKVY)">Pradhan Mantri Kaushal Vikas Yojana (PMKVY)</option>
                                <hr />
                                <option value="Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU GKY)">Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU GKY)</option>
                                <hr />
                                <option value="Apprenticeship Training Scheme ">Apprenticeship Training Scheme </option>
                                <hr />
                                <option value="Craftsman Training Scheme (CTS)">Craftsman Training Scheme (CTS)</option>
                                <hr />
                                <option value="Skill Strengthening for Industrial Value Enhancement (STRIVE)">Skill Strengthening for Industrial Value Enhancement (STRIVE)</option>
                                <hr />
                                <option value="Hunar Se Rozar">Hunar Se Rozar</option>
                            </select>
                            <span className="customArrow">
                                {/* <img className="logo" src={arrow} alt="arrow" /> */}
                            </span>
                        </div>
                    </div>
                    : ""
            }
            <div className="indiDetails">
                <label htmlFor="email">Have you received any formal training or education related to entrepreneurship or job skills development?</label>
                <div className="customSelect">

                    <select value={userData['FormalTrainEdu']} required onChange={(e) => setUserData({ ...userData, "FormalTrainEdu": e.target.value })}>
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
                userData.FormalTrainEdu === "Yes"
                    ?
                    <div className="indiDetails">
                        <label htmlFor="email">Educational or Training Program</label>
                        <div className="customSelect">

                            <select value={userData['FTEduTrainProg']} required onChange={(e) => setUserData({ ...userData, "FTEduTrainProg": e.target.value })}>
                                <option value="">Select Option</option>
                                <hr />
                                <option value="Traditional college/university degree programs">Traditional college/university degree programs</option>
                                <hr />
                                <option value="Vocational/technical training programs">Vocational/technical training programs</option>
                                <hr />
                                <option value="Online courses or certifications">Online courses or certifications</option>
                                <hr />
                                <option value="Apprenticeship programs">Apprenticeship programs</option>
                                <hr />
                                <option value="Entrepreneurship training">Entrepreneurship training</option>
                                <hr />
                                <option value="Other">Other (please specify)</option>
                            </select>
                            <span className="customArrow">
                                {/* <img className="logo" src={arrow} alt="arrow" /> */}
                            </span>
                        </div>
                        {
                            userData.FTEduTrainProg === "Traditional college/university degree programs"
                                ?
                                <>
                                    <div className="indiDetails">
                                        <label htmlFor="email">Programes</label>
                                        <div className="customSelect">

                                            <select value={userData['FTClgUniDegreeProg']} required onChange={(e) => setUserData({ ...userData, "FTClgUniDegreeProg": e.target.value })}>
                                                <option value="">Select Option</option>
                                                <hr />
                                                <option value="Under Graduate">Under Graduate</option>
                                                <hr />
                                                <option value="Post Graduate">Post Graduate</option>
                                                <hr />
                                                <option value="Other">Other (please specify)</option>
                                            </select>
                                            <span className="customArrow">
                                                {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                            </span>
                                        </div>
                                        {
                                            userData.FTClgUniDegreeProg === "Under Graduate"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Course</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTUnderGradCourseProg']} required onChange={(e) => setUserData({ ...userData, "FTUnderGradCourseProg": e.target.value })}>
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
                                                            userData.FTUnderGradCourseProg === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTUnderGradCourseProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTUnderGradCourseProg": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Field</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTUnderGradFieldProg']} required onChange={(e) => setUserData({ ...userData, "FTUnderGradFieldProg": e.target.value })}>
                                                                <option value="">Select Option</option>
                                                                <hr />
                                                                {
                                                                    userData.FTUnderGradCourseProg === "Bachelor of Arts (B.A.)"
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
                                                                    userData.FTUnderGradCourseProg === "Bachelor of Science (B.Sc.)"
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
                                                                    userData.FTUnderGradCourseProg === "Bachelor of Commerce (B.Com.)"
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
                                                                    userData.FTUnderGradCourseProg === "Professional Degrees"
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
                                                            userData.FTUnderGradFieldProg === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTUnderGradFieldProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTUnderGradFieldProg": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div></>
                                                : ""
                                        }
                                        {/* under grad fields */}
                                        {
                                            userData.FTUnderGradFieldProg === "Bachelor of Engineering (B.E.)"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Branch</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTUnderGradBranchProg']} required onChange={(e) => setUserData({ ...userData, "FTUnderGradBranchProg": e.target.value })}>
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
                                                            userData.FTUnderGradBranchProg === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTUnderGradBranchProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTUnderGradBranchProg": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div>
                                                </>
                                                : ""
                                        }
                                        {
                                            userData.FTUnderGradFieldProg === "Bachelor of Technology (B.Tech.)"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Branch</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTUnderGradBranchProg']} required onChange={(e) => setUserData({ ...userData, "FTUnderGradBranchProg": e.target.value })}>
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
                                                            userData.FTUnderGradBranchProg === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTUnderGradBranchProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTUnderGradBranchProg": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div>
                                                </>
                                                : ""
                                        }
                                        {
                                            userData.FTClgUniDegreeProg === "Post Graduate"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Course</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTPGCourseProg']} required onChange={(e) => setUserData({ ...userData, "FTPGCourseProg": e.target.value })}>
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
                                                            userData.FTPGCourseProg === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTPGCourseProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTPGCourseProg": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Field</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTPGFieldProg']} required onChange={(e) => setUserData({ ...userData, "FTPGFieldProg": e.target.value })}>
                                                                <option value="">Select Option</option>
                                                                <hr />
                                                                {
                                                                    userData.FTPGCourseProg === "Masters in Arts (M.A.)"
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
                                                                    userData.FTPGCourseProg === "Masters in Science (M.Sc.)"
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
                                                                    userData.FTPGCourseProg === "Masters in Commerce (M.Com.)"
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
                                                                    userData.FTPGCourseProg === "Professional Degrees"
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
                                                            userData.FTPGFieldProg === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTPGFieldProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTPGFieldProg": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div></>
                                                : ""
                                        }
                                        {/* under grad fields */}
                                        {
                                            userData.FTPGFieldProg === "Masters of Engineering (M.E.)"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Branch</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTPGBranchProg']} required onChange={(e) => setUserData({ ...userData, "FTPGBranchProg": e.target.value })}>
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
                                                            userData.FTPGBranchProg === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTPGBranchProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTPGBranchProg": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div>
                                                </>
                                                : ""
                                        }
                                        {
                                            userData.FTPGFieldProg === "Masters of Technology (M.Tech.)"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Branch</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTPGBranchProg']} required onChange={(e) => setUserData({ ...userData, "FTPGBranchProg": e.target.value })}>
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
                                                            userData.FTPGBranchProg === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTPGBranchProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTPGBranchProg": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div>
                                                </>
                                                : ""
                                        }

                                        {
                                            userData.FTClgUniDegreeProg === "Other"
                                                ?
                                                <div className='other'>
                                                    <h5>
                                                        Specify:
                                                    </h5>
                                                    <input type="text" value={userData['OtherFTClgUniDegreeProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTClgUniDegreeProg": e.target.value })} name="name" id="name" />
                                                </div>
                                                : ""
                                        }

                                    </div>
                                </>
                                : ""
                        }
                        {
                            userData.FTEduTrainProg === "Vocational/technical training programs"
                                ?
                                <>
                                    <div className="indiDetails">
                                        <label htmlFor="email">Courses</label>
                                        <div className="customSelect">

                                            <select value={userData['FTVocTechProg']} required onChange={(e) => setUserData({ ...userData, "FTVocTechProg": e.target.value })}>
                                                <option value="">Select Option</option>
                                                <hr />
                                                <option value="Courses Offered By ITIs">Courses Offered By ITIs</option>
                                                <hr />
                                                <option value="Courses Offered By Polytechnics">Courses Offered By Polytechnics</option>
                                                <hr />
                                                <option value="Other">Other (please specify)</option>
                                            </select>
                                            <span className="customArrow">
                                                {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                            </span>
                                        </div>

                                        {
                                            userData.FTVocTechProg === "Courses Offered By ITIs"
                                                ? <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Course</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTVTPCourseByIti']} required onChange={(e) => setUserData({ ...userData, "FTVTPCourseByIti": e.target.value })}>
                                                                <option value="">Select Option</option>
                                                                <hr />
                                                                <option value="Electrician">Electrician</option>
                                                                <hr />
                                                                <option value="Fitter">Fitter</option>
                                                                <hr />
                                                                <option value="Mechanic (Motor Vehicle)">Mechanic (Motor Vehicle)</option>
                                                                <hr />
                                                                <option value="Welder (Gas & Electric)">Welder (Gas & Electric)</option>
                                                                <hr />
                                                                <option value="Turner">Turner</option>
                                                                <hr />
                                                                <option value="Machinist">Machinist</option>
                                                                <hr />
                                                                <option value="Draughtsman (Civil/Mechanical)">Draughtsman (Civil/Mechanical)</option>
                                                                <hr />
                                                                <option value="Electronics Mechanic">Electronics Mechanic</option>
                                                                <hr />
                                                                <option value="Instrument Mechanic">Instrument Mechanic</option>
                                                                <hr />
                                                                <option value="Refrigeration and Air Conditioning Mechanic">Refrigeration and Air Conditioning Mechanic</option>
                                                                <hr />
                                                                <option value="Information Technology and Electronics System Maintenance (ITESM)">Information Technology and Electronics System Maintenance (ITESM)</option>
                                                                <hr />
                                                                <option value="Computer Operator and Programming Assistant (COPA)">Computer Operator and Programming Assistant (COPA)</option>
                                                                <hr />
                                                                <option value="Mechanic Diesel Engine">Mechanic Diesel Engine</option>
                                                                <hr />
                                                                <option value="Carpenter">Carpenter</option>
                                                                <hr />
                                                                <option value="Plumber">Plumber</option>
                                                                <hr />
                                                                <option value="Surveyor">Surveyor</option>
                                                                <hr />
                                                                <option value="Mechanic Radio & Television (MRTV)">Mechanic Radio & Television (MRTV)</option>
                                                                <hr />
                                                                <option value="Mechanic Agricultural Machinery">Mechanic Agricultural Machinery</option>
                                                                <hr />
                                                                <option value="Mechanic Auto Electrical & Electronics">Mechanic Auto Electrical & Electronics</option>
                                                                <hr />
                                                                <option value="Mechanic Consumer Electronics Appliances">Mechanic Consumer Electronics Appliances</option>
                                                                <hr />
                                                                <option value="Other">Other (please specify)</option>

                                                            </select>
                                                            <span className="customArrow">
                                                                {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                                            </span>
                                                        </div>
                                                        {
                                                            userData.FTVTPCourseByIti === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTVTPCourseByIti']} required onChange={(e) => setUserData({ ...userData, "OtherFTVTPCourseByIti": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div>
                                                </>
                                                : ""
                                        }
                                        {
                                            userData.FTVocTechProg === "Courses Offered By Polytechnics"
                                                ? <>

                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Course</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTVTPCourseByPoly']} required onChange={(e) => setUserData({ ...userData, "FTVTPCourseByPoly": e.target.value })}>
                                                                <option value="">Select Option</option>
                                                                <hr />
                                                                <option value="Civil Engineering">Civil Engineering</option>
                                                                <hr />
                                                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                                                <hr />
                                                                <option value="Electrical Engineering">Electrical Engineering</option>
                                                                <hr />
                                                                <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                                                                <hr />
                                                                <option value="Computer Engineering">Computer Engineering</option>
                                                                <hr />
                                                                <option value="Information Technology">Information Technology</option>
                                                                <hr />
                                                                <option value="Automobile Engineering">Automobile Engineering</option>
                                                                <hr />
                                                                <option value="Chemical Engineering">Chemical Engineering</option>
                                                                <hr />
                                                                <option value="Instrumentation Engineering">Instrumentation Engineering</option>
                                                                <hr />
                                                                <option value="Architecture Assistantship">Architecture Assistantship</option>
                                                                <hr />
                                                                <option value="Mining Engineering">Mining Engineering</option>
                                                                <hr />
                                                                <option value="Production Engineering">Production Engineering</option>
                                                                <hr />
                                                                <option value="Textile Engineering">Textile Engineering</option>
                                                                <hr />
                                                                <option value="Agricultural Engineering">Agricultural Engineering</option>
                                                                <hr />
                                                                <option value="Environmental Engineering">Environmental Engineering</option>
                                                                <hr />
                                                                <option value="Plastic Technology">Plastic Technology</option>
                                                                <hr />
                                                                <option value="Ceramic Technology">Ceramic Technology</option>
                                                                <hr />
                                                                <option value="Refrigeration and Air Conditioning Engineering">Refrigeration and Air Conditioning Engineering</option>
                                                                <hr />
                                                                <option value="Mechatronics Engineering">Mechatronics Engineering</option>
                                                                <hr />
                                                                <option value="Marine Engineering">Marine Engineering</option>
                                                                <hr />
                                                                <option value="Other">Other (please specify)</option>

                                                            </select>
                                                            <span className="customArrow">
                                                                {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                                            </span>
                                                        </div>
                                                        {
                                                            userData.FTVTPCourseByPoly === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTVTPCourseByPoly']} required onChange={(e) => setUserData({ ...userData, "OtherFTVTPCourseByPoly": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div>
                                                </>
                                                : ""
                                        }

                                        {
                                            userData.FTVocTechProg === "Other"
                                                ?
                                                <div className='other'>
                                                    <h5>
                                                        Specify:
                                                    </h5>
                                                    <input type="text" value={userData['OtherFTVocTechProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTVocTechProg": e.target.value })} name="name" id="name" />
                                                </div>
                                                : ""
                                        }

                                    </div>
                                </>
                                : ""
                        }
                        {
                            userData.FTEduTrainProg === "Online courses or certifications"
                                ?
                                <>
                                    <div className="indiDetails">
                                        <label htmlFor="email">Online courses/certifications</label>
                                        <div className="customSelect">

                                            <select value={userData['FTOCCProg']} required onChange={(e) => setUserData({ ...userData, "FTOCCProg": e.target.value })}>
                                                <option value="">Select Option</option>
                                                <hr />
                                                <option value="Under Graduate">Under Graduate</option>
                                                <hr />
                                                <option value="Post Graduate">Post Graduate</option>
                                                <hr />
                                                <option value="Other">Other (please specify)</option>
                                            </select>
                                            <span className="customArrow">
                                                {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                            </span>
                                        </div>
                                        {
                                            userData.FTOCCProg === "Under Graduate"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Course</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTOCCUnderGradCourseProg']} required onChange={(e) => setUserData({ ...userData, "FTOCCUnderGradCourseProg": e.target.value })}>
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
                                                            userData.FTOCCUnderGradCourseProg === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTOCCUnderGradCourseProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTOCCUnderGradCourseProg": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Field</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTOCCUnderGradFieldProg']} required onChange={(e) => setUserData({ ...userData, "FTOCCUnderGradFieldProg": e.target.value })}>
                                                                <option value="">Select Option</option>
                                                                <hr />
                                                                {
                                                                    userData.FTOCCUnderGradCourseProg === "Bachelor of Arts (B.A.)"
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
                                                                    userData.FTOCCUnderGradCourseProg === "Bachelor of Science (B.Sc.)"
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
                                                                    userData.FTOCCUnderGradCourseProg === "Bachelor of Commerce (B.Com.)"
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
                                                                    userData.FTOCCUnderGradCourseProg === "Professional Degrees"
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
                                                            userData.FTOCCUnderGradFieldProg === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTOCCUnderGradFieldProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTOCCUnderGradFieldProg": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div></>
                                                : ""
                                        }
                                        {/* under grad fields */}
                                        {
                                            userData.FTOCCUnderGradFieldProg === "Bachelor of Engineering (B.E.)"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Branch</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTOCCUnderGradBranchProg']} required onChange={(e) => setUserData({ ...userData, "FTOCCUnderGradBranchProg": e.target.value })}>
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
                                                            userData.FTOCCUnderGradBranchProg === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTOCCUnderGradBranchProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTOCCUnderGradBranchProg": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div>
                                                </>
                                                : ""
                                        }
                                        {
                                            userData.FTOCCUnderGradFieldProg === "Bachelor of Technology (B.Tech.)"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Branch</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTOCCUnderGradBranchProg']} required onChange={(e) => setUserData({ ...userData, "FTOCCUnderGradBranchProg": e.target.value })}>
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
                                                            userData.FTOCCUnderGradBranchProg === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTOCCUnderGradBranchProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTOCCUnderGradBranchProg": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div>
                                                </>
                                                : ""
                                        }
                                        {
                                            userData.FTOCCProg === "Post Graduate"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Course</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTOCCPGCourseProg']} required onChange={(e) => setUserData({ ...userData, "FTOCCPGCourseProg": e.target.value })}>
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
                                                            userData.FTOCCPGCourseProg === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTOCCPGCourseProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTOCCPGCourseProg": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Field</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTOCCPGFieldProg']} required onChange={(e) => setUserData({ ...userData, "FTOCCPGFieldProg": e.target.value })}>
                                                                <option value="">Select Option</option>
                                                                <hr />
                                                                {
                                                                    userData.FTOCCPGCourseProg === "Masters in Arts (M.A.)"
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
                                                                    userData.FTOCCPGCourseProg === "Masters in Science (M.Sc.)"
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
                                                                    userData.FTOCCPGCourseProg === "Masters in Commerce (M.Com.)"
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
                                                                    userData.FTOCCPGCourseProg === "Professional Degrees"
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
                                                            userData.FTOCCPGFieldProg === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTOCCPGFieldProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTOCCPGFieldProg": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div></>
                                                : ""
                                        }
                                        {/* under grad fields */}
                                        {
                                            userData.FTOCCPGFieldProg === "Masters of Engineering (M.E.)"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Branch</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTOCCPGBranchProg']} required onChange={(e) => setUserData({ ...userData, "FTOCCPGBranchProg": e.target.value })}>
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
                                                            userData.FTOCCPGBranchProg === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTOCCPGBranchProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTOCCPGBranchProg": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div>
                                                </>
                                                : ""
                                        }
                                        {
                                            userData.FTOCCPGFieldProg === "Masters of Technology (M.Tech.)"
                                                ?
                                                <>
                                                    <div className="indiDetails">
                                                        <label htmlFor="email">Branch</label>
                                                        <div className='customSelect'>
                                                            <select value={userData['FTOCCPGBranchProg']} required onChange={(e) => setUserData({ ...userData, "FTOCCPGBranchProg": e.target.value })}>
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
                                                            userData.FTOCCPGBranchProg === "Other"
                                                                ?
                                                                <div className='other'>
                                                                    <h5>
                                                                        Specify:
                                                                    </h5>
                                                                    <input type="text" value={userData['OtherFTOCCPGBranchProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTOCCPGBranchProg": e.target.value })} name="name" id="name" />
                                                                </div>
                                                                : ""
                                                        }
                                                    </div>
                                                </>
                                                : ""
                                        }

                                        {
                                            userData.FTOCCProg === "Other"
                                                ?
                                                <div className='other'>
                                                    <h5>
                                                        Specify:
                                                    </h5>
                                                    <input type="text" value={userData['OtherFTOCCProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTOCCProg": e.target.value })} name="name" id="name" />
                                                </div>
                                                : ""
                                        }

                                    </div>
                                </>
                                : ""
                        }
                        {
                            userData.FTEduTrainProg === "Apprenticeship programs"
                                ?
                                <>
                                    <div className="indiDetails">
                                        <label htmlFor="email">Programes</label>
                                        <div className="customSelect">

                                            <select value={userData['FTAppProg']} required onChange={(e) => setUserData({ ...userData, "FTAppProg": e.target.value })}>
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
                                                {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                            </span>
                                        </div>


                                        {
                                            userData.FTAppProg === "Other"
                                                ?
                                                <div className='other'>
                                                    <h5>
                                                        Specify:
                                                    </h5>
                                                    <input type="text" value={userData['OtherFTAppProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTAppProg": e.target.value })} name="name" id="name" />
                                                </div>
                                                : ""
                                        }

                                    </div>
                                </>
                                : ""
                        }
                        {
                            userData.FTEduTrainProg === "Entrepreneurship training"
                                ?
                                <>
                                    <div className="indiDetails">

                                        <div className='other'>
                                            <h5>
                                                Specify:
                                            </h5>
                                            <input type="text" value={userData['FTEnterpreProg']} required onChange={(e) => setUserData({ ...userData, "FTEnterpreProg": e.target.value })} name="name" id="name" />
                                        </div>
                                    </div>
                                </>
                                : ""
                        }
                        {
                            userData.FTEduTrainProg === "Other"
                                ?
                                <div className='other'>
                                    <h5>
                                        Specify:
                                    </h5>
                                    <input type="text" value={userData['OtherFTEduTrainProg']} required onChange={(e) => setUserData({ ...userData, "OtherFTEduTrainProg": e.target.value })} name="name" id="name" />
                                </div>
                                : ""
                        }
                    </div>
                    : ""
            }
            
            <div className="indiDetails">
                <label htmlFor="email">What type of educational or training programs are you interested in pursuing?</label>
                <div className="customSelect">

                    <select value={userData['EduTrainProg']} required onChange={(e) => setUserData({ ...userData, "EduTrainProg": e.target.value })}>
                        <option value="">Select Option</option>
                        <hr />
                        <option value="Traditional college/university degree programs">Traditional college/university degree programs</option>
                        <hr />
                        <option value="Vocational/technical training programs">Vocational/technical training programs</option>
                        <hr />
                        <option value="Online courses or certifications">Online courses or certifications</option>
                        <hr />
                        <option value="Apprenticeship programs">Apprenticeship programs</option>
                        <hr />
                        <option value="Entrepreneurship training">Entrepreneurship training</option>
                        <hr />
                        <option value="Other">Other (please specify)</option>
                    </select>
                    <span className="customArrow">
                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                    </span>
                </div>
                {
                    userData.EduTrainProg === "Traditional college/university degree programs"
                        ?
                        <>
                            <div className="indiDetails">
                                <label htmlFor="email">Programes</label>
                                <div className="customSelect">

                                    <select value={userData['ClgUniDegreeProg']} required onChange={(e) => setUserData({ ...userData, "ClgUniDegreeProg": e.target.value })}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="Under Graduate">Under Graduate</option>
                                        <hr />
                                        <option value="Post Graduate">Post Graduate</option>
                                        <hr />
                                        <option value="Other">Other (please specify)</option>
                                    </select>
                                    <span className="customArrow">
                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                    </span>
                                </div>
                                {
                                    userData.ClgUniDegreeProg === "Under Graduate"
                                        ?
                                        <>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Course</label>
                                                <div className='customSelect'>
                                                    <select value={userData['UnderGradCourseProg']} required onChange={(e) => setUserData({ ...userData, "UnderGradCourseProg": e.target.value })}>
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
                                                    userData.UnderGradCourseProg === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherUnderGradCourseProg']} required onChange={(e) => setUserData({ ...userData, "OtherUnderGradCourseProg": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Field</label>
                                                <div className='customSelect'>
                                                    <select value={userData['UnderGradFieldProg']} required onChange={(e) => setUserData({ ...userData, "UnderGradFieldProg": e.target.value })}>
                                                        <option value="">Select Option</option>
                                                        <hr />
                                                        {
                                                            userData.UnderGradCourseProg === "Bachelor of Arts (B.A.)"
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
                                                            userData.UnderGradCourseProg === "Bachelor of Science (B.Sc.)"
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
                                                            userData.UnderGradCourseProg === "Bachelor of Commerce (B.Com.)"
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
                                                            userData.UnderGradCourseProg === "Professional Degrees"
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
                                                    userData.UnderGradFieldProg === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherUnderGradFieldProg']} required onChange={(e) => setUserData({ ...userData, "OtherUnderGradFieldProg": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div></>
                                        : ""
                                }
                                {/* under grad fields */}
                                {
                                    userData.UnderGradFieldProg === "Bachelor of Engineering (B.E.)"
                                        ?
                                        <>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Branch</label>
                                                <div className='customSelect'>
                                                    <select value={userData['UnderGradBranchProg']} required onChange={(e) => setUserData({ ...userData, "UnderGradBranchProg": e.target.value })}>
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
                                                    userData.UnderGradBranchProg === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherUnderGradBranchProg']} required onChange={(e) => setUserData({ ...userData, "OtherUnderGradBranchProg": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div>
                                        </>
                                        : ""
                                }
                                {
                                    userData.UnderGradFieldProg === "Bachelor of Technology (B.Tech.)"
                                        ?
                                        <>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Branch</label>
                                                <div className='customSelect'>
                                                    <select value={userData['UnderGradBranchProg']} required onChange={(e) => setUserData({ ...userData, "UnderGradBranchProg": e.target.value })}>
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
                                                    userData.UnderGradBranchProg === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherUnderGradBranchProg']} required onChange={(e) => setUserData({ ...userData, "OtherUnderGradBranchProg": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div>
                                        </>
                                        : ""
                                }
                                {
                                    userData.ClgUniDegreeProg === "Post Graduate"
                                        ?
                                        <>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Course</label>
                                                <div className='customSelect'>
                                                    <select value={userData['PGCourseProg']} required onChange={(e) => setUserData({ ...userData, "PGCourseProg": e.target.value })}>
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
                                                    userData.PGCourseProg === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherPGCourseProg']} required onChange={(e) => setUserData({ ...userData, "OtherPGCourseProg": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Field</label>
                                                <div className='customSelect'>
                                                    <select value={userData['PGFieldProg']} required onChange={(e) => setUserData({ ...userData, "PGFieldProg": e.target.value })}>
                                                        <option value="">Select Option</option>
                                                        <hr />
                                                        {
                                                            userData.PGCourseProg === "Masters in Arts (M.A.)"
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
                                                            userData.PGCourseProg === "Masters in Science (M.Sc.)"
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
                                                            userData.PGCourseProg === "Masters in Commerce (M.Com.)"
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
                                                            userData.PGCourseProg === "Professional Degrees"
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
                                                    userData.PGFieldProg === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherPGFieldProg']} required onChange={(e) => setUserData({ ...userData, "OtherPGFieldProg": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div></>
                                        : ""
                                }
                                {/* under grad fields */}
                                {
                                    userData.PGFieldProg === "Masters of Engineering (M.E.)"
                                        ?
                                        <>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Branch</label>
                                                <div className='customSelect'>
                                                    <select value={userData['PGBranchProg']} required onChange={(e) => setUserData({ ...userData, "PGBranchProg": e.target.value })}>
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
                                                    userData.PGBranchProg === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherPGBranchProg']} required onChange={(e) => setUserData({ ...userData, "OtherPGBranchProg": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div>
                                        </>
                                        : ""
                                }
                                {
                                    userData.PGFieldProg === "Masters of Technology (M.Tech.)"
                                        ?
                                        <>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Branch</label>
                                                <div className='customSelect'>
                                                    <select value={userData['PGBranchProg']} required onChange={(e) => setUserData({ ...userData, "PGBranchProg": e.target.value })}>
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
                                                    userData.PGBranchProg === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherPGBranchProg']} required onChange={(e) => setUserData({ ...userData, "OtherPGBranchProg": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div>
                                        </>
                                        : ""
                                }

                                {
                                    userData.ClgUniDegreeProg === "Other"
                                        ?
                                        <div className='other'>
                                            <h5>
                                                Specify:
                                            </h5>
                                            <input type="text" value={userData['OtherClgUniDegreeProg']} required onChange={(e) => setUserData({ ...userData, "OtherClgUniDegreeProg": e.target.value })} name="name" id="name" />
                                        </div>
                                        : ""
                                }

                            </div>
                        </>
                        : ""
                }
                {
                    userData.EduTrainProg === "Vocational/technical training programs"
                        ?
                        <>
                            <div className="indiDetails">
                                <label htmlFor="email">Courses</label>
                                <div className="customSelect">

                                    <select value={userData['VocTechProg']} required onChange={(e) => setUserData({ ...userData, "VocTechProg": e.target.value })}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="Courses Offered By ITIs">Courses Offered By ITIs</option>
                                        <hr />
                                        <option value="Courses Offered By Polytechnics">Courses Offered By Polytechnics</option>
                                        <hr />
                                        <option value="Other">Other (please specify)</option>
                                    </select>
                                    <span className="customArrow">
                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                    </span>
                                </div>

                                {
                                    userData.VocTechProg === "Courses Offered By ITIs"
                                        ? <>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Course</label>
                                                <div className='customSelect'>
                                                    <select value={userData['VTPCourseByIti']} required onChange={(e) => setUserData({ ...userData, "VTPCourseByIti": e.target.value })}>
                                                        <option value="">Select Option</option>
                                                        <hr />
                                                        <option value="Electrician">Electrician</option>
                                                        <hr />
                                                        <option value="Fitter">Fitter</option>
                                                        <hr />
                                                        <option value="Mechanic (Motor Vehicle)">Mechanic (Motor Vehicle)</option>
                                                        <hr />
                                                        <option value="Welder (Gas & Electric)">Welder (Gas & Electric)</option>
                                                        <hr />
                                                        <option value="Turner">Turner</option>
                                                        <hr />
                                                        <option value="Machinist">Machinist</option>
                                                        <hr />
                                                        <option value="Draughtsman (Civil/Mechanical)">Draughtsman (Civil/Mechanical)</option>
                                                        <hr />
                                                        <option value="Electronics Mechanic">Electronics Mechanic</option>
                                                        <hr />
                                                        <option value="Instrument Mechanic">Instrument Mechanic</option>
                                                        <hr />
                                                        <option value="Refrigeration and Air Conditioning Mechanic">Refrigeration and Air Conditioning Mechanic</option>
                                                        <hr />
                                                        <option value="Information Technology and Electronics System Maintenance (ITESM)">Information Technology and Electronics System Maintenance (ITESM)</option>
                                                        <hr />
                                                        <option value="Computer Operator and Programming Assistant (COPA)">Computer Operator and Programming Assistant (COPA)</option>
                                                        <hr />
                                                        <option value="Mechanic Diesel Engine">Mechanic Diesel Engine</option>
                                                        <hr />
                                                        <option value="Carpenter">Carpenter</option>
                                                        <hr />
                                                        <option value="Plumber">Plumber</option>
                                                        <hr />
                                                        <option value="Surveyor">Surveyor</option>
                                                        <hr />
                                                        <option value="Mechanic Radio & Television (MRTV)">Mechanic Radio & Television (MRTV)</option>
                                                        <hr />
                                                        <option value="Mechanic Agricultural Machinery">Mechanic Agricultural Machinery</option>
                                                        <hr />
                                                        <option value="Mechanic Auto Electrical & Electronics">Mechanic Auto Electrical & Electronics</option>
                                                        <hr />
                                                        <option value="Mechanic Consumer Electronics Appliances">Mechanic Consumer Electronics Appliances</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>

                                                    </select>
                                                    <span className="customArrow">
                                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                                    </span>
                                                </div>
                                                {
                                                    userData.VTPCourseByIti === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherVTPCourseByIti']} required onChange={(e) => setUserData({ ...userData, "OtherVTPCourseByIti": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div>
                                        </>
                                        : ""
                                }
                                {
                                    userData.VocTechProg === "Courses Offered By Polytechnics"
                                        ? <>

                                            <div className="indiDetails">
                                                <label htmlFor="email">Course</label>
                                                <div className='customSelect'>
                                                    <select value={userData['VTPCourseByPoly']} required onChange={(e) => setUserData({ ...userData, "VTPCourseByPoly": e.target.value })}>
                                                        <option value="">Select Option</option>
                                                        <hr />
                                                        <option value="Civil Engineering">Civil Engineering</option>
                                                        <hr />
                                                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                                                        <hr />
                                                        <option value="Electrical Engineering">Electrical Engineering</option>
                                                        <hr />
                                                        <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                                                        <hr />
                                                        <option value="Computer Engineering">Computer Engineering</option>
                                                        <hr />
                                                        <option value="Information Technology">Information Technology</option>
                                                        <hr />
                                                        <option value="Automobile Engineering">Automobile Engineering</option>
                                                        <hr />
                                                        <option value="Chemical Engineering">Chemical Engineering</option>
                                                        <hr />
                                                        <option value="Instrumentation Engineering">Instrumentation Engineering</option>
                                                        <hr />
                                                        <option value="Architecture Assistantship">Architecture Assistantship</option>
                                                        <hr />
                                                        <option value="Mining Engineering">Mining Engineering</option>
                                                        <hr />
                                                        <option value="Production Engineering">Production Engineering</option>
                                                        <hr />
                                                        <option value="Textile Engineering">Textile Engineering</option>
                                                        <hr />
                                                        <option value="Agricultural Engineering">Agricultural Engineering</option>
                                                        <hr />
                                                        <option value="Environmental Engineering">Environmental Engineering</option>
                                                        <hr />
                                                        <option value="Plastic Technology">Plastic Technology</option>
                                                        <hr />
                                                        <option value="Ceramic Technology">Ceramic Technology</option>
                                                        <hr />
                                                        <option value="Refrigeration and Air Conditioning Engineering">Refrigeration and Air Conditioning Engineering</option>
                                                        <hr />
                                                        <option value="Mechatronics Engineering">Mechatronics Engineering</option>
                                                        <hr />
                                                        <option value="Marine Engineering">Marine Engineering</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>

                                                    </select>
                                                    <span className="customArrow">
                                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                                    </span>
                                                </div>
                                                {
                                                    userData.VTPCourseByPoly === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherVTPCourseByPoly']} required onChange={(e) => setUserData({ ...userData, "OtherVTPCourseByPoly": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div>
                                        </>
                                        : ""
                                }

                                {
                                    userData.VocTechProg === "Other"
                                        ?
                                        <div className='other'>
                                            <h5>
                                                Specify:
                                            </h5>
                                            <input type="text" value={userData['OtherVocTechProg']} required onChange={(e) => setUserData({ ...userData, "OtherVocTechProg": e.target.value })} name="name" id="name" />
                                        </div>
                                        : ""
                                }

                            </div>
                        </>
                        : ""
                }
                {
                    userData.EduTrainProg === "Online courses or certifications"
                        ?
                        <>
                            <div className="indiDetails">
                                <label htmlFor="email">Online courses/certifications</label>
                                <div className="customSelect">

                                    <select value={userData['OCCProg']} required onChange={(e) => setUserData({ ...userData, "OCCProg": e.target.value })}>
                                        <option value="">Select Option</option>
                                        <hr />
                                        <option value="Under Graduate">Under Graduate</option>
                                        <hr />
                                        <option value="Post Graduate">Post Graduate</option>
                                        <hr />
                                        <option value="Other">Other (please specify)</option>
                                    </select>
                                    <span className="customArrow">
                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                    </span>
                                </div>
                                {
                                    userData.OCCProg === "Under Graduate"
                                        ?
                                        <>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Course</label>
                                                <div className='customSelect'>
                                                    <select value={userData['OCCUnderGradCourseProg']} required onChange={(e) => setUserData({ ...userData, "OCCUnderGradCourseProg": e.target.value })}>
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
                                                    userData.OCCUnderGradCourseProg === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherOCCUnderGradCourseProg']} required onChange={(e) => setUserData({ ...userData, "OtherOCCUnderGradCourseProg": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Field</label>
                                                <div className='customSelect'>
                                                    <select value={userData['OCCUnderGradFieldProg']} required onChange={(e) => setUserData({ ...userData, "OCCUnderGradFieldProg": e.target.value })}>
                                                        <option value="">Select Option</option>
                                                        <hr />
                                                        {
                                                            userData.OCCUnderGradCourseProg === "Bachelor of Arts (B.A.)"
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
                                                            userData.OCCUnderGradCourseProg === "Bachelor of Science (B.Sc.)"
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
                                                            userData.OCCUnderGradCourseProg === "Bachelor of Commerce (B.Com.)"
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
                                                            userData.OCCUnderGradCourseProg === "Professional Degrees"
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
                                                    userData.OCCUnderGradFieldProg === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherOCCUnderGradFieldProg']} required onChange={(e) => setUserData({ ...userData, "OtherOCCUnderGradFieldProg": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div></>
                                        : ""
                                }
                                {/* under grad fields */}
                                {
                                    userData.OCCUnderGradFieldProg === "Bachelor of Engineering (B.E.)"
                                        ?
                                        <>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Branch</label>
                                                <div className='customSelect'>
                                                    <select value={userData['OCCUnderGradBranchProg']} required onChange={(e) => setUserData({ ...userData, "OCCUnderGradBranchProg": e.target.value })}>
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
                                                    userData.OCCUnderGradBranchProg === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherOCCUnderGradBranchProg']} required onChange={(e) => setUserData({ ...userData, "OtherOCCUnderGradBranchProg": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div>
                                        </>
                                        : ""
                                }
                                {
                                    userData.OCCUnderGradFieldProg === "Bachelor of Technology (B.Tech.)"
                                        ?
                                        <>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Branch</label>
                                                <div className='customSelect'>
                                                    <select value={userData['OCCUnderGradBranchProg']} required onChange={(e) => setUserData({ ...userData, "OCCUnderGradBranchProg": e.target.value })}>
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
                                                    userData.OCCUnderGradBranchProg === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherOCCUnderGradBranchProg']} required onChange={(e) => setUserData({ ...userData, "OtherOCCUnderGradBranchProg": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div>
                                        </>
                                        : ""
                                }
                                {
                                    userData.OCCProg === "Post Graduate"
                                        ?
                                        <>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Course</label>
                                                <div className='customSelect'>
                                                    <select value={userData['OCCPGCourseProg']} required onChange={(e) => setUserData({ ...userData, "OCCPGCourseProg": e.target.value })}>
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
                                                    userData.OCCPGCourseProg === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherOCCPGCourseProg']} required onChange={(e) => setUserData({ ...userData, "OtherOCCPGCourseProg": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Field</label>
                                                <div className='customSelect'>
                                                    <select value={userData['OCCPGFieldProg']} required onChange={(e) => setUserData({ ...userData, "OCCPGFieldProg": e.target.value })}>
                                                        <option value="">Select Option</option>
                                                        <hr />
                                                        {
                                                            userData.OCCPGCourseProg === "Masters in Arts (M.A.)"
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
                                                            userData.OCCPGCourseProg === "Masters in Science (M.Sc.)"
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
                                                            userData.OCCPGCourseProg === "Masters in Commerce (M.Com.)"
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
                                                            userData.OCCPGCourseProg === "Professional Degrees"
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
                                                    userData.OCCPGFieldProg === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherOCCPGFieldProg']} required onChange={(e) => setUserData({ ...userData, "OtherOCCPGFieldProg": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div></>
                                        : ""
                                }
                                {/* under grad fields */}
                                {
                                    userData.OCCPGFieldProg === "Masters of Engineering (M.E.)"
                                        ?
                                        <>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Branch</label>
                                                <div className='customSelect'>
                                                    <select value={userData['OCCPGBranchProg']} required onChange={(e) => setUserData({ ...userData, "OCCPGBranchProg": e.target.value })}>
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
                                                    userData.OCCPGBranchProg === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherOCCPGBranchProg']} required onChange={(e) => setUserData({ ...userData, "OtherOCCPGBranchProg": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div>
                                        </>
                                        : ""
                                }
                                {
                                    userData.OCCPGFieldProg === "Masters of Technology (M.Tech.)"
                                        ?
                                        <>
                                            <div className="indiDetails">
                                                <label htmlFor="email">Branch</label>
                                                <div className='customSelect'>
                                                    <select value={userData['OCCPGBranchProg']} required onChange={(e) => setUserData({ ...userData, "OCCPGBranchProg": e.target.value })}>
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
                                                    userData.OCCPGBranchProg === "Other"
                                                        ?
                                                        <div className='other'>
                                                            <h5>
                                                                Specify:
                                                            </h5>
                                                            <input type="text" value={userData['OtherOCCPGBranchProg']} required onChange={(e) => setUserData({ ...userData, "OtherOCCPGBranchProg": e.target.value })} name="name" id="name" />
                                                        </div>
                                                        : ""
                                                }
                                            </div>
                                        </>
                                        : ""
                                }

                                {
                                    userData.OCCProg === "Other"
                                        ?
                                        <div className='other'>
                                            <h5>
                                                Specify:
                                            </h5>
                                            <input type="text" value={userData['OtherOCCProg']} required onChange={(e) => setUserData({ ...userData, "OtherOCCProg": e.target.value })} name="name" id="name" />
                                        </div>
                                        : ""
                                }

                            </div>
                        </>
                        : ""
                }
                {
                    userData.EduTrainProg === "Apprenticeship programs"
                        ?
                        <>
                            <div className="indiDetails">
                                <label htmlFor="email">Programes</label>
                                <div className="customSelect">

                                    <select value={userData['AppProg']} required onChange={(e) => setUserData({ ...userData, "AppProg": e.target.value })}>
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
                                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                    </span>
                                </div>


                                {
                                    userData.AppProg === "Other"
                                        ?
                                        <div className='other'>
                                            <h5>
                                                Specify:
                                            </h5>
                                            <input type="text" value={userData['OtherAppProg']} required onChange={(e) => setUserData({ ...userData, "OtherAppProg": e.target.value })} name="name" id="name" />
                                        </div>
                                        : ""
                                }

                            </div>
                        </>
                        : ""
                }
                {
                    userData.EduTrainProg === "Entrepreneurship training"
                        ?
                        <>
                            <div className="indiDetails">

                                <div className='other'>
                                    <h5>
                                        Specify:
                                    </h5>
                                    <input type="text" value={userData['EnterpreProg']} required onChange={(e) => setUserData({ ...userData, "EnterpreProg": e.target.value })} name="name" id="name" />
                                </div>
                            </div>
                        </>
                        : ""
                }

                {
                    userData.EduTrainProg === "Other"
                        ?
                        <div className='other'>
                            <h5>
                                Specify:
                            </h5>
                            <input type="text" value={userData['OtherEduTrainProg']} required onChange={(e) => setUserData({ ...userData, "OtherEduTrainProg": e.target.value })} name="name" id="name" />
                        </div>
                        : ""
                }

            </div>
            <div className="indiDetails">
                <label htmlFor="email">How important do you think obtaining further education or training is for achieving your career goals?</label>
                <div className="customSelect">

                    <select value={userData['FurEduTrain']} required onChange={(e) => setUserData({ ...userData, "FurEduTrain": e.target.value })}>
                        <option value="">Select Option</option>
                        <hr />
                        <option value="Not important at all">Not important at all</option>
                        <hr />
                        <option value="Somewhat important">Somewhat important</option>
                        <hr />
                        <option value="Moderately important">Moderately important</option>
                        <hr />
                        <option value="Very important">Very important</option>
                        <hr />
                        <option value="Extremely important">Extremely important</option>
                    </select>
                    <span className="customArrow">
                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                    </span>
                </div>



            </div>

        </div>

    );
}

export default AspiForm;