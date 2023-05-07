import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import {
    fetchAllStudentsThunk,
    addToCampusThunk
} from '../../store/thunks';

import ExistingStudentView from '../views/ExistingStudentView';

class ExistingStudentContainer extends Component {

    // Get all students data from back-end database
    componentDidMount() {
        this.props.fetchAllStudents();
    }

    // Render All Students view by passing all students data as props to the corresponding View component
    render() {
        return (
            <div>
                <Header />
                <ExistingStudentView
                    students={this.props.allStudents}
                    addToCampus={this.props.addToCampus}
                />
            </div>
        )
    }
}

// The following 2 input arguments are passed to the "connect" function used by "AllStudentsContainer" component to connect to Redux Store.
// 1. The "mapState" argument specifies the data from Redux Store that the component needs.
// The "mapState" is called when the Store State changes, and it returns a data object of "allStudents".
const mapState = (state) => {
    return {
        allStudents: state.allStudents,  // Get the State object from Reducer "allStudents"
    };
};
// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch,ownProps) => {
    const campusId = ownProps.match.params.id;
    return {
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        addToCampus: (student) => dispatch(addToCampusThunk(student, campusId)),
    };
};

// Export store-connected container by default
// AllStudentsContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default withRouter(connect(mapState, mapDispatch)(ExistingStudentContainer));