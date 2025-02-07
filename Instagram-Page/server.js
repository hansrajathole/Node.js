require('dotenv').config();
const config = require('./src/config/config');
const app = require('./src/app');
const connect = require('./src/DB/db');

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
  connect();
});
