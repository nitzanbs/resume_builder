import React from 'react'

export default function Education(props) {
  const {changeHandler} = props

  return (
<>
    <div className='row' >
      <h2 className='headLine' >Education</h2>
    </div>

    <div className='containerEducation' onChange={changeHandler}>

    <div className='boxWork'>
    <div>
    <label htmlFor="institution">institution</label><br />
    <input className='inputWork' name='institution' type="text" />
    </div>

    <div>
    <label htmlFor="time_frame">time frame</label><br />
    <input className='inputWork' name='time_frame' type="number" />
    </div>
    </div>

    <div>
    <label htmlFor="subject">What you learned </label><br />
    <input className='inputRole' name='subject' type="text" />
    </div>

    </div>



    </>  )
}
