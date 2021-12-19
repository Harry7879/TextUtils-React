// import logo from './logo.svg
// import './App.css';
import Nabbar from './components/Nabbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import home from './components/home';
// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {

  const [mode, setMode]=useState('light');
  const [alert, setAlert] = useState(null)

  const showalert=(messege,types)=>{
    setAlert({
      msg:messege,
      type:types
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1500);

  }

  const togaleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#a4bfe7'
      showalert('Dark mode ha been Enable','successful')
      document.title="TextUtils-dark"
      // setTimeout(() => {
      //   document.title="TextUtils please install"
      // },2000);
      // setTimeout(() => {
      //   document.title="file not found"
      // },1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showalert('light mode has been Enable','successful')
      document.title="TextUtils-light"
    }
    
  }
  
  return (
    <div>
      
    <Nabbar title="TextUtility" mode={mode} togaleMode={togaleMode}/>
    <Alert Alert= {alert}/>
    <div className="container">
    <TextForm showAlert={showalert}Heading="Word Counter/Upper Case Extra/space remove" mode={mode}/>
    {/* <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          

          </Route>
        </Switch> */}
      
    </div>
    
    {/* <home></home> */}

    </div>

  )
    
}

export default App;
