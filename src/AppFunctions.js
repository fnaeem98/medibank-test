import { sortTypeAsc } from './AppConstants';

export const getPetsDataByPetTypeBySortType = (oneGenderWithPetsData, petType, sortType) => {
    let petsList = [];
    oneGenderWithPetsData.forEach(dataItem => {
        dataItem.pets && dataItem.pets.forEach(pet => {
            if (pet.type ===  petType) {
                petsList.push(pet.name);
            }
        })
    });
    return sortType === sortTypeAsc ? petsList.sort(): petsList.sort().reverse();
}


export const getPetNamesByPeopleGenderByPetType = (peopleGenderWithPetsData, genderType, petType, sortType=sortTypeAsc) => {
    const genderWithPetTypeData = {
        peopleGender: genderType,
        petsList: getPetsDataByPetTypeBySortType(
            peopleGenderWithPetsData.filter(dataItem => dataItem.gender === genderType
            && dataItem.pets !== null), petType, sortType),
        petType,
    };

    return genderWithPetTypeData;
}