import { Button, Form, Col, Row } from "react-bootstrap";
import "./Test.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Test = (props) => {
    let navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    let [age, setAge] = useState(0);
    let [tsh, setTsh] = useState(0);
    let [t3, setT3] = useState(0);
    let [tt4, setTt4] = useState(0);
    let [fti, setFti] = useState(0);
    let [t4u, setT4u] = useState(0);

    let [gender, setGender] = useState("male");
    let [sick, setSick] = useState("No");
    let [goitre, setGoitre] = useState("No");
    let [tumor, setTumor] = useState("No");
    let [pregnant, setPregnant] = useState("No");
    let [surgery, setSurgery] = useState("No");
    

    const handleSubmit = (event) => {
        let form = event.target;
        event.preventDefault();
        if (form.checkValidity() === false) {
            
            event.stopPropagation();
        } else {
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

    setValidated(true);
}

    let handleAgeChange = (e)=>{
        let change = parseInt(e.target.value);
        age = change;
        setAge(change);
    }

    let handleTshChange = (e)=>{
        let change = parseInt(e.target.value);
        tsh = change;
        setTsh(change);
    }

    let handleT3Change = (e)=>{
        let change = parseInt(e.target.value);
        t3 = change;
        setT3(change);
    }

    let handleTt4Change = (e)=>{
        let change = parseInt(e.target.value);
        tt4 = change;
        setTt4(change);
    }

    let handleT4uChange = (e)=>{
        let change = parseInt(e.target.value);
        t4u = change;
        setT4u(change);
    }

    let handleFtiChange = (e)=>{
        let change = parseInt(e.target.value);
        fti = change;
        setFti(change);
    }

    let handleGenderChange = (e)=>{
        let change = e.target.value;
        gender = change;
        setGender(change);
    }

    let handlePregnantChange = (e) => {
        let change = e.target.value;
        pregnant = change;
        setPregnant(change);
    }

    let handleTumorChange = (e) => {
        let change = e.target.value;
        tumor = change;
        setTumor(change);
    }
    let handleGoitreChange = (e) => {
        let change = e.target.value;
        goitre = change;
        setGoitre(change);
    }
    let handleSurgeryChange = (e) => {
        let change = e.target.value;
        surgery = change;
        setSurgery(change);
    }
    let handleSickChange = (e) => {
        let change = e.target.value;
        sick = change;
        setSick(change);
    }

    return (
    <div className="test">
        <div className="test-heading">
            <h3>Enter the Following Details to Test for Hypothyroid</h3>
        </div>
        {/* <h5>Enter the following details to check for Hypothyroid disease</h5> */}
        <Form noValidate validated={validated} onSubmit={handleSubmit} >
            <Row className="mb-3 form-row">
                <Form.Group as={Col} controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control required placeholder="Enter your Age" type="number" onChange={handleAgeChange}/>
                <Form.Control.Feedback type="invalid">
                    Please Enter valid Age.
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="tsh">
                <Form.Label>Thyroid Stimulating Hormone (TSH) Level</Form.Label>
                <Form.Control required placeholder="Enter your TSH Level" type="number" onChange={handleTshChange}/>
                <Form.Control.Feedback type="invalid">
                    Please Enter valid TSH value.
                </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3 form-row">
                <Form.Group as={Col} controlId="t3">
                <Form.Label>Triiodothyronine (T3) Level</Form.Label>
                <Form.Control required placeholder="Enter your T3 Level" type="number" onChange={handleT3Change}/>
                <Form.Control.Feedback type="invalid">
                    Please Enter valid T3 value.
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="tt4">
                <Form.Label>Total Thyroxine (TT4) Level</Form.Label>
                <Form.Control required placeholder="Enter your TT4 Level" type="number" onChange={handleTt4Change}/>
                <Form.Control.Feedback type="invalid">
                    Please Enter valid TT4 value.
                </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3 form-row">
                <Form.Group as={Col} controlId="t4u">
                <Form.Label>Thyroxine Uptake (T4U) Level</Form.Label>
                <Form.Control required placeholder="Enter your T4U Level" type="number" onChange={handleT4uChange}/>
                <Form.Control.Feedback type="invalid">
                    Please Enter valid T4U value.
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="fti">
                <Form.Label>Free Thyroxine Index (FTI) Level</Form.Label>
                <Form.Control required placeholder="Enter your FTI Level" type="number" onChange={handleFtiChange}/>
                <Form.Control.Feedback type="invalid">
                    Please Enter valid FTI value.
                </Form.Control.Feedback>
                </Form.Group>
            </Row>


            <Row className="mb-3">
                <Form.Group as={Col} controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="No" onChange={handleGenderChange}>
                    <option>Male</option>
                    <option>Female</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="sick">
                <Form.Label>Sick</Form.Label>
                <Form.Select defaultValue="No" onChange={handleSickChange}>
                <option>No</option>
                    <option>Yes</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="pregnant">
                <Form.Label>Pregnant</Form.Label>
                <Form.Select defaultValue="No" onChange={handlePregnantChange}>
                <option>No</option>
                    <option>Yes</option>
                </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="surgery">
                <Form.Label>Thyroid Surgery</Form.Label>
                <Form.Select defaultValue="No" onChange={handleSurgeryChange}>
                <option>No</option>
                    <option>Yes</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="goitre">
                <Form.Label>Goitre</Form.Label>
                <Form.Select defaultValue="No" onChange={handleGoitreChange}>
                <option>No</option>
                    <option>Yes</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="tumor">
                <Form.Label>Tumor</Form.Label>
                <Form.Select defaultValue="No" onChange={handleTumorChange}>
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