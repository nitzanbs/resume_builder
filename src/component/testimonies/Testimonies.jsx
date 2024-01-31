import React from 'react'
import './Testimonies.css'

export default function Testimonies() {
  return (
    <>
    <h2>What people are saying about us</h2>

    <div className='box'>

        <div className='tCard'>
        <span class="material-icons-outlined">star</span>
            <img className='img' src="https://cdn.pixabay.com/photo/2023/02/19/08/39/man-7799486_640.jpg" alt="" />
            <h3>John Smith</h3>
            <h4>The best</h4>
            <p>The Resumaker site is a must-visit for anyone who wants to take their career to the next level. Their personalized advice and tailored resume templates are top-notch!</p>
            <span>April 4th, 2023</span>

        </div>

        <div className='tCard'>
        <span class="material-icons-outlined">star</span>
            <img className='img' src="https://cdn.pixabay.com/photo/2022/05/24/06/23/indian-face-7217718_640.jpg" alt="" />
            <h3>Emily Johnson</h3>
            <h4>Top notch!</h4>
            <p>Very satisfied with the features and options in this site. Really it was so helpful and easy to work.</p>
            <span>April 20rd, 2023</span>

        </div>

        <div className='tCard'>
        <span class="material-icons-outlined">star</span>
            <img className='img' src="https://cdn.pixabay.com/photo/2021/07/19/05/19/woman-6477257_640.jpg" alt="" />
            <h3>Michael Davis</h3>
            <h4>Awesome …</h4>
            <p>After using Resumaker, I'm convinced it's the best resume-building site out there. The site's tips, templates and expert guidance made all the difference.</p>
            <span>April 5th, 2023 </span>

        </div>


    </div>
    
    </>
  )
}
