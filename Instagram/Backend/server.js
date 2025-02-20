const app = require("./src/app")
const Connect = require("./src/db/db")
const config = require("./src/config/config")
require("dotenv").config()

const PORT = config.PORT


app.listen(PORT, () => {
  console.log("Server is running on port 3000")
  Connect()
})

