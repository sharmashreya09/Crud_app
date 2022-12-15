const mongoose = require("mongoose");
const DB =
  "mongodb+srv://shreya123:LDqrJGtCfoGdFfEv@cluster0.i8cphxq.mongodb.net/mernstack?retryWrites=true&w=majority";

  
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connection start"))
    .catch((error) => console.log(error.message));