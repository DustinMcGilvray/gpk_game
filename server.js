const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

//Middleware is defined here
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Serve Static Assets
app.use(express.static("public"));

    if (process.env.NODE_ENV === "production") {
        app.use(express.static("client/build"));
    }

//Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});