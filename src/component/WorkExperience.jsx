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
              <label htmlFor={`Time_frame`}>Time frame</label><br />
              <input
                className='inputWork'
                name={`Time_frame`}
                type="number"
                onChange={(e) => changeHandler(e, index)}
              />
            </div>

            <div className='input-group'>
              <label htmlFor={`Role`}>Role</label><br />
              <input
                className='inputRole'
                name={`Role`}
                type="text"
                onChange={(e) => changeHandler(e, index)}
              />
            </div>

            <button type="button" onClick={() => deleteWorkplace(index)}>Delete workplace</button>
          </div>
        ))}
        <button type="button" onClick={addWorkplace}>Add workplace</button>
      </div>
    </>
  );
}
