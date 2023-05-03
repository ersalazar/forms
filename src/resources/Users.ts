interface User {
    id : number,
    name : string,
    lastName : string,
    role : string,
    yearsOfExperience : number,
}

export const users : User[] = [
    {
        id : 1,
        name : 'Eduardo',
        lastName : 'Salazar',
        role : 'Developer',
        yearsOfExperience : 2,
    },
    {
        id : 2,
        name : 'Mau',
        lastName : 'Rodriguez',
        role : 'Developer',
        yearsOfExperience : 3,
    },
    {
        id : 3,
        name : 'Asaf',
        lastName : 'Contreras',
        role : 'QA',
        yearsOfExperience : 6,
    },
    {
        id : 4,
        name : 'Daniela',
        lastName : 'Alvarado',
        role : 'PM',
        yearsOfExperience : 2,
    },
    {
        id : 5,
        name : 'Jose',
        lastName : 'Amendola',
        role : 'SW Arquitect',
        yearsOfExperience : 2,
    },
]