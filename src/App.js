// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Alert from './components/Alert';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React Build skills 
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = '#042743';
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 1500); 
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }


  return(
    <>
    <Router>
    {/* <Navbar title ="NewTextutils" aboutText="About" /> */}
    {/* <Navbar/> */}
    <Navbar title ="NewTextutils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>

    <br />

    <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
    </div>

    {/* <div className='container'>
      <li>Home</li>
      <li>About</li>
      <li>Contacts</li>
      <br/>
      <h1>Hello</h1>
      <br />
      <br />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora animi distinctio reiciendis consequuntur doloribus dicta eveniet asperiores velit commodi iusto quia quidem corporis optio, tempore, ad earum dolor modi eius!</p>
    </div> */}
    
    <br />
    <br />
    <br />

    {/* <div className='container'>
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
    </div> */}
    {/* {<About/>} */}
    <br />
    <br />
    <br />
    <br />
    </Router>
    </>
  );
}

export default App; 
