const express = require('express');

const mondogb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));



Mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
   else {
      app.listen(port, () => {console.log(`Database is listening and node Running on port ${port}`)});
}
});