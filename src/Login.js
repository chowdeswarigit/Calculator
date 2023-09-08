
import React, { useState } from 'react'

export default function Login() {
    const [error,SetError] =  useState(false)
    const [loading,Serloading]  = useState(false)
    const [username,Setusername] =  useState("")
    const [password,Setpassword]  = useState("")
    const [data,SetData] =  useState({})
    const handleClick = async(e) =>{
      e.preventDefault()
      try{
        const {data1} =  await axios.get("https://jsonplaceholder.typicode.com/users/1")
        SetData(data1)

      }catch{

        SetError(true)
      }
    }
    console.log(data)
  return (
    <div className='container1'>
        <form>
            <input type='text' placeholder='username' value={username} onChange={(e)=>Setusername(e.target.value)}></input>
            <input type='password'placeholder='password' value={password} onChange={(e)=>Setpassword(e.target.value)}></input>
            <button disabled={!username || !password} onClick={handleClick}>{loading ? "loading" : "login"  }</button>
            <span data-testid="error" style={{visibility :error ? 'visiable' : 'hidden'}}>something went wrong</span>
        </form>
      
    </div>
  )
}
