import React, { useContext , useState, useEffect} from 'react'
import { UserContext } from '../../context/UserProvider';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../../config/Config';


const resumeCollectionRef = collection(db, 'Resume');


export default function MyResume() {
  const [resume, setResume] = useState([]);

  const { user } = useContext(UserContext);

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

    return (
        <>
            <h1>my resume</h1>

            {resume.map((item, i) => {
                return (
                    <>
                    <div className='page'>
                        <div className='leftColumn'>
                            <img src="" alt="" />
                            <h2 className='resumeTitle'>{item.personalInfo.About_Me}</h2>
                            <div className='personalInfo'>
                                <h2 className='resumeTitle'>{item.personalInfo.Phone_Number}</h2>
                                <h2 className='resumeTitle'>{item.personalInfo.email}</h2>
                            </div>
                        </div>

                        
                        
                        <div className='rightColumn'>
                        <h1 className='resumeTitle'>{item.personalInfo.First_name} {item.personalInfo.Last_name}</h1>
                        <div className='experienceContainer'>
                            <div className='timeFreme'>
                                
                            </div>
                            <div className='singlData'>
                                <h2 className='resumeTitle'>{item.WorkExperience}</h2>
                                <ul>
                                    <li>
                                        <h4 className='resumeTitle'>{item.WorkExperience}</h4>
                                    </li>
                                </ul>
                            </div>

                        </div>


                        <div className='educationContainer'>
                            <div className='singlData'>

                                <div className='timeFreme'> </div>

                                    <h2 className='resumeTitle'></h2>
                                        <ul>
                                            <li>
                                                <h4 className='resumeTitle'>{item.WorkExperience}</h4>
                                            </li>
                                        </ul>
                            </div>

                        </div>

                        </div>

                    </div>


                        {/* // <h1>{item.Full_name}</h1> */}
                    </>

                )


            })}


        </>
    )

}
