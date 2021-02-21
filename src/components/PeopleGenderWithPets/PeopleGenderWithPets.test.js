import { render, screen } from '@testing-library/react';
import PeopleGenderWithPets from './PeopleGenderWithPets'; 

describe('peopleGenderWithPets component test', () => {
    test('Gender text Male present', () => {
        const petsList = ['Sam','Max','Garfield'];
        render(<PeopleGenderWithPets peopleGender="Male" petsList={petsList} petType="Cat" sortType="ASC" />);
        const genderText = screen.getByText(/Male/i);
        expect(genderText).toBeInTheDocument();
    });
    test('Pet Type text Cat present', () => {
        const petsList = ['Sam','Max','Garfield'];
        render(<PeopleGenderWithPets peopleGender="Male" petsList={petsList} petType="Cat" sortType="ASC" />);
        const petTypeText = screen.getByText(/Cat/i);
        expect(petTypeText).toBeInTheDocument();
    });
    test('Pet Names Sam, Max, Garfield text present', () => {
        const petsList = ['Sam','Max','Garfield'];
        render(<PeopleGenderWithPets peopleGender="Male" petsList={petsList} petType="Cat" sortType="ASC" />);
        let petName = screen.getByText(/Sam/i);
        expect(petName).toBeInTheDocument();
        petName = screen.getByText(/Max/i);
        expect(petName).toBeInTheDocument();
        petName = screen.getByText(/Garfield/i);
        expect(petName).toBeInTheDocument();
    });
        
});



