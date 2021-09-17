require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelizeConnection = new Sequelize({
	dialect: 'sqlite',
	storage:
		process.env.NODE_ENV === 'test' ? process.env.TEST_DB : process.env.LOCAL_DB,
});

const synchronizeDatabaseTables = async sequelizeInstance => {
	console.log('Database sync');
	await sequelizeInstance.sync({ force: true });
};

const checkDatabaseConnection = async sequelizeInstance => {
	try {
		await sequelizeInstance.authenticate();
		console.info(sequelizeInstance.getDatabaseName());
		console.info('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};
//synchronizeDatabaseTables(sequelizeConnection);

module.exports = {
	sequelizeConnection,
	synchronizeDatabaseTables,
	checkDatabaseConnection,
};
