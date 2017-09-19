const mongodb = require('mongodb');

const url = 'mongodb://localhost:27017/mydb';
const { connect } = mongodb.MongoClient;
const collectionName = 'customers';

connect(url, (err, db) => {
  if (err) {
    throw err;
  }
  const myobj = { name: 'Company Inc', address: 'Highway 37' };
  /* Inserting */
  // db.collection(collectionName).insert(myobj, (error, res) => {
  //   if (error) throw error;
  //   console.log('one document inserted.');
  //   db.close();
  // });

  /* Listing */
  // db.collection('customers').find().toArray((error, result) => {
  //   if (error) throw error;
  //   console.log(result);
  //   db.close();
  // });

  /* Droping the database */
  db.collection('customers').drop();
});
