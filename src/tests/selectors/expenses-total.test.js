import { getExpensesTotal } from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

const total = getExpensesTotal(expenses);
console.log(total);

// Tests
// should return 0 if no expenses
// should correclty add up a single expense
// should correctly add up multiple expenses

test('should add up no expenses', () => {
	const total = getExpensesTotal([]);
	expect(total).toBe(0);
});

test('should add one single expense', () => {
	const total = getExpensesTotal([expenses[0]]);
	expect(total).toBe(expenses[0].amount);
});

test('should add all expenses', () => {
	const total = getExpensesTotal(expenses);
	expect(total).toBe(180790);
});