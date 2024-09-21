
import { useState } from 'react';
import './App.css';
import { TextField, Button, Stack } from '@mui/material';



function App() {
  const [date, setdate] = useState("")
  const [age, setAge] = useState(0);
  const calculateage = (e) => {
    e.preventDefault()
    // console.log(date);
    if (!date) {
      alert('Please enter your birthdate.');
      return; // Early exit if date is invalid
    }
    const today = new Date();
    const birthDate = new Date(date);
    

    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();
    // console.log(birthYear);
    
    let calculatedAge = today.getFullYear() - birthYear;
    
    
    if (today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay))   
      {
           calculatedAge--;
         }
     
    setAge(calculatedAge);
  }



  





  return (
    // here html code
    <>
      <div className="App">



        <div className='container'>
          <div className='div'>
              <h1>Age Calculator</h1>
              <label>Enter your birth date</label>
         </div>
          <div className='div'>
            <form onSubmit={calculateage}>
              <TextField onChange={e => setdate(e.target.value)} value={date || ""} type='date' id="outlined-basic" variant="outlined" /><br /><br />
              {/* <Stack direction="row" spacing={2}> */}
               <p className='bttn'> <Button className='btn' type='submit' style={{ backgroundColor:' rgb(131, 178, 179)'}} variant="contained">Calculate</Button></p>
                {/* <Button className='btn'  onClick={resetForm} variant="outlined">Reset</Button> */}
              {/* </Stack> */}
            </form>

            <p className='op'>{age > 0 && <p>Your age is: {age}</p>}</p> 
          </div>
        </div>
       

      </div>
    </>
  );
  // here js code
}

export default App;
