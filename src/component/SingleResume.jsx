import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/Config'
import { collection, doc, getDoc } from "firebase/firestore";
import html2pdf from 'html2pdf.js';


const resumeCollectionRef = collection(db, 'Resume');

export default function SingleResume() {
    const { resumeId } = useParams();
    const [resume, setResume] = useState([]);

    useEffect(() => {
      const fetchResume = async () => {
          try {
              const resumeDoc = await getDoc(doc(resumeCollectionRef, resumeId));
              if (resumeDoc.exists()) {
                  console.log("Resume data:", resumeDoc.data()); // Check the data you're receiving
                  setResume([resumeDoc.data()]);
              } else {
                  console.log("No such document!");
              }
          } catch (error) {
              console.error("Error fetching document: ", error);
          }
      };
  
      fetchResume();
  }, [resumeId]);

  const downloadPDF = () => {
    const element = document.getElementById('resume');
    const opt = {
      margin: [0, 0]
        // margin: 0.5,
        // filename: 'resume.pdf',
        // image: { type: 'jpeg', quality: 0.98 },
        // html2canvas: { scale: 2 },
        // jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
};

  

    return (
        <>

      {resume? (resume.map((item, i) => (
        <div >
        <div id={'resume_' + i}  key={i} className='page'>
          <div id='resume' className="resume">
            <div className='leftColumn'>
              {/* <img className='pImg' src={item.personalInfo && item.personalInfo.profilePicture ? item.personalInfo.profilePicture : ''} alt="Profile" /> */}
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
            <button 
            onClick={downloadPDF}
            >Download PDF</button>
            <button onclick="window.print()">הדפס</button>

          </div>
        </div>
      ))
      ) : (
        <p>Loading...</p>
    )}
    </>
    );
}
