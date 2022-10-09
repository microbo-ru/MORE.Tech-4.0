const axios = require("axios");

function openIssue(issueRequest) {

    const axios = require('axios');

    axios.post('http://localhost:8080/issue', issueRequest)
        .then(response => {
            console.log(response.data.url);
            console.log(response.data.explanation);
        })
        .catch(error => {
            console.log(error);
        });

}

function updateIssue(issueRequest) {

    const axios = require('axios');

    axios.put('http://localhost:8080/issue', issueRequest)
        .then(response => {
            console.log(response.data.url);
            console.log(response.data.explanation);
        })
        .catch(error => {
            console.log(error);
        });

}

module.exports = {openIssue, updateIssue}
