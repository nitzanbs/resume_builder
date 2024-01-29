import React , { useState, useEffect , useContext } from 'react'
import { collection } from 'firebase/firestore'
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from './config/Config';

import { UserContext } from './context/UserProvider'



export default function Resume() {
  const { user, setUser } = useContext(UserContext);

  const [resume, setResume] = useState([])

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

    // const submitHelper = async (e) => {
    //   e.preventDefault()
    //   try{

    //   }catch{
    //     console.error('error')
    //   }
    // }


  return (
    
    <>
      <div>
        <h1>Resume</h1>

        <form onSubmit={} >


        </form>


    
      </div>


    </>

  )
}
