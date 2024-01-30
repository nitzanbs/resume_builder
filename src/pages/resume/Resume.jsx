import React, { useState, useEffect, useContext } from 'react';
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from '../../config/Config';
import { UserContext } from '../../context/UserProvider';
import PersonalInfo from '../../component/PersonalInfo';
// import WorkExperience from '../../component/WorkExperience';
// import Education from '../../component/Education';

export default function Resume() {
  const { user, setUser } = useContext(UserContext);
  const [resume, setResume] = useState([]);
  const [resumeCard, setResumeCard] = useState({});
  const [ErrMsg, setErrMsg] = useState("");
  const [addedResumeCardIds, setAddedResumeCardIds] = useState([]);
  const resumeCollectionRef = collection(db, 'Resume');

  const getResume = async () => {
    try {
      if (!user) {
        return;
      }
      const q = query(resumeCollectionRef, where("user", "==", user.uid));
      const rowDocs = await getDocs(q);
      const docs = rowDocs.docs.map((doc) => ({ ...doc.data(), uid: doc.id }));
      setResume(docs);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getResume();
  }, [user]);

  const changeHandler = (e) => {
    setResumeCard((prevData) => ({ ...prevData, ...{ [e.target.name]: e.target.value } }));
  };
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const resumeCardDoc = await addDoc(resumeCollectionRef, {
        ...resumeCard,
        isAdded: true,
        user: user.uid,
      });
      console.log("Resume Card Doc:", resumeCardDoc);

      setResume([]); // Clear the resume state
      setResumeCard({});
      setAddedResumeCardIds([...addedResumeCardIds, resumeCard.uid]);
    } catch (error) {
      console.error(error);
      setErrMsg("Something went wrong");
    }
  };

  console.log(resume);
  console.log("resumeCard:", resumeCard);

  return (
    <>
      <div>
        <h1>Resume</h1>
        <form onSubmit={submitHandler}>
          <PersonalInfo changeHandler={changeHandler} />
          {/* <WorkExperience changeHandler={changeHandler}/> */}
          {/* <Education changeHandler={changeHandler}/> */}
          <button type="submit">send form</button>
        </form>
      </div>
    </>
  );
}
