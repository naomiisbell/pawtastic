import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      breed: '',
      birthday: ''
    }
  }

  onNameEntry = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onBreedEntry = (event) => {
    this.setState({
      breed: event.target.value
    })
  }

  onBirthdayEntry = (event) => {
    this.setState({
      birthday: event.target.value
    })
  }

  handleFormSubmission = (e) => {
    e.preventDefault();
    this.setState({
      formCompleted: true
    })
    console.log("Form is submitted")
  }

  render() {
    return (
      <body>
      <div id="parent">
      <div className="sideOne">
        <img className="dogImg" src="https://www.officialgoldenretriever.com/sites/default/files/resize/upload/dog%20without%20pooping-400x600.jpg"></img>

      </div>
      <div className="sideTwo">
        <h1>Yay! we love dogs! Give us the basics about your pup.</h1>
        <form className="pet-basics-form">
          <div className="firstLabel">
          <label>Name</label>
          <input
            type="name"
            placeholder="Pet's name"
            value={this.state.name}
            onChange={this.onNameEntry}
          />
          </div>

          <div>
            <img className="uploadPhotoImg" src="https://icons-for-free.com/iconfiles/png/512/camera+photo+upload+icon-1320184663794870720.png"></img>
            <label className="photoLabel">Upload a Photo</label>
          </div>

          <div className="thirdLabel">
          <label>Birthday</label>
          <input
            type="birthday"
            placeholder="MM/DD/YYYY"
            value={this.state.birthday}
            onChange={this.onBirthdayEntry}
          />
          </div>

          <div className="secondLabel">
          <label>Breed</label>
          <input
            type="breed"
            placeholder="Pet's breed"
            value={this.state.breed}
            onChange={this.onBreedEntry}
          />
          </div>

          <div className="genders">
            <label>Gender</label>
            <button>Female</button>
            <button>Male</button>
          </div>

          <div className="spayedOrNeutered">
            <label>Spayed or Neutered</label>
            <button>Yes</button>
            <button>No</button>
          </div>

          <div className="weight">
            <label>Weight</label>
            <button className="btn-one">0-25 lbs</button>
            <button className="btn-two">25-50 lbs</button>
            <button className="btn-three">50-100 lbs</button>
            <button className="btn-four">100+ lbs</button>
          </div>

          <button 
          className="saveForm"
          type="Save and Exit"
          >Save and Exit</button>

        </form>
      </div>
      </div>
      </body>
    );
  }
};
export default App;
