import React, { useContext } from "react";
import "./form.css";


import GenForm from "../components/GenForm/GenForm";
import EdForm from "../components/EdForm/EdForm";
import AspiForm from "../components/AspiForm/AspiForm";
import Support from "../components/Support/Support";
import MigForm from "../components/MigForm/MigForm";

import { multiStepContext } from "../StepContext";


function Form() {

    const { currentStep, setCurrentStep, submitData } = useContext(multiStepContext);

    // const submitUserData = async (e) => {
    //     e.preventDefault();
    //     const data = userData
    //     console.log("data", data);
    //     try{
    //         await axios.post("/user/create", data)
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    const showStep = (step) => {
        switch (step) {
            case 1:
                return <GenForm />
            case 2:
                return <EdForm />
            case 3:
                return <AspiForm />
            case 4:
                return <Support />
            case 5:
                return <MigForm />
            default:
                return ""
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setCurrentStep(i => {
            if (i >= 5) return i;
            return i + 1
        })
    }
    const logo = require("./Decent Arcadia type 4.jpg");

    return (
        <div className="container">

            <div className="header">
                {
                    currentStep === 1
                        ?
                        <>
                            <img className="logo" src={logo} alt="logo" />
                            {/* <h1>
                    <span className="de">DeCent</span><span className="ar">ArCadia </span>
                </h1> */}
                            <div>
                                <h4>J&K Skill Development Mission</h4>
                                <p className="first">Survey for youth aspiration and skill gap</p>
                                <p className="second">Youth aspiration questionnaire</p>
                            </div>
                        </>

                        :
                        <h1>
                            <span className="de">DeCent</span><span className="ar">ArCadia </span>
                        </h1>
                }



            </div>
            <div className="wrapper">
                <div className="detailHeading">
                    {
                        currentStep === 1
                            ?
                            <h3>
                                General Details :
                            </h3>
                            : ""
                    }
                    {
                        currentStep === 2
                            ?
                            <h3>
                                Education Details :
                            </h3>
                            : ""
                    }
                    {
                        currentStep === 3
                            ? <h3>
                                Career Aspirations :
                            </h3>
                            : ""
                    }
                    {
                        currentStep === 4
                            ?
                            <h3>
                                Challenges and Support :
                            </h3>
                            : ""
                    }
                    {
                        currentStep === 5
                            ?
                            <h3>
                                Job/Career Opportunities  :
                            </h3>
                            : ""
                    }

                    <h4>
                        {currentStep} / 5
                    </h4>
                </div>


                <form onSubmit={handleSubmit}>
                    <div className="pdfContainer" id="pdf-content">
                        <div className="mainDetails">

                            {
                                showStep(currentStep)
                            }
                        </div>
                    </div>



                    <div className="btns">
                        {
                            currentStep !== 1
                                ?
                                <button type="button" onClick={() => setCurrentStep(i => { if (i <= 0) return i; return i - 1 })}>Back</button>
                                : ""
                        }
                        {
                            currentStep === 5
                                ?
                                <button type="submit" onClick={submitData}>Finish</button>
                                
                                :
                                <button type="submit">Next</button>
                            }
                            {/* <button type="submit" onClick={submitData}>Finish</button> */}
                    </div>


                </form>


            </div>

        </div>
    )
}

export default Form;