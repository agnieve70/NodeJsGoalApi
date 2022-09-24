let mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect()
  }

  _connect() {
    mongoose.connect(`mongodb://localhost:27017/goals-api`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    })
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.log(err);
      })
  }
}

module.exports = new Database()