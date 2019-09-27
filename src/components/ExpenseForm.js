import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : '',
			note: props.expense ? props.expense.note : '',
			amount: props.expense ? (props.expense.amount / 100): '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			createdAtFocused: false,
			error: ''
		}
	};
	
	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({description}));
	};

	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({note}))
	};

	onAmountChange = (e) => {
		const amount = e.target.value;

		if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
			this.setState(() => ({amount}));
		}
	};

	onDateChanged = (createdAt) => {
		if(createdAt){
			this.setState(() => ({createdAt}));
		}		
	};

	onFocusChanged = (focused) => {
		this.setState(() => ({createdAtFocused: focused}));
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		if(!this.state.description || !this.state.amount){
			this.setState(() => ({error: 'please provide a description and an amount'}));
		}else{
			this.setState(() => ({error: ''}));
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			});
		}
	};

	render(){
		return (				
				<form className='form' onSubmit={this.onFormSubmit}>
					<div className='form__error'>
						{this.state.error && <p>{this.state.error}</p>} 
					</div>					
					<input type='text'
						className='text-input'
						placeholder='description'
						autoFocus 
						value={this.state.description}
						onChange={this.onDescriptionChange}/>
					<input type='text' 
						className='text-input'
						placeholder='amount'
						value={this.state.amount}
						onChange={this.onAmountChange}/>
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChanged}
						focused={this.state.createdAtFocused}
						onFocusChange={this.onFocusChanged}
						id="createdAt" 
						numberOfMonths={1}
						isOutsideRange={() => {false}}/>					
					<textarea placeholder='type a note for your expense (optional)'
						className='textarea'
						value={this.state.note}
						onChange={this.onNoteChange}>
					</textarea>
					<div>
						<button className='button'>Add Expense</button>
					</div>					
				</form>			
		)		
	}
}