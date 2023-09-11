import "./App.css";
import Item from "./Components/Item";
import Dob from "./Components/Dob";
import Card from "./Components/Card";

function App() {
  const response = [
    {
      NameFirst: "Santosh",
      dobDate: 12,
      dobMonth: "October",
      dobYear: 2002

    },
    {
      NameFirst: "Nishant Ranjan",
      dobDate: 12,
      dobMonth: "October",
      dobYear: 2002

    },
    {
      NameFirst: "Vivek Raj",
      dobDate: 12,
      dobMonth: "October",
      dobYear: 2002

    }
  ];
  return (
    <>
    <Card>
    <Item name= {response[0].NameFirst}>Hello Sky</Item>
    <Dob  dobDate={response[0].dobDate} dobMonth={response[0].dobMonth} dobYear={response[0].dobYear} ></Dob>
    
    <Item name={response[1].NameFirst}>Hello Nishant jee</Item>
    <Dob  dobDate ={response[1].dobDate} dobMonth={response[1].dobMonth} dobYear={response[1].dobYear} ></Dob>
    
    <Item name={response[2].NameFirst}>Hey Vivek</Item>
    <Dob  dobDate ={response[2].dobDate} dobMonth={response[2].dobMonth} dobYear={response[2].dobYear} ></Dob>
    </Card>
  
     <h1 className="text-3xl font-semibold bg-gray-900 text-white p-3 flex  justify-center">Hello Santosh ab Ract With tailwindcss</h1>
    </>
  );
}

export default App;
