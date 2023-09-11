import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Textutil" aboutText="About Textutil" />
    {/* <Navbar/> */}
    <div className="container my-5">
    <TextForm header="Enter the text to analyze below"/>
    </div>
    
    </>
    
  );
}

export default App;
