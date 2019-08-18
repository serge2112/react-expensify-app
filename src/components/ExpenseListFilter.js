import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilter extends React.Component{
	state = {
		calendarFocus: null
	};

	onDateChange = ({startDate, endDate}) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};

	onFocusChange = (calendarFocus) => {
		this.setState(() => ({calendarFocus}))
	};

	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	};

	onSortByChange = (e) => {
		if(e.target.value === 'date'){
			this.props.sortByDate();
		}else if (e.target.value === 'amount'){
			this.props.sortByAmount();
		}
	};

	render() {
		return (
			<div>
				<input type='text' value={this.props.filters.text} onChange={this.onTextChange}/>
				<select value={this.props.filters.sortBy} onChange={this.onSortByChange}>
					<option value='date'>Date</option>
					<option value='amount'>Amount</option>
				</select>
				<DateRangePicker 
					startDate={this.props.filters.startDate}
					startDateId='startDate'					
					endDate={this.props.filters.endDate}
					endDateId='endDate'
					onDatesChange={this.onDateChange}
					focusedInput={this.state.calendarFocus}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => {true}}
					showClearDates={true}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setTextFilter: (text) => dispatch(setTextFilter(text)),
		sortByDate: () => dispatch(sortByDate()),
		sortByAmount: () => dispatch(sortByAmount()),
		setStartDate: (startDate) => dispatch(setStartDate(startDate)),
		setEndDate: (endDate) => dispatch(setEndDate(endDate))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);