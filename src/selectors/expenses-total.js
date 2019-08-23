export const getExpensesTotal = (expenses) => {
	return expenses.map((expense, idx) => expense.amount)
						.reduce((acumulator, currentValue) => { 
							return acumulator + currentValue 
						}, 0);
}

