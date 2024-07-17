import React, { useState } from 'react'
import './Programs.css'
import program_1 from '../../Assets/program-1.png'
import program_2 from '../../Assets/program-2.png'
import program_3 from '../../Assets/program-3.png'
import program_icon_1 from '../../Assets/program-icon-1.png'
import program_icon_2 from '../../Assets/program-icon-2.png'
import program_icon_3 from '../../Assets/program-icon-3.png'
import { Link } from 'react-router-dom'
import { programs } from '../../Assets/Data/Data'



const Programs = ({ url }) => {
  const [courses, setProgramCourses] = useState(false);
  const handleClick = () => {
    setProgramCourses(!courses)
  }
  return (
    <div className='programs'>
       {programs && programs.map((program) => (
        <div className="program" key={program.id}>
        <Link to={url ? `${url}/${program.url}` : `${program.url}`}>
          <img  src={program_1} alt="alt" />
          <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>{program.name}</p>
            <br />
            
           
               
          </div>
        </Link>
    
      </div>
       ))}
    </div>
  )
}

export default Programs