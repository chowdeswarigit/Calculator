import './App.css';
import { useEffect, useState } from 'react';
import Calculator from './ModernCalculator/Calculator';
import ExchangeRate from './ModernCalculator/Exchange';
import Converter from './ModernCalculator/Conver';
import BasicCalculator from './ModernCalculator/Calculator';
import FirstTest from './First';
import Second from './Second';
import Login from './Login';




function App () {


  // const [cal,setCal] = useState(false)
  // const [exrt, setExrt] = useState(false)
  // const [con,setCon] = useState(false) 

  const [tab,setTab] = useState("cal")

  

   
  
  return(
    <div className='AppA'>
      {/* <div className='main-container'>
      <button id="cal"   onClick={() => setTab("cal")}>Calculator</button >
      <button id="ex" onClick={() => setTab("exrt")}>Exchange Rate</button>
      <button onClick={() =>setTab("con")}>Unit Converter</button>

      </div>
      
     {tab === 'cal'  ? <Calculator /> : tab ==='exrt' ? <ExchangeRate/> : tab === 'con' ? <Converter /> : null} */}
 <FirstTest/>
 <Second/>
 <Login/>
    </div>
  )
}
export default App