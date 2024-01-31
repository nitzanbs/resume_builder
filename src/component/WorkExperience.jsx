import React from 'react'

export default function WorkExperiencep(props) {
  const {changeHandler} = props

  return (
<>
    <div className='row' >
      <h2 className='headLine' >Work Experience</h2>

    </div>

    <div className='containerWork' onChange={changeHandler}>

    <div className='boxWork'>

    <div className='input-group'>
    <label htmlFor="Company_name">Company name</label><br />
    <input className='inputWork'  name='Company_name name' type="text" />
    </div>

    <div className='input-group'>
    <label htmlFor="Time_frame">Time frame</label><br />
    <input className='inputWork' name='Time_frame' type="number" />
    </div>
    </div>

    <div className='input-group'>
    <label htmlFor="Role">Role</label><br />
    <input className='inputRole' name='Role' type="text" />
    </div>

    <button>add enader work place</button>

 

    </div>



    </>  )
}
