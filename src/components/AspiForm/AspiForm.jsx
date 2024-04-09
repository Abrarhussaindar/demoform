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
    

    return (

        <div className="topIndi empDetails">
            <div className="indiDetails">
                <label htmlFor="email">What is your dream career or occupation?</label>
                <div className="customSelect">

                    <select value={userData['DreamCareer']} required onChange={(e) => setUserData({...userData, "DreamCareer": e.target.value})}>
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
                            <input type="text" value={userData['OtherDreamCareer']} required onChange={(e) => setUserData({...userData, "OtherDreamCareer": e.target.value})} name="name" id="name" />
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

                                        <select value={userData['DreamCareerField']} required onChange={(e) => setUserData({...userData, "DreamCareerField": e.target.value})}>
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
                                                <input type="text" value={userData['OtherDreamCareerField']} required onChange={(e) => setUserData({...userData, "OtherDreamCareerField": e.target.value})} name="name" id="name" />
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
                                                <input type="text" value={userData['OtherDreamCareerField']} required onChange={(e) => setUserData({...userData, "OtherDreamCareerField": e.target.value})} name="name" id="name" />
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

                    <select value={userData['InfluenceFactor']} required onChange={(e) => setUserData({...userData, "InfluenceFactor": e.target.value})}>
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
                            <input type="text" value={userData['OtherInfluenceFactor']} required onChange={(e) => setUserData({...userData, "OtherInfluenceFactor": e.target.value})} name="name" id="name" />
                        </div>
                        : ""
                }


            </div>
            <div className="indiDetails">
                <label htmlFor="email">On a scale of 1 to 5, how confident are you in achieving your career goals?</label>
                <div className="customSelect">

                    <select value={userData['Scale']} required onChange={(e) => setUserData({...userData, "Scale": e.target.value})}>
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

                    <select value={userData['GovSupport']} required onChange={(e) => setUserData({...userData, "GovSupport": e.target.value})}>
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

                            <select value={userData['GovScheme']} required onChange={(e) => setUserData({...userData, "GovScheme": e.target.value})}>
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

                    <select value={userData['FormalTrainEdu']} required onChange={(e) => setUserData({...userData, "FormalTrainEdu": e.target.value})}>
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
                <label htmlFor="email">What type of educational or training programs are you interested in pursuing?</label>
                <div className="customSelect">

                    <select value={userData['EduTrainProg']} required onChange={(e) => setUserData({...userData, "EduTrainProg": e.target.value})}>
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
                    userData.EduTrainProg === "Other"
                        ?
                        <div className='other'>
                            <h5>
                                Specify:
                            </h5>
                            <input type="text" value={userData['OtherEduTrainProg']} required onChange={(e) => setUserData({...userData, "OtherEduTrainProg": e.target.value})} name="name" id="name" />
                        </div>
                        : ""
                }

            </div>
            <div className="indiDetails">
                <label htmlFor="email">How important do you think obtaining further education or training is for achieving your career goals?</label>
                <div className="customSelect">

                    <select value={userData['FurEduTrain']} required onChange={(e) => setUserData({...userData, "FurEduTrain": e.target.value})}>
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