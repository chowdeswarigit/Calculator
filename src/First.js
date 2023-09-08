
const FirstTest= ({data, displayUnorderedList, handleClick}) => {

    const a =  5 
    const b = 10
    return (
      <div>
      
       <h2>hello wold</h2>
        <ul>
            <li>hi</li>
            <li>helllo</li>
            <li>how are you?</li>
        </ul>
        <h2 data-testid = "mytestid">hello chow</h2>
        <span title="sum">{a+b}</span>
            
      </div>
    )
  }
  
  export default FirstTest