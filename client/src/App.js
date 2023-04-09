import './App.css';
import {Container,Nav,Navbar} from 'react-bootstrap';
import {  Route, Routes, useNavigate } from "react-router-dom";
import Test from './Test';
import Learn from './Learn';
import Home from './Home';
import { useState } from 'react';
import Result from './Result';

function App() {
  let navigate = useNavigate();
  let [result, setResult] = useState("undefined");
  return (
    <div className="App">
      <Navbar style={{backgroundColor:"grey"}} bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">ThyroCare</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/home")}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/test")}}>Test</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/learn")}}>Learn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/home' element={<Home/>} />
      <Route exact path='/test' element={<Test result = {result} setResult={setResult}/>} />
      <Route exact path='/result' element={<Result result = {result} setResult={setResult}/>} />
      <Route exact path='/learn' element={<Learn/>} />
    </Routes>
    </div>
  );
}

export default App;
