import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React from 'react';

import App from './App';

jest.mock('axios');

describe('App', () => {
	test('fetches events from an API and displays them', async () => {
		const events = [
			{
				id: '1',
				firstName: 'Hello',
				lastName: 'Pies',
				email: 'test@example.com',
				date: '2021-09-23T00:00:00.000Z',
			},
			{
				id: '2',
				firstName: 'Second',
				lastName: 'Pies',
				email: 'test@example.com',
				date: '2021-09-23T00:00:00.000Z',
			},
			{
				id: '3',
				firstName: 'Third',
				lastName: 'Pies',
				email: 'test@example.com',
				date: '2021-09-23T00:00:00.000Z',
			},
		];

		axios.get.mockImplementationOnce(() => Promise.resolve({ data: { events } }));

		render(<App />);

		//await userEvent.click(screen.getByRole('button'));

		const items = await screen.findAllByText('test@example.com');

		expect(items).toHaveLength(3);
	});

	test('opens event post form and closes it', async () => {
		const events = [
			{
				id: '1',
				firstName: 'Hello',
				lastName: 'Pies',
				email: 'test@example.com',
				date: '2021-09-23T00:00:00.000Z',
			},
			{
				id: '2',
				firstName: 'Second',
				lastName: 'Pies',
				email: 'test@example.com',
				date: '2021-09-23T00:00:00.000Z',
			},
			{
				id: '3',
				firstName: 'Third',
				lastName: 'Pies',
				email: 'test@example.com',
				date: '2021-09-23T00:00:00.000Z',
			},
		];

		axios.get.mockImplementationOnce(() => Promise.resolve({ data: { events } }));

		render(<App />);

		const button = await screen.findByRole('button');

		await userEvent.click(button);

		const form = screen.getByRole('form');

		expect(form).toBeInTheDocument();

		const closeBtn = await screen.findByLabelText('closeForm');

		await userEvent.click(closeBtn);
		expect(form).not.toBeInTheDocument();
	});

	test('Validation works', async () => {
		const events = [
			{
				id: '1',
				firstName: 'Hello',
				lastName: 'Pies',
				email: 'test@example.com',
				date: '2021-09-23T00:00:00.000Z',
			},
			{
				id: '2',
				firstName: 'Second',
				lastName: 'Pies',
				email: 'test@example.com',
				date: '2021-09-23T00:00:00.000Z',
			},
			{
				id: '3',
				firstName: 'Third',
				lastName: 'Pies',
				email: 'test@example.com',
				date: '2021-09-23T00:00:00.000Z',
			},
		];

		axios.get.mockImplementationOnce(() => Promise.resolve({ data: { events } }));

		render(<App />);

		const button = await screen.findByRole('button');

		await userEvent.click(button);

		const submitBtn = await screen.findByLabelText('submit');

		await userEvent.click(submitBtn);

		const errors = await screen.findAllByRole('alert');

		expect(errors).toHaveLength(4);
	});

	test('Posting event works', async () => {
		const events = [
			{
				id: '1',
				firstName: 'Hello',
				lastName: 'Pies',
				email: 'test@example.com',
				date: '2021-09-23T00:00:00.000Z',
			},
			{
				id: '2',
				firstName: 'Second',
				lastName: 'Pies',
				email: 'test@example.com',
				date: '2021-09-23T00:00:00.000Z',
			},
			{
				id: '3',
				firstName: 'Third',
				lastName: 'Pies',
				email: 'test@example.com',
				date: '2021-09-23T00:00:00.000Z',
			},
		];

		axios.get.mockImplementationOnce(() => Promise.resolve({ data: { events } }));

		axios.post.mockImplementationOnce(() =>
			Promise.resolve({
				data: {
					id: '4',
					firstName: 'test',
					lastName: 'sec',
					email: 'test@example.com',
					date: '2021-09-23T00:00:00.000Z',
				},
			})
		);

		render(<App />);
		screen.debug();

		const button = await screen.findByRole('button');

		await userEvent.click(button);

		const firstName = await screen.findByPlaceholderText('First Name');
		const lastName = await screen.findByPlaceholderText('Last Name');
		const email = await screen.findByPlaceholderText('Email');
		const date = await screen.findByLabelText('Date');

		await userEvent.type(firstName, 'test');
		await userEvent.type(lastName, 'sec');
		await userEvent.type(email, 'test@example.com');
		await userEvent.type(date, '2021-09-23T00:00:00.000Z');

		const submitBtn = await screen.findByLabelText('submit');

		await userEvent.click(submitBtn);

		setTimeout(async () => {
			const items = await screen.findAllByText('test@example.com');
			screen.debug();

			expect(items).toHaveLength(4);
		}, 1010);
	});
});
