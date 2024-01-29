import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import ButtonWarning from '../components/BottomWarning'

export default function Signin() {

  return (
    <div className='flex  bg-slate-950 h-screen justify-center'>
      <div className='flex shadow-2xl flex-col justify-center'>
        <div className='rounded-lg text-white p-2 text-center h-max px-4 bg-slate-900'>
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox onChange={(e) => {e.target.value}} placeholder="user@gmail.com" label={"Email"} />
          <InputBox onChange={(e) => {e.target.value}}  placeholder="123456" label={"Password"} />
          <div className='pt-4'>
            <Button label={"Sign in"} />
          </div>
          <ButtonWarning label="Don't have an account" buttonText={"Sign up"} to={"/signup"} />
        </div>
      </div>
    </div>
  )
}
