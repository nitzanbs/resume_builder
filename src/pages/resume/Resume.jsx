import React, { useState, useContext } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/Config';
import { UserContext } from '../../context/UserProvider';
import PersonalInfo from '../../component/PersonalInfo';
import WorkExperience from '../../component/WorkExperience';
import Education from '../../component/Education';
import '../../component/Form.css';

export default function Resume() {
  const { user } = useContext(UserContext);
  const [resumeCard, setResumeCard] = useState({});
  const [personalInfo, setPersonalInfo] = useState({});
  const [workExperiences, setWorkExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [education, setEducation] = useState({});

  const resumeCollectionRef = collection(db, 'Resume');

  const changeHandler = (e, index, type) => {
    const updatedData = type === 'education' ? [...educations] : [...workExperiences];
    const { name, value } = e.target;
    updatedData[index] = {
      ...updatedData[index],
      [name]: value,
    };
    type === 'education' ? setEducations(updatedData) : setWorkExperiences(updatedData);
  };

  const addEducation = () => {
    setEducations([...educations, {}]);
  };

  const deleteEducation = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  const addWorkplace = () => {
    setWorkExperiences([...workExperiences, {}]);
  };

  const deleteWorkplace = (index) => {
    const updatedWorkExperiences = [...workExperiences];
    updatedWorkExperiences.splice(index, 1);
    setWorkExperiences(updatedWorkExperiences);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const resumeCardData = {
        personalInfo,
        workExperiences,
        educations,
        isAdded: true,
        user: user.uid,
      };
      const resumeCardDoc = await addDoc(resumeCollectionRef, {
        ...resumeCardData,
        isAdded: true,
        user: user.uid,
      });
      console.log('Resume Card Doc:', resumeCardDoc);

      setResumeCard({});
    } catch (error) {
      console.error(error);
    }
  };

  const updatePersonalInfo = (e) => {
    setPersonalInfo((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const updateEducation = (e) => {
    setEducation((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  console.log('resumeCard:', resumeCard);

  return (
    <>
      <div className='form'>
        <h1 className='Resume'>Resume</h1>
        <form onSubmit={submitHandler}>
          <PersonalInfo changeHandler={updatePersonalInfo} />
          <WorkExperience
            workExperiences={workExperiences}
            changeHandler={changeHandler}
            addWorkplace={addWorkplace}
            deleteWorkplace={deleteWorkplace}
          />
          <Education
            educations={educations}
            changeHandler={changeHandler}
            addEducation={addEducation}
            deleteEducation={deleteEducation}
          />
          <button className='formBtn' type='submit'>
            send form
          </button>
        </form>
      </div>
    </>
  );
}
