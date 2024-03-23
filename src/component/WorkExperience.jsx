import React from 'react';

export default function WorkExperience(props) {
  const { changeHandler, addWorkplace, deleteWorkplace } = props;

  return (
    <>
      <div className='row'>
        <h2 className='headLine'>Work Experience</h2>
      </div>

      <div className='containerWork'>
        {props.workExperiences.map((workExp, index) => (
        <>
          <div key={index} className='boxWork'>
            <div className='input-group'>
              <label htmlFor={`Company_name`}>Company name</label><br />
              <input
                className='inputWork'
                name={`Company_name`}
                type="text"
                onChange={(e) => changeHandler(e, index)}
              />
            </div>
            <div className='input-group'>
              <label htmlFor={`Role`}>Role</label><br />
              <input
                className='inputWork'
                name={`Role`}
                type="text"
                onChange={(e) => changeHandler(e, index)}
              />
            </div>

            <div className='input-group'>
              <label htmlFor={`Time_frame_start`}>Start Date</label><br />
              <input
                className='inputWork'
                name={`Time_frame_start`}
                type="date"
                onChange={(e) => changeHandler(e, index)}
              />
            </div>

            <div className='input-group'>
              <label htmlFor={`Time_frame_end`}>End Date</label><br />
              <input
                className='inputWork'
                name={`Time_frame_end`}
                type="date"
                onChange={(e) => changeHandler(e, index)}
              />
            </div>

            <div className='inputBox'>
              <label htmlFor={`Tell_us_more`}>Tell us more</label><br />
              <textarea
                className='inputRole'
                name={`Tell_us_more`}
                type="text"
                cols={5}
                onChange={(e) => changeHandler(e, index)}
              />
            </div>

          </div>
          <button type="button" onClick={() => deleteWorkplace(index)}>Delete workplace</button>
          </>

        ))}
        <button type="button" onClick={addWorkplace}>Add workplace</button>
      </div>
    </>
  );
}
