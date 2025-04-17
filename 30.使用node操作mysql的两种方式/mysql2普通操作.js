const mysql = require('mysql2')

const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '123456',
	database: 'practice'
})

// 查询
connection.query(
	'select * from customers',

	// 查询所有姓李的客户
	// 'select * from customers where name like ?', ['李%'],
	function (err, results, fields) {
		console.log(results);
		console.log(fields.map(item => item.name));
	}
);

// // 增加
// connection.execute(
// 	'insert into customers (name) values (?)',
// 	['鑫'],
// 	(err, result, fields) => {
// 		console.log(err)
// 		console.log(result)
// 		console.log(fields)
// 	}
// )

// // 修改
// connection.execute(
// 	'update customers set name="xin" where name="鑫"',
// 	(err, result, fields) => {
// 		console.log(err)
// 	}
// )

// 删除
// connection.execute(
// 	'delete from customers where name=?',
// 	['xin'],
// 	(err) => {
// 		console.log(err)
// 	}
// )