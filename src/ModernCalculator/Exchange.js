import '../App.css';
import { useState } from 'react';

const ExchangeRate = ()=> {

  const [total,setTotal] = useState("")


  const hadleClick = (e) =>{

  setTotal(total.concat(e.target.name))

  }

  const handleDelete = () =>{
    
    setTotal(total.slice(0,-1))
  }
  
  const handleClear = () =>{
    setTotal(" ")
  }

  const calculate = () =>{

    try{
      setTotal(eval(total).toString())
    }
  catch{
    setTotal("Error")
  }
  }
  const fahrenheitconversion = () =>{
    
    const cel = (9/5 * total ) + 32
     setTotal(cel+"F")
  } 
  
const celsiusconversion = () =>{
  const cel = ((total -32)*5)/9 
  setTotal(cel+"C")

}
const sinfunction = ()=>{
  
  setTotal(Math.sin(total*Math.PI/180))
}
const tanfuntion = () =>{
  setTotal(Math.tan(total*Math.PI/180))

 }
// const cosfunction = () =>{
//   setTotal(Math.cos(total*Math.PI/180))

// }
  return (
    <div className="App">
    <div className='container'>
      <form>
      <input type='text'  value={total}/>
      </form>
      <div className='keyboard'>
      <button id="clear"  className='highlight' onClick={handleClear}>AC</button>
      <button onClick={handleDelete} className='highlight'>DEL</button>
      <button  name ='/' className='highlight' onClick={hadleClick}>&divide;</button> 
      <button name='%' onClick={hadleClick}>%</button>
      <button  name = '7' onClick={hadleClick}>7</button>
      <button name = '8' onClick={hadleClick}>8</button>
      <button name = '9' onClick={hadleClick}>9</button>
      <button name = '*' onClick={hadleClick}className='highlight'>&times;</button>
      <button name = '4' onClick={hadleClick}>4</button>
      <button name = '5' onClick={hadleClick}>5</button>
      <button name = '6' onClick={hadleClick}>6</button>
      <button  name = '-' onClick={hadleClick} className='highlight'>-</button>
      <button name = '1' onClick={hadleClick}>1</button>
      <button name = '2' onClick={hadleClick}>2</button>
      <button name = '3' onClick={hadleClick}>3</button>
      <button name = '+' onClick={hadleClick} className='highlight'>+</button>
      <button name = '0' onClick={hadleClick}>0</button>
      <button className='highlight' name='sin' onClick={celsiusconversion} >&deg;C</button>
      <button className='highlight' name='sin' onClick={fahrenheitconversion} >&deg;F</button>
      <button name="sin" onClick={sinfunction}>sin</button>
      {/* <button  name = "cos" onClick={cosfunction}>cos</button> */}
      <button  name = "tan" onClick={tanfuntion}>tan</button>

      <button name = '.' onClick={hadleClick}  className='highlight'>.</button>
      <button  className='highlight' id="equal" onClick={calculate}>=</button>
     </div>
     </div>
     
    </div>
  );
}

export default ExchangeRate;
