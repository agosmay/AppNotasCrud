const mysql      = require('mysql');


const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME
});

connection.connect((err)=> {
	if(err) console.log('Hubo un error')
		console.log('conectado a la base de datos')
	
});
  
  module.exports = connection 
  
