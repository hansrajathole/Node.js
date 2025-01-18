const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017')
const connect = () => {
  mongoose
    .connect("mongodb://0.0.0.0/kodr")
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => { 
      console.log(err);
    });

};
module.exports = connect


