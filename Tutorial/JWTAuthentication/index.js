// Import Json Web Token
const jwt = require('jsonwebtoken');

const createToken = async (_id, name) => {
    //  Create Token by passing id and name of the user and enter secretkey that can be anything
    const token = await jwt.sign({ _id: _id, name: name }, "secretkeyemployee");
    console.log("Token is = " + token);

    //  Get that userdetails by verifying the token and passing the secrectkey
    const user = await jwt.verify(token, "secretkeyemployee");
    console.log(user);
}

createToken("643ec713fd59124078ee5346", "Shilajit Acharjee")