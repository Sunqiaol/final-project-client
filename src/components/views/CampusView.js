/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";


// Take in props data to construct the component
const CampusView = (props) => {
  const { campus, deleteCampus,deleteStudentFromCampus } = props;

  if (!campus.students.length) {
    return (
      <div>
        <p>There are no students.</p>
        <Link to={{
        pathname: `/newstudent/${campus.id}`,
        state: { campus: campus }
      }}>
        <button>Add new student</button>
      </Link>
      <Link to={`/campuses`}>
      <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
        </Link>
      </div>
    );
  }
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      {campus.students.map(student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name} </h2>
              <button onClick={() => deleteStudentFromCampus(student)}>Delete</button>
            </Link>
          </div>
        );
      })}
      <Link to={{
        pathname: `/newstudent/${campus.id}`,
        state: { campus: campus }
      }}>
        <button>Add new student</button>
      </Link>
      <Link to={`/existingstudent/${campus.id}`}>
        <button>Add Existing Student to the Campus</button>
      </Link>
      <Link to={{
        pathname: `/editcampus/${campus.id}`,
        state: { campus: campus }
      }}>
        <button>Edit Campus</button>
      </Link>
      <Link to={`/campuses`}>
      <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
        </Link>
    </div>
  );
};

export default CampusView;