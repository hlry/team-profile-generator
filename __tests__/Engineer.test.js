const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

// check new engineer creation
test('creates a new engineer', () => {
    const engineer = new Engineer();
    expect(typeof (engineer)).toBe('object');
});