// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59a16da29baf09b1370d0b16')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59a15f17580fec04ed2464b3")
    }, {
      $set: {
        name: 'Bruno Wozniak'
      },
      $inc: {
          age: 1
      }
    }, {
        returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

  // db.close();
});
