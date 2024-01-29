import React , { useState, useEffect , useContext } from 'react'
import { getDocs, collection, query, where,addDoc, getDoc, deleteDoc, doc  } from "firebase/firestore";
import { db } from '../../config/Config';

import { UserContext } from '../../context/UserProvider'

import PersonalInfo from '../../component/PersonalInfo';
import WorkExperience from '../../component/WorkExperience';
import Education from '../../component/Education';



export default function Resume() {
  const { user, setUser } = useContext(UserContext);

  const [resume, setResume] = useState([])
  const [resumeCard, setResumeCard] = useState({})

  const [ErrMsg, setErrMsg] = useState("");
  const [addedResumeCardIds, setAddedResumeCardIds] = useState([]);



  const resumeCollectionRef = collection(db, 'Resume')

  const getResume = async () => {
    try{
      if(!user){
        return;
      }
        const q = query(resumeCollectionRef, where("user","==",user.uid))
        const rowDocs = await getDocs(q);
        const docs = rowDocs.docs.map((doc) => {
          return {...doc.data(), uid: doc.id };
        });
        setResume(docs);
      }catch(err){
        console.error(err);

      }
  }

  console.log(user);

  useEffect(() => {
    getResume()
  }, [user])

  const changeHandler = (e) => {
    setResume(prevResume => ({ ...prevResume, [e.target.name]: e.target.value }));
  };
  
  // ...
  
const submitHandler = async (e) => {
  e.preventDefault();

  try {
    const isAlreadyAdded = resume.some((item) => item.id === resumeCard.uid);

    if (!isAlreadyAdded) {
      const resumeCardRef = doc(resumeCollectionRef, resumeCard.uid);
      await setDoc(resumeCardRef, {
        ...resumeCard,
        isAdded: true,
        user: user.uid,
      });

      setResume((prevResume) => [...prevResume, resumeCard]);
      setAddedResumeCardIds([...addedResumeCardIds, resumeCard.id]);
    }
  } catch (error) {
    setErrMsg("Something went wrong");
  }
};

  

  // const RemoveRsume = async (resume) => {
  //   console.log(resume.id);
  //   try {
  //     const q = query(
  //       resumeCollectionRef,
  //       where("id", "==", resume.id),
  //       where("user", "==",user.uid)
  //     );

  //     const resumeCardDoc = await getDocs(q);

  //     console.log(resumeCardDoc);
  //     await deleteDoc(doc(db, "resume", resumeCardDoc.docs[0].id));

  //     const filtered = resume.filter((item) => item.id !== resume.id);

  //     setResume(filtered);


  //     setResumeCard((prevResumeCard) =>
  //     prevResumeCard.map((item) =>
  //         item.id === resume.id ? { ...item, isAdded: false } : item
  //       )
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };





        console.log(resume);

  return (
    
    <>
      <div>
        <h1>Resume</h1>

        <form onSubmit={submitHandler} >
          <PersonalInfo changeHandler={changeHandler} />
          <WorkExperience changeHandler={changeHandler}/>
          <Education changeHandler={changeHandler}/>
          <button type="submit">send form</button>
          



        </form>


    
      </div>


    </>

  )
}
