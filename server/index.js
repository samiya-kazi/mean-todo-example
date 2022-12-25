const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');
const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());
app.use(router);


(async function bootstrap () {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/todo-example');
    console.log('\nConnected to DB.');
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
  } catch (error) {
    console.log(error);
  }
})();