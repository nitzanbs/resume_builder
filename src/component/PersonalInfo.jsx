import React from 'react'

export default function PersonalInfo(props) {
  const {changeHandler} = props


  return (
    <>
    <div className='row' >
      <h2 className='headLine' >PersonalInfo</h2>
    </div>

    <div className='container'>

    <div className='input-group'>
            <label htmlFor="profilePicture"></label><br />
            <input type="file" accept="image/*" id="profilePicture" name="profilePicture" onChange={(e) => changeHandler(e, 'profilePicture')} />
            <label htmlFor="profilePicture" className="fileLabel">
              <div className='profilePictureDiv'>
                <img className='profilePicture' src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" srcset="" />
                <span className='profilePictureText'>Uplowd Profile Picture</span>
              </div>
              </label>
          </div>

    <div className='box1'>

    <div className='input-group'>
    <label  htmlFor="First_name">First Name</label><br />
    <input className='inputP' onChange={changeHandler}  name='First_name' type="text" />
    </div>

    <div className='input-group'>
    <label  htmlFor="Last_name">Last Name</label><br />
    <input className='inputP' onChange={changeHandler}  name='Last_name' type="text" />
    </div>

    <div className='input-group'>
    <label htmlFor="Phone_Number">Phone Number</label><br />
    <input className='inputP' onChange={changeHandler} name='Phone_Number' type="number" />
    </div>

    <div className='input-group'>
    <label htmlFor="email">Email</label><br />
    <input className='inputP' onChange={changeHandler} name='email' type="email" />
    </div>

    </div>

 


    <div className='input-group'>
    <label htmlFor="About_Me">About Me</label><br />
    <input className='inputAbout' onChange={changeHandler} name='About_Me' type="text" />
    </div>

    </div>



    </>
  )
}
