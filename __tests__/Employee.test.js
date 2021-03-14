const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

// check new employee creation
test('creates a new employee', () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe('object');
});

// check employee name
test('checks employee name', () => {
    const employee = new Employee('Betty', 1234);
    expect(employee.getName()).toEqual(expect.stringContaining('Betty'));
});

// check employee's id 
test('checks employee id', () => {
    const id = 1234;
    const employee = new Employee('Betty', id);
    expect(employee.getID()).toBe(id);
});