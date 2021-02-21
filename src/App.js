import React , { Component }  from 'react';
import { apiGet } from './ApiConfigration';
import { 
  peopleWithPetsDataEndPoint,
  headerText,
  footerText,
  petTypeCat,
  genderMale,
  genderFemale,
  appError,
  sortTypeAsc,
 } from './AppConstants';
import { getPetNamesByPeopleGenderByPetType } from './AppFunctions';
import PeopleGenderWithPets from './components/PeopleGenderWithPets/PeopleGenderWithPets';
import logo from './logo.svg';
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';

class App extends Component {

  state={
    peopleWithPets: [],
    appError: false,
  }

  componentDidMount() {
    if (this.state.peopleWithPets.length === 0) {
      apiGet(peopleWithPetsDataEndPoint)
      .then(response => {
        this.updateState({ peopleWithPets: response.data });
      })
      .catch(error => {
        this.updateState({ appError: true });
      });
    }
  }


  updateState = (stateData) => {
    this.setState(stateData);
  }

  render() {
    const maleData = getPetNamesByPeopleGenderByPetType(this.state.peopleWithPets,genderMale,petTypeCat);
    const femaleData = getPetNamesByPeopleGenderByPetType(this.state.peopleWithPets,genderFemale,petTypeCat);
    
    return (
      <div className="mediback-test-app container container-fluid">
        <header>
          <h1>{headerText}</h1>
        </header>
        {this.state.appError === false &&
          <main>
            <PeopleGenderWithPets
              peopleGender={maleData.peopleGender}
              petsList={maleData.petsList}
              petType={maleData.petType}
              sortType={sortTypeAsc}
            />
            <PeopleGenderWithPets
              peopleGender={femaleData.peopleGender}
              petsList={femaleData.petsList}
              petType={femaleData.petType}
              sortType={sortTypeAsc}
            />
          </main>
        }
        {this.state.appError &&
          <main>
            <span className="error">{appError}</span>
          </main>
        }

        <footer>
          <h2>{footerText}</h2>
        </footer>
      </div>
    );
}

}

export default App;
