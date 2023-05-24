import { useEffect, useState } from "react";
import Calculator from "./Calculator";

const Converter = () =>{

   
    const [total, setTotal] = useState("")
    const[inputValue,setInputValue] = useState("")
    const[inputValue1,setInputValue1] = useState("")
    const [outputValue,setOutputValue] = useState("")
    const[outputValue1,setOutputValue1] = useState("")
    const [result,setResult] = useState("") 
    
   
    const arrList =  [
        {
            id:1,
            unit:"length"
        },
        {
            id:2,
            unit:"area"
        },
        {
            id:3,
            unit:"volume"
        },
        {
            id:4,
            unit:"speed"
        },
        {
            id:5,
            unit:"weight"
        },
        {
            id:6,
            unit:"temparature"
        },
        {
            id:7,
            unit:"power"
        },
        {
            id:8,
            unit:"pressure"
        }

    ]

    const [unit,setUnit] = useState('')

    const hadleClick = (e) =>{
        setTotal(total.concat(e.target.name))

    }

    const handleClear =  () =>{
        setTotal("")
        setResult("")

    }
    const handleDelete = () =>{
        setTotal(total.slice(0,-1))
    }
    

    const handleChangeInput  = (e) =>{
        setInputValue(e.target.value)
    }
    const handleChangeOutput = (e) =>{
        setOutputValue(e.target.value)
    }

    

    let inp = inputValue;
    let userInput = total
    let oup = outputValue;
    let chow;
    console.log(oup)
    const lengthConversion =() =>{
        if(oup==="meter"){
            switch(inp){
                case "meter" :
                    chow = userInput *1 
                    console.log(oup)
                    break;
                case "centimeter":
                    chow = userInput * 100
                    break;
                case "millimeter":
                    chow = userInput * 1000
                    break;
                case "kilometer":
                    chow = userInput / 1000
                    break;
                case "micrometer" :
                    chow = userInput *1.0e+6
                    break;
                case "nanometer":
                    chow = userInput *1.0e+9
                    break;
                case "foot":
                    chow = userInput * 3.281

                 break;
                case "inch":
                    chow = userInput * 39.37
                    break;
                case "yard" : 
                chow = userInput * 1.094
                    break;
                case "mile":
                        chow = userInput/1609
                    break;
                
            }
           
        }
        
        else if(oup==="centimeter"){
            switch(inp){
                case "meter" :
                    chow = userInput /100 
                    console.log(oup)
                    break;
                case "centimeter":
                    chow = userInput * 1 
                    break;
                case "millimeter":
                    chow = userInput * 10
                    break;
                case "kilometer":
                    chow = userInput / 100000

                    break;
                case "micrometer" :
                    chow = userInput * 10000

                    break;
                case "nanometer":
                    chow = userInput *1.0e+7
                    break;
                case "foot":
                    chow = userInput / 30.48


                 break;
                case "inch":
                    chow = userInput /2.54
                    break;
                case "yard" : 
                chow = userInput / 91.44
                    break;
                case "mile":
                        chow = userInput/160900

                    break;
                
            }
           
        }
        else if(oup==="millimeter"){
            switch(inp){
                case "meter" :
                    chow = userInput /1000
                    break;
                case "centimeter":
                    chow = userInput / 10 
                    break;
                case "millimeter":
                    chow = userInput * 1
                    break;
                case "kilometer":
                    chow = userInput / 1e+6

                    break;
                case "micrometer" :
                    chow = userInput * 1000

                    break;
                case "nanometer":
                    chow = userInput *1.0e+6
                    break;
                case "foot":
                    chow = userInput / 304.8
                 break;
                case "inch":
                    chow = userInput /25.4
                    break;
                case "yard" : 
                chow = userInput / 914.4

                    break;
                case "mile":
                        chow = userInput/1.609e+6
                    break;
                
            }
           
        }
        else if(oup==="kilometer"){
            switch(inp){
                case "meter" :
                    chow = userInput *1000
                    break;
                case "centimeter":
                    chow = userInput * 100000 
                    break;
                case "millimeter":
                    chow = userInput * 1e+6
                    break;
                case "kilometer":
                    chow = userInput * 1

                    break;
                case "micrometer" :
                    chow = userInput * 1e+9

                    break;
                case "nanometer":
                    chow = userInput * 1e+12

                    break;
                case "foot":
                    chow = userInput * 3281

                 break;
                case "inch":
                    chow = userInput *  39370

                    break;
                case "yard" : 
                chow = userInput * 1094


                    break;
                case "mile":
                        chow = userInput/ 1.609

                    break;
                
            }
           
        }
        else if(oup==="micrometer"){
            switch(inp){
                case "meter" :
                    chow = userInput / 1e+6 
                    break;
                case "centimeter":
                    chow = userInput / 10000

                    break;
                case "millimeter":
                    chow = userInput /1000

                    break;
                case "kilometer":
                    chow = userInput /1e+9

                    break;
                case "micrometer" :
                    chow = userInput * 1

                    break;
                case "nanometer":
                    chow = userInput * 1000

                    break;
                case "foot":
                    chow = userInput /304800


                 break;
                case "inch":
                    chow = userInput /25400


                    break;
                case "yard" : 
                chow = userInput /914400
                    break;
                case "mile":
                        chow = userInput/ 1.609e+9


                    break;
                
            }
           
        }
        else if(oup==="nanometer"){
            switch(inp){
                case "meter" :
                    chow = userInput / 1e+9

                    break;
                case "centimeter":
                    chow = userInput / 1e+7

                    break;
                case "millimeter":
                    chow = userInput /1e+6


                    break;
                case "kilometer":
                    chow = userInput /1e+12

                    break;
                case "micrometer" :
                    chow = userInput / 1000

                    break;
                case "nanometer":
                    chow = userInput * 1

                    break;
                case "foot":
                    chow = userInput /3.048e+8

                 break;
                case "inch":
                    chow = userInput / 2.54e+7

                    break;
                case "yard" : 
                chow = userInput /9.144e+8

                    break;
                case "mile":
                        chow = userInput/ 1.609e+12



                    break;
                
            }
           
        }
        else if(oup==="yard"){
            switch(inp){
                case "meter" :
                    chow = userInput / 1.094

                    break;
                case "centimeter":
                    chow = userInput *91.44
                    break;
                case "millimeter":
                    chow = userInput *914.4

                    break;
                case "kilometer":
                    chow = userInput /1094


                    break;
                case "micrometer" :
                    chow = userInput * 914400

                    break;
                case "nanometer":
                    chow = userInput * 9.144e+8


                    break;
                case "foot":
                    chow = userInput * 3


                 break;
                case "inch":
                    chow = userInput *36


                    break;
                case "yard" : 
                chow = userInput *1
                    break;
                case "mile":
                        chow = userInput/1760



                    break;
                
            }
           
        }
        else if(oup==="foot"){
            switch(inp){
                case "meter" :
                    chow = userInput / 3.281 
                    break;
                case "centimeter":
                    chow = userInput / 30.48


                    break;
                case "millimeter":
                    chow = userInput *304.8
                    break;
                case "kilometer":
                    chow = userInput /3281

                    break;
                case "micrometer" :
                    chow = userInput * 304800


                    break;
                case "nanometer":
                    chow = userInput * 3.048e+8


                    break;
                case "foot":
                    chow = userInput *1


                 break;
                case "inch":
                    chow = userInput *12


                    break;
                case "yard" : 
                chow = userInput /3
                    break;
                case "mile":
                        chow = userInput/5280


                    break;
                
            }
           
        }
        else if(oup==="inch"){
            switch(inp){
                case "meter" :
                    chow = userInput / 39.37
                    break;
                case "centimeter":
                    chow = userInput *2.54  

                    break;
                case "millimeter":
                    chow = userInput *25.4

                    break;
                case "kilometer":
                    chow = userInput /39370


                    break;
                case "micrometer" :
                    chow = userInput * 25400


                    break;
                case "nanometer":
                    chow = userInput * 2.54e+7


                    break;
                case "foot":
                    chow = userInput /12


                 break;
                case "inch":
                    chow = userInput *1


                    break;
                case "yard" : 
                chow = userInput /36
                    break;
                case "mile":
                        chow = userInput/ 63360



                    break;
                
            }
           
        }

        else if(oup==="mile"){
            switch(inp){
                case "meter" :
                    chow = userInput *1609

                    break;
                case "centimeter":
                    chow = userInput * 160900


                    break;
                case "millimeter":
                    chow = userInput * 1.609e+6
                    break;
                case "kilometer":
                    chow = userInput * 1.609
                    break;
                case "micrometer" :
                    chow = userInput * 1.609e+9

                    break;
                case "nanometer":
                    chow = userInput * 1.609e+12


                    break;
                case "foot":
                    chow = userInput *5280



                 break;
                case "inch":
                    chow = userInput *63360



                    break;
                case "yard" : 
                chow = userInput *5280

                    break;
                case "mile":
                        chow = userInput*1


                    break;
                
            }
           
        }
        

        setResult(chow)
       
    
       
    }
    // console.log(inputValue)
    // console.log(oup)
    const lengthConversionvice  = () =>{

        if(inp==="meter"){
            switch(oup){
                case "meter" :
                    chow = userInput *1 
                    console.log(oup)
                    break;
                case "centimeter":
                    chow = userInput * 100
                    break;
                case "millimeter":
                    chow = userInput * 1000
                    break;
                case "kilometer":
                    chow = userInput / 1000
                    break;
                case "micrometer" :
                    chow = userInput *1.0e+6
                    break;
                case "nanometer":
                    chow = userInput *1.0e+9
                    break;
                case "foot":
                    chow = userInput * 3.281

                 break;
                case "inch":
                    chow = userInput * 39.37
                    break;
                case "yard" : 
                chow = userInput * 1.094
                    break;
                case "mile":
                        chow = userInput/1609
                    break;
                
            }
           
        }
        
        else if(inp==="centimeter"){
            switch(oup){
                case "meter" :
                    chow = userInput /100 
                    console.log(oup)
                    break;
                case "centimeter":
                    chow = userInput * 1 
                    break;
                case "millimeter":
                    chow = userInput * 10
                    break;
                case "kilometer":
                    chow = userInput / 100000

                    break;
                case "micrometer" :
                    chow = userInput * 10000

                    break;
                case "nanometer":
                    chow = userInput *1.0e+7
                    break;
                case "foot":
                    chow = userInput / 30.48


                 break;
                case "inch":
                    chow = userInput /2.54
                    break;
                case "yard" : 
                chow = userInput / 91.44
                    break;
                case "mile":
                        chow = userInput/160900

                    break;
                
            }
           
        }
        else if(inp==="millimeter"){
            switch(oup){
                case "meter" :
                    chow = userInput /1000
                    break;
                case "centimeter":
                    chow = userInput / 10 
                    break;
                case "millimeter":
                    chow = userInput * 1
                    break;
                case "kilometer":
                    chow = userInput / 1e+6

                    break;
                case "micrometer" :
                    chow = userInput * 1000

                    break;
                case "nanometer":
                    chow = userInput *1.0e+6
                    break;
                case "foot":
                    chow = userInput / 304.8
                 break;
                case "inch":
                    chow = userInput /25.4
                    break;
                case "yard" : 
                chow = userInput / 914.4

                    break;
                case "mile":
                        chow = userInput/1.609e+6
                    break;
                
            }
           
        }
        else if(inp==="kilometer"){
            switch(oup){
                case "meter" :
                    chow = userInput *1000
                    break;
                case "centimeter":
                    chow = userInput * 100000 
                    break;
                case "millimeter":
                    chow = userInput * 1e+6
                    break;
                case "kilometer":
                    chow = userInput * 1

                    break;
                case "micrometer" :
                    chow = userInput * 1e+9

                    break;
                case "nanometer":
                    chow = userInput * 1e+12

                    break;
                case "foot":
                    chow = userInput * 3281

                 break;
                case "inch":
                    chow = userInput *  39370

                    break;
                case "yard" : 
                chow = userInput * 1094


                    break;
                case "mile":
                        chow = userInput/ 1.609

                    break;
                
            }
           
        }
        else if(inp==="micrometer"){
            switch(oup){
                case "meter" :
                    chow = userInput / 1e+6 
                    break;
                case "centimeter":
                    chow = userInput / 10000

                    break;
                case "millimeter":
                    chow = userInput /1000

                    break;
                case "kilometer":
                    chow = userInput /1e+9

                    break;
                case "micrometer" :
                    chow = userInput * 1

                    break;
                case "nanometer":
                    chow = userInput * 1000

                    break;
                case "foot":
                    chow = userInput /304800


                 break;
                case "inch":
                    chow = userInput /25400


                    break;
                case "yard" : 
                chow = userInput /914400
                    break;
                case "mile":
                        chow = userInput/ 1.609e+9


                    break;
                
            }
           
        }
        else if(inp==="nanometer"){
            switch(oup){
                case "meter" :
                    chow = userInput / 1e+9

                    break;
                case "centimeter":
                    chow = userInput / 1e+7

                    break;
                case "millimeter":
                    chow = userInput /1e+6


                    break;
                case "kilometer":
                    chow = userInput /1e+12

                    break;
                case "micrometer" :
                    chow = userInput / 1000

                    break;
                case "nanometer":
                    chow = userInput * 1

                    break;
                case "foot":
                    chow = userInput /3.048e+8

                 break;
                case "inch":
                    chow = userInput / 2.54e+7

                    break;
                case "yard" : 
                chow = userInput /9.144e+8

                    break;
                case "mile":
                        chow = userInput/ 1.609e+12



                    break;
                
            }
           
        }
        else if(inp==="yard"){
            switch(oup){
                case "meter" :
                    chow = userInput / 1.094

                    break;
                case "centimeter":
                    chow = userInput *91.44
                    break;
                case "millimeter":
                    chow = userInput *914.4

                    break;
                case "kilometer":
                    chow = userInput /1094


                    break;
                case "micrometer" :
                    chow = userInput * 914400

                    break;
                case "nanometer":
                    chow = userInput * 9.144e+8


                    break;
                case "foot":
                    chow = userInput * 3


                 break;
                case "inch":
                    chow = userInput *36


                    break;
                case "yard" : 
                chow = userInput *1
                    break;
                case "mile":
                        chow = userInput/1760



                    break;
                
            }
           
        }
        else if(inp==="foot"){
            switch(oup){
                case "meter" :
                    chow = userInput / 3.281 
                    break;
                case "centimeter":
                    chow = userInput / 30.48


                    break;
                case "millimeter":
                    chow = userInput *304.8
                    break;
                case "kilometer":
                    chow = userInput /3281

                    break;
                case "micrometer" :
                    chow = userInput * 304800


                    break;
                case "nanometer":
                    chow = userInput * 3.048e+8


                    break;
                case "foot":
                    chow = userInput *1


                 break;
                case "inch":
                    chow = userInput *12


                    break;
                case "yard" : 
                chow = userInput /3
                    break;
                case "mile":
                        chow = userInput/5280


                    break;
                
            }
           
        }
        else if(inp==="inch"){
            switch(oup){
                case "meter" :
                    chow = userInput / 39.37
                    break;
                case "centimeter":
                    chow = userInput *2.54  

                    break;
                case "millimeter":
                    chow = userInput *25.4

                    break;
                case "kilometer":
                    chow = userInput /39370


                    break;
                case "micrometer" :
                    chow = userInput * 25400


                    break;
                case "nanometer":
                    chow = userInput * 2.54e+7


                    break;
                case "foot":
                    chow = userInput /12


                 break;
                case "inch":
                    chow = userInput *1


                    break;
                case "yard" : 
                chow = userInput /36
                    break;
                case "mile":
                        chow = userInput/ 63360



                    break;
                
            }
           
        }

        else if(inp==="mile"){
            switch(oup){
                case "meter" :
                    chow = userInput *1609

                    break;
                case "centimeter":
                    chow = userInput * 160900


                    break;
                case "millimeter":
                    chow = userInput * 1.609e+6
                    break;
                case "kilometer":
                    chow = userInput * 1.609
                    break;
                case "micrometer" :
                    chow = userInput * 1.609e+9

                    break;
                case "nanometer":
                    chow = userInput * 1.609e+12


                    break;
                case "foot":
                    chow = userInput *5280



                 break;
                case "inch":
                    chow = userInput *63360



                    break;
                case "yard" : 
                chow = userInput *5280

                    break;
                case "mile":
                        chow = userInput*1


                    break;
                
            }
           
        }
        

        setResult(chow)
       

    }
    // const areaconversion = () =>{
    //     switch(inputValue) {
    //         case "sqmile" :
    //         const sm = (total/2.59e+6) + "sm"
    //         setResult(sm)
    //         break;
    //     case "sqkilometer":
    //         const sqk = (total /1e+6) + "sqkm"
    //         setResult(sqk) 
    //         break;
    //     case "sqyard":  
    //     const sy  = (total * 1.196) +"sqy"
    //     setResult(sy)
    //     case "sqfoot":

    //     const sf  = (total *10.76) +"sqfoot"   
        
    //     setResult(sf)
    //     break;
    //     case "sqinch":
    //         const si = (total *1550) +"sqinches"
    //         setResult(si)
    //         break;

    //     case "hectare" :
    //         const hec = (total /10000) +"hec"
    //         setResult(hec)
    //         break;
    //       case "acre":
    //         const arc = (total/4047) +"acr"
    //         setResult(arc)
            
    //         break;

        

    //      }
         
        
         
    // }
    const areaconversion = () =>{
        if(oup==="sqmeter"){
            switch(inp){
                case "sqmeter":
                   chow = userInput *1
                    console.log(oup)
                    break;
                case "sqkilometer":
                    console.log(oup)
                    chow = userInput /1e+6

                break;
                case "hectare":
                    console.log(oup)
                    chow = userInput /10000
                    break;
                case "acre" :
                    console.log(oup)
                    chow = userInput / 4047
                    break
            }
            

        }
        else if(oup==="sqkilometer"){
            switch(inp){
                case "sqmeter":
                   chow = userInput *1e+6

                    console.log(oup)
                    break;
                case "sqkilometer":
                    console.log(oup)
                    chow = userInput * 1 

                break;
                case "hectare":
                    console.log(oup)
                    chow = userInput *100
                    break;
                case "acre" :
                    console.log(oup)
                    chow = userInput * 247.1

                    break
            }
            

        }
       else if(oup==="hectare"){
            switch(inp){
                case "sqmeter":
                   chow = userInput *10000
                    console.log(oup)
                    break;
                case "sqkilometer":
                    console.log(oup)
                    chow = userInput /100

                break;
                case "hectare":
                    console.log(oup)
                    chow = userInput *1
                    break;
                case "acre" :
                    console.log(oup)
                    chow = userInput *2.471
                    break
            }
            

        }
       else if(oup==="acre"){
            switch(inp){
                case "sqmeter":
                   chow = userInput * 4047

                    console.log(oup)
                    break;
                case "sqkilometer":
                    console.log(oup)
                    chow = userInput /247.1


                break;
                case "hectare":
                    console.log(oup)
                    chow = userInput /2.471

                    break;
                case "acre" :
                    console.log(oup)
                    chow = userInput *1
                    break
            }
            

        }
        setResult(chow)
        

    }
    // let inp = inputValue;
    // let userInput = total
    // let oup = outputValue;
    // let chow;
    let result1;
    console.log(userInput)
    const areaconversionvice = () =>{
        if(inp==="sqmeter"){
            switch(oup){
                case "sqmeter":
                   chow = userInput *1
                    console.log(oup)
                    break;
                case "sqkilometer":
                    console.log(oup)
                    chow = userInput /1e+6

                break;
                case "hectare":
                    console.log(oup)
                    chow = userInput /10000
                    break;
                case "acre" :
                    console.log(oup)
                    chow = userInput / 4047
                    break
            }
            

        }
        else if(inp==="sqkilometer"){
            switch(oup){
                case "sqmeter":
                   chow = userInput *1e+6

                    console.log(oup)
                    break;
                case "sqkilometer":
                    console.log(oup)
                    chow = userInput * 1 

                break;
                case "hectare":
                    console.log(oup)
                    chow = userInput *100
                    break;
                case "acre" :
                    console.log(oup)
                    chow = userInput * 247.1

                    break
            }
            

        }
       else if(inp==="hectare"){
            switch(oup){
                case "sqmeter":
                   chow = userInput *10000
                    console.log(oup)
                    break;
                case "sqkilometer":
                    console.log(oup)
                    chow = userInput /100

                break;
                case "hectare":
                    console.log(oup)
                    chow = userInput *1
                    break;
                case "acre" :
                    console.log(oup)
                    chow = userInput *2.471
                    break
            }
            

        }
       else if(inp==="acre"){
            switch(oup){
                case "sqmeter":
                   chow = userInput * 4047

                    console.log(oup)
                    break;
                case "sqkilometer":
                    console.log(oup)
                    chow = userInput /247.1


                break;
                case "hectare":
                    console.log(oup)
                    chow = userInput /2.471

                    break;
                case "acre" :
                    console.log(oup)
                    chow = userInput *1
                    break
            }
            

        }
        setResult(chow)
        


    }
    console.log(result1)
    const volumeconversion = () =>{
        switch(inputValue){
            case "millileter":

                const ml = total *1000 + "Ml"
                setResult(ml)
                break;
            case "gallon" :
                const ig = total /4.546 +"gallon"
                setResult(ig)
 
                break;
            case "cmeter" :
                const cubicm = total /1000 + " CubicMeter"
                setResult(cubicm)
                break;

            case "ounce" :
                const fo  = total  *  33.814 
                setResult(fo)

                break;
            case "usgallon" :
                const  usgallon = total /  3.785 
                setResult(usgallon)
                break;
            case "cubicinch" :
                 const cubicInch = total * 61.024
                 setResult(cubicInch)
 
                break;
            case "cubicfoot" :
                const cubicFoot = total/28.317
            setResult(cubicFoot)

                break;
        }
    
    }
    
    const speedconversion = () =>{
        switch(inputValue){
            case "mileperhour" :
                const milehour = total *  2.237
                setResult(milehour)

                break;
            case "Footpersecond" :
                const footpersecond = total * 3.281
                setResult(footpersecond)
                break;
           
            case "kilometerperhour" :
                const kmhr  = total / 3.281 
                setResult(kmhr)
                break;
            case "knot" :
                const knot = total *1.944
                setResult(knot)

                    break;
        }
       
    }
       
    const handleClickInput = (e) =>{
        if(oup ==="pascal"){
            switch(inp){
                case "pascal": 
                chow = userInput * 1 ;
                break;
            case "bar" : 
             chow = userInput /10000
             break;
             
            case "poundpersquareinch":
                chow = userInput/6895 
                break;
            case "standrdatmospher":
                chow = total / 101300
                break;
            case "torr": 
            chow = total /133.3
            break;

            }
        }
        else if(oup  === 'bar'){
            switch(inp){
                case "pascal": 
                chow = userInput * 100000 ;
                break;
            case "bar" : 
             chow = userInput * 1
             break;
            case "poundpersquareinch":
                chow = userInput * 14.504
                break;
            case "standrdatmospher":
                chow = total /1.013
                break;
            case "torr": 
            chow = total * 750.1
            break;

            }

        }
        else if(oup === 'poundpersquareinch'){
            switch(inp){
                case "pascal": 
                chow = userInput * 6895;
                break;
            case "bar" : 
             chow = userInput / 14.504
             break;
            case "poundpersquareinch":
                chow = userInput * 1
                break;
            case "standrdatmospher":
                chow = total / 14.696
                break;
            case "torr": 
            chow = total *  51.715
            break;

            }

        }
        else if(oup === 'standrdatmospher'){
            switch(inp){
                case "pascal": 
                chow = userInput *  101300;
                break;
            case "bar" : 
             chow = userInput * 1.013

             break;
            case "poundpersquareinch":
                chow = userInput *  14.696

                break;
            case "standrdatmospher":
                chow = total * 1
                break;
            case "torr": 
            chow = total * 760

            break;

            }

        }
        else if(oup ==="torr"){
            switch(inp){
                case "pascal": 
                chow = userInput *  133.3
                ;
                break;
            case "bar" : 
             chow = userInput /750.1


             break;
            case "poundpersquareinch":
                chow = userInput / 51.715

                break;
            case "standrdatmospher":
                chow = total * 760

                break;
            case "torr": 
            chow = total * 1

            break;

            }

        }
        

    setResult(chow)
       
       
    }
    
    const handleClickOutput = (e) =>{

       
        setInputValue1(e.target.value)
        if(inp ==="pascal"){
            switch(oup){
                case "pascal": 
                chow = userInput * 1 ;
                break;
            case "bar" : 
             chow = userInput /10000
             break;
             
            case "poundpersquareinch":
                chow = userInput/6895 
                break;
            case "standrdatmospher":
                chow = total / 101300
                break;
            case "torr": 
            chow = total /133.3
            break;

            }
        }
        else if(inputValue === 'bar'){
            switch(oup){
                case "pascal": 
                chow = userInput * 100000 ;
                break;
            case "bar" : 
             chow = userInput * 1
             break;
            case "poundpersquareinch":
                chow = userInput * 14.504
                break;
            case "standrdatmospher":
                chow = total /1.013
                break;
            case "torr": 
            chow = total * 750.1
            break;

            }

        }
        else if(inputValue === 'poundpersquareinch'){
            switch(oup){
                case "pascal": 
                chow = userInput * 6895;
                break;
            case "bar" : 
             chow = userInput / 14.504
             break;
            case "poundpersquareinch":
                chow = userInput * 1
                break;
            case "standrdatmospher":
                chow = total / 14.696
                break;
            case "torr": 
            chow = total *  51.715
            break;

            }

        }
        else if(inputValue === 'standrdatmospher'){
            switch(oup){
                case "pascal": 
                chow = userInput *  101300;
                break;
            case "bar" : 
             chow = userInput * 1.013

             break;
            case "poundpersquareinch":
                chow = userInput *  14.696

                break;
            case "standrdatmospher":
                chow = total * 1
                break;
            case "torr": 
            chow = total * 760

            break;

            }

        }
        else if(inputValue ==="torr"){
            switch(oup){
                case "pascal": 
                chow = userInput *  133.3
                ;
                break;
            case "bar" : 
             chow = userInput /750.1


             break;
            case "poundpersquareinch":
                chow = userInput / 51.715

                break;
            case "standrdatmospher":
                chow = total * 760

                break;
            case "torr": 
            chow = total * 1

            break;

            }

        }
        

    setResult(chow)
    }

    console.log(outputValue)
    return (

        <div   className="App">
        <div className='container'>
        {/* <button style={{border:"1px solid orange" ,color:"gray"}} onClick={()=>setLength(!length)}>Length</button>
        <button style={{border:"1px solid orange" ,color:"gray"}} onClick={()=>setArea(!area)}>Area</button>
        <button style={{border:"1px solid orange" ,color:"gray"}}>Volume</button>
        <button style={{border:"1px solid orange" ,color:"gray"}}>Speed</button>
        <button style={{border:"1px solid orange" ,color:"gray"}}>Weight</button>
        <button style={{border:"1px solid orange" ,color:"gray"}}>Temperature</button>  
        <button style={{border:"1px solid orange" ,color:"gray"}}>Power</button>    
        <button style={{border:"1px solid orange" ,color:"gray"}}>Pressure</button>  */}

        {arrList.map((item,index) =>
            <button  style={{border:"1px solid orange" ,color:"gray"}} onClick={()=> setUnit(item.unit)}>{item.unit}</button>
        )}

        <div>
        {  unit ==="length"   && <select onChange={handleChangeInput} onClick={lengthConversion}>
            <option value="meter">Meter(m)</option>
            <option value="centimeter">Centimeter(cm)</option>
            <option value="millimeter">MilliMeter(mm)</option>
            <option value="decimeter">Decimeter(dm)</option>
            <option value="kilometer">Kilometer(km)</option>
            <option value="micrometer">Micrometer</option>
            <option value="nanometer">Nanometer(nm)</option>
            <option value="foot">Foot</option>
            <option value ="inch">Inch</option>
            <option value="yard">Yard</option>
            <option value="mile">Mile</option>
        </select> }
        {  unit ==="length"   && <select onChange={handleChangeOutput} onClick={lengthConversionvice}>
            <option value="meter">Meter(m)</option>
            <option value="centimeter">Centimeter(cm)</option>
            <option value="millimeter">MilliMeter(mm)</option>
            <option value="kilometer">Kilometer(km)</option>
            <option value="micrometer">Micrometer</option>
            <option value="micrometer">Micrometer</option>
            <option value="nanometer">Nanometer(nm)</option>
            <option value="foot">Foot</option>
            <option value ="inch">Inch</option>
            <option value="yard">Yard</option>
            <option value="mile">Mile</option>
        </select> }


        {unit==="area"  && <select onChange={handleChangeInput} onClick={areaconversion} >
            <option selected value="">Select Conversion</option>
            <option value="sqmeter" >Sqmeter</option>
            <option value = "sqkilometer">Sqkilometer</option>
            <option value="hectare" >Hectare</option>
            <option value="acre" >Acre</option>
            

        </select> }
        {unit==="area"  && <select onChange={handleChangeOutput} onClick={areaconversionvice} >
        <option selected value="">Select Conversion</option>
            <option value="sqmeter" >Sqmeter</option>
            <option value = "sqkilometer">Sqkilometer</option>
            <option value="hectare" >Hectare</option>
            <option value="acre" >Acre</option>
            

        </select> }
        
        {unit==="volume"  && <select onChange={handleChangeInput} onClick={volumeconversion} >
            <option value="liter" >liter</option>
            <option value = "millileter">milliliter</option>
            <option value="gallon" >Gallon</option>
            <option value="cmeter" >cubicMeter</option>
            <option value="ounce">fluid ounce</option>
            <option value="usgallon" >us liquid gallon</option>
            <option value="cubicinch" >cubic inch</option>
            <option value="cubicfoot" >cubic foot</option>
        </select> }
        {unit==="speed"  && <select onChange={handleChangeInput} onClick={speedconversion} >
            <option value="meterpersecond" >Meter per second</option>
            <option value = "mileperhour">Mile per hour</option>
            <option value="Footpersecond" >Footpersecond</option>
           
            <option value="kilometerperhour">kilometerperhour</option>
            <option value="knot" >Knot</option>
            
            

        </select> }
        {unit==="pressure"  && <select onChange={handleChangeInput} onClick = {handleClickInput}>
            <option selected value ="">Select Conversion</option>
            <option value="pascal" >Pascal</option>
            <option value = "bar">Bar</option>
            <option value="poundpersquareinch" >Pound per square inch</option>
           
            <option value="standrdatmospher">standrdatmospher</option>
            <option value="torr" >torr</option>
        </select>    }
        {unit==="pressure"  && <select onChange={handleChangeOutput}  onClick={handleClickOutput}  >
            <option selected value="">Select Conversion</option>
            <option value="pascal" >pascal</option>
            <option value = "bar">Bar</option>
            <option value="poundpersquareinch" >Pound per square inch</option>
           
            <option value="standrdatmospher">standrdatmospher</option>
            <option value="torr" >torr</option>
        </select>    }
        
        
        </div>  
        

        
          <form>
          <input type='text' value={total} />
         <p style={{color:"white"}}>{result}</p>
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
            
          
         </div>
         </div>
         
        </div>
      );

    
}
export default Converter