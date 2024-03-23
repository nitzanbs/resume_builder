import React from 'react';

export default function Skills(props) {
    const { skills, changeHandler, addSkill, deleteSkill } = props;



  return (
    <div>
        <div className='row'>
        <h2 className='headLine'>Skills</h2>
      </div>
        <div className='containerEducation'>
            
      {skills.map((skill, index) => (
        <div key={index} className='boxWork'>
            <div className='input-group'>
          <input
            className='inputWork'
            type="text"
            name={skill}
            onChange={(e) => changeHandler(e, index)}
          />
          </div>
          <button onClick={() => deleteSkill(index)}>Delete Skill</button>
        </div>
      ))}
      <button onClick={addSkill}>Add Skill</button>
    </div>
    </div>
  );
}
