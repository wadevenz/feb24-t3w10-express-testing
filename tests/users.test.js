const {app} = require("../src/server.js");

const request = require("supertest"); 


describe("Users controller", () => {

    test("Get all users route returns array of users", async () => {
        const response = await request(app).get("/users");

        expect(response.body.data.length).toBe(6);
        

        let expectedUsers = [
            "xander",
            "tom",
            "hannah",
            "reece",
            "brad",
            "hayden"
        ]
        expect(response.body.data).toEqual(expect.arrayContaining(expectedUsers));
    });

    test("Get user by ID returns a single user as object", async () => {
        // GET localhost:3000/users/12345
        let targetUserId = "12345";
        const response = await request(app).get("/users/" + targetUserId);

        expect(response.body.result.id).toBe(targetUserId);
        expect(response.body.result.username).toBe("Pretend this is a username from the database");
    });

    test("User sign-up returns a single user as object", async () => {
        const response = await request(app)
            .post("/users/signup")
            .send({
                username: "jason", 
                password: "SuperCoolPasword1"
            });

            expect(response.body.username).toBe("jason");
            expect(response.body.password).toBe("EncryptedPassword");

    });

    // POST localhost:3000/users/login
    test("User login route retruns a single user as object", async () => {
        const response = await request(app)
            .post("/users/login")
            .set("Authorization", "Example string for header value");
            // .send({
            //     username: "jason", 
            //     password: "SuperCoolPasword1"
        expect(response.body.authHeaderData).toBe("Example string for header value");
    });

    test("User login route throws an error on invalid login data", async () => {
        const response = await request(app)
            .post("/users/login")
            .set("Authorization", "This should cause an error");
        // .send({
        //     username: "jason", 
        //     password: "SuperCoolPasword1"
        expect(response.body.authHeaderData).toBeUndefined();
        expect(response.body.status).toBe(500);
        expect(response.body.error).toBe("Not valid login data!");
    })

    test.skip("User update/edit route retruns a single user as object", async () => {
        const response = await request(app)
            .patch("/users/12345")
            .send({
                username: "jason", 
                password: "SuperCoolPasword1"
        });
    });

    test.skip("User delete route returns a number of users deleted", async () => {
        const response = await request(app)
            .delete("/users/12345")
            .send({
                username: "jason", 
                password: "SuperCoolPasword1"
        });
    });

});