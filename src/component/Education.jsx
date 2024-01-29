import React from 'react'

export default function Education() {
  return (
<>
    <div className='row' >
      <h2 className='headLine' >Education</h2>
    </div>

    <div>

    <label htmlFor="institution">institution</label>
    <input name='institution' type="text" />
    

    <label htmlFor="time_frame">time frame</label>
    <input name='time_frame' type="number" />

    <label htmlFor="subject">What you learned </label>
    <input name='subject' type="text" />


    </div>



    </>  )
}
