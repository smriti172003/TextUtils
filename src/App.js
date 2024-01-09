import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';

function App() {
  return (
    <>
    <Navbar title="Textutils" link="Home" about="About"/><br></br>
    <div className="container">
        <TextForms heading="Enter your text to analyze!"/>
    </div>
    </>
  );
}

export default App;
