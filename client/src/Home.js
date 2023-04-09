import { Button, Card, CardGroup } from "react-bootstrap";
import {useNavigate } from "react-router-dom";
import './Home.css';
const Home = () => {
    let navigate = useNavigate();

    return (
    <div className="home">
        {/* <div className="heading">
            <h1>ThyroCare</h1>
        </div> */}
        <div className="card-container">
        
            <Card className="card-learn">
            <Card.Img style={{height:"20rem"}}variant="top" src={process.env.PUBLIC_URL + '/images/hypothyroid.webp'} />
            <Card.Body style={{height:"15rem"}}>
                <Card.Title>Did you know?</Card.Title>
                <Card.Text>
                Your thyroid is a small, butterfly-shaped gland in the front of your neck. It makes hormones that control the way the body uses energy. These hormones affect nearly every organ in your body and control many of your body's most important functions. Without enough thyroid hormones, many of your body's functions slow down. 
                </Card.Text>
            </Card.Body>
                <div className="card-test-button-container">
                    <Button variant="secondary" onClick={()=>{navigate("/learn")}}>Learn More</Button>
                </div>
            </Card>

            <Card  className="card-test">
            <Card.Img style={{height:"20rem"}} variant="top" src={process.env.PUBLIC_URL + '/images/ML.webp'} />
            <Card.Body style={{height:"15rem"}}>
                <Card.Title>Check for Thyroid Disease</Card.Title>
                <Card.Text>
                    Our application uses advanced machine learning models to accurately detect hypothyroidism, providing reliable results and empowering individuals to take control of their health.
                </Card.Text>
                
            </Card.Body>
                <div className="card-test-button-container">
                    <Button variant="primary" onClick={()=>{navigate("/test")}}>Test Now</Button>
                </div>
            </Card>
            
        </div>
                
    </div>
    );
}
 
export default Home;