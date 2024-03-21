const mongoose = require('mongoose')
const Todo = require('./models/Todo')
// const { MONGO_URL } = require('../util/config')

mongoose.connect('mongodb://root:example@localhost:3456/the_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


module.exports = {
  Todo
}
