import './App.css';
import { NavBar } from '../components/navbar';
import { Jumbotron } from '../components/jbtron';


function App(){
  return (
    <>
    <NavBar logo="Start Bootstrap" />
    <div className="container">
      <div className="row">
        <Jumbotron tittle="Hello World!" Description="This is a simple hero unit, a simple jumbotron-style component for 
        calling extra attention to featured content or information." buttom="Learn More" />
      </div>
    </div>
    </>
  );
}

export default App;

