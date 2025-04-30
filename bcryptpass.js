const bcrypt = require('bcrypt');

const newPassword = "pass@1234"; // Replace with your new password
const saltRounds = 10;

bcrypt.hash(newPassword, saltRounds, (err, hash) => {
    if (err) throw err;
    console.log("New hashed password:", hash);
});
