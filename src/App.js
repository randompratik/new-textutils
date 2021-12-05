import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
   const toggle=(color)=>{
     if(mode==="dark"){
           setmode("light");
           document.body.style.backgroundColor="white";
           document.body.color="black";
           showAlert("Light mode Enabled","success");
          
     }
           else {
          setmode("dark");
          document.body.style.backgroundColor=color;
          document.body.color="white";
          showAlert("Dark mode Enabled","success")
           }
   }
   const [alert, setalert] = useState(null);
   const showAlert=(message,type)=>{
       setalert({
         msg: message,
         type:type
       }
       )

       setTimeout(() => {
         setalert(null);
       },2000);
   }
       
  return (
    // <Router>
    //   <Navbar title="Textutils" home="Home" mode={mode} toggleMode={toggle}/>
    //   <Alert alert={alert}/>
    //   <Routes>
    //       <Route exact path="/" element={<TextForm boxheading="Enter the text to be  analyzed"  mode={mode} alert={showAlert} />}/>
    //       <Route exact path="/About" element={<About/>}/>
    //       {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
    //       {/* <Route path="*" element={<NotFound/>}/> */}
    //     </Routes>
      
      
    // </Router>

    <>
    <Navbar title="Textutils" home="Home" mode={mode} toggleMode={toggle}/>
     <Alert alert={alert}/>
     <TextForm boxheading="Enter the text to be  analyzed"  mode={mode} alert={showAlert} />

    </>
  );
}

export default App;
