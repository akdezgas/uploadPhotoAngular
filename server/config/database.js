const mongoose = require('mongoose');
const dbName = 'phone-store';

// connect to the database
mongoose.connect(`mongodb://localhost/${dbName}`)
        .then(() => console.log("Connected to DB!"))
        .catch(e => console.error(console, 'connection error:'));
