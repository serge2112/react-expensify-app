import moment from 'moment';

const filters = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
}

const altFilters = {
	text: 'Bill',
	sortBy: 'amount',
	startDate: moment(0),
	endDate: moment(0).add(3, 'day')
}

export { filters, altFilters }