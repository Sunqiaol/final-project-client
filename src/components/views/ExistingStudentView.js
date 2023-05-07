import { Link } from "react-router-dom";

const ExistingStudentView = (props) => {
  const {students, addToCampus} = props;
  // If there is no student, display a message

  const filteredStudents = students.filter(student => student.campus === null);
  // If there is at least one student, render All Students view 
  return (
    <div>
      <h1>All Students That are not Enrolled in a Campus</h1>

      {filteredStudents.map((filteredStudents) => {
          let name = filteredStudents.firstname + " " + filteredStudents.lastname;
          return (
            <div key={filteredStudents.id}>
              <Link to={`/student/${filteredStudents.id}`}>
                <h2>{name}</h2>
                <button onClick={() => addToCampus(filteredStudents)}>add</button>
              </Link>
              <hr/>
            </div>
          );
        }
      )}
      <br/>
      <br/><br/>
    </div>
  );
};


export default ExistingStudentView;