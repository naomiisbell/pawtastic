import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      breed: '',
      birthday: '',
      gender: false,
      spayNeutBtn: false,
      weight: false 
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

  genderButton = (e) => {
    e.preventDefault();
    this.setState({
      gender: true
    })
    console.log("btn is clicked")
  }

  spayNeutButton = (e) => {
    e.preventDefault();
    this.setState({
      spayNeutBtn: true
    })
    console.log("btn is clicked")
  }

  weightButton = (e) => {
    e.preventDefault();
    this.setState({
      weight: true
    })
    console.log("btn is clicked")
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
        <h1>Yay! We love dogs! Give us the basics about your pup.</h1>
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
            <button onClick={this.genderButton}
            >Female</button>
            <button onClick={this.genderButton}
            >Male</button>
          </div>

          <div className="spayedOrNeutered">
            <label>Spayed or Neutered</label>
            <button onClick={this.spayNeutButton}
            >Yes</button>
            <button onClick={this.spayNeutButton}
            >No</button>
          </div>

          <div className="weight">
            <label>Weight</label>
            <button className="btn-one"
            onClick={this.weightButton}
            >0-25 lbs</button>
            <button className="btn-two" onClick={this.weightButton}
            >25-50 lbs</button>
            <button className="btn-three" onClick={this.weightButton}
            >50-100 lbs</button>
            <button className="btn-four" onClick={this.weightButton}
            >100+ lbs</button>
          </div>

          <button 
          className="saveForm"
          type="Save and Exit"
          onClick={this.handleFormSubmission}
          >Save and Exit</button>

        </form>

        {this.state.formCompleted === true ? (<h2>Thank you for the information!</h2>) : null}
      </div>
      </div>
      </body>
    );
  }
};
export default App;
