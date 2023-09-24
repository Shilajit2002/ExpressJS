const bcryptjs = require('bcryptjs');

const securePassword = async (password) => {
    //  10 is the default round that means security
    const passwordHash = await bcryptjs.hash(password, 10);
    console.log("Main Password = " + password);
    console.log("After Hashing = " + passwordHash);

    //  Check the Main Password and Hash Password both are same or not
    const passwordMatch = await bcryptjs.compare(password, passwordHash);
    console.log("Match Password = " + passwordMatch);
}

securePassword("sdghe@34#$%^&*13hde");