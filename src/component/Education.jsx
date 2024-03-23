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
          <>
          <div key={index} className='boxWork'>
            <div className='input-group'>
              <label htmlFor={`Institution`}>Institution</label><br />
              <input
                className='inputWork'
                name={`Institution`}
                type="text"
                onChange={(e) => changeHandler(e, index, 'education')}
              />
            </div>
            <div className='input-group'>
              <label htmlFor={`Diploma`}>Diploma</label><br />
              <input
                className='inputWork'
                name={`Diploma`}
                type="text"
                onChange={(e) => changeHandler(e, index, 'education')}
              />
            </div>

            <div className='input-group'>
              <label htmlFor={`Time_frame_start`}>Start Date</label><br />
              <input
                className='inputWork'
                name={`Time_frame_start`}
                type="date"
                onChange={(e) => changeHandler(e, index, 'education')}
              />
            </div>

            <div className='input-group'>
              <label htmlFor={`Time_frame_end`}>End Date</label><br />
              <input
                className='inputWork'
                name={`Time_frame_end`}
                type="date"
                onChange={(e) => changeHandler(e, index, 'education')}
              />
            </div>

            <div className='inputBox'>
              <label htmlFor={`Subject`}>What you learned</label><br />
              <textarea
                className='inputRole'
                name={`Subject`}
                type="text"
                cols={5}
                onChange={(e) => changeHandler(e, index, 'education')}
              />
            </div>

          </div>
          <button type="button" onClick={() => deleteEducation(index)}>Delete education</button>

          </>
        ))}
        <button type="button" onClick={addEducation}>Add education</button>
      </div>
    </>
  );
}
