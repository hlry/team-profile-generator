const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

// check new manager creation
test('creates a new manager', () => {
    const manager = new Manager();
    expect(typeof (manager)).toBe('object');
});