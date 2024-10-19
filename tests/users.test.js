const {app} = require("../src/server.js");

const request = require("supertest"); 


describe("Users controller", () => {

    test.skip("Get all users route returns array of users", async () => {
        const response = await request(app).get("/users");
    });

    test.skip("Get user by ID returns a single user as object", async () => {
        let targetUserId = "12345";
        const response = await request(app).get("/users/" + targetUserId);
    });

    test.skip("User sign-up returns a single user as object", async () => {
        const response = await request(app)
            .post("/users/signup")
            .send({
                username: "jason", 
                password: "SuperCoolPasword1"
            });

    });

    test.skip("User login route retruns a single user as object", async () => {
        const response = await request(app)
            .post("/users/login")
            .send({
                username: "jason", 
                password: "SuperCoolPasword1"
        });
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
