/*  Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name. */

const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
]
/* createArrayOfArrays(countries)
[
['Albania', 'ALB', 7],
['Bolivia', 'BOL', 7],
['Canada', 'CAN', 6],
['Denmark', 'DEN', 7],
['Ethiopia', 'ETH', 8],
['Finland', 'FIN', 7],
['Germany', 'GER', 7],
['Hungary', 'HUN', 7],
['Ireland', 'IRE', 7],
['Japan', 'JAP', 5],
['Kenya', 'KEN', 5]
] */

const newArray = []

function createArray() {
    for (let i = 0; i < countries.length; i++) {
        const createNewArray = [];
        createNewArray.push(countries[i]);
        let str = countries[i][0];
        str += countries[i][1];
        str += countries[i][2];
        createNewArray.push(str)
        const length = countries[i].length;
        createNewArray.push(length);
        newArray.push(createNewArray);
    }
    return newArray;
}

console.log(createArray());



/*  2.	Write a function which filter users who has  scoresGreaterThan85,  
    Write a function which addUser  to the user array only if the user does not exist.   
    Write a function which addUserSkill which can add skill to a user only if the user exist.   
    Write a function which editUser if the user exist in the users array.  
    ```js */

const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTM'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]

/* Write a function which filter users who has  scoresGreaterThan85 */

function GreateScore(arr) {
    return arr.filter((item) => item.scores > 85)
}

console.log(GreateScore(users))


/* Write a function which addUser to the user array only if the user does not exist. */

function addNewUser(arr, userName) {
    const findUser = arr.filter((item) => item.name === userName);
    if (findUser.length === 0) {
        const newUser = {
            name: userName,
            scores: 90,
            skills: ['HTML', 'CSS', 'JS'],
            age: 20
        };
        arr.push(newUser);
        return arr
    }
    return 'User Already Exist...'
}

console.log(addNewUser(users, "Rahul Rajput"))
console.log(addNewUser(users, "Rahul Rajput"))

/* Write a function which addUserSkill which can add skill to a user only if the user exist. */

function addUserSkill(userName, skill) {
    const getUser = users.findIndex((item) => item.name === userName);
    if(getUser === -1) {
        return 'User Does not exits'
    }
    users[getUser].skills.push(skill)
    return users;
    
}
console.log(addUserSkill('Thomas', 'Bootstrap'));
console.log(addUserSkill('Rahul', 'Bootstrap'));

/* Write a function which editUser if the user exist in the users array. */

function editUser(userName, property, value) {
    const getUser = users.findIndex((item) => item.name === userName);
    if(getUser === -1) {
        return 'User does not exits'
    }
    users[getUser][property] = value;
    return users;
}

console.log(editUser('Thomas', 'age', 30))
console.log(editUser('rahul', 'age', 30))