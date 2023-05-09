
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView';
import {
   fetchCampusThunk,
   editCampusThunk } from '../../store/thunks';

class EditCampusContainer extends Component {

  componentDidMount(){
    this.props.fetchCampus(this.props.match.params.id);
  }
  // Initialize state
  constructor(props){
    super(props);
    this.state = {
      name: this.props.campus.name,
      imageUrl: this.props.campus.imageUrl,
      address: this.props.campus.address,
      description: this.props.campus.description,
      redirect: false,
      id:this.props.campus.id
    };
  }

  // Capture input data when it is entered
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Take action after user click the submit button
  handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.
    let campus = {
        name: this.state.name,
        imageUrl: this.state.imageUrl,
        address: this.state.address,
        description: this.state.description,
        id: this.props.campus.id
    };
  
    
    // Add new student in back-end database
     this.props.editCampus(campus);
    
    // Update state, and trigger redirect to show the new student
    this.setState({
        name: "",
        imageUrl: null,
        address: " ",
        description: " ",
        redirect: true,
    });
  }

  // Unmount when the component is being removed from the DOM:
  componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
  }

  // Render new student input form
  render() {
    // Redirect to new student's page after submit
    if(this.state.redirect) {
      return (<Redirect to={`/campus/${this.state.id}`}/>)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <EditCampusView 
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}
          campus = {this.props.campus}      
        />
      </div>          
    );
  }
}

const mapState = (state) =>{
  return{
    campus: state.campus,
  };
}
// The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return({
        fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
        editCampus: (campus) => dispatch(editCampusThunk(campus)),
    })
}

// Export store-connected container by default
// NewStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(EditCampusContainer);