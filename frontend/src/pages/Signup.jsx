import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import ButtonWarning from '../components/ButtonWarning'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className='bg-slate-900 flex justify-center h-screen'>
      <div className='flex flex-col shadow-2xl justify-center'>
        <div className='rounded-lg bg-slate-800 text-white w-80 text-center p-2 h-max px-4'>
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox onChange={(e) => {setFirstName(e.target.value)}} placeholder="John" label={"First Name"} />
          <InputBox onChange={(e) => {setLastName(e.target.name)}} placeholder="Doe" label={"Last Name"} />
          <InputBox onChange={(e) => {setUserName(e.target.value)}} placeholder="rishit111@gmail.com" label={"First Name"} />
          <InputBox onChange={(e) => {setPassword(e.target.value)}} placeholder="123456" label={"Password"} />
        <div className='pt-4'>
          <Button 
            onClick={async () => {
              const response = await axios.post("http://localhost:5173/api/vi/user/signup", {
                userName,
                firstName,
                lastName,
                password
              });
              localStorage.setItem("token", response.data.token)
              navigate("/dashboard")
            }}
            label={"Sign up"} />
        </div>
        <ButtonWarning label={"Already have an account"} buttonText={"Sign in"} to={"/signin"} />
       </div>
      </div>
    </div>
  )
}
