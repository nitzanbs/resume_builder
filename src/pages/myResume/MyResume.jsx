import React, { useContext, useState, useEffect } from 'react';
// import html2pdf from 'html2pdf.js';
import { UserContext } from '../../context/UserProvider';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../../config/Config';
import { Link, useParams } from 'react-router-dom';

import './MyResume.css';


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

  // const downloadPDF = () => {
  //   const element = document.getElementById('resume');
  //   html2pdf(element);
  // };
  
  

  
  

  return (
    <>
      <h1>My Resume</h1>

      {resume.map((item, i) => (
        <div >
        <div id={'resume_' + i}  key={i} className='page'>
          <div id='resume' className="resume">
            <div className='leftColumn'>
              <img className='pImg' 
              // src={image} 
              alt="Profile" />
              <img className='pImg' src="https://cdn.pixabay.com/photo/2023/12/29/17/37/monstera-8476616_640.jpg" alt="" />
              <h2 className='AboutP'>{item.personalInfo.About_Me}</h2>
              <div>
                <h2 className='AboutP' ><i class="fa-solid fa-phone"></i> {item.personalInfo.Phone_Number}</h2>
                <h2 className='AboutP' ><i class="fa-regular fa-envelope"> </i>{item.personalInfo.email}</h2>
              </div>

              <div>
              <ul>
                <li className='AboutP'>{item?.skills?.skill}</li>
              </ul>
              </div>

              <div>
              <ul>
                <li className='AboutP'>{item?.languages?.language}</li>
              </ul>
              </div>
            </div>

            <div className='rightColumn'>
              <h1 className='fullName'>{item?.personalInfo?.First_name} {item.personalInfo.Last_name}</h1>

              <div className='experienceContainer'>
                <h3 className='titel'>Experience</h3>
                {item.workExperiences?.map((exp, index) => (
                  <div key={index} className='singlData'>
                    <div className='timeAndName'>
                      <div className='NameAndRole'>
                        <h2 className='textHeadLine'>{exp.Company_name}</h2>
                        <h2 className='textHeadLine2'>{exp.Role}</h2>
                        </div>

                        <p className='timeFrame'>{exp.Time_frame_start}-{exp.Time_frame_end}</p>

                    </div>
                    
                    <h4 className='text'>{exp.Tell_us_more}</h4>
                  </div>
                ))}
              </div>

              <div className='experienceContainer'>
              <h3 className='titel'>Education</h3>

                {item.educations?.map((edu, index) => (
                  <div key={index} className='singlData'>
                    
                    <div className='timeAndName'>
                      
                    <div>
                    <h2 className='textHeadLine'>{edu.Institution}</h2>
                    <h2 className='textHeadLine2'>{edu.Diploma}</h2>
                    </div>

                    <p className='timeFrame'>{edu.Time_frame_start}-{edu.Time_frame_end}</p>
                    

                    
                    </div>
                    <h4 className='text'>{edu.Subject}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>

          <div className="print-button">
            {/* <button onClick={downloadPDF}>Download PDF</button> */}
            <Link to={`/single-resume/${item.uid}`}>View Resume</Link>
          </div>
        </div>
      ))}
    </>
  );
}
