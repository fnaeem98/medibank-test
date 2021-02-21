import './PeopleGenderWithPets.scss';

const PeopleGenderWithPets = (props) => {
    const { peopleGender, petsList, petType, sortType } = props;

    return (
        <div className="gender-pet-section">
            <div className="row">
                <div className="col-12 people-gender">
                    {`Person Gender: ${peopleGender}, Pet Type: ${petType} , Pet Names in ${sortType} order`}
                </div>
            </div>
            <div className="row">
                    {petsList.map(pet => (
                    <div className="col-12 pet-name" key={pet}>
                        {pet}
                    </div>
                  ))}
            </div>        
        </div>
   );
}

export default PeopleGenderWithPets;
