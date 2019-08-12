import moment from 'moment';

export default [{
	id: '1',
	description: 'Gum',
	note: '',
	amount: 195,
	createdAt: 0
},
{
	id: '2',
	description: 'Rent',
	note: '',
	amount: 180000,
	createdAt: moment(0).subtract(4, 'day').valueOf()
},
{
	id: '3',
	description: 'Coffee',
	note: '',
	amount: 595,
	createdAt: moment(0).add(4, 'day').valueOf()
}];