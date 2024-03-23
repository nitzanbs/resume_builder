import React from 'react';

export default function Languages(props) {
  const { languages, changeHandler, addLanguage, deleteLanguage } = props;

  return (
    <div>
      <div className='row'>
        <h2 className='headLine'>Languages</h2>
      </div>
      <div className='containerEducation'>
        {languages.map((language, index) => (
          <div key={index} className='boxWork'>
            <div className='input-group'>
              <input
                className='inputWork'
                type="text"
                name={language.name}
                value={language.name}
                onChange={(e) => changeHandler(e, index)}
              />
              <label>
                <input
                  type="checkbox"
                  checked={language.isNative}
                  onChange={(e) =>
                    changeHandler(
                      { target: { name: 'isNative', value: e.target.checked } },
                      index
                    )
                  }
                />
                Native
              </label>
            </div>
            <button onClick={() => deleteLanguage(index)}>Delete Language</button>
          </div>
        ))}
        <button onClick={addLanguage}>Add Language</button>
      </div>
    </div>
  );
}
