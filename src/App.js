import React from "react";
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './components/cards';
import Footer from './components/footer';
import { NavBar } from './components/navbar';
import { Jumbotron } from './components/jbtron';
import './index.css'


const App = () => {
  return (
    <>
      <NavBar logo="Start Bootstrap" />
      <div className="container">
        <div className="row">

          <Jumbotron tittle="Hello World!" description="This is a simple hero unit, a simple jumbotron-style component for 
        calling extra attention to featured content or information." button="Learn More" />
        </div>
        <div className="row mb-3">
          <Card />
        </div>
      </div>
      <div className="row">
        <Footer footer="Copyright" />
      </div>
    </>
  )
}
export default App;

