/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */

import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student } = props;


  if(student.campus== null){
      return(
        <div>
          <h1>{student.firstname + " " + student.lastname}</h1>
          <h2>This Student is not enroll in any campus</h2>
          <h3>Email : {student.email}</h3>
          <h3>GPA : {student.GPA}</h3>
          <img src ={student.imageUrl} />
        </div>
      )
  }
  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <Link to={`/campus/${student.campus.id}`}>
            <h2>{student.campus.name}</h2>
          </Link>
      <h3>Email : {student.email}</h3>
      <h3>GPA : {student.GPA}</h3>
      <img src ={student.imageUrl}  style={{ width: '300px', height: 'auto' }}/>
      <br>
      </br>
      <Link to={{
        pathname: `/editstudent/${student.id}`,
        state: { student: student }
      }}>
        <button>Edit student</button>
      </Link>
    </div>
  );

};

export default StudentView;