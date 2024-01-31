import React from 'react';

export default function Education(props) {
  const { educations, changeHandler, addEducation, deleteEducation } = props;

  return (
    <>
      <div className='row'>
        <h2 className='headLine'>Education</h2>
      </div>

      <div className='containerEducation'>
        {educations.map((education, index) => (
          <div key={index} className='boxWork'>
            <div className='input-group'>
              <label htmlFor={`Institution_${index}`}>Institution</label><br />
              <input
                className='inputWork'
                name={`Institution_${index}`}
                type="text"
                onChange={(e) => changeHandler(e, index, 'education')}
              />
            </div>

            <div className='input-group'>
              <label htmlFor={`Time_frame_${index}`}>Time frame</label><br />
              <input
                className='inputWork'
                name={`Time_frame_${index}`}
                type="number"
                onChange={(e) => changeHandler(e, index, 'education')}
              />
            </div>

            <div className='input-group'>
              <label htmlFor={`Subject_${index}`}>What you learned</label><br />
              <input
                className='inputRole'
                name={`Subject_${index}`}
                type="text"
                onChange={(e) => changeHandler(e, index, 'education')}
              />
            </div>

            <button type="button" onClick={() => deleteEducation(index)}>Delete education</button>
          </div>
        ))}
        <button onClick={addEducation}>Add another education</button>
      </div>
    </>
  );
}
