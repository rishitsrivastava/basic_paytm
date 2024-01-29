import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import ButtonWarning from '../components/ButtonWarning'

export default function Signup() {
  return (
    <div className='bg-slate-300 flex justify-center h-screen'>
      <div className='flex flex-col justify-center'>
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your information to create an account"} />
        <InputBox placeholder="John" label={"First Name"} />
        <InputBox placeholder="Doe" label={"Last Name"} />
        <InputBox placeholder="rishit111@gmail.com" label={"First Name"} />
        <InputBox placeholder="123456" label={"Password"} />
        <div>
          <Button label={"Sign up"} />
        </div>
        <ButtonWarning label={"Already have an account"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  )
}
