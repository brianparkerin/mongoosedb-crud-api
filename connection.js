const mongoose = require('mongoose')

console.log('App is Running!')

const uri = 'mongodb+srv://brian:brian1@mongoose1-rrul7.mongodb.net/test?retryWrites=true&w=majority';
const db = mongoose.connection;

mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  db.once('open', _ => {
      console.log('Database is Connected to', uri);
  })

  .catch(err => console.error(err));

db.on('error', err => {
    console.log(err)
})