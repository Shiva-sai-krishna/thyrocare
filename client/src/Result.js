import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Result = (props) => {
    let navigate = useNavigate();
    let imageurl = '/images/success.avif';
    if (props.result !== "negative") imageurl = "/images/caution.webp"
    let content = "";
    let oneline = "";
    if (props.result === "undefined") {
        content = "404 error :D"
        oneline = "oops";
        imageurl = "/images/caution.webp";
    } else if (props.result === "primary") {
        content = "Primary hypothyroidism is a common endocrine disorder that results from the inadequate production of thyroid hormone by the thyroid gland. It occurs when the thyroid gland fails to produce enough thyroid hormone to meet the body's needs. This can be due to various reasons, including autoimmune thyroiditis (Hashimoto's thyroiditis), surgical removal of the thyroid gland, radiation therapy to the neck, and certain medications."
        oneline = "You are tested Positive for Primary Hypothyroidism";
        imageurl = "/images/problem.jpg"
    } else if (props.result === "negative") {
        content = "Congratulations! your test results came back negative for hypothyroidism. This is fantastic news and a testament to your dedication to maintaining a healthy lifestyle. Keep up the good work and continue to prioritize your health and well-being."
        oneline = "Congratulations, your Thyroid is Healthy!";
        imageurl = "/images/success.avif"
    } else {
        content = "Compensated hypothyroidism, also known as subclinical hypothyroidism, is a mild form of thyroid hormone deficiency in which the thyroid gland is still producing some hormones but not enough to meet the body's needs. Individuals with compensated hypothyroidism often do not experience any symptoms but may have slightly elevated levels of thyroid-stimulating hormone (TSH) and normal levels of thyroid hormones such as T3 and T4."
        oneline = "You are tested Positive for Compensated Hypothyroidism";
        imageurl = "/images/compensated.avif"
    }    

    return (
        <div className = "result-card-container">
        <Card className="card-result">
            <Card.Img style={{height:"20rem", width:"20rem"}} variant="top" src={process.env.PUBLIC_URL + imageurl} />

            <Card.Body style={{height:"15rem"}}>
                <div className="news">
                    <h3>{oneline}</h3>
                </div>
                <Card.Text style={{textAlign:"justify"}}>
                    {content}
                </Card.Text>
            </Card.Body>
            <div className="navigate">
            <Button variant="primary" onClick={()=>{navigate("/test")}}>Test Again</Button>
            <Button variant="primary" onClick={()=>{navigate("/learn")}}>Learn More</Button>
            </div>
        </Card>
        </div>
        
    );
}



export default Result;