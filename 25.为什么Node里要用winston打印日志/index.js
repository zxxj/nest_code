
import winston from "winston"

const logger = winston.createLogger({
	level: 'debug', // 打印的日志级别
	format: winston.format.simple(), // 日志格式
	// 日志的传输方式
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({
			dirname: 'log',
			filename: 'test.log',
			maxsize: 1024, // winston 支持按照大小自动分割文件 1kb
		}),

		// 这里使用了 DailyRotateFile 的 transport，然后指定了文件名和日期格式
		new winston.transports.DailyRotateFile({
			level: 'info',
			dirname: 'log2',
			filename: 'test-%DATE%.log',
			datePattern: 'YYYY-MM-DD-HH-mm',
			maxSize: '1k'
		}),

		// 使用 http 的 transport 来传输日志
		new winston.transports.Http({
			host: 'localhost',
			port: '3000',
			path: '/log'
		})
	]
})

logger.info('鑫鑫鑫鑫鑫鑫')
logger.error('哈哈哈哈哈哈')
logger.debug('嘻嘻嘻嘻嘻嘻')