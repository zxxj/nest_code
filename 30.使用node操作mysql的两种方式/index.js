const mysql = require('mysql2/promise');

(async function () {

	const connection = await mysql.createPool({
		host: 'localhost',
		port: 3306,
		user: 'root',
		password: '123456',
		database: 'practice',
		waitForConnections: true,
		connectionLimit: 10,
		maxIdle: 10,
		idleTimeout: 60000,
		queueLimit: 0,
		enableKeepAlive: true,
		keepAliveInitialDelay: 0
	});

	const [results, fields] = await connection.query('SELECT * FROM customers');

	console.log(results);
	console.log(fields.map(item => item.name));

})();