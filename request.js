'use_strict';

const axios = require('axios');

axios.get('https://reqres.in/api/users/787')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then( function () {

    });


axios.post('https://reqres.in/api/users', {
    "name": "Slava",
    "job": "slave",
    "some_data": "wow",
    "some_date": 2020
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);ß
})
.then( function () {

});

// used the async for running the request
async function setTheUser() {
    try {
        const response = await axios.post('https://reqres.in/api/users', {
            "name": "Emma",
            "job": "consultin",
            "birthday": "19.01.1990",
            "some_date": 2020
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
// call the function
setTheUser();

axios.put('https://reqres.in/api/users/2', {
    "data": {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Marik",
        "last_name": "Howell",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
    },
    "ad": {
        "company": "StatusCode Weekly",
        "url": "http://statuscode.org/",
        "text": "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."
    }
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
})
.then( function () {

});


axios.delete('https://reqres.in/api/users/2')
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
})
.then( function () {

});      