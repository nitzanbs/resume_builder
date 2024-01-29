import React from 'react'

export default function PersonalInfo(props) {
  const {changeHandler} = props


  return (
    <>
    <div className='row' >
      <h2 className='headLine' >PersonalInfo</h2>
    </div>

    <div>

    <label htmlFor="Full_name">Full name</label>
    <input onChange={changeHandler}  name='Full_name' type="text" />
    

    <label htmlFor="About_Me">About Me</label>
    <input onChange={changeHandler} name='About_Me' type="text" />

    <label htmlFor="Phone_Number">Phone Number</label>
    <input onChange={changeHandler} name='Phone_Number' type="number" />


    <label htmlFor="email">Email</label>
    <input onChange={changeHandler} name='email' type="email" />

    </div>



    </>
  )
}
