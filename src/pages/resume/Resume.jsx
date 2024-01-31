import React, { useState, useEffect, useContext } from 'react';
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from '../../config/Config';
import { UserContext } from '../../context/UserProvider';
import PersonalInfo from '../../component/PersonalInfo';
import WorkExperience from '../../component/WorkExperience';
import Education from '../../component/Education';
import '../../component/Form.css'


export default function Resume() {
  const { user, setUser } = useContext(UserContext);
  const [resumeCard, setResumeCard] = useState({});
  const [personalInfo, setPersonalInfo] = useState({});
  const [workExperience, setWorkExperience] = useState({});
  const [education, setEducation] = useState({});


  const [ErrMsg, setErrMsg] = useState("");
  const [addedResumeCardIds, setAddedResumeCardIds] = useState([]);
  const resumeCollectionRef = collection(db, 'Resume');




  const changeHandler = (e) => {
    setResumeCard((prevData) => ({ ...prevData, ...{ [e.target.name]: e.target.value } }));
  };
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const resumeCardData = {
        personalInfo,
        workExperience,
        education,
        isAdded: true,
        user: user.uid,
      };      
      const resumeCardDoc = await addDoc(resumeCollectionRef, {
        ...resumeCardData,
        isAdded: true,
        user: user.uid,
      });
      console.log("Resume Card Doc:", resumeCardDoc);

      setResumeCard({});
      // setAddedResumeCardIds([...addedResumeCardIds, resumeCard.uid]);

    } catch (error) {
      console.error(error);
      setErrMsg("Something went wrong");
    }
  };

  const updatePersonalInfo =(e) => {
    setPersonalInfo((prevData) => ({...prevData,  [e.target.name]: e.target.value}));
  }
  const updateWorkExperience =(e) => {
    setWorkExperience((prevData) => ({...prevData,  [e.target.name]: e.target.value }));
  }
  const updateEducation =(e) => {
    setEducation((prevData) => ({...prevData,  [e.target.name]: e.target.value }));
  }



  console.log("resumeCard:", resumeCard);

  return (
    <>
      <div className='form'>
        <h1 className='Resume'>Resume</h1>
        <form onSubmit={submitHandler}>
          <PersonalInfo changeHandler={updatePersonalInfo} />
          <WorkExperience changeHandler={updateWorkExperience}/>
          <Education changeHandler={updateEducation}/>
          <button className='formBtn' type="submit">send form</button>
        </form>
      </div>
    </>
  );
}
