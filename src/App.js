import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <body>
      <div id="parent">
      <div className="sideOne">
        <img src="https://www.officialgoldenretriever.com/sites/default/files/resize/upload/dog%20without%20pooping-400x600.jpg"></img>
      </div>
      <div className="sideTwo">
        <h1>Yay! we love dogs! Give us the basics about your pup.</h1>
        <form className="pet-basics-form">
          <div className="firstLabel">
          <label>Name</label>
          <input
            type="name"
            placeholder="Pet's name"
          />
          </div>

          <div className="secondLabel">
          <label>Breed</label>
          <input
            type="breed"
            placeholder="Pet's breed"
          />
          </div>

          <div className="thirdLabel">
          <label>Birthday</label>
          <input
            type="birthday"
            placeholder="MM/DD/YYYY"
          />
          </div>

        </form>
      </div>
      </div>
      </body>
    );
  }
};
export default App;
