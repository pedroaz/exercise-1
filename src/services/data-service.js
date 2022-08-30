
const getDataFromUrl = require("../utils/http-utils");

module.exports = class DataService{

    // Constructor of the class
    constructor(baseUrl){
        this.baseUrl = baseUrl;
        this.data = {
            users: [],
            posts: []
        }
    }

    async populate(){

        // Log the amount of users on the server
        
        // Log the amount of posts on the server
    }
}