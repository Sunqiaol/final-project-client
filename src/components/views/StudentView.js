/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;


  if(student.campus== null){
      return(
        <div>
          <h1>{student.firstname + " " + student.lastname}</h1>
          <h3>This Student is not enroll in any campus</h3>
        </div>
      )
  }
  // Render a single Student view 
  return (
  
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h3>{student.campus.name}</h3>
    </div>
  );

};

export default StudentView;