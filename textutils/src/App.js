import { useState} from "react"    
import './App.css';
import About from './components/about';
import Navbar from './components/Navbar';
import Textform from './components/textform'; 
import Alert from './components/Alert';
import { Routes, Route } from "react-router-dom";


function App() {
   const [mode, setmode] = useState("light")
   const [text, setText] = useState('enable dark mode');
   const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

   const tooglemode = () => {
    if(mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor = "#343a40";
      setText('enable light mode');
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }

    else{
      setmode("light")
      document.body.style.backgroundColor = "white";
      setText('enable dark mode');
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
   }
   

    const tooglemode1 = () => {
    if(mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor = "#CA3433";
      setText('enable light mode');
      showAlert("Dark mode has been enabled", "success");
    }

    else{
      setmode("light")
      document.body.style.backgroundColor = "white";
      setText('enable dark mode');
      showAlert("Light mode has been enabled", "success");
    }
   }


    const tooglemode2 = () => {
    if(mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor = "#7851A9";
      setText('enable light mode');
      showAlert("Dark mode has been enabled", "success");
    }

    else{
      setmode("light")
      document.body.style.backgroundColor = "white";
      setText('enable dark mode');
      showAlert("Light mode has been enabled", "success");
    }
   }


  return (
    <>
     <Navbar title="TextUtils2" mode={mode} tooglemode={tooglemode} tooglemode1={tooglemode1} tooglemode2={tooglemode2} text={text} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={<Textform Heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />}
          />
        </Routes>
      </div>
     </>
  );
}

export default App;
   