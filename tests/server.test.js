// Importing the code we want to test
const {app} = require("../src/server.js");

// importing a testing helper function from supertest
const request = require("supertest"); 

//Defcalring a group of tests for keeping our tests tidy
describe("Root route", () => {
    // individual test happens in this type of function:
    // this test runs an asyuns callback function
    // because the things it is testing are running asynchronously and we need to wait for it
    test("Server returns a 'Hello world!' message", async () => {
        // make a request to "/" route
        // wait for response and store it
        const response = await request(app).get("/");

        // check the body of the response for a "Hello world!" string
        // and any other propertis that we want to check
        expect(response.body.message).toBe("Hello world!");
        expect(response.statusCode).toBe(200);
    });

    test("Server returns a response with no auth headers because we are not sending auth data", async () => {
        const response = await request(app).get("/");

        expect(response.headers["Authorization"]).toBeFalsy();
    })
});


    