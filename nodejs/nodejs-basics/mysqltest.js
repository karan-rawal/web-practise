const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
});

const showDatabases = () => {
  const sql = 'show databases';
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
};

con.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to mysql.');
  showDatabases();
});
