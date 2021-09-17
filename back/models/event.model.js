const { Model, DataTypes } = require('sequelize');
const { sequelizeConnection } = require('../utilities/database-connection');

const Event = sequelizeConnection.define(
	'Event',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		firstName: {
			type: DataTypes.STRING,
		},
		lastName: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
		},
		date: {
			type: DataTypes.DATE,
		},
	},
	{
		sequelizeConnection,
		modelName: 'Event',
		updatedAt: true,
		createdOn: true,
	}
);

module.exports = Event;
