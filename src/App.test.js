import App from './App';
import FirstTest from './First';
import Second from './Second';
import Login from './Login';
import TestWithMockData from './MockData';
 const mockData = [
        {
            "id": 1,
            "first_name": "Fletcher",
            "last_name": "McVanamy",
            "email": "mmcvanamy0@e-recht24.de",
            "age": 30
          }, {
            "id": 2,
            "first_name": "Clarice",
            "last_name": "Harrild",
            "email": "charrild1@dion.ne.jp",
            "age": 35
          }, 
          
    ]
    test("required test messages is present", () => {
      render(<FirstTest  />)
  
      expect(screen.getByText(/hello wold/i)).toBeVisible();
      // expect(screen.getByText(/hello chow/i)).toBeInTheDocument()
  })
  test("Ordered list renders", () => {
    render(<FirstTest data={mockData} />)

    expect(screen.getAllByRole(/listitem/i)).toHaveLength(3)
    // expect(screen.getByText(/hello chow/i)).toBeInTheDocument()
})
test("expected title is present", () =>{
  render(<FirstTest/>)
  const title = screen.getByTestId('mytestid')
  expect(title).toBeInTheDocument()
})
test("sum should be 15" ,()=>{
  render(<FirstTest/>)
  const sum =  screen.getByTitle("sum")
  expect(sum.textContent).toBe("15")
})
test("hello is   present" , () =>{
  render(<Second/>)
  expect(screen.getByText(/helllo/i)).toBeInTheDocument()
})

test("Username input should be render" ,()=>{
  render(<Login/>)
  const userNameEl = screen.getByPlaceholderText(/username/i)
  expect(userNameEl).toBeInTheDocument()
})
test("button input should be rendered" ,()=>{
  render(<Login/>)
  expect(screen.getByRole("button")).toBeInTheDocument()
})
test("button element to be disabled",()=>{
  render(<App/>)
  expect(screen.getByRole("button")).toBeDisabled()
})

test("username not to be empty",()=>{
  render(<Login/>)
  const userNameElement = screen.getByPlaceholderText(/username/i)
  expect(userNameElement.value).toBe("")
})
test("error message should be visiable" ,()=>{
  render(<App/>)
  const spanEl =  screen.getByTestId("error")
  expect(spanEl).not.toBeVisible()
})


test("input userName field should be change" ,()=>{
  render(<App/>)
  const usernamechange =  screen.getByPlaceholderText(/username/i)
  const testValue = "chow" 
  fireEvent.change(usernamechange, {target :{value:testValue  }})
  expect(usernamechange.value).toBe(testValue)
})
test("input Password field should be change" ,()=>{
  render(<App/>)
  const PasswordChnage = screen.getByPlaceholderText(/password/i)
  const password  = "chow@123"
  fireEvent.change(PasswordChnage,{target:{value:password}})
  expect(PasswordChnage.value).toBe(password)
})

test("input password filed should be chage" ,()=>{
  render(<App/>)
  const el =  screen.getByPlaceholderText(/password/i)
  const pass =  "pooji"
  fireEvent.change(el,{target:{value:pass}})
  expect(el.value).toBe(pass)
})

test("button element not to be disabled",()=>{
  render(<App/>)
  const PasswordChnage = screen.getByPlaceholderText(/password/i)
  const usernamechange =  screen.getByPlaceholderText(/username/i)
  const testValue = "test"
  fireEvent.change(PasswordChnage,{target:{value:testValue}})
  fireEvent.change(usernamechange, {target :{value:testValue}})

  expect(screen.getByRole("button")).not.toBeDisabled()
})
test("Mock Data successfully", () => {
  render(<TestWithMockData data={mockData} />)
  expect(screen.getByText(/charrild1@.ne.jp/i)).toBeInTheDocument();
})