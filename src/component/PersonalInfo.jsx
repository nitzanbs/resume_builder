import React from 'react'

export default function PersonalInfo(props) {
  const {changeHandler} = props

  const preset_key = "ml_default";
  const cloud_name = "djmlunvsl";

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    !formData.append("upload_preset", preset_key);

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

    fetch(apiUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.secure_url) {
          setImage(data.secure_url);
        } else {
          console.error("Error uploading image to Cloudinary");
        }
      })
      .catch((err) => console.error(err));
  };


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
                <img className='profilePicture addPostImageTitle' src="images\Add post.png" alt="" srcset="" />
                <span className='profilePictureText'>Uploud Profile Picture</span>
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

 


    <div className='inputBox' >
    <label htmlFor="About_Me">About Me</label><br />
    <textarea className='inputAbout' 
    onChange={changeHandler} 
    name='About_Me' 
    type="text" cols={5} />
    </div>

    </div>



    </>
  )
}
