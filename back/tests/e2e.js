const test = require('ava');
const request = require('supertest');
const Event = require('../models/event.model');
const app = require('../app.js');
const faker = require('faker');
const {
	synchronizeDatabaseTables,
	sequelizeConnection,
} = require('../utilities/database-connection');

const createFakeEvent = () => {
	const event = {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		email: faker.internet.email(),
		date: faker.date.future(),
	};
	return event;
};

test.before(async t => {
	await synchronizeDatabaseTables(sequelizeConnection);
	let eventsArr = [];
	for (let i = 0; i < 19; i++) {
		eventsArr = eventsArr.concat(createFakeEvent());
	}
	await Event.bulkCreate(eventsArr);
});

test.serial('Creating new event; POST /', async t => {
	const eventData = createFakeEvent();
	const res = await request(app).post('/').send(eventData);
	const { body: event, status } = res;
	console.log(res.body);
	t.is(status, 201);
	t.is(event.firstName, eventData.firstName);
	t.is(event.lastName, eventData.lastName);
	t.is(event.email, eventData.email);
});

test.serial('Retrieving all events in the db; GET /', async t => {
	const res = await request(app).get('/');
	const {
		body: { events, count, limit, offset },
		status,
	} = res;
	console.log(res.body);
	t.is(status, 200);
	t.is(events.length === 15, true);
	t.is(count, 20);
	t.is(limit, 15);
	t.is(offset === 0, true);
});

test.serial('Testing pagination; GET /?limit=5&offset=0', async t => {
	const res = await request(app).get('/?limit=5&offset=0');
	const {
		body: { events, count, limit, offset },
		status,
	} = res;
	console.log(res.body);
	t.is(status, 200);
	t.is(events.length === 5, true);
	t.is(count === 20, true);
	t.is(limit == 5, true);
	t.is(offset == 0, true);
});

test.serial(
	'Checking validation when trying to create an event; POST /',
	async t => {
		let eventData = {};
		const res = await request(app).post('/').send(eventData);
		const {
			body: { error },
			status,
		} = res;
		console.log(res.body);
		t.is(status, 422);
		t.is(error.length === 4, true);
	}
);

test.serial(
	'Checking additional email validation when trying to create an event; POST /',
	async t => {
		const eventData = createFakeEvent();
		eventData.email = 'not an email';
		const res = await request(app).post('/').send(eventData);
		const {
			body: { error },
			status,
		} = res;
		console.log(res.body);
		t.is(status, 422);
		t.is(error.length === 1, true);
		t.is(error[0], '"email" must be a valid email');
	}
);
