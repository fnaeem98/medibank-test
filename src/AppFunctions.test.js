import { getPetsDataByPetTypeBySortType , getPetNamesByPeopleGenderByPetType } from './AppFunctions';

describe('App Functions test', () => {
    const testData = [
        {
            name: "Bob",
            gender: "Male",
            age: 23,
            pets: [{name: "Tom", type: "Cat"}, {name: "Fido", type: "Dog"}]
        },
        {
            name: "Bob",
            gender: "Male",
            age: 23,
            pets: [{name: "Max", type: "Cat"}, {name: "Timmy", type: "Dog"}]
        },
    ];

    const testDataForGenderTypeFunction = [
        {
            name: "Bob",
            gender: "Male",
            age: 23,
            pets: [{name: "Sam", type: "Cat"}, {name: "Fido", type: "Dog"}]
        },
        {
            name: "Bob",
            gender: "Male",
            age: 23,
            pets: [{name: "Garfield", type: "Cat"}, {name: "Timmy", type: "Dog"}]
        },
        {
            name: "Bob",
            gender: "Female",
            age: 23,
            pets: [{name: "Tom", type: "Cat"}, {name: "Tommy", type: "Dog"}]
        },
        {
            name: "Bob",
            gender: "Female",
            age: 23,
            pets: [{name: "Max", type: "Cat"}, {name: "Dubbo", type: "Dog"}]
        },

    ];

    test('getPetsDataByPetTypeBySortType function test with petType:Cat, and sort type: asc', () => {
        const responseData = getPetsDataByPetTypeBySortType(testData, "Cat", "ASC");
        expect(responseData[0]).toBe('Max');
        expect(responseData[1]).toBe('Tom');
    });

    test('getPetsDataByPetTypeBySortType function test with petType:Dog, and sort type: asc', () => {
        const responseData = getPetsDataByPetTypeBySortType(testData, "Dog", "ASC");
        expect(responseData[0]).toBe('Fido');
        expect(responseData[1]).toBe('Timmy');
    });

    test('getPetsDataByPetTypeBySortType function test with petType:Cat, and sort type: desc', () => {
        const responseData = getPetsDataByPetTypeBySortType(testData, "Cat", "DESC");
        expect(responseData[0]).toBe('Tom');
        expect(responseData[1]).toBe('Max');
    });

    test('getPetsDataByPetTypeBySortType function test with petType:Dog, and sort type: desc', () => {
        const responseData = getPetsDataByPetTypeBySortType(testData, "Dog", "DESC");
        expect(responseData[0]).toBe('Timmy');
        expect(responseData[1]).toBe('Fido');
    });

    test('getPetNamesByPeopleGenderByPetType function test with Gender type: Male, petType:Cat, and sort type: Asc', () => {
        const responseData = getPetNamesByPeopleGenderByPetType(testDataForGenderTypeFunction,"Male", "Cat", "ASC");
        expect(responseData.peopleGender).toBe('Male');
        expect(responseData.petType).toBe('Cat');
        expect(responseData.petsList.length).toBe(2);
        expect(responseData.petsList[0]).toBe('Garfield');
        expect(responseData.petsList[1]).toBe('Sam');
    });

    test('getPetNamesByPeopleGenderByPetType function test with Gender type: Female, petType:Cat, and sort type: Asc', () => {
        const responseData = getPetNamesByPeopleGenderByPetType(testDataForGenderTypeFunction,"Female", "Cat", "ASC");
        expect(responseData.peopleGender).toBe('Female');
        expect(responseData.petType).toBe('Cat');
        expect(responseData.petsList.length).toBe(2);
        expect(responseData.petsList[0]).toBe('Max');
        expect(responseData.petsList[1]).toBe('Tom');
    });
   
});



