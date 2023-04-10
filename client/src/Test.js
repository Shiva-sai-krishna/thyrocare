import { Button, Form, Col, Row } from "react-bootstrap";
import "./Test.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";

const Test = (props) => {
    let navigate = useNavigate();
    let [age, setAge] = useState();
    let [tsh, setTsh] = useState();
    let [t3,   setT3] = useState();
    let [tt4, setTt4] = useState();
    let [fti, setFti] = useState();
    let [t4u, setT4u] = useState();

    let [gender, setGender] = useState("Male");
    let [sick, setSick] = useState("No");
    let [goitre, setGoitre] = useState("No");
    let [tumor, setTumor] = useState("No");
    let [pregnant, setPregnant] = useState("No");
    let [surgery, setSurgery] = useState("No");
    
    
    let [ageIsInvalid, setAgeIsInvalid] = useState(false);
    let [tshIsInvalid, setTshIsInvalid] = useState(false);
    let [t3IsInvalid, setT3IsInvalid] = useState(false);
    let [tt4IsInvalid, setTt4IsInvalid] = useState(false);
    let [ftiIsInvalid, setFtiIsInvalid] = useState(false);
    let [t4uIsInvalid, setT4uIsInvalid] = useState(false);

    let [pregnantIsInvalid, setPregnantIsInvalid] = useState(false);

    let [ageIsValid, setAgeIsValid] = useState(false);
    let [tshIsValid, setTshIsValid] = useState(false);
    let [t3IsValid, setT3IsValid] = useState(false);
    let [tt4IsValid, setTt4IsValid] = useState(false);
    let [ftiIsValid, setFtiIsValid] = useState(false);
    let [t4uIsValid, setT4uIsValid] = useState(false);

    let [pregnantIsValid, setPregnantIsValid] = useState(false);
    let [genderIsValid, setGenderIsValid] = useState(false);
    let [sickIsValid, setSickIsValid] = useState(false);
    let [goitreIsValid, setGoitreIsValid] = useState(false);
    let [tumorIsValid, setTumorIsValid] = useState(false);
    let [surgeryIsValid, setSurgeryIsValid] = useState(false);


    let checkAge = (s)=> {
        if (/^\d+$/.test(s) && age > 0 && age < 200) {
            setAgeIsInvalid(false);
            setAgeIsValid(true);
        } else {
            ageIsInvalid = true;
            setAgeIsInvalid(true);
            setAgeIsValid(false);
            
        }
    }

    let checkTsh = (s)=> {
        
        if ((/^\d+$/.test(s)||/^\d+\.\d+$/.test(s)) && tsh >= 0 && tsh < 1000) {
            setTshIsInvalid(false);
            setTshIsValid(true);
        } else {
            setTshIsInvalid(true);
            setTshIsValid(false);
        }
    }

    let checkT3 = (s) =>{
        if ((/^\d+$/.test(s)||/^\d+\.\d+$/.test(s)) && t3 >= 0 && t3 < 1000) {
            setT3IsInvalid(false);
            setT3IsValid(true);
        } else {
            setT3IsInvalid(true);
            setT3IsValid(false);
        }
    }

    let checkTt4 = (s) =>{
        if ((/^\d+$/.test(s)||/^\d+\.\d+$/.test(s)) && tt4 >= 0 && tt4 < 1000) {
            setTt4IsInvalid(false);
            setTt4IsValid(true);
        } else {
            setTt4IsInvalid(true);
            setTt4IsValid(false);
        }
    }

    let checkT4u = (s) =>{
        if ((/^\d+$/.test(s)||/^\d+\.\d+$/.test(s)) && t4u >= 0 && t4u < 1000) {
            setT4uIsInvalid(false);
            setT4uIsValid(true);
        } else {
            setT4uIsInvalid(true);
            setT4uIsValid(false);
        }
    }


    let checkFti = (s) =>{
        if ((/^\d+$/.test(s)||/^\d+\.\d+$/.test(s)) && fti >= 0 && fti < 1000) {
            setFtiIsInvalid(false);
            setFtiIsValid(true);
        } else {
            setFtiIsInvalid(true);
            setFtiIsValid(false);
        }
    }

    let checkPregnant = (pregnant) => {
        if (pregnant === "Yes" && gender === "Male") {
            setPregnantIsInvalid(true);
            setPregnantIsValid(false);
        } else {
            setPregnantIsInvalid(false);
            setPregnantIsValid(true);
        }
    }

    let checkGender = (gender) => {
        setGenderIsValid(true);
    }

    let checkTumor = (tumor) => {
        setTumorIsValid(true);
    }

    let checkGoitre = (goitre) => {
        setGoitreIsValid(true);
    }

    let checkSick = (sick) => {
        setSickIsValid(true);
    }

    let checkSurgery = (surgery)=> {
        setSurgeryIsValid(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (isValid()) {
            let body = {
                age : age,
                tsh : tsh,
                t3 : t3,
                tt4 : tt4,
                t4u : t4u,
                fti : fti,
                gender : gender,
                sick : sick,
                pregnant : pregnant,
                thyroid_surgery : surgery,
                tumor : tumor,
                goitre : goitre
            }
            fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then((data) => {
            props.setResult(data);
            navigate("/result")
        })
        .catch(error => {
            console.log(error);
        });
    };

    
    checkPregnant(pregnant);

}

    let handleAgeChange = (e)=>{
        let change = parseInt(e.target.value);
        age = change;
        setAge(change);
        checkAge(e.target.value);
    }

    let handleTshChange = (e)=>{
        let change = parseFloat(e.target.value);
        tsh = change;
        setTsh(change);
        checkTsh(e.target.value);
    }

    let handleT3Change = (e)=>{
        let change = parseFloat(e.target.value);
        t3 = change;
        setT3(change);
        checkT3(e.target.value);
    }

    let handleTt4Change = (e)=>{
        let change = parseFloat(e.target.value);
        tt4 = change;
        setTt4(change);
        checkTt4(e.target.value);
    }

    let handleT4uChange = (e)=>{
        let change = parseFloat(e.target.value);
        t4u = change;
        setT4u(change);
        checkT4u(e.target.value);
    }

    let handleFtiChange = (e)=>{
        let change = parseFloat(e.target.value);
        fti = change;
        setFti(change);
        checkFti(e.target.value);
    }

    let handleGenderChange = (e)=>{
        let change = e.target.value;
        gender = change;
        setGender(change);
        checkGender(gender);

    }

    let handlePregnantChange = (e) => {
        let change = e.target.value;
        pregnant = change;
        setPregnant(pregnant);
        checkPregnant(pregnant);
    }

    let handleTumorChange = (e) => {
        let change = e.target.value;
        tumor = change;
        setTumor(change);
        checkTumor(tumor);
    }

    let handleGoitreChange = (e) => {
        let change = e.target.value;
        goitre = change;
        setGoitre(change);
        checkGoitre(goitre)        
    }
    let handleSurgeryChange = (e) => {
        let change = e.target.value;
        surgery = change;
        setSurgery(change);
        checkSurgery(surgery);
    }
    let handleSickChange = (e) => {
        let change = e.target.value;
        sick = change;
        setSick(change);
        checkSick(sick);
    }

    let isValid = ()=> {
        checkAge(age);
        checkT3(t3);
        checkTt4(tt4);
        checkT4u(t4u);
        checkFti(fti);
        checkTsh(tsh);

        checkPregnant(pregnant);
        checkGender(gender);
        checkTumor(tumor);
        checkSick(sick);
        checkSurgery(surgery);
        checkGoitre(goitre);

        if (pregnantIsInvalid || tshIsInvalid || t3IsInvalid || tt4IsInvalid || t4uIsInvalid || ftiIsInvalid || ageIsInvalid)
            return false;
        else return true;
    }

    return (
    <div className="test">
        <div className="test-heading">
            <h3>Enter the Following Details to Test for Hypothyroid</h3>
        </div>
        <Form noValidate onSubmit={handleSubmit} >
            <Row className="mb-3 form-row">
                <Form.Group as={Col} controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control required placeholder="Enter your Age"  onChange={handleAgeChange} isInvalid={ageIsInvalid} isValid={ageIsValid}/>
                <Form.Control.Feedback type="invalid">
                    Please Enter valid Age.
                </Form.Control.Feedback>
                
                </Form.Group>

                <Form.Group as={Col} controlId="tsh">
                <Form.Label><div className="popup-holder"><p>Thyroid Stimulating Hormone (TSH) Level</p><Popup info="Normal range for TSH level ranges between  0.4 - 5.0 miU/L" /></div></Form.Label>
                <Form.Control required placeholder="Enter your TSH Level in (mIU/L)"  onChange={handleTshChange} isInvalid={tshIsInvalid} isValid={tshIsValid}/>
                <Form.Control.Feedback type="invalid">
                    Please Enter valid TSH value.
                </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3 form-row">
                <Form.Group as={Col} controlId="t3">
                <Form.Label><div className="popup-holder"><p>Triiodothyronine (T3) Level</p><Popup info="Normal range for T3 level in adults is usually between 100 - 200 ng/dL"/></div></Form.Label>
                <Form.Control required placeholder="Enter your T3 Level in (ng/dL)" onChange={handleT3Change} isInvalid={t3IsInvalid} isValid={t3IsValid}/>
                <Form.Control.Feedback type="invalid">
                    Please Enter valid T3 value 
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="tt4">
                <Form.Label><div className="popup-holder"><p>Total Thyroxine (TT4) Level</p><Popup info="Normal range for total T4 level in adults ranges from 4.6 - 12 μg/dL"/></div></Form.Label>
                <Form.Control required placeholder="Enter your TT4 Level in (μg/dL)"  onChange={handleTt4Change} isInvalid={tt4IsInvalid} isValid={tt4IsValid}/>
                <Form.Control.Feedback type="invalid">
                    Please Enter valid TT4 value.
                </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3 form-row">
                <Form.Group as={Col} controlId="t4u">
                <Form.Label>Thyroxine Uptake (T4U) Level</Form.Label>
                <Form.Control required placeholder="Enter your T4 uptake Level" onChange={handleT4uChange} isInvalid={t4uIsInvalid} isValid={t4uIsValid}/>
                <Form.Control.Feedback type="invalid">
                    Please Enter valid T4U value.
                </Form.Control.Feedback>
                    
                </Form.Group>

                <Form.Group as={Col} controlId="fti">
                <Form.Label>Free Thyroxine Index (FTI) Level</Form.Label>
                <Form.Label><div className="popup-holder"><p>Free Thyroxine Index (FTI) Level</p><Popup info="Normal range for Free thyroxine index in adults ranges from  0.7 - 1.9 ng/dL"/></div></Form.Label>
                <Form.Control required placeholder="Enter your FTI Level in (ng/dL)"  onChange={handleFtiChange} isInvalid={ftiIsInvalid} isValid={ftiIsValid}/>
                <Form.Control.Feedback type="invalid">
                    Please Enter valid FTI value.
                </Form.Control.Feedback>
                </Form.Group>
            </Row>


            <Row className="mb-3 form-row">
                <Form.Group as={Col} controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="No" onChange={handleGenderChange} isValid={genderIsValid}>
                    <option>Male</option>
                    <option>Female</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="sick">
                <Form.Label>Sick</Form.Label>
                <Form.Select defaultValue="No" onChange={handleSickChange} isValid={sickIsValid}>
                <option>No</option>
                    <option>Yes</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="pregnant">
                <Form.Label>Pregnant</Form.Label>
                <Form.Select defaultValue="No" onChange={handlePregnantChange} isInvalid={pregnantIsInvalid} isValid={pregnantIsValid}>
                    <option>No</option>
                    <option>Yes</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    This value is not allowed for the specified gender
                </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3 form-row">
                <Form.Group as={Col} controlId="surgery">
                <Form.Label>Thyroid Surgery</Form.Label>
                <Form.Select defaultValue="No" onChange={handleSurgeryChange} isValid={surgeryIsValid}>
                <option>No</option>
                    <option>Yes</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="goitre">
                <Form.Label>Goitre</Form.Label>
                <Form.Select defaultValue="No" onChange={handleGoitreChange} isValid={goitreIsValid}>
                <option>No</option>
                    <option>Yes</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="tumor">
                <Form.Label>Tumor</Form.Label>
                <Form.Select defaultValue="No" onChange={handleTumorChange} isValid={tumorIsValid}>
                <option>No</option>
                    <option>Yes</option>
                </Form.Select>
                </Form.Group>
            </Row>

            <div className="navigate">
                <Button variant="secondary" type="reset">Reset</Button>
                <Button variant="primary" type="submit" >Submit</Button>
            </div>
        </Form>

    </div>
    );
}
 
export default Test;