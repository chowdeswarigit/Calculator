const { render, screen } = require("@testing-library/react");
import First from "./First";


test('Example1 renders successfully', () =>{

    render(<First/>);
    const element =  screen.getByText('Hello fisrt')
    expect(element).toBeInTheDocument();
}) 


