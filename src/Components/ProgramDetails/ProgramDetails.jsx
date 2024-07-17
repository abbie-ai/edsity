import React, { useEffect, useState } from 'react';
import { programs} from '../../Assets/Data/Data';
import { Link, useParams } from 'react-router-dom';
import './ProgramDetails.css';
import dark_arrow from '../../Assets/dark-arrow.png'

const ProgramDetails = () => {
  const { url } = useParams();
  const [programCourses, setProgramCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);


  useEffect(()=>{
    const program = programs.find((program) => program.url === url);
    if(program){
      setProgramCourses(program.courses);
    }

  }, [url, programs]);
  
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };
  return (

   <div className="detail-container">
     <ul className='details'>
      {programCourses ? (
        <ul>{programCourses.map((course, i) =>(<li key={i} onClick={() => handleCourseClick(course)}><Link to={`/courses/${course.id}`}>{course.name}</Link></li>))}</ul>
      ) :<>No Courses Available</>}
    </ul>
    {selectedCourse && (
        <div className='course-details' >
          <h2>{selectedCourse.name}</h2>
          <p><strong>Requirements:</strong> {selectedCourse.requirements}</p>
          <p><strong>Duration:</strong> {selectedCourse.duration}</p>
          <p><strong>Description:</strong> {selectedCourse.description}</p>
        </div>
      )}
      <button className='button'>Apply Now!<img src={dark_arrow} alt="" /></button>
   </div>
    
  
  );
};

export default ProgramDetails;
