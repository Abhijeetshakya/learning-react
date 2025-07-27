import React from 'react'
import { useState } from 'react'
import './Bmi.css';


export default function Bmi() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [message, setMessage] = useState('')

  //reload
  let reload = ()=>{
    window.location.reload(); 
  }

  //logic to calculate BMI
  let calcbmi = (e) =>{
    e.preventDefault();
    if (weight <= 0 || height <= 0) {
      setMessage('Please enter valid weight and height');
      return;
    }
    const heightInMeters = height / 100; // Convert height from cm to meters
    const bmi = (weight / (heightInMeters * heightInMeters));
    setBmi(bmi.toFixed(2));

    // Set message based on BMI value
    if (bmi < 18.5) {
      setMessage('You are underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setMessage('You have a normal weight');
    } else if (bmi >= 25 && bmi < 29.9) {
      setMessage('You are overweight');
    } else {
      setMessage('You are obese');
    }
  }
  return (
    <div className='bmi-container'>
      <h1>BMI Calculator</h1>
      <form className='bmi-form' onSubmit={calcbmi}>
        <h4> Weight(kg) </h4>
        <input type='number' placeholder='Enter your weight' value={weight} onChange={ (e)=> { setWeight(e.target.value)}}/> <br />
        <input type='number' placeholder='Enter your height in cm' value={height} onChange={(e) => {setHeight(e.target.value)}}/> <br />
        <button type='submit'>Calculate BMI</button>
        <button type='reset' onClick={reload}>Reset</button>
        <h3>Your BMI is:{bmi} </h3>
        <p> {message}</p>
      </form>

    </div>
  )
}
