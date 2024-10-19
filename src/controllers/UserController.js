const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {

    response.json({
        data: [
            "xander",
            "tom",
            "hannah",
            "reece",
            "brad",
            "hayden"
        ]
    });
});

// POST localhost:3000/users/signup
router.post("/signup", async (request, response) => {
    let receivedUserData = request.body;

    receivedUserData.password = "EncryptedPassword";

    // pretend we have written receivedUserData into DB
    let placeholderDatabaseResult = {...receivedUserData};

    // placeholderDataAbaseResult is a placeholder for actually making a user in database
    response.json(placeholderDatabaseResult);
})

module.exports = router;